<template>
    <button v-if="stateButton === false" class="postButton disabled" disabled>{{ name }}</button>
    <button v-else class="ml-auto postButton" type="submit">{{ name }}</button>
</template>

<script>
export default {
    props: {
        name: String,
        stateButton: Boolean
    }
}
</script>

<style lang="scss">
    .postButton {
        background-color: rgb(0, 150, 255) ;
        border: none !important;
        width: auto;
        padding: 10px 15px;
        border-radius: 50px;
        color: white;
        transition-duration: 200ms;
    }
    .postButton:not(.disabled) {
        cursor: pointer
    }
    .postButton:hover {
        transition-duration: 200ms;
        background-color: rgb(0, 130, 255);
    }
    .disabled {
        background-color: rgb(45, 104, 146) !important;
        color: #c8c8c8
    }
    .disabled:hover {
        background-color: rgb(42, 95, 133) !important;
        color: #bdbdbd
    }
</style>