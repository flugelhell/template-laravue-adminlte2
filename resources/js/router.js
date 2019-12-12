//IMPORT SECTION
import Vue from 'vue'
import Router from 'vue-router'
// import Home from './pages/Home.vue'
import store from './store.js'
import Login from './pages/Login.vue'
import Dashboard from './pages/Dashboard.vue'
import About from './pages/About.vue'
import Master_hw from './pages/hardware/Master_hw.vue'
import Tes from './pages/About.vue'
import Page404 from './pages/404.vue'

Vue.use(Router)

//DEFINE ROUTE
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            meta: { requiresAuth: true }
        },
        {
            path: '/dashboard',
            redirect: { name: 'dashboard' },
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: { requiresAuth: true }
        },
        {
            path: '/inventory/master-hw',
            name: 'master_hw',
            component: Master_hw,
            meta: { requiresAuth: true },
        },
        {
            path: '/tes',
            name: 'tes',
            component: Tes,
            meta: { requiresAuth: true }
        },
        {
            path: '*',
            name: 'page404',
            component: Page404
        }
    ]
});

//Navigation Guards
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth
        if (!auth) {
            next({ name: 'login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router