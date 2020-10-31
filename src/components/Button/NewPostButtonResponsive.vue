<template>
    <div class="newPostButtonResponsive">
        <sui-button @click="toggleNewPost" class="newPostButton"><i class="paper plane icon iconResonsive mx-auto"></i></sui-button>
        <sui-modal v-model="open" class="bg-modal">
            <sui-form method="post" v-on:submit.prevent="createPost" class="post-center py-5 px-5" id="post_status">
                <div class="d-flex">
                    <h2 is="sui-header">
                        
                <div class="avatar current-user__image mx-auto" :style="{backgroundImage: 'url(' + imageCurrentUser + ')'}"></div>
                    </h2>
                    <sui-form-field class="w-100 ml-3">
                        <textarea id="createNewPostByModalResponsive" rows="1" class="bg-transparent border-0 w-87 p-3 f-20 height-base" placeholder="Quoi de beau ?" name="content" v-on:keydown="EnterText()" v-model="content" size="280"></textarea>
                    </sui-form-field>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                <div class="wrapper d-flex align-items-center">
                    <input type="file" id="file-input-modal-responsive" v-on:change="EnterText()" @change="inputOnChangePost($event)" name="imageUrl" enctype="multipart/form-data"/>
                    <label for="file-input-modal-responsive" class="d-flex align-items-center">
                        <i class="file image outline icon m-0 custom-input-file d-flex align-items-center" style="height: 45px !important; width: 45px !important"></i>
                        <span></span>
                    </label>
                    <i class="close icon remove remove-modal-responsive text-white" @click="onRemoveFile"></i>
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
                var file = document.getElementById('file-input-modal-responsive');
                if (this.content || file.value) {
                    this.stateButton = true
                } else {
                    this.stateButton = false
                }
            },
            inputOnChangePost (event) {
                var file = document.getElementById('file-input-modal-responsive');
                var label = file.nextSibling;
                var labelText = label.querySelector('span');
                var labelRemove = document.querySelector('i.remove-modal-responsive');
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
                var file = document.getElementById('file-input-modal-responsive');
                var label = file.nextSibling;
                var labelText = label.querySelector('span');
                var labelRemove = document.querySelector('i.remove-modal-responsive');
                file.value = "";
                this.image = null;
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
            var textarea = document.getElementById('createNewPostByModalResponsive');
            textarea.addEventListener('keydown', autosize);
            function autosize(){
                var el = this;
                setTimeout(function(){
                    el.style.cssText = 'height:auto;';
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
    @media screen and (max-width: 1278px) {
        .iconResonsive {
            display: block !important;
            margin: 0 !important;
            font-size: 2rem !important;
            padding-right: 4px;
            padding-bottom: 1px; 
        }
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
    .wrapper #file-input-modal-responsive{
        display:none;
    }

    .wrapper label[for='file-input-modal-responsive'] *{
        vertical-align:middle;
        cursor:pointer;
    }

    .wrapper label[for='file-input-modal-responsive'] span{
        margin-left: 10px
    }

    .wrapper i.remove-modal-responsive{
        vertical-align:middle;
        margin-left: 5px;
        cursor:pointer;
        display:none;
    }
</style>