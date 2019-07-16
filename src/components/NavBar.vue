<template>
    <div class="hero-head has-navbar-fixed-top">
        <!-- Clone nav for scroll -->
        <nav id="navbar-clone" v-scroll="handleScroll" :class="{unCollapse: isCollapse}" class="navbar is-fixed is-dark parent" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">

                        <router-link to="/" tag="span" class="navbar-item">
                            <img class="logos" alt="MUX-EXP" src="https://epesa.s3.amazonaws.com/fd50a070-d5c9-4a0d-8262-9c57beb27f9a_200x200.png" width="200" height="200">
                            <span id="ellogo">{{siteName}}</span>
                        </router-link>

                    <span :class="is_active" @click="switchCollapse" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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

                            <span role="button" @click="switchExpand" aria-label="sub-menu" aria-expanded="false" id="expander" data-target="navbarCollapse"></span>

                            <div :class="is_expanded" id="navbarCollapse" class="navbar-dropdown">
                                <router-link to="/" class="navbar-item">
                                    Cloud Services & Deployment
                                </router-link>

                                <router-link to="/" class="navbar-item">
                                    Systems Integration & Networks
                                </router-link>

                                <router-link to="/" class="navbar-item">
                                    Web Services & APIs
                                </router-link>

                                <router-link to="/" class="navbar-item">
                                    Web Design & Development
                                </router-link>

                                <router-link to="/" class="navbar-item">
                                    Databases & Data Modelling
                                </router-link>
                            </div>
                        </div>

                        <div class="navbar-item">
                            <router-link to="/" class="is-centered-responsive">
                                ARTICLES
                            </router-link>
                        </div>


                        <div class="navbar-item">
                                <router-link to="/login" tag="span" class="button is-primary slanted is-centered-responsive">
                                    <a class="textline">Login</a>
                                </router-link>
                        </div>

                        <div class="navbar-item">
                                <router-link to="/signup" tag="span" class="button is-primary slanted is-centered-responsive">
                                    <a class="textline">Signup</a>
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
                        <router-link to="/" tag="span" class="navbar-item">
                            <img class="logos" alt="MUX-EXP" src="https://epesa.s3.amazonaws.com/fd50a070-d5c9-4a0d-8262-9c57beb27f9a_200x200.png" width="200" height="200">
                            <span id="ellogo">{{siteName}}</span>
                        </router-link>

                    <span :class="is_active" @click="switchCollapse" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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

                            <span role="button" @click="switchExpand" aria-label="sub-menu" aria-expanded="false" id="expander" data-target="navbarCollapse"></span>

                            <div :class="is_expanded" id="navbarCollapse" class="navbar-dropdown">
                                <router-link to="/" class="navbar-item">
                                    Cloud Services & Deployment
                                </router-link>

                                <router-link to="/" class="navbar-item">
                                    Systems Integration & Networks
                                </router-link>

                                <router-link to="/" class="navbar-item">
                                    Web Services & APIs
                                </router-link>

                                <router-link to="/" class="navbar-item">
                                    Web Design & Development
                                </router-link>

                                <router-link to="/" class="navbar-item">
                                    Databases & Data Modelling
                                </router-link>
                            </div>
                        </div>

                        <div class="navbar-item">
                            <router-link to="/" class="is-centered-responsive">
                                ARTICLES
                            </router-link>
                        </div>

                        <div class="navbar-item">
                                <router-link to="/login" tag="span" class="button is-primary slanted is-centered-responsive">
                                    <a class="textline">Login</a>
                                </router-link>
                        </div>

                        <div class="navbar-item">
                                <router-link to="/signup" tag="span" class="button is-primary slanted is-centered-responsive">
                                    <a class="textline">Signup</a>
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
                isntExpanded: true,
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
            },
            is_expanded() {
                if (this.isntExpanded){
                    return ''
                } else {
                    return 'is-expanded'
                }
            }
        },
        methods: {
            switchCollapse() {
                console.log('switching collapse');
                this.isCollapse = !this.isCollapse ;
            },
            switchExpand() {
                console.log('switching expander');
                this.isntExpanded = !this.isntExpanded ;
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