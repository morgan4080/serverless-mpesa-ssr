import { createAPI } from 'create-api';
const NEWS_API = "97c568e8528f40be944a8c047aef2210";

let client = createAPI();

if(client.config){
    cacheSources();
}

function cacheSources(){
    /*fetchSources();
    setTimeout(cacheSources, 1000 * 60 * 10)*/
    console.log('cche sources running')
}

function fetch(url, params = null){

    console.log('fetch running', url + params)
    /*const cache = client.cachedItems;

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
                    reject("News API error: " + res.data.message);
                }

            }).catch((err) => {
                reject("Axios issue: " + err)
            })
        });
    }*/
}

export function fetchSources() {
    return fetch('https://newsapi.org/v1/sources');
}

export function fetchHeadlines(source) {
    return fetch('https://newsapi.org/v1/articles', { source: source, apiKey: NEWS_API });
}

export function fetchItem() {
    return fetch('#');
}
