<template>
    <footer class="mux-footer">
        <div class="container">
            <!-- Logo -->
            <div class="footer-logo">
                <a href="#">
                    <!--<img class="rotating" src="https://epesa.s3.amazonaws.com/fd50a070-d5c9-4a0d-8262-9c57beb27f9a_200x200.png" alt="">-->
                    <logos></logos>
                    <div class="brand-name">{{siteName}}</div>
                    <div class="brand-subtitle">State-of-the-art</div>
                </a>
            </div>

            <!-- Columns -->
            <div class="columns footer-columns is-vcentered">
                <div class="column is-4">
                    <!-- Links group -->
                    <ul class="footer-links">
                        <li>
                            <a href="#">Articles</a>
                        </li>

                        <li>
                            <a href="#">Case Studies</a>
                        </li>

                        <li>
                            <a href="#">F.A.Q</a>
                        </li>
                    </ul>
                </div>
                <!-- Newsletter -->
                <div class="column is-4">
                    <div class="subscribe-block">
                        <form>
                            <!-- Field -->
                            <div class="control">
                                <!-- Special input -->
                                <input class="krypton-subscribe-input" type="email" name="email" placeholder="">
                                <button class="subscribe-button">
                                    <span>Subscribe</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- Links group -->
                <div class="column is-4">
                    <ul class="footer-links">
                        <li>
                            <a href="#">Register</a>
                        </li>

                        <li>
                            <a href="#">Media</a>
                        </li>

                        <li>
                            <a href="#">Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Copyright -->
            <p class="k-copyright">© 2019 | accessros. All Rights Reserved</p>
            <br>
            <!-- Made by -->
            <p class="coded-by">Designed and Coded by <a href="#" target="_blank">M3</a></p>
        </div>

        <!-- Absolute image -->
        <img class="world" src="https://epesa.s3.amazonaws.com/world-map.png" alt="MUXEXP">
    </footer>
</template>

<script>
    import Logos from "./logos.vue";
    export default {
        name: "footers",
        data: function () {
            return {
                siteName: 'accessros'
            }
        },
        components: {
            'logos': Logos
        }
    }
</script>