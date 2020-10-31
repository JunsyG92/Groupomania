<template>
  <div id="app">
    <sui-grid celled="internally" v-if="connected">
        <header class="sm">
            <NavResponsive />
        </header>
        <sui-grid-row class="lg">
            <sui-grid-column :width="4" class="index-1">
                <NavUser />
            </sui-grid-column>
            <sui-grid-column :width="11">
                <router-view/>
            </sui-grid-column>
        </sui-grid-row>
        <sui-grid-row class="sm">
            <sui-grid-column :width="16">
                <router-view/>
            </sui-grid-column>
        </sui-grid-row>
    </sui-grid>
    <div v-else>
        <router-view/>
    </div>
  </div>
</template>

<script>
import NavUser from './components/Navigation/NavUser.vue'
import NavResponsive from './components/Navigation/NavResponsive.vue'
import { mapState } from 'vuex';
export default {
    data () {
        return {
            connected : false
        }
    },
    mounted () {
        if (sessionStorage.getItem('token')) {
            this.connected = true
        }
    },
    components: {
        NavUser,
        NavResponsive
    },
    computed: {
        ...mapState([
            'user'
        ])
    }
}
</script>

<style lang="scss">
    .img {
        width: 600px;
        height:600px;
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .lg, .sm {
        display: none !important;
    }
    @media screen and (min-width: 1279px) {
        .lg {
            display: block !important;
        }
    }
    @media screen and (max-width: 1278px) {
        .sm {
            display: block !important;
        }
    }
    // Style général
    html, body, #app {
        background: rgb(21, 32, 43);
        color: white !important;
        ;
    }
    // Position
    .position-fixed {
        position: fixed;
    }
    // Display
    .d-flex {
        display: flex !important;
    }
    .d-block {
        display: block !important;
    }
    
    .ui.celled.grid > .column:not(.row), .ui.celled.grid > .row > .column {
        box-shadow: -1px 0 0 0 rgba(230, 220, 210, 0.1);
    }
    .ui.column.grid > [class*="eleven wide"].column, .ui.grid > .column.row > [class*="eleven wide"].column, .ui.grid > .row > [class*="eleven wide"].column, .ui.grid > [class*="eleven wide"].column {
        width: 75% !important
    }
    .ui.minimal.comments .comment .actions {
        opacity: 1 !important
    }
    // Input
    textarea {
        color: white !important;
    }
    input {
        color: #262626 !important
    }
    // Font
    .text-uppercase {
        text-transform: uppercase;
    }
    // Font size 
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.3;
        color: #3c4858;
    }
    .h1,
    h1 {
        font-size: 2.5rem !important;
        font-weight: 300 !important;
    }
    @media (max-width: 1200px) {
        .h1,
        h1 {
            font-size: calc(1.375rem + 1.5vw);
        }
    }
    .h2,
    h2 {
        font-size: 2rem !important;
        font-weight: 300 !important;
    }
    @media (max-width: 1200px) {
        .h2,
        h2 {
            font-size: calc(1.325rem + 0.9vw);
        }
    }
    .h3,
    h3 {
        font-size: 1.75rem;
    }
    @media (max-width: 1200px) {
        .h3,
        h3 {
            font-size: calc(1.3rem + 0.6vw);
        }
    }
    .h4,
    h4 {
        font-size: 1.5rem !important;
    }
    @media (max-width: 1200px) {
        .h4,
        h4 {
            font-size: calc(1.275rem + 0.3vw);
        }
    }
    .h5,
    h5 {
        font-size: 1.25rem;
    }
    .h6,
    h6 {
        font-size: 1rem;
    }
    .lead {
        font-size: 1.125rem;
        font-weight: 300;
    }
    .display-1 {
        font-size: 6rem !important;
        font-weight: 300 !important;
        line-height: 1.3;
    }
    @media (max-width: 1200px) {
        .display-1 {
            font-size: calc(1.725rem + 5.7vw);
        }
    }
    .display-2 {
        font-size: 5.5rem !important;
        font-weight: 300 !important;
        line-height: 1.3;
    }
    @media (max-width: 1200px) {
        .display-2 {
            font-size: calc(1.675rem + 5.1vw);
        }
    }
    .display-3 {
        font-size: 4.5rem !important;
        font-weight: 300 !important;
        line-height: 1.3;
    }
    @media (max-width: 1200px) {
        .display-3 {
            font-size: calc(1.575rem + 3.9vw);
        }
    }
    .display-4 {
        font-size: 3.5rem !important;
        font-weight: 300 !important;
        line-height: 1.3;
    }
    @media (max-width: 1200px) {
        .display-4 {
            font-size: calc(1.475rem + 2.7vw);
        }
    }

    // Margin
    .m-0 {
        margin: 0 !important;
    }
    .mr-3 {
        margin-right: 1rem !important;
    }
    .ml-3 {
        margin-left: 1rem !important;
    }
    .mb-5 {
        margin-bottom: 3rem !important;
    }
    .mr-auto {
        margin-right: auto !important;
    }
    .mb-auto {
        margin-bottom: auto !important;
    }
    
    // Padding
    .p-3 {
        padding: 1rem !important;
    }
    .py-5 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    // Width
    .w-inherit {
        width: inherit;
    }
    .w-auto {
        width: auto !important;
    }
    .w-25 {
        width: 25%;
    }
    .w-50 {
        width: 50% !important;
    }
    .w-75 {
        width: 75% !important;
    }
    .w-87 {
        width: 87%;
    }
    .w-100 {
        width: 100%;
    }

    // Height
    .h-25px {
        height: 25px
    }
    .h-75 {
        height: 75% !important;
    }
    .h-100vh {
        height: 100vh
    }
    .h-auto {
        height: auto !important;
    }
    .full-height {
        min-height: 100vh
    }

    // Font Weight
    .font-weight-bold {
        font-weight: bold;
    }
    // Font Color 
    .text-white{
        color: white !important;
    }
    .text-dark{
        color: #262626 !important;
    }
    .text-danger {
        color: #dc3545 !important
    }
    .text-muted {
        color: rgb(136, 153, 166) !important
    }

    .text-left {
        text-align: left !important;
    }

    // Background 
    .bg-groupomania {
        background-color: rgb(21, 32, 43) !important;
    }
    
    // Shadow
    .shadow-white {
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, .3) !important;
    }

    // Index 
    .index-1 {
        z-index: 1
    }

    // Divider
    .divider{
        position:relative;
        border:0;
        width:100%
    }
    .divider-fade:before{
        content:"";
        display:block;
        width:80%;
        position:relative;
        top:0;
        left:50%;
        -webkit-transform:translateX(-50%);
        -ms-transform:translateX(-50%);
        transform:translateX(-50%);
        height:1px;
        background:-o-radial-gradient(center,ellipse,#dee4ef 0,hsla(0,0%,100%,0) 75%);
        background:radial-gradient(ellipse at center,#dee4ef 0,hsla(0,0%,100%,0) 75%)
    }
    .divider-fade.divider-dark:before{
        background:-o-radial-gradient(center,ellipse,hsla(0,0%,100%,.2) 0,rgba(31,45,61,0) 75%);
        background:radial-gradient(ellipse at center,hsla(0,0%,100%,.2) 0,rgba(31,45,61,0) 75%)
    }
    // Flex
    .flex-column {
        flex-direction: column !important;
    }
    // Align Items
    .align-items-start {
        align-items: flex-start !important;
    }
    .align-items-center {
        align-items: center !important;
    }
    // Justify Content
    .justify-content-between {
        justify-content: space-between !important
    }
    .img {
        border-radius: 15px;
    }
    .ui.button {
        padding: .8em 1.5em .8em !important
    }
    .avatar {
        position: relative;
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .avatar.avatar-profil {
        width: 90px !important;
        height: 90px !important;
    }
    .avatar {
        width: 50px !important;
        height: 50px !important;
    }
    @media screen and (max-width: 1278px) {
        .responsive__avatar-form {
            width: 70px;
            height: 70px;
        }
    }
    @media screen and (max-width: 1024px) {
        .ui.modal, .responsive__card-user, .responsive__card-content, .responsive__card-actions, .responsive__form {
            width: 450px !important;
        }
        .img {
            width: 450px !important;
            height: 450px !important;
        }
    }
    @media screen and (max-width: 500px) {
        .ui.modal, .responsive__card-user, .responsive__card-content, .responsive__card-actions, .responsive__form {
            width: 350px !important;
        }
        .img {
            width: 350px !important;
            height: 350px !important;
        }
    }
    @media screen and (max-width: 400px) {
        .responsive__card-user, .responsive__card-content, .responsive__card-actions {
            width: 250px !important; 
        }
        .ui.modal {
            width: 320px !important;
        }
        .responsive__form {
            width: 100%
        }
        .img {
            width: 250px !important;
            height: 250px !important;
        }
    }
    .ui.modal {
        width: 600px 
    }
</style>
