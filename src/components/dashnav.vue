<template>
    <nav class="navbar is-dark is-transparent is-fixed parent" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" tag="span" class="navbar-item">
                    <logos></logos>
                    <span id="ellogo">{{siteName}}</span>
                </router-link>

                <a class="navbar-item is-hidden-desktop is-hidden-tablet">
                    <div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
                        <svg width="1000px" height="1000px">
                            <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                            <path class="path2" d="M 300 500 L 700 500"></path>
                            <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                        </svg>
                        <button id="menu-icon-trigger" class="menu-icon-trigger"></button>
                    </div>
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbar-menu" class="navbar-menu light-menu is-static">

                <div class="navbar-start">
                    <a class="navbar-item is-hidden-mobile">
                        <div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
                            <svg width="1000px" height="1000px">
                                <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                                <path class="path2" d="M 300 500 L 700 500"></path>
                                <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                            </svg>
                            <button id="menu-icon-trigger" class="menu-icon-trigger"></button>
                        </div>
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item is-centered-responsive has-dropdown is-hoverable">

                        <router-link tag="a" to="/" class="navbar-link is-centered-responsive">
                            Orders
                        </router-link>

                        <div class="navbar-dropdown">
                            <router-link tag="a" to="/" class="navbar-item is-centered-responsive">
                                Custom order
                            </router-link>
                        </div>
                    </div>
                    <div class="navbar-item">
                        <router-link tag="a" to="/" class="is-centered-responsive">
                            Payments
                        </router-link>
                    </div>
                    <div class="navbar-item is-centered-responsive has-dropdown is-hoverable">
                        <router-link tag="a" to="/" class="navbar-link is-centered-responsive">
                            Account
                        </router-link>

                        <div class="navbar-dropdown">
                            <router-link tag="a" to="/" class="navbar-item is-centered-responsive">
                                Billing
                            </router-link>
                            <router-link tag="a" to="/" class="navbar-item is-centered-responsive">
                                Resource Roles
                            </router-link>
                            <router-link tag="a" to="/" class="navbar-item is-centered-responsive">
                                Profile
                            </router-link>
                        </div>
                    </div>
                    <div class="navbar-item">
                        <router-link tag="a" to="/" class="is-centered-responsive">
                            Payments
                        </router-link>
                    </div>
                    <div class="navbar-item">
                        <span class="button is-primary slanted is-centered-responsive">
                            <a @click="doLogout" href="javascript:void(0);" class="textline">Logout</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import $ from "jquery";
    import Logos from "./logos.vue";
    export default {
        name: "dashnav",
        data: function() {
            return {
                siteName: "accessros",
                token: null
            }
        },
        components: {
          'logos': Logos
        },
        methods: {
            doLogout() {
                return this.$store.dispatch('doLogout', { details: { }, sec: this.token}).then(results => {
                    console.log(results);
                    if (results.redirect) this.$router.push(results.redirect)
                })
            },
            setToken(t) {
                this.token = t;
                console.log(this.token)
            }
        },
        mounted() {
            let th = this;
            function setter(x) {
                th.setToken(x)
            }

            $(document).ready(function($) {
                "use strict";
                //token
                let meta = $('meta[name="csrf-token"]');
                setter(meta.attr( 'content' ));
                //Mobile menu toggle
                let burger = $('.navbar-burger');
                if (burger.length) {
                    burger.on("click", function () {

                        let menu_id = $(this).attr('data-target');
                        $(this).toggleClass('is-active');
                        $("#" + menu_id).toggleClass('is-active');
                        $('.navbar.is-light').toggleClass('is-dark-mobile')
                    });
                }

                //Animate left hamburger icon and open sidebar
                $('.menu-icon-trigger').click(function (e) {
                    e.preventDefault();
                    $('.menu-icon-wrapper').toggleClass('open');
                    $('.sidebar').toggleClass('is-active');
                });
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>