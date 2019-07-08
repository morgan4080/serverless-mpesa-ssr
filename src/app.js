import Vue from 'vue';
import App from './App.vue';
import { createStore } from './store';
import { createRouter } from './router';
import { sync } from 'vuex-router-sync';
import NavBar from './components/NavBar.vue';

import titleMixin from './util/title';
import * as filters from './util/filters';

Vue.config.productionTip = false;

Vue.directive('scroll', {
  inserted(el, binding) {
    let f = function (evt) {
        if (binding.value(evt, el)) {
          if (window.scrollY > 50) {
            window.removeEventListener(evt, f);
          } else if (window.scrollY < 50) {
            console.log('event listener added');
            window.addEventListener('scroll', f);
          }
        }
    };

    console.log('event listener added');

    window.addEventListener('scroll', f);
  }
});

require("./main.scss");

Vue.component('main-nav', NavBar);

// mixin for handling title
Vue.mixin(titleMixin);

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore();
  const router = createRouter();

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
