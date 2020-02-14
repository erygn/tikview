import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requireAuth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


import firebase from "firebase";
import Profile from "@/views/Profile";

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.requireAuth);

  if (requireAuth && !currentUser) {
    next('login');
  }
  else if (!requireAuth && currentUser) {
    next('/');
  }
  else { next(); }
})

export default router
