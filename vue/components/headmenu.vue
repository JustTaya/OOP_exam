<template>
    <div>
        <nav class="page-nav">
            <router-link class="page-link" :to="{ name: 'main'}">Main</router-link>
            <router-link class="page-link" :to="{ name: 'list'}">Lists</router-link>
            <router-link class="page-link" :to="{ name: 'tree'}">Trees</router-link>
            <router-link class="page-link" :to="{ name: 'hash'}">Hash</router-link>
            <router-link class="page-link" :to="{ name: 'sort'}">Sorts</router-link>
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
        background: #ff4e08;
        height: 50px;
        line-height: 50px;
        padding-top: 5px;
        -moz-box-shadow: inset 0 -10px 10px -10px #00000088;
        -webkit-box-shadow: inset 0 -10px 10px -10px #00000088;
        box-shadow: inset 0 -10px 10px -10px #00000088;
    }

    .page-nav:first-child:before {
        content: "Velychko Taisiya";
        font-weight: 700;
        font-size: 22px;
        padding: 0px 50px;
    }

    .page-link {
        display: inline-block;
        padding: 0px 16px;
        color: #212121;
        text-decoration: none;
        transition: 0.3s background;
        font-weight: bold;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .page-link.active,
    .page-link:hover {
        background: #fefefe;
    }
</style>
