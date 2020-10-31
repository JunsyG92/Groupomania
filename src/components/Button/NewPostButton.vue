<template>
    <div>
        <sui-button @click="toggleNewPost" class="newPostButton">Poster</sui-button>
        <sui-modal v-model="open" class="bg-modal">
            <sui-form method="post" v-on:submit.prevent="createPost" class="post-center py-5 px-5" id="post_status">
                <div class="d-flex">
                    <h2 is="sui-header">
                        
                <div class="avatar current-user__image mx-auto" :style="{backgroundImage: 'url(' + imageCurrentUser + ')'}"></div>
                    </h2>
                    <sui-form-field class="w-100 ml-3">
                        <textarea id="createNewPostByModal" rows="1" class="bg-transparent border-0 w-87 p-3 f-20 height-base" placeholder="Quoi de beau ?" name="content" v-on:keydown="EnterText()" v-model="content" size="280"></textarea>
                    </sui-form-field>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                <div class="wrapper d-flex align-items-center">
                    <input type="file" id="file-input-modal" v-on:change="EnterText()" @change="inputOnChangePost($event)" name="imageUrl" enctype="multipart/form-data"/>
                    <label for="file-input-modal" class="d-flex align-items-center">
                        <i class="file image outline icon m-0 custom-input-file d-flex align-items-center" style="height: 45px !important; width: 45px !important"></i>
                        <span></span>
                    </label>
                    <i class="close icon remove remove-modal text-white" @click="onRemoveFile"></i>
                </div>
                    <div>
                        <PostButton name="Poster" v-bind="{stateButton}" id="test"/>
                    </div>
                </div>
                <Alert title="Hmm..." :message="message" typeMessage="error"/>
            </sui-form>
        </sui-modal>
    </div>
</template>

<script>
import jwt from "jsonwebtoken";
import PostButton from "../Button/PostButton.vue";
import Alert from "../Alert/Alert.vue";
    export default {
        components: {
            PostButton,
            Alert
        },
        data () {
            return {
                open : false,
                stateButton: false,
                content: "",
                imageName: "",
                image: null,
                message: null,
                imageCurrentUser: ""
            }
        },
        methods: {
            toggleNewPost () {
                this.open = !this.open;
            },

            EnterText () {
                var file = document.getElementById('file-input-modal');
                if (this.content || file.value) {
                    this.stateButton = true
                } else {
                    this.stateButton = false
                }
            },
            inputOnChangePost (event) {
                var file = document.getElementById('file-input-modal');
                var label = file.nextSibling;
                var labelText = label.querySelector('span');
                var labelRemove = document.querySelector('i.remove-modal');
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
                var file = document.getElementById('file-input-modal');
                var label = file.nextSibling;
                var labelText = label.querySelector('span');
                var labelRemove = document.querySelector('i.remove-modal');
                file.value = "";
                this.image = null
                labelText.textContent = "";
                labelRemove.classList.remove("d-block");
                this.content ? "" : this.stateButton = false
            },
            createPost () {
                var token = sessionStorage.getItem('token');
                var user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
                
                const formData = new FormData();

                formData.append("content", this.content);
                if(this.image != null) {
                    formData.append("image", this.image);
                } else {
                    formData.append("image", "");
                }
                formData.append("user_id", user_id.userId);

                this.$axios
                .post('/post/', formData)
                .then(() => {
                    window.location.reload()
                })
                .catch(err => {
                  if (err.response.status === 403) {
                    this.error = "Une erreur est survenue"
                  }
                  if (err.response.status === 500) {
                    this.error = "Erreur serveur"
                  }
                })
            }
        },
        mounted () {
            var textarea = document.getElementById('createNewPostByModal');
            textarea.addEventListener('keydown', autosize);
            function autosize(){
                var el = this;
                setTimeout(function(){
                    el.style.cssText = 'height:auto;';
                    // for box-sizing other than "content-box" use:
                    // el.style.cssText = '-moz-box-sizing:content-box';
                    el.style.cssText = 'height:' + el.scrollHeight + 'px';
                },0);
            }
        },
        created() {
            let image = localStorage.getItem('image')
            this.imageCurrentUser = image; 
        }
    }
</script>

<style lang="scss">
    .newPostButtonResponsive {
        position: relative;
        bottom: 32px;
    }
    .iconResonsive {
        display: none !important;
    }
    .textButton {
        display: block;
    }
    .newPostButton {
        background-color: rgb(0, 150, 255) !important;
        border-bottom: 2.5px solid rgb(0, 100, 155) !important;
        border-top: 2px solid rgb(0, 220, 255) !important;
        border: none;
        width: 100%;
        padding: 10px 15px;
        border-radius: 50px !important;
        color: white !important;
        height: 50px;
        transition-duration: 200ms;
        margin-left: 20px !important;
        margin-right: 20px !important;
        margin-top: 20px !important;
            box-shadow: 0px 0px 20px rgba(0, 130, 255, .5) !important;
    }
    .newPostButton:hover {
        transition-duration: 200ms !important;
        background-color: rgb(0, 130, 255) !important;
        box-shadow: 0px 0px 20px rgb(0, 130, 255) !important;
    }
    @media screen and (max-width: 1278px) {
        .iconResonsive {
            display: block !important;
            margin: 0 !important;
            font-size: 2rem !important;
            padding-right: 4px;
            padding-bottom: 1px; 
        }
        .textButton {
            display: none;
        }
        // .newPostButtonResponsive {

        // }
        .newPostButton {
            padding: 0;
            height: 70px;
            width: 70px;
            transition-duration: 200ms;
            margin: 0 !important;
            box-shadow: 0px 0px 20px rgba(0, 130, 255, .5) !important;
            transition: box-shadow 0.3s !important;
        }
        .newPostButton:hover {
            box-shadow: 0px 0px 20px rgb(0, 130, 255) !important;
            transition: box-shadow 0.3s !important;
        }
        .ui.button {
            padding:  0 !important;
        }
    }
    .wrapper{
        text-align:center;
    }
    .wrapper #file-input-modal{
        display:none;
    }

    .wrapper label[for='file-input-modal'] *{
        vertical-align:middle;
        cursor:pointer;
    }

    .wrapper label[for='file-input-modal'] span{
        margin-left: 10px
    }

    .wrapper i.remove-modal{
        vertical-align:middle;
        margin-left: 5px;
        cursor:pointer;
        display:none;
    }
</style>