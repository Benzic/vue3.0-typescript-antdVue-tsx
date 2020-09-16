/*
 * @Author: your name
 * @Date: 2020-09-14 10:44:37
 * @LastEditTime: 2020-09-16 10:17:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
