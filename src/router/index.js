// Composables
import { comma } from 'postcss/lib/list'
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
            path: '/userinput/pad',
            component: () => import('@/components/padInput/PadView.vue')
          },
          {
            path: '/userinput/text',
            component: () => import('@/components/textInput/TextField.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/register',
    component: () => import('@/views/RegisterForm.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/LoginForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
