<template>
    <div class="hero-head has-navbar-fixed-top">
        <!-- Clone nav for scroll -->
        <nav id="navbar-clone" v-scroll="handleScroll" :class="{unCollapse: isCollapse}" class="navbar is-fixed is-dark parent" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">

                        <router-link to="/" class="navbar-item">
                            <img class="logos" alt="MUX-EXP" src="https://epesa.s3.amazonaws.com/fd50a070-d5c9-4a0d-8262-9c57beb27f9a_200x200.png" width="200" height="200">
                            <span id="ellogo">{{siteName}}</span>
                        </router-link>

                    <span :class="is_active" v-on:click="switchCollapse" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>

                <div id="navbarBasicExample" class="navbar-menu light-menu" :class="is_active" >
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <router-link to="/" class="is-centered-responsive">
                                HOME
                            </router-link>
                        </div>

                        <div class="navbar-item">
                            <router-link to="/" class="is-centered-responsive">
                                WORK
                            </router-link>
                        </div>

                        <div class="navbar-item is-centered-responsive has-dropdown is-hoverable">
                            <router-link to="/" class="navbar-link">
                                SERVICES
                            </router-link>

                            <div class="navbar-dropdown">
                                <router-link to="/" class="navbar-item">
                                    Systems Integration
                                </router-link>
                                <router-link to="/" class="navbar-item">
                                    Web Services and APIs
                                </router-link>
                                <router-link to="/" class="navbar-item">
                                    Web Design and Development
                                </router-link>
                                <router-link to="/" class="navbar-item">
                                    Data analytics and Business Intelligence
                                </router-link>
                                <router-link to="/" class="navbar-item">
                                    Cloud Hosted Services
                                </router-link>
                                <hr class="navbar-divider">
                                <router-link to="/" class="navbar-item">
                                    Digital Payments and Automation
                                </router-link>
                            </div>
                        </div>

                        <div class="navbar-item">
                            <router-link to="/" class="is-centered-responsive">
                                ARTICLES
                            </router-link>
                        </div>


                        <div class="navbar-item">
                                <router-link to="/login" class="button is-primary slanted is-centered-responsive">
                                    <span class="textline">Login</span>
                                </router-link>
                        </div>

                        <div class="navbar-item">
                                <router-link to="/signup" class="button is-primary slanted is-centered-responsive">
                                    <span class="textline">Signup</span>
                                </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- nav -->
        <nav :class="{unCollapse: isCollapse}" class="navbar is-dark parent" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                        <router-link to="/" class="navbar-item">
                            <img class="logos" alt="MUX-EXP" src="https://epesa.s3.amazonaws.com/fd50a070-d5c9-4a0d-8262-9c57beb27f9a_200x200.png" width="200" height="200">
                            <span id="ellogo">{{siteName}}</span>
                        </router-link>

                    <span :class="is_active" v-on:click="switchCollapse" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>

                <div id="navbarBasicExample" class="navbar-menu light-menu" :class="is_active" >
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <router-link to="/" class="is-centered-responsive">
                                HOME
                            </router-link>
                        </div>

                        <div class="navbar-item">
                            <router-link to="/" class="is-centered-responsive">
                                WORK
                            </router-link>
                        </div>

                        <div class="navbar-item is-centered-responsive has-dropdown is-hoverable">
                            <router-link to="/" class="navbar-link">
                                SERVICES
                            </router-link>

                            <div class="navbar-dropdown">
                                <router-link to="/" class="navbar-item">
                                    Systems Integration
                                </router-link>
                                <router-link to="/" class="navbar-item">
                                    Web Services and APIs
                                </router-link>
                                <router-link to="/" class="navbar-item">
                                    Web Design and Development
                                </router-link>
                                <router-link to="/" class="navbar-item">
                                    Data analytics and Business Intelligence
                                </router-link>
                                <router-link to="/" class="navbar-item">
                                    Cloud Hosted Services
                                </router-link>
                                <hr class="navbar-divider">
                                <router-link to="/" class="navbar-item">
                                    Digital Payments and Automation
                                </router-link>
                            </div>
                        </div>

                        <div class="navbar-item">
                            <router-link to="/" class="is-centered-responsive">
                                ARTICLES
                            </router-link>
                        </div>

                        <div class="navbar-item">
                                <router-link to="/login" class="button is-primary slanted is-centered-responsive">
                                    <span class="textline">Login</span>
                                </router-link>
                        </div>

                        <div class="navbar-item">
                                <router-link to="/signup" class="button is-primary slanted is-centered-responsive">
                                    <span class="textline">Signup</span>
                                </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import { TimelineMax } from "gsap";
    export default {
        name: "NavBar",
        data: function () {
            return {
                isCollapse: true,
                siteName: 'MUX-EXP'
            }
        },
        mounted () {

        },
        computed: {
            is_active() {
                if (this.isCollapse){
                    return ''
                } else {
                    return 'is-active'
                }
            },
            is_collapse() {
                return !this.isCollapse;
            }
        },
        watch: {

        },
        methods: {
            switchCollapse() {
                console.log('switching collapse');
                this.isCollapse = !this.isCollapse ;
            },
            handleScroll(evt, el) {
                const timelineMax = new TimelineMax;
                if (window.scrollY > 50) {
                    timelineMax
                        .set(el, {
                            display: 'flex'
                        });
                }

                if (window.scrollY < 50) {
                    timelineMax
                        .set(el, {
                            display: 'none'
                        });
                }

                return window.scrollY > 100
            }
        }
    }
</script>