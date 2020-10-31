<template>
<div>
  <ModifyBanner />
  <div class="w-75 mx-auto" style="padding-top: 240px; margin-bottom: 120px">
    <section class="header">
        <h1 is="sui-header" icon text-align="center">
            <div class="mx-auto" style="width: 90px;">   
                <ModifyPicture />
            </div>
            <sui-header-content class="text-white mt-3">{{ fullname }}</sui-header-content>
        </h1>
    </section>
    <section class="py-5 text-center__responsive">
        <h2 class="text-white font-weight-bold">Identité</h2>
        <p>Vous pouvez modifier votre identité pour qu'on puisse vous retrouver plus facilement.</p>
        <UpdateIdentity />
    </section>
    <section class="py-5 text-center__responsive">
        <h2 class="text-white font-weight-bold">Mot de passe</h2>
        <p>Besoin d'un nouveau mot de passe ? Modifier-le ici.</p>
        <UpdatePassword />
    </section>
    <section class="py-5 text-center__responsive">
        <h2 class="text-white font-weight-bold">Supprimer le compte</h2>
        <p>La suppression de votre compte est irréversible et peut affecter les activités passées.</p>
        <DeleteAccount />
    </section>
  </div>
</div>
</template>

<script>
import DeleteAccount from "../components/Button/DeleteAccount";
import UpdateIdentity from "../components/Button/UpdateIdentity";
import UpdatePassword from "../components/Button/UpdatePassword";
import ModifyPicture from "../components/Button/ModifyPicture";
import ModifyBanner from "../components/Button/ModifyBanner";

export default {
    data () {
        return {
            first_name: "",
            last_name: "",
            bannerUser: ""
        }
    },
    components: {
        DeleteAccount,
        UpdateIdentity,
        UpdatePassword,
        ModifyPicture,
        ModifyBanner
    },
    created() {
        let first_name = localStorage.getItem('first_name')
        let last_name = localStorage.getItem('last_name')
        let bannerUser = localStorage.getItem('banner')
        this.first_name = first_name;
        this.last_name = last_name;
        this.bannerUser = bannerUser;
    },
    computed: {
        fullname: function() {
            return this.first_name + ' ' + this.last_name
        }
    },
}
</script>

<style lang="scss">
    @media screen and (max-width: 1278px) {
        .text-center__responsive{
            text-align: center;
        }
    }
</style>