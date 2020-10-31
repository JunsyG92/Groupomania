<template lang="html">
    <section class="full-height margin-responsive">
        <FormPost />
        <template v-if="posts.length >= 1">
            <article v-for="post in posts" :key="post.id">    
                <CardPost 
                  v-bind:first_name="post.first_name"
                  v-bind:last_name="post.last_name"
                  v-bind:imageUser="post.imageUser"
                  v-bind:content="post.content"
                  v-bind:imageUrl="post.imageUrl"
                  v-bind:likes_number="post.likes_number"
                  v-bind:dislikes_number="post.dislikes_number"
                  v-bind:comments_number="post.comments_number"
                  v-bind:post_create="post.post_create"
                  v-bind:post_id="post.id"
                  v-bind:user_id="post.user_id"
                  v-bind:user_permission="user_permission"
                />
            </article>
        </template>
        <template v-else>
            <div>
                <p class="text-center mt-3 h4">Aucun article n'a été trouvé...</p>
            </div>
        </template>
    </section>
</template>

<script>
import CardPost from "../components/CardPost.vue";
import FormPost from "../components/Formulaire/FormPost.vue";
import { mapState } from 'vuex';
import jwt from "jsonwebtoken";

export default {
    data () {
        return {
            user_permission: null
        }
    },
    computed: {
        ...mapState([
            'posts',
            'user'
        ])
    },
    components : {
        CardPost,
        FormPost
    },
    mounted () {
        let token = sessionStorage.getItem('token');
        let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
        this.$axios
          .get('/post/')
          .then(res => {
            if(res.data != "") {
                this.$store.commit('GET_ALL_POST', res.data.result)
                this.$store.commit('GET_ONE_POST', "")
            }
          })
          .catch(err => {
            console.log(err)
          })

        this.$axios
          .get(`/admin/${user_id.userId}`)
          .then(res => {
            this.user_permission = res.data.result[0].user_permission
          })
          .catch(err => {
            console.log(err)
          })
    },
    // methods : {
    //     timeFromNow () {
    //         moment(res.data.result.post_create).fromNow()
    //     }
    // }
}
</script>

<style lang="scss">
    .d-flex {
        display: flex
    }
    .justify-content-center {
        justify-content: center;
    }
    .ui.card, .ui.cards > .card {
        max-width: none;
        background-color: transparent;
        border: none !important;
        box-shadow: none;
    }
    .mx-auto {
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .ui.divider {
        margin: 0;
    }
    .border-0 {
        border: none !important;
    }
    .ui.card > .extra, .ui.cards > .card > .extra {
        border: none !important
    }
    .ui.celled.grid > .column:not(.row), .ui.celled.grid > .row > .column{
        padding: 0;
    }
    .post-center {
        background-color: transparent !important;
        p {
            font-size: 1.3rem;
        }
    }
    .margin-responsive {
        margin-bottom: 7.5rem;
    }
</style>
