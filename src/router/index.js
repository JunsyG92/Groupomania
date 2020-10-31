import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Accueil from '../views/Accueil.vue'
import Profil from '../views/Profil.vue'
import Post from '../views/Post.vue'
import Settings from '../views/Settings.vue'
import Analyse from '../views/Analyse.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/analyse',
    name: 'Analyse',
    component: Analyse
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (route, redirect, next) {
        let token = sessionStorage.getItem('token');
        if (token) {
            next({
                name: 'Accueil'
            })
        } else {
            next()
        }
    }
  }, {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter (route, redirect, next) {
        let token = sessionStorage.getItem('token');
        if (token) {
            next({
                name: 'Accueil'
            })
        } else {
            next()
        }
    }
  }, {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    beforeEnter (route, redirect, next) {
        let token = sessionStorage.getItem('token');
        if (!token) {
            next({
                name: 'Login'
            })
        } else {
            next()
        }
    }
  }, {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    beforeEnter (route, redirect, next) {
        let token = sessionStorage.getItem('token');
        if (!token) {
            next({
                name: 'Login'
            })
        } else {
            next()
        }
    }
  }, {
    path: '/profil/:user_id(\\d+)',
    name: 'Profil',
    component: Profil,
    beforeEnter (route, redirect, next) {
        let token = sessionStorage.getItem('token');
        if (!token) {
            next({
                name: 'Login'
            })
        } else {
            next()
        }
    }
  }, {
    path: '/post/:post_id(\\d+)',
    name: 'Post',
    component: Post,
    beforeEnter (route, redirect, next) {
        let token = sessionStorage.getItem('token');
        if (!token) {
            next({
                name: 'Login'
            })
        } else {
            next()
        }
    }
  }, {
      path: '*',
      component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
