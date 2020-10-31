<template>
    <div>
        <sui-dropdown class="text-white h-25px">
            <sui-dropdown-menu class="bg-groupomania shadow-white">

                <sui-dropdown-item class="text-white" @click="modifyPostModal"><sui-icon name="edit outline" />Modifier</sui-dropdown-item>
                <sui-dropdown-item class="text-danger" @click="DeletePost"><sui-icon name="trash" />Supprimer</sui-dropdown-item>

            </sui-dropdown-menu>
        </sui-dropdown>

        <sui-modal v-model="open" class="bg-modal">

            <sui-form method="post" v-on:submit.prevent="modifyPostForm" class="post-center py-5 px-5" v-if="!isAdmin">
                <div class="d-flex">
                    <h2 is="sui-header">
                        <div class="avatar mx-auto" :style="{backgroundImage: 'url(' + imageCurrentUser + ')'}"></div>
                    </h2>
                    <sui-form-field class="w-100 ml-3">
                        <textarea :id="idTextAreaUpdatePost" rows="1" class="bg-transparent border-0 w-87 p-3 f-20 height-base" name="content" v-on:keydown="EnterText()" v-model="content_post" size="280"></textarea>
                    </sui-form-field>
                </div>
                
                <div class="d-flex justify-content-end mt-5">
                    <PostButton name="Poster" v-bind="{stateButton}"/>
                </div>
            </sui-form>

            <sui-form v-else method="post" v-on:submit.prevent="moderatePost" class="post-center py-5 px-5">
                <div class="d-flex">
                    <h2 is="sui-header">
                        <div class="avatar mx-auto" :style="{backgroundImage: 'url(' + imageCurrentUser + ')'}"></div>
                    </h2>
                    <sui-form-field class="w-100 ml-3">
                        <textarea :id="idTextAreaUpdatePost" rows="1" class="bg-transparent border-0 w-87 p-3 f-20 height-base" name="content" v-on:keydown="EnterText()" v-model="content_post" size="280" placeholder="Modérer le post"></textarea>
                    </sui-form-field>
                </div>
                <div v-if="imageUrl" class="img mx-auto" :style="{backgroundImage: 'url(' + imageUrl + ')'}"></div>
                <div class="d-flex justify-content-end mt-5">
                    <PostButton name="Poster" v-bind="{stateButton}"/>
                </div>
            </sui-form>
            <div class="post-center w-75 mx-auto">
                <Alert v-if="message" title="Hmm..." :message="message" typeMessage="error"/>
            </div>

        </sui-modal>

    </div>
</template>

<script>
    import PostButton from "../Button/PostButton.vue";
    import Alert from "../Alert/Alert.vue";
    export default {
        name: "MenuPostDropdown",
        data() {
            return {
                open: false,
                stateButton: false,
                message: null,
                content_post: "",
                imageCurrentUser: "",
                isAdmin: null,
                idTextAreaUpdatePost: ""
            }
        },
        components: {
            PostButton,
            Alert
        },
        props: {
            post_id: Number,
            content: String,
            first_name: String,
            last_name: String,
            post_create: String,
            imageUrl:  String,
            imageUser: String
        },
        beforeMount () {
            this.content_post = this.$props.content
            this.image = this.$props.imageUrl
            this.imageCurrentUser = this.$props.imageUser
            if(localStorage.getItem('isAdmin')) {
                this.isAdmin = localStorage.getItem('isAdmin')
            }
        },
        mounted () {
            var textarea = document.getElementById(this.idTextAreaUpdatePost);
            textarea.addEventListener('keydown', autosize);
            function autosize(){
                var el = this;
                setTimeout(function(){
                    el.style.cssText = 'height:auto;';
                    el.style.cssText = 'height:' + el.scrollHeight + 'px';
                },0);
                }
        },
        methods: {
            DeletePost () {
                this.$axios
                  .delete(`/post/${this.$props.post_id}`)
                  .then(() => {
                      var location = window.location.pathname
                      if(location.includes('post')) {
                          window.history.back()
                      } else {
                          window.location.reload()
                      }
                  })
                  .catch(err => {
                    console.log(err)
                  })
            },
            modifyPostForm () {
                this.$axios
                  .put(`/post/${this.$props.post_id}`, {
                      content: this.content_post
                  })
                  .then(() => {
                      window.location.reload()
                  })
                  .catch(err => {
                    if (err.response.status === 403) {
                        this.message = "Une erreur est survenue lors de la modification de votre post... Éviter d'utiliser les guillemets simple"
                    } 
                  })
            },
            moderatePost() {
                if (localStorage.getItem('isAdmin')) {
                  this.$axios
                    .put(`/admin/moderate/post/${this.$props.post_id}`, {
                        content: this.content_post
                    })
                    .then(() => {
                        window.location.reload()
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }
            },
            modifyPostModal () {
                this.open = !this.open;
            },
            EnterText () {
                var textarea = document.getElementById(this.idTextAreaUpdatePost).value.trim();
                if (textarea.length > 1) {
                    this.stateButton = true
                } else {
                    this.stateButton = false
                }
            },
        },
        created() {
            this.idTextAreaUpdatePost =  'updatePost' + String(this.$props.post_id)
        }
    }
</script>

<style lang="scss">
</style>