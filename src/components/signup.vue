<template>
  <div class="dark-wrapper">
    <section class="hero is-fullheight is-transparent auth dark-wrapper">
      <particle></particle>
      <div class="columns is-vcentered">
        <div class="login column is-4 ">
          <div class="aContent">
            <div class="has-text-centered">
              <!--<img
                      class="login-logo logos"
                      alt="accessros"
                      src="https://epesa.s3.amazonaws.com/fd50a070-d5c9-4a0d-8262-9c57beb27f9a_200x200.png"
                      width="150"
                      height="150"
              />-->
                <span class="login-logo logos">
                    <logos></logos>
                </span>
              <p class="logo">{{ siteName }}</p>
            </div>
            <form :model="form" @submit.prevent="makeSubmit" class="contact-form">
              <div class="control-material is-secondary has-icons-right">
                <input class="material-input" v-model="form.email" type="text" required>
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
              </div>

              <div class="control-material is-secondary">
                <input class="material-input" v-model="form.password" type="password" required>
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Password</label>
              </div>

              <div class="has-text-centered">
                <button type="submit" class="button is-primary is-centered-responsive">
                  <span class="textline">Sign Up!</span>
                </button>
              </div>
            </form>
            <div class="has-text-centered">
              <p class="links">Already have an account?
                <router-link to="/login">Log in now !</router-link>
              </p>
            </div>
            <article v-if="hasError" class="message is-danger is-small">
              <button class="delete clear" @click="clearMessages" aria-label="delete"></button>
              <div class="message-body">
                <span v-for="message in messages">
                <span> {{ message }}</span>
              </span>
              </div>
            </article>
          </div>
        </div>
        <div class="bnr column is-8"></div>
      </div>
    </section>
  </div>
</template>

<script>

import Particle from "./Particle.vue";
import Logos from "./logos.vue";
import { mapState } from 'vuex';
import $ from "jquery";

export default {
  name: "signup",
  data: function() {
    return {
      siteName: "accessros",
      token: null,
      form: {
        email: '',
        password: ''
      }
    };
  },
  components: {
    particle: Particle,
      'logos': Logos
  },
  created() {
    if (this.authState) {
      this.doRedirect()
    }
  },
  mounted() {
    let th = this;
    function setter(x) {
      th.setToken(x)
    }
    $(document).ready(function($) {

      "use strict";

      let meta = $('meta[name="csrf-token"]');
      setter(meta.attr( 'content' ));
    });
  },
  computed: mapState({
    messages(state) {
      return state.authD['auth'].message
    },
    hasError(state) {
      return state.hasErrors
    },
    authState(state) {
      return state.authStatus
    }
  }),
  methods: {
    clearMessages() {
      return this.$store.dispatch('clearMessages')
    },
    doRedirect() {
      return this.$router.push('/profile')
    },
    setToken(t) {
      this.token = t;
      console.log(this.token)
    },
    makeSubmit() {
      return this.$store.dispatch('doSignup',  { details: {username: this.form.email, password: this.form.password}, sec: this.token}).then(results => {
          console.log(results);
        if (results.redirect) this.$router.push(results.redirect)
      })
    }
  }
};
</script>
<style lang="scss" scoped>

</style>