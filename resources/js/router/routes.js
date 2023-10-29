import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import Home from "../pages/Home.vue";
import VideoStream from "../pages/VideoStream.vue";
import Swiper from "../pages/Swiper.vue";

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                component: VideoStream,
            },
            {
                path: "/swiper",
                component: Swiper,
            },
        ],
    },
    // others routing
    {
        path: "/:catchAll(.*)",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
