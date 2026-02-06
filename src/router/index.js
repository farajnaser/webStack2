import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NewsletterPage from '../pages/NewsletterPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/newsletter',
        name: 'Newsletter',
        component: NewsletterPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }
        if (savedPosition) {
            return savedPosition
        }
        return { top: 0 }
    }
})

export default router
