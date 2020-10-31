<template>
    <div class="card-hover">
        <sui-divider inverted />
        <sui-card class="mx-auto responsive__card-user">

            <sui-card-content class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <div>
                        <div class="avatar mx-auto" :style="{backgroundImage: 'url(' + imageUser + ')'}"></div>
                    </div>
                    <div class="d-flex align-items-center">
                        <router-link :to="'/profil/'+ user_id"><h3 class="ml-3 font-weight-bold text-white h5 m-0 mr-3">{{ fullname }}</h3></router-link> <time class="text-muted m-0" style="padding-top: 3px">{{ post_create }}</time>
                    </div>
                </div>
                <!-- <sui-card-meta slot="right"> -->
                <sui-card-meta slot="right" v-if="currentUser === user_id || user_permission == 1">
                    <MenuPostDropdown class="m-0"
                      v-bind:post_id="post_id"
                      v-bind:content="content"
                      v-bind:first_name="first_name"
                      v-bind:last_name="last_name"
                      v-bind:post_create="post_create"
                      v-bind:imageUrl="imageUrl"
                      v-bind:imageUser="imageUser"
                    />
                </sui-card-meta>
            </sui-card-content>

        </sui-card>
        <div @click="getPost(post_id)" class="mb-3 responsive__card-content mx-auto ">
            <sui-card-content class="border-0 post-center mb-5" @click="getPost(post_id)">
                <p>{{ content }}</p>
            </sui-card-content>

            <div v-if="imageUrl" class="img mx-auto" :style="{backgroundImage: 'url(' + imageUrl + ')'}"></div>
        </div>
        <sui-card-content class="d-flex justify-content-around border-0 mx-auto responsive__card-actions pb-3">
            <LikeButton 
              v-bind:post_id="post_id"
              v-bind:likes_number="likes_number"
            />
            <DislikeButton 
              v-bind:post_id="post_id"
              v-bind:dislikes_number="dislikes_number"
            />
            <CommentButton
              v-bind:comments_number="comments_number"
              v-bind:post_id="post_id"
              v-bind:content="content"
              v-bind:first_name="first_name"
              v-bind:last_name="last_name"
              v-bind:post_create="post_create"
              v-bind:imageUser="imageUser"
              v-bind:user_id="user_id"
            />
        </sui-card-content>
    </div>
</template>

<script>
// import Modal from './layout/Modal.vue'
import LikeButton from './Button/LikeButton.vue'
import DislikeButton from './Button/DislikeButton.vue'
import CommentButton from './Button/CommentButton.vue'
import MenuPostDropdown from './Dropdown/MenuPostDropdown.vue'

import jwt from "jsonwebtoken";

export default {
    name: 'Card',
    data () {
        return {
            currentUser: "",
            currentUserIsAdmin: ""
        }
    },
    components : {
        LikeButton,
        DislikeButton,
        CommentButton,
        MenuPostDropdown
    },
    props: {
        post_id: Number,
        first_name: String,
        last_name: String,
        imageUser: String,
        content: String,
        imageUrl: String,
        likes_number: Number,
        dislikes_number: Number,
        comments_number: Number,
        post_create: String,
        user_id: Number,
        user_permission: Number
    },
    methods: {
        getPost (post_id) {
            this.$router.push({
                path: `/post/${this.post_id}`,
                params: {
                    post_id: post_id,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    content: this.content,
                    likes_number: this.likes_number,
                    dislikes_number: this.dislikes_number,
                    comments_number: this.comments_number,
                    post_create: this.post_create
                }
            })
            .catch(() => {})
        }
    },
    computed: {
        fullname: function() {
            return this.first_name + ' ' + this.last_name
        }
    },
    beforeMount () {
        let token = sessionStorage.getItem('token');
        let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
        this.currentUser = user_id.userId

        if(localStorage.getItem('isAdmin')) {
            this.currentUserIsAdmin = localStorage.getItem('isAdmin')
        }
    }
}
</script>

<style lang="scss">
    .ui.card, .ui.cards > .card {
        width: 600px;
    }
    .responsive__card-content, .responsive__card-actions {
        width: 600px;
    }
    .w-100 {
        width: 100% !important;
    }
    .ui.card > .image, .ui.cards > .card > .image {
        height: 450px;
    }
    .card-hover {
        transition-duration: .2s;
    }
    .card-hover:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, .03);
        transition-duration: .2s;
    }
    .justify-content-around {
        justify-content: space-around;
    }
    .ui.card > .content::after, .ui.cards > .card > .content::after {
        content: none
    }
    .mb-3 {
        margin-bottom: 1rem;
    }
    i {
        font-size: 16px;
    }
    .icon-hover {
        display: flex;
        justify-content: center;
        width: 55px;
        height: 55px;
        align-items: center;
        border-radius: 50%;
        transition-duration: 200ms;
    }
    i.icon {
        height: auto !important
    }
    .ui.dropdown .menu {
        top: 90%;
        left: -450%;
    }
</style>