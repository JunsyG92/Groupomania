<template>
    <router-link :to="to_link" class="text-white item nav-link" exact>
        <div class="align-items-center nav-item">
            <i class="icon text-white" :class="icon"></i> <span class="text-white nav__name ml-3">{{ name }}</span>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            to_link : String,
            name: String,
            icon: String
        }
    }
</script>

<style lang="scss">
    .nav-link {
        padding-top: 5px !important;
        padding-bottom: 5px !important;
        display: block;
    }
    .nav-item:hover {
        border-radius: 50px;
        transition-duration: 300ms;
        &:hover {
            background-color: rgba(0, 150, 255, 0.1);
            transition-duration: 200ms;
            i, span {
                color: rgb(0, 150, 255) !important;
            }
        }
    }
    @media screen and (max-width: 1278px) {
        .nav-link {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            padding-left: 0;
            padding-right: 0;
        }
        .nav-item {
            justify-content: center;
        }
        .nav-item:hover {
            border-radius: 0;
            transition-duration: 300ms;
            margin-left: auto;
            margin-right: auto;
            padding-bottom: 8px;
            &:hover {
                background-color: transparent;
                transition-duration: 200ms;
                i, span {
                    color: rgb(0, 150, 255) !important;
                }
            }
        }
        i.icon {
            margin: 0;
        }
        .nav__name {
            display: none;
        }
    }
</style>