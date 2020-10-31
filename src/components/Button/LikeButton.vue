<template>
    <button @click="Like_post" class="border-0 bg-transparent like-active text-white d-flex align-items-center">
        <template v-if="liked">
            <i class="thumbs up icon text-succces"></i>
            <span class="text-succces">{{ likes_number }}</span>
        </template>
        <template v-else>
            <i class="thumbs up outline icon"></i>
            <span>{{ likes_number }}</span>
        </template>
    </button>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
    props: {
        likes_number: Number,
        post_id: Number
    },
    data () {
        return {
            liked: false
        }
    },
    methods : {
        Like_post () {
            let token = sessionStorage.getItem('token');
            let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!")
            this.$axios
              .post(`/post/${this.$props.post_id}/like`, {
                  user_id: user_id.userId
              })
              .then(() => {
                  this.liked = true
                  window.location.reload()
              })
              .catch(err => {
                  console.log(err)
              })
        }
    },
    mounted() {
        let token = sessionStorage.getItem('token');
        let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!");
        this.$axios
            .get(`/post/liked/${this.$props.post_id}/${user_id.userId}`)
            .then(res => {
                res.data == 1 ? this.liked = true : this.liked == false
            })
            .catch(() => {
                console.log("Une erreur est survenue concernant le bouton du like....")
            })
    }
}
</script>

<style lang="scss">
    .like-active {
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
            background-color: rgba(94, 226, 0, 0.3) !important;
            transition-duration: 200ms;
            i, span {
                color: rgb(94, 226, 0);
            }
        }
    }
    .text-succces {
        color: rgb(94, 226, 0);
    }
</style>