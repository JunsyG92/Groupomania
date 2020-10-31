<template>
    <sui-form method="post" v-on:submit.prevent="createPost" class="post-center py-5 mx-auto responsive__form" id="post_status">
        <div class="d-flex">
            <h2 is="sui-header">
                <div class="avatar mx-auto responsive__avatar-form" :style="{backgroundImage: 'url(' + imageCurrentUser + ')'}"></div>
            </h2>
            <sui-form-field class="w-100 ml-3">
                <textarea id="createpost" rows="1" class="bg-transparent border-0 w-87 p-3 f-20 height-base" placeholder="Quoi de beau ?" name="content" v-on:keydown="EnterText()" v-model="content" size="280"></textarea>
            </sui-form-field>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <div class="wrapper d-flex align-items-center">
                <input type="file" id="file-input" v-on:change="EnterText()" @change="inputOnChange($event)" name="imageUrl" enctype="multipart/form-data"/>
                <label for="file-input" class="d-flex align-items-center">
                    <i class="file image outline icon m-0 custom-input-file d-flex align-items-center" style="height: 45px !important; width: 45px !important"></i>
                    <span></span>
                </label>
                <i class="close icon remove remove-post text-white" @click="onRemoveFile"></i>
            </div>
            <PostButton name="Poster" v-bind="{stateButton}" id="input__form-post"/>
        </div>
        <Alert title="Hmm..." v-bind:message="error" typeMessage="error"/>
    </sui-form>
</template>

<script>
import jwt from "jsonwebtoken";
import PostButton from "../Button/PostButton.vue";
import Alert from "../Alert/Alert.vue";


export default {
    data () {
        return {
            stateButton: false,
            content: "",
            imageName: "",
            image: null,
            error: "",
            imageCurrentUser: ""
        }
    },
    components: {
        PostButton,
        Alert
    },
    methods: {
        EnterText () {
            var file = document.getElementById('file-input');
            if (this.content != ""  || file.value) {
                this.stateButton = true
            } else {
                this.stateButton = false
            }
        },
        inputOnChange (event) {
            var file = document.getElementById('file-input');
            var label = file.nextSibling;
            var labelText = label.querySelector('span');
            var labelRemove = document.querySelector('i.remove-post');
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
            var file = document.getElementById('file-input');
            var label = file.nextSibling;
            var labelText = label.querySelector('span');
            var labelRemove = document.querySelector('i.remove-post');
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
              .then(res => {
                this.$store.commit('CREATE_POST', res.data)
                window.location.reload()
                // console.log(res)
              })
              .catch(err => {
                if (err.response.status === 403) {
                  this.error = "Une erreur est survenue"
                }
                if (err.response.status === 500) {
                  this.error = "Erreur serveur"
                }
              })
        },
    },
    mounted () {
        var textarea = document.getElementById('createpost');
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

    .responsive__form {
        width: 600px;
    }
    .responsive__avatar-form {
        width: 70px;
        height: 70px;
        display: block;
    }

    .align-items-center {
        align-items: center;
    }
    .bg-transparent {
        background-color: transparent !important;
    }
    .border-0 {
        border: none !important;
    }
    textarea {
        resize: none !important;
    }
    .f-20 {
        font-size: 20px !important;
    }
    .height-base {
        height: 63px;
    }
    .text-right {
        text-align: right;
    }
    .custom-input-file{
        -o-text-overflow:ellipsis;
        text-overflow:ellipsis;
        white-space:nowrap;
        cursor:pointer;
        display:flex;
        align-items: center;
        justify-content: center;
        overflow:hidden;
        width: 45px;
        height: 45px !important;
        border-radius: 50px;
        color: rgb(0, 150, 255) !important;
        background-color: transparent;
        outline:none;
        font-size: 20px;
        transition-duration: 200ms;
        margin-left: 80px
    }
    .custom-input-file:hover,.custom-input-file.has-focus{
        width: 45px;
        height: 45px !important;
        display: flex;
        background-color: rgba(0, 150, 255, 0.3);
        transition-duration: 200ms;
    }
    .wrapper{
        text-align:center;
    }
    .wrapper #file-input{
        display:none;
    }

    .wrapper label[for='file-input'] *{
        vertical-align:middle;
        cursor:pointer;
    }

    .wrapper label[for='file-input'] span{
        margin-left: 10px
    }

    .wrapper i.remove-post{
        vertical-align:middle;
        margin-left: 5px;
        cursor:pointer;
        display:none;
    }
    #input__form-post {
        margin-right: 0!important
    }
</style>