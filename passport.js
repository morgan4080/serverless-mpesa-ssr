const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;

const  unique = require('./unique');
const ddb = require('./dbconfig');
const tableName = 'user';

function encrypt_password(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(5), null);
}

function valid_password(password, PW) {
    return bcrypt.compareSync(password, PW);
}

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser(( id, done) => {
    ddb.getItem({"TableName":tableName,"Key": {"id":{"N":id}}}, (err,data) => {
        if (err) done(err, data);
        done(err, {"id": data.Item.id.N, "email": data.Item.email.S, "pw": data.Item.pw.S});
    })
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {

    const params = {
        "TableName":tableName,
        "IndexName":"email-index",
        "KeyConditions":{
            "email":{
                "ComparisonOperator": "EQ",
                "AttributeValueList": [{"S":email}]
            }
        }
    };

    ddb.query(params, (err,data) => {
        if (err) return done(err);
        if (data.Items.length > 0) return done(null, false, { message: 'username/email is already taken' });
        const params = {
            "TableName": tableName,
            "Item" : {
                "id": {"N": unique.generateUserId()},
                "email": {"S":email},
                "pw": {"S": encrypt_password(password)}
            }
        };

        ddb.putItem(params, (err, data) => {
            if (err) {
                return done(null, false, { message: `Apologies, please try again now. + ${ err }` });
            } else {
                console.log(data);
                return done(null, params.Item);
            }
        })
    })

}));

passport.use('local.login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
}, (req, email, password, done) => {
    const params = {
        "TableName":tableName,
        "IndexName":"email-index",
        "KeyConditions":{
            "email":{
                "ComparisonOperator":"EQ",
                "AttributeValueList":[{"S":email}]
            }
        }
    };

    ddb.query(params, function(err,data){
        if (err) return done(err);

        if (data.Items.length === 0) return done(null, false, { message: 'No user found.' });

        ddb.getItem({ "TableName": tableName, "Key": { "id":data.Items[0]["id"]} }, (err,data) => {

            if (err) return done(err);

            if (!valid_password(password, data.Item.pw.S)) {

                return done(null, false, { message: `Oops! Wrong password..` });

            } else {

                return done(null, data.Item);

            }
        })
    });

}));