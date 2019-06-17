var hashPage = httpVueLoader('./vue/pages/hash.vue')
var listsPage = httpVueLoader('./vue/pages/list.vue')
var sortPage = httpVueLoader('./vue/pages/sort.vue')
var treesPage = httpVueLoader('./vue/pages/tree.vue')
var mainPage = httpVueLoader('./vue/pages/main.vue')

var routes = [
    {
        path: "/",
        redirect: "/main"
    },
    {
        path: '/main',
        name: 'main',
        component: mainPage
    },
    {
        path: '/hash',
        name: 'hash',
        component: hashPage
    },
    {
        path: '/list',
        name: 'list',
        component: listsPage
    },
    {
        path: '/sort',
        name: 'sort',
        component: sortPage
    },
    {
        path: '/tree',
        name: 'tree',
        component: treesPage
    }
];
var router = new VueRouter({
    hashbang: false,
    history: true,
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});

new Vue({
    el: "#app",
    data: {
        
    },
    methods: {

    },
    router: router,
    components: {
        'head-menu': httpVueLoader('./vue/components/headmenu.vue')
    }
})