<template>
  <div class="dark-wrapper">
    <section class="hero is-fullheight is-transparent auth dark-wrapper">
      <particle></particle>
      <div class="columns is-vcentered">
        <div class="login column is-4 ">
          <div class="aContent">
            <div class="has-text-centered">
              <img
                      class="login-logo logos"
                      alt="MUX-EXP"
                      src="https://epesa.s3.amazonaws.com/fd50a070-d5c9-4a0d-8262-9c57beb27f9a_200x200.png"
                      width="150"
                      height="150"
              />
              <p class="logo">{{ siteName }}</p>
            </div>
            <form :model="form" @submit.prevent="makeSubmit" class="contact-form">
              <div class="control-material is-secondary has-icons-right">
                <input class="material-input" v-model="form.username" type="text" required>
                <span class="material-highlight"></span>
                <span class="bar"></span>
                <label>Username</label>
              </div>

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
              <article v-if="hasError" class="message is-danger is-small">
                <div class="message-body">
                  <button class="delete is-small" @click="clearMessages" aria-label="delete"></button>
                  <span v-for="message in messages">
                    <span><strong>Error</strong>, {{ message }}</span>
                  </span>
                </div>
              </article>

              <p class="links">Already have an account?
                <router-link to="/login">Log in now !</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="bnr column is-8"></div>
      </div>
    </section>
  </div>
</template>

<script>

import Particle from "./Particle.vue";
import { mapState } from 'vuex';
import $ from "jquery";

export default {
  name: "signup",
  data: function() {
    return {
      siteName: "MUX-EXP",
      token: null,
      form: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  components: {
    particle: Particle
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
      return state.messages
    },
    hasError(state) {
      return state.hasErrors
    }
  }),
  methods: {
    clearMessages() {
      return this.$store.dispatch('clearMessages')
    },
    setToken(t) {
      this.token = t;
      console.log(this.token)
    },
    makeSubmit() {
      // userAlias: this.form.username,
      console.log('sending validation data', this.form.email + ' ' + this.form.password );
      return this.$store.dispatch('doSignup',  { details: {username: this.form.email, password: this.form.password}, sec: this.token})
    }
  }
};
</script>