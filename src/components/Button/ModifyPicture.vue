<template>
    <sui-dimmer-dimmable @mouseenter="cardOneActive = true" @mouseleave="cardOneActive = false">
        <div class="avatar avatar-profil current-user__image responsive__avatar-identity mx-auto" :style="{backgroundImage: 'url(' + imageCurrentUser + ')'}"></div>
        <sui-dimmer blurring :active="cardOneActive" @click="modalPicture" class="responsive__avatar-identity dimmer__picture">
            <i class="camera retro icon"></i> 
        </sui-dimmer>
        <sui-modal v-model="open" class="bg-modal__identity">
            
            <div class="post-center py-5 text-center w-50 mx-auto">
                <i class="id badge outline icon display-1"></i>
                <h3 class="text-white ">Montrez nous votre beauté !</h3>
                <p class="py-5">N'oubliez pas que c'est un reseau professionnel tout de même :)</p>
                <sui-form v-on:submit.prevent="updateAvatar">
                    <div class="wrapper d-flex align-items-center justify-content-center">
                        <input type="file" id="file-input-picture" @change="inputOnChange($event)" name="imageUrl" enctype="multipart/form-data"/>
                        <label for="file-input-picture" class="d-flex align-items-center">
                            <i class="file image outline icon icon__edit icon m-0 d-flex align-items-center" style="height: 45px !important; width: 45px !important"></i>
                            <span></span>
                        </label>
                        <i class="close icon remove-picture" @click="onRemoveFile"></i>
                    </div>
                    <div class="d-flex justify-content-around py-5">
                        <sui-button v-if="!loading" positive fluid content="Mettre à jour" type="submit"/>
                        <sui-button v-else loading fluid positive content="Loading" />
                        <sui-button fluid content="Non merci" type="button" @click="modalPicture" style="background: transparent; border: none; color;" class="text-white"/>
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
            imageCurrentUser: "",
            cardOneActive: false,
            cardTwoActive: false,
            open: false,
            imageName: "",
            image: null,
            message: null,
            loading: false
        }
    },
    created() {
        let image = localStorage.getItem('image')
        this.imageCurrentUser = image; 
    },
    methods: {
        updateAvatar () {
            var token = sessionStorage.getItem('token');
            var user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")

            const formData = new FormData();
            formData.append("image", this.image);

            this.$axios
              .put(`/user/avatar/${user_id.userId}`, formData)
              .then(res => {
                localStorage.setItem('image', res.data.imageUser)
                window.location.reload()
              })
              .catch(err => {
                  this.message = err
              })
        },
        modalPicture() {
            this.open = !this.open
        },
        inputOnChange (event) {
            var file = document.getElementById('file-input-picture');
            var label = file.nextSibling;
            var labelText = label.querySelector('span');
            var labelRemove = document.querySelector('i.remove-picture');
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
            var file = document.getElementById('file-input-picture');
            var label = file.nextSibling;
            var labelText = label.querySelector('span');
            var labelRemove = document.querySelector('i.remove-picture');
            var labelDefault = labelText.textContent;
            file.value = "";
            labelText.textContent = labelDefault;
            labelRemove.classList.remove("d-block");
        },
    }
}
</script>

<style lang="scss">
    .current-user__image {
        z-index: 990;
    }
    .responsive__avatar-form {
        width: 70px;
        height: 70px;
        display: block;
    }
    .filter {
        display: block;
        width: 8rem;
        height: 8rem;
        background-color: rgba(210, 210, 210, .3);
        border-radius: 100%;
    }
    .icon__edit {
        font-size: 25px !important;
    }
    .ui.dimmer__picture {
        border: 1.2px solid rgba(100, 100, 100, 0.85);
        border-radius: 50%;
        animation-duration: .5s;
        background-color: rgba(100, 100, 100, 0.85);
        cursor: pointer;
    }
    .dimmed.dimmable > .ui.animating.dimmer, .dimmed.dimmable > .ui.visible.dimmer, .ui.active.dimmer {
        transition-delay: .2s;
    }
    .wrapper{
        text-align:center;
    }
    .wrapper #file-input-picture{
        display:none;
    }

    .wrapper label[for='file-input-picture'] *{
        vertical-align:middle;
        cursor:pointer;
    }

    .wrapper label[for='file-input-picture'] span{
        margin-left: 10px
    }

    .wrapper i.remove-picture{
        vertical-align:middle;
        margin-left: 5px;
        cursor:pointer;
        display:none !important;
    }
    .camera.retro.icon {
        font-size: 20px !important;
    }
</style>