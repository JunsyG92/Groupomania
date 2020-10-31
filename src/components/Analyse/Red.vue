<template>
    <span class="red">
        <slot></slot>
    </span>
</template>

<style lang="scss">
    .red {
        color: #ff3743;
        text-shadow: rgba(100, 21.6, 26.3, .5) 0px 0px 5px
    }
</style>