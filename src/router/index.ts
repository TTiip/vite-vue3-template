import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/foo'
  },
  {
    path: '/foo',
    name: 'Foo',
    component: () => import(/* webpackChunkName: "Foo" */ '../views/Foo/index.vue')
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => import(/* webpackChunkName: "Bar" */ '../views/Bar/index.vue')
  }
]

const router = createRouter({
  // vue-cli
  // history: createWebHistory(process.env.BASE_URL),
  // vite
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
