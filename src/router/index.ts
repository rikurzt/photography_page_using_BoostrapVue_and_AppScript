import { createRouter, createWebHistory } from 'vue-router';

import AlbumnGallary from "../views/AlbumnGallary.vue";

const routes = [
    {
        path: '/',
        name: 'AlbumnGallary',
        component: AlbumnGallary
    },
    {
        path: '/PhotoGallary/:id/:title',
        name: 'PhotoGallary',
        component: import("../views/PhotoGallary.vue"),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
