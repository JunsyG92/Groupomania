<template>
    <div class="ui message" :class="typeMessage">
        <sui-message-header class="text-dark">{{ title }}</sui-message-header>
        <p class="text-dark">{{ message }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            message: String,
            typeMessage: String,
        }
    }
</script>

<style lang="scss">

</style>