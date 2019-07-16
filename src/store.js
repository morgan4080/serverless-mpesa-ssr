// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// universal API that returns Promises
import { fetchSources, fetchHeadlines, fetchItem, doLogin, doSignup, doLogout } from "./api/index"

export function createStore () {
    return new Vuex.Store({
        // IMPORTANT: state must be a function so the module can be
        // instantiated multiple times
        state: () => ({
            items: {},
            sources: {},
            news: {},
            authD: {},
            hasErrors: false,
            loggedIn: false
        }),
        actions: {
            fetchSources({commit}){
                return fetchSources().then((sources) => {
                    commit('setSources', sources);
                });
            },
            fetchHeadlines({commit}, source){
                return fetchHeadlines(source).then((news) => {
                    commit('setNews', {source, news});
                });
            },
            fetchItem ({ commit }, id) {
                // return the Promise via `store.dispatch()` so that we know
                // when the data has been fetched
                return fetchItem(id).then(item => {
                    commit('setItem', { id, item })
                })
            },
            watchAuth ({dispatch}, payload) {
                dispatch('setLoggedIn', payload);
            },
            doLogin({dispatch, commit}, payload) {
                dispatch('clearMessages');
                dispatch('clearErrors');
                return new Promise((resolve, reject) => {
                    doLogin(payload).then(results => {
                        commit('setAuth', results);
                        if (results['message'].length > 0) {
                            dispatch('setErrors', true);
                        }
                        if (results['info'] || results['authenticated']) {
                            dispatch('setLoggedIn', true);
                        }
                        resolve(results);
                    }).catch(error => reject(error))
                })
            },
            doSignup({dispatch, commit}, payload) {
                dispatch('clearMessages');
                dispatch('clearErrors');
                return new Promise((resolve, reject) => {
                    doSignup(payload).then(results => {
                        commit('setAuth', results);
                        if (results['message'].length > 0) {
                            dispatch('setErrors', true);
                        }
                        if (results['authenticated']) {
                            dispatch('setLoggedIn', true);
                        }
                        resolve(results);
                    }).catch(error => reject(error))
                })
            },
            doLogout({dispatch, commit}, payload) {
                return new Promise((resolve, reject) => {
                    doLogout(payload).then( results => {
                        dispatch('setLoggedIn', false);
                        dispatch('setLoggedOut');
                        commit('setAuth', results);
                        resolve(results)
                    }).catch(err => {
                        reject(err)
                    })
                });
            },
            clearMessages({dispatch, commit}) {
                dispatch('clearErrors');
                return commit('setMessage')
            },
            clearErrors({commit}) {
                return commit('setError')
            },
            setErrors({commit}, payload) {
                return commit('setError', payload)
            },
            setLoggedIn({commit}, payload) {
                return commit('setLogged', payload)
            },
            setLoggedOut({commit}) {
                return commit('setLoggedOut')
            }
        },
        mutations: {
            setMessage(state, payload = {}) {
                state.authD = payload;
            },
            setLogged(state, payload = false) {
                state.loggedIn = payload;
            },
            setLoggedOut(state, payload = false) {
              state.authStatus = payload
            },
            setError(state, payload = false) {
                state.hasErrors = payload
            },
            setSources(state, {sources}){
                Vue.set(state.sources, 'sources', sources);
            },
            setNews(state, {source, news}){
                Vue.set(state.news, source, news);
            },
            setItem(state, { id, item }) {
                Vue.set(state.items, id, item)
            },
            setAuth(state, payload = {} ) {
                state.authD['auth'] = payload;
            }
        }
    })
}

/*if (results['message'].length > 0) {
       console.log(results['message']);
    }
                    actionA ({ commit }) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            commit('someMutation')
                            resolve()
                        }, 1000)
                    })}

                    actionB ({ dispatch, commit }) {
                        return dispatch('actionA').then(() => {
                            commit('someOtherMutation')
                        })
                    }
                    */