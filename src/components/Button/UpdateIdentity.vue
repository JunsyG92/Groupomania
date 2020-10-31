<template>
    <div>
        <sui-button @click="toggleModalIdentity"  class="update__identity">Modifier votre identité</sui-button>
        <sui-modal v-model="open" class="bg-modal__identity">

            <div class="post-center py-5 text-center w-75 mx-auto">
                <i class="user circle icon display-1"></i>
                <h3 class="text-white ">Besoin d'une nouvelle identité ?</h3>
                <p class="py-5">Modifier votre identité afin que vos collègues puissent vous retrouver plus facilement.</p>
                <sui-form v-on:submit.prevent="updateIdentity">
                    <sui-form-field>
                        <label class="text-white text-left">Prénom</label>
                        <input v-model="first_name" :placeholder="first_name" type="text"/>
                    </sui-form-field>
                    <sui-form-field>
                        <label class="text-white text-left">Nom</label>
                        <input v-model="last_name" :placeholder="last_name" type="text"/>
                    </sui-form-field>
                    <div class="d-flex justify-content-around py-5">
                        <sui-button v-if="!loading" positive fluid content="Mettre à jour" type="submit"/>
                        <sui-button v-else loading fluid positive content="Loading" />
                        <sui-button fluid content="Non merci" type="button" @click="toggleModalIdentity" style="background: transparent; border: none; color;" class="text-white"/>
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
                first_name: "",
                last_name: "",
                open : false,
                message: "",
                loading: false
            }
        },
        methods: {
            toggleModalIdentity () {
                this.open = !this.open;
            },
            updateIdentity () {
                var token = sessionStorage.getItem('token');
                var user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
                this.loading = true;
                this.$axios
                  .put(`/user/identity/${user_id.userId}`, {
                      first_name: this.first_name,
                      last_name: this.last_name
                  })
                  .then(() => {
                      this.message = "Vos nouvelles informations sont mis à jour."
                      localStorage.setItem('first_name', this.first_name)
                      localStorage.setItem('last_name', this.last_name)
                      setTimeout(() => {
                          this.loading = false;
                          this.open = false
                          window.location.reload()
                      }, 1000);                      
                  })
                  .catch(() => {
                      this.message = "Une erreur est survenue"
                    // console.log(err)
                  })
            }
        },
        mounted () {
            this.first_name = localStorage.getItem('first_name')
            this.last_name = localStorage.getItem('last_name')
        }
    }

</script>

<style lang="scss">
    .update__identity{
        background-color: rgb(0, 150, 255) !important;
        border: none !important;
        width: 200px;
        padding: 10px 15px;
        border-radius: 50px !important;
        color: white !important;
        height: 50px;
        transition-duration: 200ms;
        margin-left: 20px !important;
        margin-right: 20px !important;
        margin-top: 20px !important;
    }
    .bg-modal__identity .ui.modal{
        background-color: rgb(0, 130, 255) !important;
        color: white;
    }
</style>