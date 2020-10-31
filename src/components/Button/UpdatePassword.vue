<template>
    <div>
        <sui-button @click="toggleModalPassword" class="update__password">Modifier votre mot de passe</sui-button>
        <sui-modal v-model="open" class="bg-modal__password">

            <div class="post-center py-5 text-center w-75 mx-auto">
                <i class="key icon display-1"></i>
                <h3 class="text-white ">Un problème avec votre mot de passe ?</h3>
                <p class="py-5">Choisissez un nouveau mot de passe.</p>
                  <sui-form v-on:submit.prevent="updatePassword">
                        <sui-form-field>
                            <label class="text-white text-left">Mot de passe</label>
                            <input v-model="password" placeholder="Nouveau mot de passe" type="password" />
                        </sui-form-field>
                        <div class="d-flex justify-content-around py-5">
                            <sui-button v-if="!loading" fluid positive content="Modifier le mot de passe" type="submit"/>
                            <sui-button v-else loading fluid positive content="Loading" />
                            <sui-button fluid content="Non merci" type="button" @click="toggleModalPassword" style="background: transparent; border: none; color;" class="text-white"/>
                        </div>
                  </sui-form>
            </div>

        </sui-modal>
    </div>
</template>

<script>
import jwt from "jsonwebtoken";
    export default {
        data () {
            return {
                password: "",
                open : false,
                message: null,
                loading: false
            }
        },
        methods: {
            toggleModalPassword () {
                this.open = !this.open;
            },
            c () {
                var token = sessionStorage.getItem('token');
                var user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
                this.loading = true;
                this.$axios
                  .put(`/user/password/${user_id.userId}`, {
                      password: this.password
                  })
                  .then(() => {
                      this.message = "Le mot de passe a bien été enregistré"
                      setTimeout(() => {
                          this.loading = false;
                          this.open = false
                          window.location.reload()
                      }, 1000)
                  })
                  .catch(() => {
                      this.message = "Une erreur est survenue"
                  })
            }
        }
    }

</script>

<style lang="scss">
    .update__password{
        background-color: rgb(0, 150, 255) !important;
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
        .update__password{
            padding: 0px;
            margin-left: 0px;
            margin-right: 0px;
        }
    }
    .bg-modal__password .ui.modal{
        background-color: rgb(0, 130, 255) !important;
        color: white;
    }
</style>