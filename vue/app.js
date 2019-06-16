var hashPage = httpVueLoader('./vue/pages/hash.vue')
var listsPage = httpVueLoader('./vue/pages/lists.vue')
var sortPage = httpVueLoader('./vue/pages/sort.vue')
var treesPage = httpVueLoader('./vue/pages/trees.vue')

var routes = [
    {
        path: '/hash',
        name: 'hash',
        component: hashPage
    },
    {
        path: '/lists',
        name: 'lists',
        component: listsPage
    },
    {
        path: '/sort',
        name: 'sort',
        component: sortPage
    },
    {
        path: '/trees',
        name: 'trees',
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