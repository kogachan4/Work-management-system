import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60bea1b6 = () => interopDefault(import('../pages/element.vue' /* webpackChunkName: "pages/element" */))
const _db5ad7ba = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _432aede3 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _3e814372 = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _6eaa1de8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/element",
    component: _60bea1b6,
    name: "element"
  }, {
    path: "/login",
    component: _db5ad7ba,
    name: "login"
  }, {
    path: "/profile",
    component: _432aede3,
    name: "profile"
  }, {
    path: "/work",
    component: _3e814372,
    name: "work"
  }, {
    path: "/",
    component: _6eaa1de8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
