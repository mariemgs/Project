import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import Opportunities from '../views/dashboard/Opportunities.vue'
import AddOpportunity from '../views/dashboard/AddOpportunity.vue'
import ResetPassword from '../views/PasswordReset.vue'



const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/ResetPassword',
        name: 'ResetPassword',
        component: ResetPassword
    },
    {
        path:'/MyAccount',
        name: 'MyAccount',
        component: MyAccount,
        meta: {
            requireLogin: true
        }
        
    },
    {
        path:'/dashboard/opportunities',
        name: 'Opportunities',
        component: Opportunities,
        meta: {
            requireLogin: true
        }
    },
    {
        path:'/dashboard/opportunities/add',
        name: 'AddOpportunity',
        component: AddOpportunity,
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