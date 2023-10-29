import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import Home from "../pages/Home.vue";
import Home2 from "../pages/Home2.vue";

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                component: Home,
            },
        ],
    },
    // others routing
    {
        path: "/:catchAll(.*)",
        component: Home2,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
