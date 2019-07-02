<template>
    <!-- Landing page Hero -->
    <div class="dark-wrapper">
        <section class="hero is-fullheight is-transparent">
            <!-- Navigation -->
            <main-nav></main-nav>
            <!-- Animated Particles -->
            <particle></particle>
            <!-- Hero Image and Title -->
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-5 landing-caption">
                            <h1 class="title is-1 is-light is-semibold is-spaced main-title">
                                Transform Digitally
                            </h1>
                            <h2 class="subtitle is-6 is-light is-thin main-subtitle">
                                Custom web apps for those who expect more. From testing back-end integration to supporting front-end functionality and fixing bugs we have you covered. Our track record is second-to-none.
                                We’ve worked with many customers on challenging projects that require complex integration skills and expertise.
                                We look for new ways to advance our customers' digital strategy using a data-driven approach where every interaction is an insight that can be used to constantly improve.
                            </h2>
                        </div>

                        <div class="column is-7">
                            <figure class="image">
                                <img style="height: 400px" src="../../public/services.svg" alt="">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Hero footer -->
            <div class="hero-foot">
                <div class="container">
                    <div class="tabs is-centered">
                        <!-- Client / partner list -->
                        <ul>
                            <li><a><img class="hero-logo" src="../../public/aws.svg" alt=""></a></li>
                            <li><a><img class="hero-logo" src="../../public/serverless.svg" alt=""></a></li>
                            <li><a><img class="hero-logo" src="../../public/vue.svg" alt=""></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- /Landing page Hero -->
        <!-- Icon Features section -->
        <section id="start" class="section is-transparent is-relative">
            <div class="container">
                <div class="has-text-centered">
                    <!-- Content wrapper -->
                    <div class="content-wrapper is-medium">
                        <div class="columns is-vcentered">
                            <!-- Feature -->
                            <div class="column is-4">
                                <div class="feature">
                                    <img src="../../public/cloud.svg" alt="" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                    <h4 class="title is-6 is-tight is-light">Cloud Applications</h4>
                                    <p>From designing cloud solutions (private, public & hybrid) based on individual client needs through to the provision of cloud storage, cloud computing, hosted databases, Office 365 and more.</p>
                                </div>
                            </div>
                            <!-- Feature -->
                            <div class="column is-4">
                                <div class="feature">
                                    <img src="../../public/icons/stacked.svg" alt="" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                    <h4 class="title is-6 is-tight is-light">System Integration</h4>
                                    <p>Streamline your business by linking your complex technologies. We will link your systems spread both geographically and virtually across a company, departments and branches.</p>
                                </div>
                            </div>
                            <!-- Feature -->
                            <div class="column is-4">
                                <div class="feature">
                                    <img src="../../public/icons/compact.svg" alt="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                    <h4 class="title is-6 is-tight is-light">Custom Full-Stack Development</h4>
                                    <p>Accelerate business innovation with custom solutions hosted entirely in the cloud. We are committed to creating experiences that drive a return on innovation. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="big-gradient" class="section is-transparent">
            <div class="container">
                <div class="divider is-centered"></div>
                <!-- Title & subtitle -->
                <h2 class="title is-light is-semibold has-text-centered is-spaced">FIT-FOR-PURPOSE</h2>
                <h4 class="subtitle is-6 is-light has-text-centered is-compact">4X faster delivery than the competition.
                    Rapid prototyping. Perfectly matching your specifications.
                    Quicker development reduces cost. Many businesses currently make the mistake of fixating on technology and trying to build a business case around it. As with any technology, a more effective approach is to identify a business need or operational challenge, and then build a solution to solve it.
                </h4>
                    <!-- Content wrapper -->
                <div class="content-wrapper is-large">

                    <div class="columns is-vcentered">
                        <!-- Feature content -->
                        <div class="column is-5 is-offset-1">
                            <div class="side-feature-content">

                                <h3 class="title is-4 is-light"><img src="../../public/icons/ico/bitbanner.svg" alt=""> <span>Bespoke software</span></h3>
                                <div class="divider is-long"></div>
                                <p class="is-light">We specialise in designing and building bespoke web services.
                                    We offer "Custom Application"​ development services to various enterprises across different fields. With an obsessive focus on high quality development, we maintain exceptionally high level of technical knowledge in this industry.</p>
                                <div class="cta-wrapper">
                                    <router-link to="/" class="button is-primary is-centered-responsive">
                                        <span class="textline">More...</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <!-- Feature image -->
                        <div class="column is-7">
                            <img class="side-feature" src="../../public/illustrations/token.svg" alt="">
                        </div>
                    </div>

                    <div class="columns is-vcentered">
                        <!-- Feature image desktop -->
                        <div class="column is-7 is-hidden-mobile">
                                    <img class="side-feature" src="../../public/token.svg" alt="">
                        </div>

                        <!-- Feature content -->
                        <div class="column is-5">
                            <div class="side-feature-content">

                                <h3 class="title is-4 is-light"><img src="../../public/icons/ico/bitnetwork.svg" alt=""> <span>Web Design & Development</span></h3>
                                <div class="divider is-long"></div>
                                <p class="is-light">Boost visibility and access to your digital services with impressive user experiences. We develop, customize, migrate and modernize custom web apps for specific business needs such as data, workflow and infrastructure management, customer engagement, analytics, digital content, and e-commerce.</p>
                                <div class="cta-wrapper">
                                    <router-link to="/" class="button is-primary is-centered-responsive">
                                        <span class="textline">More...</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <!-- Feature image only for mobile -->
                        <div class="column is-7 is-hidden-desktop is-hidden-tablet">
                            <img class="side-feature" src="../../public/token.svg" alt="">
                        </div>
                    </div>

                    <div class="columns is-vcentered">
                        <!-- Feature content -->
                        <div class="column is-5 is-offset-1">
                            <div class="side-feature-content">

                                <h3 class="title is-4 is-light"><img src="../../public/icons/ico/bitmining.svg" alt=""> <span>System Integration & Deployment</span></h3>
                                <div class="divider is-long"></div>
                                <p class="is-light">Point-to-point integration, digital payments and micro-services connection, we will master any integration scenario, developing middleware for seamless message interchange across disparate systems.</p>
                                <div class="cta-wrapper">
                                    <router-link to="/" class="button is-primary is-centered-responsive">
                                        <span class="textline">More...</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <!-- Feature image -->
                        <div class="column is-7">
                            <img class="side-feature" src="../../public/sys.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section is-medium is-dark">
            <!-- Container -->
            <div class="container">
                <!-- Divider -->
                <div class="divider is-centered"></div>
                <!-- Title & subtitle -->
                <h2 class="title is-light is-semibold has-text-centered is-spaced">Case studies</h2>
                <h4 class="subtitle is-6 is-light has-text-centered is-compact">
                    We follow a systematic design process to optimize software delivery time & quality.
                    Development roles will involve plenty of testing, we use both manual and automated testing throughout the development process to ensure smoother launches and updates.
                    These are some of our favourite projects;
                </h4>

                <!-- Content wrapper -->
                <div class="content-wrapper">
                    <timeline ref="uxTimeline"></timeline>
                </div>
            </div>
            <!-- /Container -->
        </section>
        <!-- /Roadmap section -->
        <contact></contact>
        <footers></footers>
    </div>
</template>

<script>
    import Particle from './Particle.vue';
    import Timeline from './timeline.vue';
    import ContactForm from './contactform.vue';
    import Footers from './footers.vue';
    import AOS from 'aos';
    export default {
        name: "Home",
        mounted() {
            AOS.init();
        },
        components: {
            'particle': Particle,
            'timeline': Timeline,
            'contact': ContactForm,
            'footers': Footers
        },
        data: function () {
            return {
                eventsMinDistance : 60
            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>