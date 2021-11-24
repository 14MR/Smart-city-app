import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WeatherPage from '../views/WeatherPage'
import ReportProblemPage from "@/views/ReportProblemPage";
import About from "@/views/About";

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
        component: WeatherPage
    },
    {
        path: '/problem',
        name: 'ReportProblemPage',
        component: ReportProblemPage
    },

    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
