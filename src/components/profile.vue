<template>
    <p>Yo man</p>
</template>

<script>
    export default {
        name: "profile",
        beforeEnter: (to, from, next) => {
            next(vm => {
                console.log(vm.$store.state.authStatus)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>