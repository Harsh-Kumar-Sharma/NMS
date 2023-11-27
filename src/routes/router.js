
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "Login",
        path: "/",
        component: () => import('../views/Login.vue')
    },
    {
        name: "Dashboard",
        path: '/dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        name: "Device Problem",
        path: '/device-problem',
        component: () => import('../views/DeviceProblem.vue')
    },
    {
        name: "Device Status",
        path: '/device-status',
        component: () => import('../views/DeviceStatus.vue')
    },
    {
        name: "Status Charts",
        path: '/status-charts',
        component: () => import('../views/StatusCharts.vue')
    },
    {
        name: "PageNotFound",
        path: "/:pathMatch(.*)*",
        component: () => import('../views/PageNotFound.vue')
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    /* Check if the user is authenticated, you can use Vuex or any authentication state */
    const isAuthenticated = true
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;
