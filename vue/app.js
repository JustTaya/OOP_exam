var sortPage = httpVueLoader('./vue/pages/sort.vue');
var mainPage = httpVueLoader('./vue/pages/main.vue');
var container = httpVueLoader('./vue/pages/keycontainer.vue');
var setPage = httpVueLoader('./vue/pages/set.vue');

var listPageContainer = httpVueLoader('./vue/pages/listcontainer.vue');
var treePageContainer = httpVueLoader('./vue/pages/treecontainer.vue');
var hashPageContainer = httpVueLoader('./vue/pages/hashcontainer.vue');

var listPageSet = httpVueLoader('./vue/pages/listset.vue');
var treePageSet = httpVueLoader('./vue/pages/treeset.vue');
var hashPageSet = httpVueLoader('./vue/pages/hashset.vue');

var routes = [
    {
        path: "/",
        redirect: "/mainpage"
    },
    {
        path: '/mainpage',
        name: 'mainpage',
        component: mainPage
    },
    {
        path: '/container',
        name: 'container',
        component: container
    },
    {
        path: '/set',
        name: 'set',
        component: setPage
    },
    {
        path: '/sort',
        name: 'sort',
        component: sortPage
    },
    {
        path: '/set/list',
        name: 'listSet',
        component: listPageSet
    },
    {
        path: '/set/hash',
        name: 'hashSet',
        component: hashPageSet
    },
    {
        path: '/set/tree',
        name: 'treeSet',
        component: treePageSet
    },
    {
        path: '/container/list',
        name: 'listContainer',
        component: listPageContainer
    },
    {
        path: '/container/hash',
        name: 'hashContainer',
        component: hashPageContainer
    },
    {
        path: '/container/tree',
        name: 'treeContainer',
        component: treePageContainer
    }
];
var router = new VueRouter({
    hashbang: false,
    history: true,
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});

var vm = new Vue({
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