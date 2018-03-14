import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import ContactUs from '@/pages/ContactUs'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/contact-us',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
