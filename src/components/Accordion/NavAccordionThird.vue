<template>
    <div>
        <div class="card-header bg-transparent border-0" :id="heading">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" :data-target="'#' + components" aria-expanded="false" :aria-controls="components">
                    {{ name }}
                </button>
            </h2>
        </div>
        <div :id="components" class="collapse" :aria-labelledby="heading" :data-parent="'#' + dataParent">
            <div class="card-body">
                <div class="accordion" id="frontEndFourLevel">
                    <div class="nav flex-column nav-pills" :id="'v-frontend-components-' + frontComponent + '-tab'" role="tablist" aria-orientation="vertical">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            heading: String,
            name: String,
            components: String,
            frontComponent: String,
            dataParent: String
        }
    }
</script>

<style lang="scss">

</style>