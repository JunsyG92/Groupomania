<template>
    <header class="position-fixed w-inherit">
        <div class="d-flex align-items-start flex-column h-100vh">
            <div class="ui vertical fluid tabular menu nav-menu mx-auto mb-auto">
                <!-- <img src="../../assets/icons/" /> -->
                <svg class="mb-3 ml-3" data-v-1084b650="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" :style="{width: '60px', marginTop: '18px'}">
                  <g data-v-1084b650="" id="640fb903-7c97-3a8b-d0a7-369102908d0a" fill="#FFFFFF" stroke="none" transform="matrix(0.8499999999999999,0,0,0.8499999999999999,22.500006484985377,22.50005836486818)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-205 207 100 100">
                      <switch>
                        <g>
                          <path d="M-155 298.8c11.2 0 21.7-4.3 29.6-12.2 7.9-7.9 12.2-18.4 12.2-29.6 0-11.2-4.3-21.7-12.2-29.6-7.9-7.9-18.4-12.2-29.6-12.2s-21.7 4.3-29.6 12.2c-7.9 7.9-12.2 18.4-12.2 29.6 0 11.2 4.3 21.7 12.2 29.6 7.9 7.9 18.4 12.2 29.6 12.2zm2.4-7.1c-.8.1-1.6.1-2.4.1-1.1 0-2.2-.1-3.3-.2-3.6-5.6-6.3-11.6-7.9-17.9h17.7c.6 1.5 1.7 2.9 3 3.8-1.7 5-4.1 9.7-7.1 14.2zm9.5-2c1.9-3.5 3.4-7 4.6-10.7 2.9-.6 5.2-2.6 6.3-5.3h7.7c-4 7.3-10.7 13-18.6 16zm22.8-32.7c0 3.3-.5 6.5-1.3 9.6h-10.8c-.6-1.3-1.6-2.5-2.8-3.4.2-2.2.3-4.4.3-6.6 0-3.1-.2-6.2-.6-9.2h13.8c1 3 1.4 6.3 1.4 9.6zm-4.2-16.7h-12.2c-1.3-5.5-3.2-10.7-5.8-15.7 7.6 2.9 14 8.6 18 15.7zm-17.4 16.3c0 1.7-.1 3.4-.2 5.1-2.8.6-5.1 2.4-6.2 4.9h-19.3c-.4-3-.7-6.1-.7-9.1 0-1.9.1-3.8.3-5.7 2.6-.5 4.7-2.2 6-4.4h19.5c.4 3 .6 6.1.6 9.2zm-15.7-34.2c.9-.1 1.8-.1 2.6-.1 1 0 2 0 3 .1 3.6 5.6 6.3 11.6 7.9 17.9h-17.4c-.6-1.7-1.7-3.2-3.1-4.3 1.8-4.8 4.1-9.3 7-13.6zm-9.5 2c-1.7 3.2-3.2 6.6-4.4 10-3.1.6-5.6 2.9-6.6 5.8h-7.3c3.9-7.1 10.4-12.8 18.3-15.8zm-22.6 32.6c0-3.3.5-6.6 1.4-9.6h10.9c.6 1.1 1.5 2.1 2.5 2.9-.2 2.4-.4 4.8-.4 7.2 0 3.1.2 6.1.6 9.1h-13.6c-1-3.1-1.4-6.3-1.4-9.6zm16.2 16.6c1.3 5.4 3.2 10.7 5.8 15.7-7.6-3-13.9-8.6-17.8-15.7h12z"></path>
                        </g>
                      </switch>
                    </svg>
                  </g>
                </svg>
                <NavLink name="Accueil" icon="home" to_link="/"/>
                <NavLink name="Profil" icon="user outline" v-bind:to_link="'/profil/' + user_id" exact/>
                <NavLink name="Paramètres" icon="cog" to_link="/settings"/>
                <NavLink name="Analyse" icon="code" to_link="/analyse" class="mb-5" />
                <NewPostButton />
            </div>
            <div class="menu nav-menu mx-auto mb-5">
                <LogoutButton />
            </div>
        </div>
    </header>
</template>

<script>
import NavLink from './NavLink.vue';
import NewPostButton from "../Button/NewPostButton.vue"
import LogoutButton from "../Button/LogoutButton.vue"

import jwt from "jsonwebtoken";

export default {
    components: {
        NavLink,
        NewPostButton,
        LogoutButton
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
    .nav-menu {
        border: none !important;
    }
    .ui.menu.fluid, .ui.vertical.menu.fluid {
        width: auto !important
    }
    .nav-item {
        height: 50px;
        display: flex;
        vertical-align: inherit;
        padding-left: 10px;
        padding-right: 20px;
        font-weight: bold;
        font-size: 20px;
        transition-duration: 300ms;
        border-radius: 50px;
    }
</style>