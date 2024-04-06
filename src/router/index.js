// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/settings',
        component: () => import('@/layouts/default/Default.vue')
      },
      {
        path: '/userinput',
        component: () => import('@/views/UserInput.vue'),
        children: [
          {
            path: '/userinput/pad'
            // component: () => import('@/views/UserInput.vue')
          },
          {
            path: '/userinput/text'
            // component: () => import('@/views/UserInput.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
