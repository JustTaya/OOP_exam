<template>
    <div>
        <nav class="page-nav">
            <router-link class="menu-link" :to="{ name: 'lists'}"
                         v-on:click="changeTree('lists')">Lists
            </router-link>
            <router-link class="menu-link" :to="{ name: 'trees'}"
                         v-on:click="changeTree('trees')">Trees
            </router-link>
            <router-link class="menu-link" :to="{ name: 'hash'}"
                         v-on:click="changeTree('hash')">Hash
            </router-link>
            <router-link class="menu-link" :to="{ name: 'sort'}"
                         v-on:click="changeTree('sort')">Sorts
            </router-link>
        </nav>
        <section class="page-body">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    module.exports = {
        name: "head-menu",
        methods: {
            changeTree: async function (treeType) {
                treeImplementation = getTreeImplementation(treeType);
            }
        }
    };
</script>

<style scoped>
    .page-nav {
        width: 100%;
        background: #ffc107;
        height: 50px;
        line-height: 50px;
        padding-top: 5px;
    }
    .page-nav:first-child:before {
        content: "Awesome Tree Visualization";
        font-weight: 700;
        font-size: 22px;
        padding: 0px 50px;
    }
    .menu-link {
        display: inline-block;
        padding: 0px 16px;
        color: #212121;
        text-decoration: none;
        transition: 0.3s background;
        font-weight: bold;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .menu-link.active,
    .menu-link:hover {
        background: #fefefe;
    }
</style>