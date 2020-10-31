<template>
    <div>
        <div class="comment-active" @click="toggle">
            <i class="comment outline icon"></i>
            <span>{{ comments_number }}</span>
        </div>
        <sui-modal v-model="open" class="bg-modal">
            <sui-modal-content>
                <sui-card class="mx-auto w-100 post-center px-3">
                    <div class="d-flex align-items-center">
                        <sui-image :src="imageUser" shape="circular" size="mini" class="mr-3"/>
                        <router-link :to="'/profil/'+ user_id"><span class="font-weight-bold text-white">{{ first_name }} {{ last_name }}</span></router-link>
                    </div>

                    <sui-card-content class="border-0 post-center">
                        <p>{{ content }}</p>
                    </sui-card-content>
                </sui-card>

                <sui-form method="post" v-on:submit.prevent="createComment" class="post-center py-5">
                    <div class="d-flex">
                        <h2 is="sui-header">
                            <div class="avatar current-user__image mx-auto" :style="{backgroundImage: 'url(' + imageCurrentUser + ')'}"></div>
                        </h2>
                        <sui-form-field class="w-100 ml-3">
                            <textarea :id="idTextAreaComment" rows="1" class="bg-transparent border-0 w-87 p-3 f-20 height-base" placeholder="Poster votre réponse" v-model="commentValue" v-on:keydown="EnterText()"></textarea>
                        </sui-form-field>
                    </div>
                    <div class="text-right">
                        <PostButton
                          name="Commenter"
                          v-bind="{stateButton}"
                        />
                    </div>
                </sui-form>
            </sui-modal-content>
        </sui-modal>
    </div>
</template>

<script>
import PostButton from "./PostButton.vue";
import jwt from "jsonwebtoken";
export default {
    props: {
        comments_number: Number,
        post_id: Number,
        content: String,
        first_name: String,
        last_name: String,
        imageUser: String,
        post_create: String,
        user_id: Number
    },
    data () {
        return {
            open: false,
            commentValue: "",
            stateButton: false,
            imageCurrentUser: "",
            idTextAreaComment: "",
        }
    },
    components: {
        PostButton
    },
    methods: {
        toggle() {
            this.open = !this.open;         
        },
        createComment () {
            const token = sessionStorage.getItem('token')
            let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
            this.$axios
              .post(`post/${this.$props.post_id}/comment`, {
                content: this.commentValue,
                userId: user_id.userId
              })
              .then(() => {
                this.open = !this.open;
                window.location.reload()
              })
              .catch(err => {
                console.log(err)
              })
        },
        EnterText () {
            if (this.open == true) {
                if (this.commentValue) {
                    this.stateButton = true
                } else {
                    this.stateButton = false
                }
            }
        },
    },
    mounted () {
        var textarea = document.getElementById(this.idTextAreaComment);
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
        this.idTextAreaComment =  'createComment' + String(this.$props.post_id)
    }
}
</script>

<style lang="scss">
    .comment-active {
        cursor: pointer;
        display: flex;
        justify-content: center;
        width: 55px;
        height: 55px;
        align-items: center;
        border-radius: 50%;
        transition-duration: 200ms;

        span {
            padding-left: 3px;
        }
        &:hover {
            background-color: rgba(0, 150, 255, 0.3);
            transition-duration: 200ms;
            i, span {
                color: rgb(0, 150, 255) !important;
            }
        }
        .comment.active {
            color: rgb(0, 150, 255) !important;
        }
    }
    .ui.modal, .ui.modal > .content {
        background: rgb(21, 32, 43) !important;
    }
</style>