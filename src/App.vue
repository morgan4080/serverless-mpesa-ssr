<template  class="layout-default" >
    <div id="app">
        <div class="wrapper">
            <transition name="fade" mode="out-in">
                <router-view class="view"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
      name: "App",
      mounted () {

      },
      data: function () {
          return {

          }
      },
      computed: mapState({
          authState(state) {
              return state.authStatus
          }
      }),
      methods: {
          setLogged(x) {
              return this.$store.dispatch('watchAuth', x)
          }
      },
      created() {
          if (this.authState) {
              this.setLogged(true)
          } else {
              this.setLogged(false)
          }
      }
  }
</script>
