import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Profile from './components/Profile'
import Illustration from './components/Illustration'
import Work from './components/Work'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/Profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/Work',
        name: 'work',
        component: Work
    },
    {
        path: '/Illustration',
        name: 'illustration',
        component: Illustration
    }
    ]
})