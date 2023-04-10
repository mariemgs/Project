import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/About',
        name: 'About',
        component: () => import ('../views/About.vue')
    },
    {
        path:'/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requireLogin: true
        }
    },
    {
        path:'/dashboard/my-account',
        name: 'MyAccount',
        component: Dashboard,
        meta: {
            requireLogin: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
        next('/log-in')
    } else {
        next()
    }

})
export default router