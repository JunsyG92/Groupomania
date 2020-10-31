<template>
    <div class="nav-responsive">
        <div class="d-flex justify-content-around">
            <NavLink icon="home" to_link="/" isResponsive/>
            <NavLink icon="user outline" v-bind:to_link="'/profil/' + user_id" exact isResponsive />
            <NewPostButtonResponsive />
            <NavLink icon="cog" to_link="/settings" isResponsive />
            <div class="text-white item nav-link logoutButton"  @click="Logout">
                <div class="align-items-center nav-item">
                    <i class="icon circular power off text-white shadow-none"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavLink from './NavLink.vue';
    import NewPostButtonResponsive from "../Button/NewPostButtonResponsive.vue"

    import jwt from "jsonwebtoken";
    export default {
        components: {
            NavLink,
            NewPostButtonResponsive,
        },
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
        },
        data() {
            return {
                user_id: "",
            }
        },
        beforeMount() {
            let token = sessionStorage.getItem('token');
            let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
            this.user_id = user_id.userId
        }
    }
</script>

<style lang="scss">
    .nav-responsive {
        background-color: #15202b;
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        box-shadow: 0px -10px 10px rgba(0, 0, 0, .3);
        z-index: 991;
    }
    .logoutButton {
        cursor: pointer;
    }
</style>