import { createAPI } from 'create-api';
const NEWS_API = "97c568e8528f40be944a8c047aef2210";
let client_http = createAPI();

const instance = client_http.create({
    withCredentials: true
});

if(client_http.config){
    cacheSources();
}

function cacheSources(){
    console.log('cache sources running');
    /*fetchSources();
    setTimeout(cacheSources, 1000 * 60 * 10)*/
}

function send(url, datum) {
    console.log('send running');
    console.log(datum.sec);

    const params = new URLSearchParams();
    params.append('email', `${datum.details.username}`);
    params.append('password', `${datum.details.password}`);


    return new Promise((resolve, reject) => {
        instance.defaults.headers.common['CSRF-Token'] = datum.sec;
        instance({
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: params,
            url
        }).then((res) => {
            if(res.statusText === "OK"){
                resolve(res.data);
            }else{
                reject("API error: " + res);
            }
        }).catch((err) => {
            if (!err.response) {
                // network error
                console.log('Error: Network Error');
            }
            reject("Axios issue: " + err)
        })
    });
}

function fetching(url, params = null){

    console.log('fetch running', url + params);
    const cache = client.cachedItems;

    let key;

    if(params) {
        key = url + '_' + params.source;
    }else {
        key = url;
    }

    if(cache && cache.has(key)){
        return Promise.resolve(cache.get(key));
    }else {
        return new Promise((resolve, reject) => {
            client.get(url, {
                params: params
            }).then((res) => {

                if(res.data.status === "ok"){
                    cache && cache.set(key, res.data);
                    resolve(res.data);
                }else{
                    reject("API error: " + res.data.message);
                }

            }).catch((err) => {
                reject("Axios issue: " + err)
            })
        });
    }
}

export function fetchSources() {
    return fetching('https://newsapi.org/v1/sources');
}

export function fetchHeadlines(source) {
    return fetching('https://newsapi.org/v1/articles', { source: source, apiKey: NEWS_API });
}

export function fetchItem() {
    return fetching('#');
}

export function doLogin(datum) {
    return send('/signin', datum)
}

export function doSignup(datum) {
    return send('/signup', datum)
}