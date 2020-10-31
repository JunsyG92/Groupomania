<template>
    <section>
        <div class="post-center" v-if="comments">
            <sui-comment-group v-for="comment in comments" :key="comment.comment_id" minimal class="w-100 m-0 p-3 comment-hover" :class=" currentUser === comment.user_id ? 'comment-current-user' : ''">
                <sui-comment class="d-flex">
                    <div class="mr-3" :style="{zIndex: 1}">
                        <div class="avatar current-user__image mx-auto w-100" :style="{backgroundImage: 'url(' + comment.imageUser + ')', width: '35px !important', height: '35px !important'}"></div>
                    </div>
                    <sui-comment-content>
                        <router-link :to="'/profil/'+ comment.user_id">
                            <span class="text-white font-weight-bold">{{ comment.first_name }} {{ comment.last_name }}</span>
                        </router-link>
                        <sui-comment-metadata>
                            <span class="text-white">{{ comment.comment_create }}</span>
                        </sui-comment-metadata>
                        <sui-comment-text class="text-white">{{ comment.comment }}</sui-comment-text>
                        <sui-comment-actions v-if="currentUser === comment.user_id || user_permission == 1">
                            <MenuCommentDropdown
                                v-bind:comment_id="comment.comment_id"
                                v-bind:first_name="comment.first_name"
                                v-bind:last_name="comment.last_name"
                                v-bind:imageUser="comment.imageUser"
                                v-bind:comment_create="comment.comment_create"
                                v-bind:comment="comment.comment"
                            />
                        </sui-comment-actions>
                    </sui-comment-content>
                </sui-comment>
            </sui-comment-group>
        </div>
        <div class="post-center" v-else>
            <p>{{ message }}</p>
        </div>
    </section>
</template>

<script>
import MenuCommentDropdown from "./Dropdown/MenuCommentDropdown";

import jwt from "jsonwebtoken";
// let token = sessionStorage.getItem('token');
// let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
export default {
    data () {
        return {
            loading: false,
            comments: [],
            message: "",
            currentUser: "",
            user_permission: ""
        }
    },
    components: {
        MenuCommentDropdown
    },
    props: {
        post_id: Number,
        user_id: Number
    },
    methods: {
        getAllComment () {
          this.$axios
            .get(`/post/${this.$route.params.post_id}/comment`)
            .then(res => {
              this.comments = res.data.result
              if (res.data.message) {
                  this.message = res.data.message
              }
            })
            .then(() => {
                let token = sessionStorage.getItem('token');
                let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")

                this.currentUser = user_id.userId
            })
            .catch(err => {
              console.log(err)
            })
        },
    },
    beforeMount () {
        if(localStorage.getItem('isAdmin')) {
            this.user_permission = localStorage.getItem('isAdmin')
        }
        this.getAllComment()
    },
}
</script>

<style lang="scss">
    .mb-3 {
        margin-bottom: 1rem !important;
    }
    .comment-hover {
        border-radius: 5px
    }
    .comment-hover:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, .04);
        transition-duration: .2s;
    }
    .comment-current-user {
        background-color: rgba(255, 255, 255, .02);
        transition-duration: .2s;
    }
</style>