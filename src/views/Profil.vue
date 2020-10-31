<template>
    <div style="min-height: 100vh;">
        <div class="banner" :style="{backgroundImage: 'url(' + bannerUser + ')'}"></div> 
        <div style="padding-top: 240px">
            <section class="header">
                <h1 is="sui-header" icon text-align="center">
                    <div class="mx-auto" style="width: 150px;">
                        <div class="avatar avatar-profil mx-auto responsive__avatar-identity" :style="{backgroundImage: 'url(' + imageCurrentUser + ')'}"></div>
                    </div>
                    <sui-header-content class="text-white mt-3">{{ first_name }} {{ last_name }}</sui-header-content>
                </h1>
            </section>
            <section v-if="postsUser">
                <article v-for="post in postsUser" :key="post.id">           
                    <CardPost 
                    v-bind:first_name="post.first_name"
                    v-bind:last_name="post.last_name"
                    v-bind:content="post.content"
                    v-bind:imageUser="post.imageUser"
                    v-bind:imageUrl="post.imageUrl"
                    v-bind:likes_number="post.likes_number"
                    v-bind:dislikes_number="post.dislikes_number"
                    v-bind:comments_number="post.comments_number"
                    v-bind:post_create="post.post_create"
                    v-bind:post_id="post.id"
                    v-bind:user_id="post.user_id"
                    />
                </article>
            </section>
            <section v-else >
                <p class="text-center mt-3 h4">Aucun article n'a été trouvé...</p>
            </section>
        </div>
    </div>
</template>

<script>
import CardPost from "../components/CardPost.vue";
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'postsUser',
        ])
    },
    data () {
        return {
            profilUserID: "",
            bannerUser: "",
            imageCurrentUser: "",
            last_name: "",
            first_name: "",
        }
    },
    components : {
        CardPost
    },
    mounted () {
        this.$axios
          .get(`/post/profil/${this.profilUserID}`)
          .then(res => {
        //   .then(res => {
            this.$store.commit('GET_ALL_POST_OF_CURRENT_USER', res.data.result)
            this.posts = res.data.result
          })
          .catch(err => {
            console.log(err)
          })

        this.$axios
          .get(`/user/profil/${this.profilUserID}`)
          .then(res => {
            // this.$store.commit('GET_ALL_POST_OF_CURRENT_USER', res.data.result)
            this.bannerUser = res.data.result[0].bannerUser
            this.imageCurrentUser = res.data.result[0].imageUser
            this.last_name = res.data.result[0].last_name
            this.first_name = res.data.result[0].first_name
            // this.posts = res.data.result
          })
          .catch(err => {
            console.log(err)
          })
    },
    beforeMount() {
        this.profilUserID = this.$route.params.user_id
    },
    created() {
        let image = localStorage.getItem('image')
        let bannerUser = localStorage.getItem('banner')
        let first_name = localStorage.getItem('first_name')
        let last_name = localStorage.getItem('last_name')
        this.imageCurrentUser = image; 
        this.bannerUser = bannerUser;
        this.first_name = first_name; 
        this.last_name = last_name;
    },
    
}
</script>

<style lang="scss">
    .boq {
        position: relative;
        display: table;
        width: 100%;
        background-size: cover;

    }
    .responsive__avatar-identity {
        width: 90px;
        height: 90px;
    }
</style>