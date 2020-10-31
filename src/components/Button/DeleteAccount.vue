<template>
    <div>
        <sui-button @click="toggleDeleteAccount" class="delete__account">Supprimer le compte</sui-button>
        <sui-modal v-model="open" class="bg-modal__delete">

            <div class="post-center py-5 text-center w-75 mx-auto">
                <i class="exclamation triangle icon display-1"></i>
                <h3 class="text-white ">Devrions-nous arrêter maintenant ?</h3>
                <p class="py-5">Toutes vos données seront effacées. Votre nom d'utilisateur sera accessible à tous.</p>
                <p>Êtes-vous sûr de vouloir poursuivre cette action ?</p>
                <div class="d-flex justify-content-around">
                    <sui-button v-if="!loading" fluid content="Supprimer le compte" type="button" @click="deleteUser" />
                    <sui-button v-else loading fluid content="Loading" />
                    <sui-button fluid content="Non merci" type="button" @click="toggleDeleteAccount" style="background: transparent; border: none; color;" class="text-white"/>
                </div>
            </div>

        </sui-modal>
    </div>
</template>

<script>
import jwt from "jsonwebtoken";

    export default {
        data () {
            return {
                open : false,
                error: "",
                loading: false
            }
        },
        methods: {
            toggleDeleteAccount () {
                this.open = !this.open;
            },
            deleteUser () {
                var token = sessionStorage.getItem('token');
                var user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
                this.loading = true;
                
                this.$axios
                .delete(`/user/${user_id.userId}`)
                .then(() => {
                    sessionStorage.removeItem('token')
                    localStorage.removeItem('image')
                    localStorage.removeItem('first_name')
                    localStorage.removeItem('last_name')
                    localStorage.removeItem('banner')
                    if (localStorage.getItem('isAdmin')) {
                      localStorage.removeItem('isAdmin')
                    }
                    this.loading = false;
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }

</script>

<style lang="scss">
    .delete__account{
        background-color: #FF5630 !important;
        border: none !important;
        width: 250px;
        padding: 10px 15px;
        border-radius: 50px !important;
        color: white !important;
        height: 50px;
        transition-duration: 200ms;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px !important;
    }
    @media screen and (max-width: 1278px) {
        .delete__account{
            padding: 0px;
            margin-left: 0px;
            margin-right: 0px;
        }
    }
    .bg-modal__delete .ui.modal{
        background-color: #ff3743 !important;
        color: white;
    }
</style>