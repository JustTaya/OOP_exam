<template>
    <div>
        <side-menu-sort></side-menu-sort>
    </div>
</template>

<script>
    module.exports = {
        name: "sortpage",
        components: {
            'side-menu-sort': httpVueLoader('../components/sidemenusort.vue')
        }
    };
</script>

<style scoped>
        
</style>