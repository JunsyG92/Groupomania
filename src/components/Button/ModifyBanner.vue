<template>
    <sui-dimmer-dimmable @mouseenter="cardOneActive = true" @mouseleave="cardOneActive = false">
        <div class="banner" :style="{backgroundImage: 'url(' + bannerUser + ')'}"></div>   
        <sui-dimmer blurring :active="cardOneActive" @click="updateUserBanner" class="dimmer__banner">
            <i class="camera retro icon"></i> 
        </sui-dimmer>
        <sui-modal v-model="open" class="bg-modal__identity">

            <div class="post-center py-5 text-center w-50 mx-auto">
                <i class="images outline icon display-1"></i>
                <h3 class="text-white ">Une nouvelle bannière pour un nouveau style !</h3>
                <p class="py-5">Vous pouvez modifier l'image de votre bannière très facilement.</p>
                <sui-form v-on:submit.prevent="updateBanner">
                    <div class="wrapper d-flex align-items-center justify-content-center">
                        <input type="file" id="file-input-banner" @change="inputOnChange($event)" name="imageUrl" enctype="multipart/form-data"/>
                        <label for="file-input-banner" class="d-flex align-items-center">
                            <i class="file image outline icon icon__edit icon m-0 d-flex align-items-center" style="height: 45px !important; width: 45px !important"></i>
                            <span></span>
                        </label>
                        <i class="close icon remove-banner" @click="onRemoveFile"></i>
                    </div>
                    <div class="d-flex justify-content-around py-5">
                        <sui-button v-if="!loading" positive fluid content="Mettre à jour" type="submit"/>
                        <sui-button v-else loading fluid positive content="Loading" />
                        <sui-button fluid content="Non merci" type="button" @click="updateUserBanner" style="background: transparent; border: none; color;" class="text-white"/>
                    </div>
                </sui-form>
            </div>
            
        </sui-modal>
    </sui-dimmer-dimmable>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
    data () {
        return {
            bannerUser: "",
            cardOneActive: false,
            cardTwoActive: false,
            open: false,
            image: null,
            message: null,
            loading: false
        }
    },
    created() {
        let bannerUser = localStorage.getItem('banner')
        this.bannerUser = bannerUser;
    },
    methods: {
        updateBanner () {
            var token = sessionStorage.getItem('token');
            var user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")

            const formData = new FormData();
            formData.append("image", this.image);

            this.$axios
              .put(`/user/banner/${user_id.userId}`, formData)
              .then(res => {
                localStorage.setItem('banner', res.data.bannerUser)
                window.location.reload()
              })
              .catch(err => {
                  this.message = err
              })
        },
        updateUserBanner() {
            this.open = !this.open
        },
        inputOnChange (event) {
            var file = document.getElementById('file-input-banner');
            var label = file.nextSibling;
            var labelText = label.querySelector('span');
            var labelRemove = document.querySelector('i.remove-banner');
            var labelDefault = labelText.textContent;
            var fileName = file.value.split( '\\' ).pop();

            if( fileName ){
                labelText.textContent = fileName;
                this.imageName = fileName;
                this.image = event.target.files[0]
                labelRemove.classList.add("d-block");
            } else {
                labelText.textContent = labelDefault;
                labelRemove.classList.remove("d-block");
            }
        },
        onRemoveFile () {
            var file = document.getElementById('file-input-banner');
            var label = file.nextSibling;
            var labelText = label.querySelector('span');
            var labelRemove = document.querySelector('i.remove-banner');
            var labelDefault = labelText.textContent;
            file.value = "";
            labelText.textContent = labelDefault;
            labelRemove.classList.remove("d-block");
        },
    }

}
</script>

<style lang="scss">
    .banner {
        width: 100%;
        height: 300px;
        background-color: #cecece;
        position: absolute;
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .icon__edit {
        font-size: 25px !important;
    }
    .ui.dimmer__banner {
        border: 1.2px solid rgba(100, 100, 100, 0.85);
        animation-duration: .5s;
        background-color: rgba(100, 100, 100, 0.85);
        cursor: pointer;
        height: 300px;
    }
    .dimmed.dimmable > .ui.animating.dimmer, .dimmed.dimmable > .ui.visible.dimmer, .ui.active.dimmer {
        transition-delay: .2s;
    }
    .wrapper{
        text-align:center;
    }
    .wrapper #file-input-banner{
        display:none;
    }

    .wrapper label[for='file-input-banner'] *{
        vertical-align:middle;
        cursor:pointer;
    }

    .wrapper label[for='file-input-banner'] span{
        margin-left: 10px
    }

    .wrapper i.remove-banner{
        vertical-align:middle;
        margin-left: 5px;
        cursor:pointer;
        display:none !important;
    }
    .camera.retro.icon {
        font-size: 20px !important;
    }
    .dimmer__banner.ui.dimmer.active {
        z-index: 980;
    }
</style>