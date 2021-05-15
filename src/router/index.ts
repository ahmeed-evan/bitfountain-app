import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Overview from '../views/Overview.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Overview',
        component: Overview
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import( '../views/Login.vue')
    },
    {
        path: '/add-device',
        name: 'AddDevice',
        component: () => import('../views/AddDevice.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
