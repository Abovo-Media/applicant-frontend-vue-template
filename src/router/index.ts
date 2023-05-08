import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Orders',
            component: HomeView,
        },
        {
            path: '/order/:id',
            meta: {
                slug: 'order-detail',
            },
            name: 'Order detail',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/DetailView.vue'),
        },
    ],
});

export default router;
