// router.js
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: () => import('./components/Home.vue') },
            { path: '/login', component: () => import('./components/login.vue') },
            { path: '/signup', component: () => import('./components/signup.vue') },
            { path: '/profile', component: () => import('./components/profile.vue')},
            { path: '/dashboard', component: () => import('./components/dashboard.vue')},
            { path: '/item/:id', component: () => import('./components/item.vue') }
        ]
    })
}