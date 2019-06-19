<template>
    <div>
        <nav class="s-nav">
            <router-link class="page-link" :to="{ name: 'listSort'}">Lists</router-link>
            <router-link class="page-link" :to="{ name: 'treeSort'}">Trees</router-link>
        </nav>
        <section class="s-body">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    module.exports = {
        name: "side-menu-sort"
    };
</script>

<style scoped>
    .s-nav {
        border-right: #212121 2px solid;
        font-weight: bold;
        width: 120px;
        height: fit-content;
    }

    .s-link {
        padding: 0px 16px;
        width: 88px;
        color: #212121;
        text-decoration: none;
        transition: 0.3s background;
    }

    .s-link.active,
    .s-link:hover {
        background: #a1a1a1;
    }
</style>
