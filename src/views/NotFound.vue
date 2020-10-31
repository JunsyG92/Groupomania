<template>

    <div class="text-center d-flex align-items-center full-height">
        <div class="w-100">
            <i class="terminal icon h4 display-4"></i>
            <p class="h5 mt-3">Cette page n'existe pas...</p>
            <router-link to="/" class="d-block text-white item nav-link nav-hover">Revenir sur la page d'accueil</router-link>
        </div>
    </div>
        
</template>

<script>


export default {
    
}
</script>

<style lang="scss">
    .nav-hover {
        transition-duration: .2s;
        color: #cccccc !important;
    }
    .nav-hover:hover {
        color: #fff !important;
        transition-duration: .2s
    }
</style>


