const AXIOS = require('axios');
const LRU = require("lru-cache");

export function createAPI(){

    AXIOS.config = {
        server: true,
        cachedItems: LRU({
            max: 1000,
            maxAge: 1000 * 60 * 10
        })
    };
    return AXIOS;
}