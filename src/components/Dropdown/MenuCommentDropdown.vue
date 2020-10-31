<template>
    <div>
        <sui-dropdown class="text-white h-25px">
            <sui-dropdown-menu class="bg-groupomania shadow-white">

                <sui-dropdown-item class="text-white" @click="modifyCommentModal"><sui-icon name="edit outline" />Modifier</sui-dropdown-item>
                <sui-dropdown-item class="text-danger" @click="DeleteComment"><sui-icon name="trash" />Supprimer</sui-dropdown-item>

            </sui-dropdown-menu>
        </sui-dropdown>


        <sui-modal v-model="open" class="bg-modal">

            <sui-form method="post" v-on:submit.prevent="modifyCommentForm" class="post-center py-5 px-5" v-if="!isAdmin">
                <div class="d-flex">
                    <h2 is="sui-header">
                        <div class="avatar current-user__image mx-auto" :style="{backgroundImage: 'url(' + imageUser + ')'}"></div>
                    </h2>
                    <sui-form-field class="w-100 ml-3">
                        <textarea id="modifyPostByModal" rows="1" class="bg-transparent border-0 w-87 p-3 f-20 height-base" name="content" v-on:keydown="EnterText()" v-model="content" size="280"></textarea>
                    </sui-form-field>
                </div>
                <div class="d-flex justify-content-end mt-5">
                    <PostButton name="Poster" v-bind="{stateButton}"/>
                </div>
            </sui-form>


            <sui-form v-else method="post" v-on:submit.prevent="moderateComment" class="post-center py-5 px-5">
                <div class="d-flex">
                    <h2 is="sui-header">
                        <div class="avatar current-user__image mx-auto" :style="{backgroundImage: 'url(' + imageUser + ')'}"></div>
                    </h2>
                    <sui-form-field class="w-100 ml-3">
                        <textarea id="modifyPostByModal" rows="1" class="bg-transparent border-0 w-87 p-3 f-20 height-base" name="content" v-on:keydown="EnterText()" v-model="content" size="280" placeholder="Modérer le contenu"></textarea>
                    </sui-form-field>
                </div>
                <div class="d-flex justify-content-end mt-5">
                    <PostButton name="Poster" v-bind="{stateButton}" />
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
    import jwt from "jsonwebtoken";
    export default {
        data () {
            return {
                stateButton: false,
                open: false,
                message: null,
                content: "",
                isAdmin: null
            }
        },
        components: {
            PostButton,
            Alert
        },
        props: {
            comment_id: Number,
            first_name: String,
            last_name: String,
            imageUser: String,
            comment: String,
            comment_create: String
        },
        beforeMount () {
            this.content = this.$props.comment
            if(localStorage.getItem('isAdmin')) {
                this.isAdmin = localStorage.getItem('isAdmin')
            }
        },
        mounted () {
            var textarea = document.getElementById('modifyPostByModal');
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
            DeleteComment () {
                this.$axios
                  .delete(`/post/${this.$route.params.post_id}/comment/${this.$props.comment_id}`)
                  .then(() => {
                    window.location.reload()
                  })
                  .catch(err => {
                    console.log(err)
                  })
            },
            modifyCommentModal () {
                this.open = !this.open;
            },
            EnterText () {
                if (this.content) {
                    this.stateButton = true
                } else {
                    this.stateButton = false
                }
            },
            moderateComment () {
                if (localStorage.getItem('isAdmin')) {
                  this.$axios
                    .put(`/admin/moderate/comment/${this.$route.params.post_id}/${this.$props.comment_id}`, {
                        comment: this.content
                    })
                    .then(() => {
                        window.location.reload()
                    })
                    .catch(err => {
                        if (err.response.status === 403) {
                        this.message = "Une erreur est survenue lors de la modification de votre commentaire... Éviter d'utiliser les guillemets simple"
                        }
                    })
                }
            },
            modifyCommentForm () {
                var token = sessionStorage.getItem('token');
                var user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
                this.$axios
                  .put(`/post/${this.$route.params.post_id}/comment/${this.$props.comment_id}`, {
                      user_id: user_id.userId,
                      content: this.content
                  })
                  .then(() => {
                    window.location.reload()
                  })
                  .catch(err => {
                    if (err.response.status === 403) {
                      this.message = "Une erreur est survenue lors de la modification de votre commentaire... Éviter d'utiliser les guillemets simple"
                    }
                  })

            }
        }
    }
</script>

<style>

</style>