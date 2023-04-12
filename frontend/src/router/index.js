import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'

const routes = [
    {
        path: '/',
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
        path:'/MyAccount',
        name: 'MyAccount',
        component: MyAccount,
        meta: {
            requireLogin: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
        next('/Login')
    } else {
        next()
    }

})
export default router