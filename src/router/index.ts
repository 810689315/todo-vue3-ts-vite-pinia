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
                path: "helloWorld",
                name: "HelloWorld",
                meta: {
                    title: "hello-world",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/HelloWorld/index.vue")
            },
            {
                path: "handlingUserInput",
                name: "HandlingUserInput",
                meta: {
                    title: "Handling-User-Input",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/HandlingUserInput/index.vue")
            },
            {
                path: "attributeBindings",
                name: "AttributeBindings",
                meta: {
                    title: "Attribute-Bindings",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/AttributeBindings/index.vue")
            },
            {
                path: "conditionalsAndLoops",
                name: "ConditionalsAndLoops",
                meta: {
                    title: "Conditionals-and-loops",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/ConditionalsAndLoops/index.vue")
            },
            {
                path: "formBindings",
                name: "FormBindings",
                meta: {
                    title: "Form-Bindings",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/FormBindings/index.vue")
            },
            {
                path: "simpleComponent",
                name: "SimpleComponent",
                meta: {
                    title: "Simple-Component",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/SimpleComponent/index.vue")
            },
            {
                path: "markdownEditor",
                name: "MarkdownEditor",
                meta: {
                    title: "Markdown-Editor",
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import("@/pages/examples/MarkdownEditor/index.vue")
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
