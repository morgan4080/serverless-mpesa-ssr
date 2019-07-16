<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <router-link to="/" tag="span" class="navbar-item">
                <span id="dashlogo">{{ siteName }}</span>
            </router-link>
            <a class="sidebar-close" href="javascript:void(0);"><i data-feather="x"></i></a>
        </div>
        <div class="inner">
            <ul class="sidebar-menu">
                <li><span class="nav-section-title"></span></li>
                <li class="have-children"><a href="#"><span class="fa fa-user"></span>User</a>
                    <ul>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </li>
                <li class="have-children"><a href="#"><span class="fa fa-envelope"></span>Messages</a>
                    <ul>
                        <li><a href="#">Inbox</a></li>
                        <li><a href="#">Compose</a></li>
                    </ul>
                </li>
                <li class="have-children"><a href="#"><span class="fa fa-image"></span>Images</a>
                    <ul>
                        <li><a href="#">Library</a></li>
                        <li><a href="#">Upload</a></li>
                    </ul>
                </li>
                <li class="have-children"><a href="#"><span class="fa fa-cog"></span>Settings</a>
                    <ul>
                        <li><a href="#">User settings</a></li>
                        <li><a href="#">App settings</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        name: "sidenav",
        data: function() {
            return {
                siteName: 'MUXEXP'
            }
        },
        mounted() {
            $(document).ready(function($) {
                "use strict";
                //Close sidebar
                $('.sidebar-close').click(function () {
                    $('.sidebar').removeClass('is-active');
                    $('.menu-icon-wrapper').removeClass('open');
                });

                //Sidebar menu
                if ($('.sidebar').length) {
                    $(".sidebar-menu > li.have-children a").on("click", function (i) {
                        i.preventDefault();
                        if (!$(this).parent().hasClass("active")) {
                            $(".sidebar-menu li ul").slideUp();
                            $(this).next().slideToggle();
                            $(".sidebar-menu li").removeClass("active");
                            $(this).parent().addClass("active");
                        }
                        else {
                            $(this).next().slideToggle();
                            $(".sidebar-menu li").removeClass("active");
                        }
                    });
                }
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>