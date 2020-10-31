<template>
    <div class="logout-button" @click="Logout">
        <sui-icon name="power off" class="shadow-none m-0" circular size="large" />
        <span>Se déconnecter</span>
    </div>
</template>

<script>
    export default {
        methods: {
            Logout () {
                sessionStorage.removeItem('token')
                localStorage.removeItem('image')
                localStorage.removeItem('banner')
                localStorage.removeItem('first_name')
                localStorage.removeItem('last_name')
                if(localStorage.getItem('isAdmin')) {
                    localStorage.removeItem('isAdmin')
                }
                this.$store.commit('DISCONNECT_USER');
                window.location.reload()
            }
        }
    }
</script>

<style lang="scss">
    .logout-button {
        cursor: pointer;
        background-color: #0096ff !important;
        width: 43px;
        height: auto;
        transition-duration: 200ms;
        display: flex;
        align-items: center;
        border-radius: 50px;
        justify-content: center;
        overflow: hidden;
        span {
            display: none;
            opacity: 0;
            white-space: nowrap;
            font-weight: bold;

        }
        &:hover {
            justify-content: start;
            transition-duration: 200ms;
            padding-right: 15px;
            width: 160px;
            background-color: #0082ff !important;
            span {
                position: relative;
                display: block;
                opacity: 1;
            }
        }
    }
    .shadow-none {
        box-shadow: none !important;
    }
</style>