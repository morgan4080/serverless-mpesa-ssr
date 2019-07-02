<template>
    <!-- Contact section -->
    <section class="section is-medium is-darkest">
        <!-- Container -->
        <div class="container">
            <!-- Divider -->
            <div class="divider is-centered"></div>
            <!-- Title & subtitle -->
            <h2 class="title is-light is-semibold has-text-centered is-spaced">Get in Touch</h2>
            <h4 class="subtitle is-6 is-light has-text-centered is-compact">Let's discuss your next project. Get a free, no-obligation quote with transparent, fair and competitive pricing. Whether you are considering a new application development, application modernisation, systems integration, or migrating enterprise applications to the cloud, we can help.</h4>

            <!-- Content wrapper -->
            <div class="content-wrapper is-large">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <!-- Contact icons -->
                        <div class="contact-icons">
                            <!-- Phone -->
                            <a class="contact-icon" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                <img class="is-phone" src="../../public/icons/phone.svg" alt="">
                            </a>
                            <!-- Mail -->
                            <a class="contact-icon" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                <img class="is-phone" src="../../public/icons/mail.svg" alt="">
                            </a>
                            <!-- Telegram -->
                            <a class="contact-icon" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                <img class="is-telegram" src="../../public/logo/telegram.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <!-- Form -->
                        <form class="contact-form">
                            <!-- Field -->
                            <div class="control-material is-secondary">
                                <input class="material-input " type="text" required>
                                <span class="material-highlight"></span>
                                <span class="bar"></span>
                                <label>Name</label>
                            </div>
                            <!-- Field -->
                            <div class="control-material is-secondary">
                                <input class="material-input " type="email" required>
                                <span class="material-highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                            <!-- Field -->
                            <div class="control-material is-secondary">
                                <textarea rows="3"></textarea>
                                <span class="material-highlight"></span>
                                <span class="bar"></span>
                                <label>Message </label>
                            </div>

                            <!-- Submit -->
                            <div class="has-text-centered">
                                <router-link to="/" class="button is-primary slanted is-centered-responsive">
                                    <span class="textline">Send Message</span>
                                </router-link>
                            </div>
                        </form>
                        <!-- /Form -->
                    </div>
                </div>


            </div>
            <!-- Content wrapper -->
        </div>
        <!-- Container -->
    </section>
</template>

<script>
    export default {
        name: "contactform",
        data: function () {
            return {

            }
        },
        mounted () {

        },
        computed: {

        },
        methods: {

        }
    }
</script>