import { createRouter, createWebHistory } from 'vue-router';

import PhotoGallary from '../views/PhotoGallary.vue';
import AlbumnGallary from "../views/AlbumnGallary.vue";

const routes = [
    {
        path: '/',
        name: 'AlbumnGallary',
        component: AlbumnGallary
    },
    {
        path: '/PhotoGallary/:id',
        name: 'PhotoGallary',
        component: PhotoGallary,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
