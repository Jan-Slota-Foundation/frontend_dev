import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { registerPlugins } from '@/plugins'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { user } from '@/states/user.js'

const firebaseConfig = {
  apiKey: 'AIzaSyCalcb4PjI81wMVO9QphizfV3Bi3crw-JQ',

  authDomain: 'hk-2024.firebaseapp.com',

  projectId: 'hk-2024',

  storageBucket: 'hk-2024.appspot.com',

  messagingSenderId: '230338847993',

  appId: '1:230338847993:web:06f52df7b7ecbbe6a6ee28',

  measurementId: 'G-EZ5WD7XXND'
}

const app = createApp(App)

registerPlugins(app)

const firebaseApp = initializeApp(firebaseConfig)

const analytics = getAnalytics(firebaseApp)

const auth = getAuth()

onAuthStateChanged(auth, (u) => {
  if (u) {
    const uid = u.uid
    user.isLoggedIn = true
    user.data = u
  } else {
    user.isLoggedIn = false
  }
})

app.config.performance = true
app.mount('#app')
