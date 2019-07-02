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
  export default {
      name: "App",
      mounted () {

      },
      data: function () {
          return {

          }
      },
      computed: {

      },
      methods: {

      }
  }
</script>
