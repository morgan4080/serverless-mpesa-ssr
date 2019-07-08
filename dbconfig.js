const AWS = require('aws-sdk');

const {DYNAMO_ENDPOINT} = 'http://localhost:8000';

const dynamoOpts = {region: 'ca-central-1', profile: 'default'};

if (DYNAMO_ENDPOINT) {
    dynamoOpts.endpoint = DYNAMO_ENDPOINT;
}

const db = new AWS.DynamoDB(dynamoOpts);

module.exports = db;