import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'LoginPage',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/',
        name: 'IndexPage',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/vueUse',
        name: 'VueUse',
        meta: {
            title: 'vueUse demo',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/vueUse.vue')
    },
    {
        path: '/request',
        name: 'RequestPage',
        meta: {
            title: 'request demo',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/request.vue')
    },
    {
        path: "/examples",
        name: 'Examples',
        meta: {
            title: "study vue3 demo",
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/examples/index.vue'),
        children: [
            {
                path: "HelloWorld",
                name: "HelloWorld",
                meta: {
                    title: "hello-world",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/HelloWorld/index.vue")
            },
            {
                path: "HandlingUserInput",
                name: "HandlingUserInput",
                meta: {
                    title: "Handling-User-Input",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/HandlingUserInput/index.vue")
            },
            {
                path: "AttributeBindings",
                name: "AttributeBindings",
                meta: {
                    title: "Attribute-Bindings",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/AttributeBindings/index.vue")
            },
            {
                path: "ConditionalsAndLoops",
                name: "ConditionalsAndLoops",
                meta: {
                    title: "Conditionals-and-loops",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/ConditionalsAndLoops/index.vue")
            },
            {
                path: "FormBindings",
                name: "FormBindings",
                meta: {
                    title: "Form-Bindings",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/FormBindings/index.vue")
            },
            {
                path: "SimpleComponent",
                name: "SimpleComponent",
                meta: {
                    title: "Simple-Component",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/SimpleComponent/index.vue")
            },
            {
                path: "MarkdownEditor",
                name: "MarkdownEditor",
                meta: {
                    title: "Markdown-Editor",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/MarkdownEditor/index.vue")
            },
            {
                path: "FetchingData",
                name: "FetchingData",
                meta: {
                    title: "Fetching-Data",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/FetchingData/index.vue")
            },
            {
                path: "GridWithSortAndFilter",
                name: "GridWithSortAndFilter",
                meta: {
                    title: "Grid-With-Sort-And-Filter",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/GridWithSortAndFilter/index.vue")
            },
            {
                path: "TreeView",
                name: "TreeView",
                meta: {
                    title: "Tree-View",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/TreeView/index.vue")
            },
            {
                path: "SVGGraph",
                name: "SVGGraph",
                meta: {
                    title: "SVG-Graph",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/SVGGraph/index.vue")
            },
            {
                path: "ModalwithTransitions",
                name: "ModalwithTransitions",
                meta: {
                    title: "Modal-with-Transitions",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/ModalwithTransitions/index.vue")
            },
            {
                path: "ListWithTransitions",
                name: "ListWithTransitions",
                meta: {
                    title: "List-With-Transitions",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/ListWithTransitions/index.vue")
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;