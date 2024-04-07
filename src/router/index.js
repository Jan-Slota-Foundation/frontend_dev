// Composables
import { comma } from 'postcss/lib/list'
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/settings',
        component: () => import('@/layouts/default/Default.vue')
      },
      {
        path: '/userinput',
        name: 'generalUserInput',
        redirect: '/userinput/pad',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/views/UserInput.vue'),
        children: [
          {
            name: 'pad',
            path: '/userinput/pad',
            component: () => import('@/components/padInput/PadView.vue')
          },
          {
            path: '/userinput/text',
            component: () => import('@/components/textInput/TextField.vue')
          },
          {
            path: '/userinput/convert',
            component: () => import('@/components/convert/ConvertFileInput.vue')
          }
        ]
      },
      {
        path: '/recordings',
        component: () => import('@/views/Recordings.vue')
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log('lol')
    if (await getCurrentUser()) {
      next()
    } else {
      alert("You don't have access")
      next('/')
    }
  } else {
    next()
  }
})

export default router
