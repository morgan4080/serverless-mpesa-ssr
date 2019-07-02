<template>
  <div class="dark-wrapper">
    <section class="hero is-fullheight is-transparent auth ">
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
              <p class="logo">{{siteName}}</p>
            </div>
            <form :model="form" class="contact-form">
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
                <span @click="makeSubmit" class="button is-primary is-centered-responsive">
                  <span class="textline">Login!</span>
                </span>
              </div>
            </form>
            <div class="has-text-centered">
              <p class="links">Don't have an account?
                <router-link to="/signup">Sign up now !</router-link></p
              >
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

export default {
  name: "login",
  components: {
    particle: Particle
  },
  mounted() {

  },
  data: function() {
    return {
      siteName: "MUX-EXP",
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {

  },
  methods: {
    makeSubmit() {
      console.log('sending validation data', this.form.email + ' ' + this.form.password );
    }
  }
};
</script>