<template>
    <div class="card bg-transparent border-0">
        <div class="card-header bg-transparent border-0" :id="labbeledById">
            <h2 class="mb-0">
                <button v-if="name == 'Visuel'" class="btn btn-link btn-block text-left h4" type="button" data-toggle="collapse" :data-target="'#' + idNav" aria-expanded="true" :aria-controls="idNav">
                    {{ name }}
                </button>
                <button v-else class="btn btn-link btn-block text-left collapsed h4" type="button" data-toggle="collapse" :data-target="'#' + idNav" aria-expanded="false" :aria-controls="idNav">
                    {{ name }}
                </button>
            </h2>
        </div>

        <div v-if="name == 'Visuel'" :id="idNav" class="collapse" :aria-labelledby="labbeledById" :data-parent="'#' + dataParent">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
        <div v-else :id="idNav" class="collapse" :aria-labelledby="labbeledById" :data-parent="'#' + dataParent">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavAccordion',
    props: {
        name: String,
        labbeledById: String,
        idNav: String,
        dataParent: String
    }
}
</script>

<style lang="scss">

</style>