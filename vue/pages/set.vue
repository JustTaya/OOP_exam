<template>
    <div>
        <side-menu-set></side-menu-set>
        Set
    </div>
</template>

<script>
    module.exports = {
        name: "setpage",
        components: {
            'side-menu-set': httpVueLoader('../components/sidemenuset.vue')
        }
    };
</script>

<style scoped>
        
</style>