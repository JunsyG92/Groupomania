<template>
    <button @click="Dislike_post" class="border-0 bg-transparent dislike-active text-white d-flex align-items-center">
        <template v-if="disliked">
            <i class="thumbs down icon text-danger"></i> 
            <span class="text-danger">{{ dislikes_number }}</span>
        </template>
        <template v-else>
            <i class="thumbs down outline icon"></i> 
            <span>{{ dislikes_number }}</span>
        </template>
    </button>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
    props: {
        dislikes_number: Number,
        post_id: Number
    },
    data () {
        return {
            disliked: false
        }
    },
    methods : {
        Dislike_post () {
            let token = sessionStorage.getItem('token');
            let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!");
            this.$axios
              .post(`/post/${this.$props.post_id}/dislike`, {
                  user_id: user_id.userId
              })
              .then(() => {
                  this.disliked = true
                  window.location.reload()
              })
              .catch(err => {
                  console.log(err)
              })
        },
    },
    mounted() {
        let token = sessionStorage.getItem('token');
        let user_id = jwt.verify(token, "!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!");
        this.$axios
            .get(`/post/disliked/${this.$props.post_id}/${user_id.userId}`)
            .then(res => {
                res.data == 1 ? this.disliked = true : this.disliked == false
            })
            .catch(() => {
                console.log("Une erreur est survenue concernant le bouton du dislike....")
            })
    }
}
</script>

<style lang="scss">
    .dislike-active {
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
            background-color: rgba(255, 90, 90, 0.3) !important;
            transition-duration: 200ms;
            i, span {
                color: rgb(255, 90, 90) !important;
            }
        }
    }
    .text-danger {
        color: rgb(255, 90, 90);
    }
</style>