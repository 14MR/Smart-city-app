import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/weather',
        name: 'Weather',
        component: () => import(/* webpackChunkName: "WeatherPage" */ '../views/WeatherPage.vue')
    },
    {
        path: '/problem',
        name: 'ReportProblemPage',
        component: () => import(/* webpackChunkName: "ReportProblemPage" */ '../views/ReportProblemPage.vue')
    },

    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
