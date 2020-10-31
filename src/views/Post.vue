<template>
    <article class="full-height pt-5">
        <sui-card class="mx-auto responsive__card-user" v-for="currentPost in post" :key="currentPost.id">
            <sui-card-content class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <div>
                        <sui-image :src="currentPost.imageUser" shape="circular" size="mini" />
                    </div>
                    <div class="d-flex align-items-center">
                        <router-link :to="'/profil/'+ currentPost.user_id"><h3 class="ml-3 font-weight-bold text-white h5 m-0 mr-3">{{ currentPost.first_name }} {{ currentPost.last_name }}</h3></router-link> <time class="text-muted m-0" style="padding-top: 3px">{{ currentPost.post_create }}</time>
                    </div>
                </div>
                
                <sui-card-meta slot="right" v-if="currentUser === currentPost.user_id || isAdmin == 1">
                    <MenuPostDropdown class="m-0"
                      v-bind:post_id="currentPost.id"
                      v-bind:content="currentPost.content"
                      v-bind:first_name="currentPost.first_name"
                      v-bind:last_name="currentPost.last_name"
                      v-bind:post_create="currentPost.post_create"
                      v-bind:imageUrl="currentPost.imageUrl"
                      v-bind:imageUser="currentPost.imageUser"
                    />
                </sui-card-meta>
            </sui-card-content>

            <sui-card-content class="border-0 post-center">
                <p>{{ currentPost.content }}</p>
            </sui-card-content>
            <div v-if="currentPost.imageUrl" class="img mx-auto" :style="{backgroundImage: 'url(' + currentPost.imageUrl + ')'}"></div>
            <sui-card-meta slot="right">{{ currentPost.post_create }}</sui-card-meta>
            {{currentPost.post_id}}
            <sui-card-content class="d-flex justify-content-around mb-3 border-0">
                <LikeButton 
                v-bind:post_id="currentPost.id"
                v-bind:likes_number="currentPost.likes_number"
                />
                <DislikeButton 
                v-bind:post_id="currentPost.id"
                v-bind:dislikes_number="currentPost.dislikes_number"
                />
                <CommentButton
                v-bind:comments_number="currentPost.comments_number"
                v-bind:post_id="currentPost.id"
                v-bind:content="currentPost.content"
                v-bind:first_name="currentPost.first_name"
                v-bind:last_name="currentPost.last_name"
                v-bind:post_create="currentPost.post_create"
                v-bind:imageUser="currentPost.imageUser"
                v-bind:user_id="currentPost.user_id"
                />
            </sui-card-content>
        <CardComment
          v-bind:post_id="currentPost.id"
          v-bind:user_id="currentPost.user_id"
        />
        </sui-card>
    </article>
</template>

<script>
import CardComment from '../components/CardComment.vue'
import LikeButton from '../components/Button/LikeButton.vue'
import DislikeButton from '../components/Button/DislikeButton.vue'
import CommentButton from '../components/Button/CommentButton.vue'
import MenuPostDropdown from '../components/Dropdown/MenuPostDropdown.vue'

import jwt from "jsonwebtoken";

import { mapState } from 'vuex';
export default {
    components : {
        CardComment,
        LikeButton,
        CommentButton,
        DislikeButton,
        MenuPostDropdown
    },
    computed: {
        ...mapState([
            'post',
        ]),
    },
    data () {
        return {
            loading: false,
            error: null,
            currentUser: "",
            isAdmin: null
        }
    },
    created () {
        this.getOnePost()
    },
    methods: {
        getOnePost () {
            this.$axios
              .get(`post/${this.$route.params.post_id}`)
              .then(res => {
                this.$store.commit('GET_ONE_POST', res.data.result);
              })
              .catch(err => {
                console.log(err)
              })
        }
    },
    beforeMount () {
        let token = sessionStorage.getItem('token');
        let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
        this.currentUser = user_id.userId
        if(localStorage.getItem('isAdmin')) {
            this.isAdmin = localStorage.getItem('isAdmin')
        }
    }
}
</script>

<style lang="scss">
</style>