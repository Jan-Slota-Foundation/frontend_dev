<script setup>
import { serial } from '@/states/serialStates.js'
import router from '@/router/index.js'
import { user } from '@/states/user.js'
</script>
<template>
  <aside
    class="bg-zinc-800 pt-5 pb-2 px-2 min-w-[15rem] flex flex-col justify-between"
  >
    <div class="">
      <div class="flex mb-2 gap-3 items-center p-2 bg-zinc-900 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-11 h-11 stroke-zinc-800 fill-zinc-800 rounded-full bg-zinc-600 p-[8px]"
        >
          <path
            fill-rule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clip-rule="evenodd"
          />
        </svg>

        <div class="flex flex-col">
          <p class="text-zinc-500 text-sm">{{ user.data.email }}</p>
        </div>
      </div>
      <p
        :class="[
          'rounded-lg text-zinc-800  font-semibold py-2 flex items-center justify-center',
          serial.connected ? 'bg-green-600 ' : 'bg-orange-600'
        ]"
      >
        {{
          serial.connected ? 'Connected to the  board' : 'Board not connected'
        }}
      </p>
    </div>
    <nav class="flex flex-col gap-2">
      <router-link
        v-for="(view, index) in views"
        :key="index"
        :to="view.route"
        @click="handleChangeRoute(view)"
        :class="[
          ' px-6 py-2 rounded-md transition duration-200',
          activeRoute === view.route ? 'bg-zinc-700 text-white' : ''
        ]"
        >{{ view.name }}
      </router-link>
    </nav>
    <button
      @click="handleLogOut"
      class="w-full border-2 rounded-md py-2 text-lg border-rose-600 font-semibold tracking-wider text-rose-600 transition-all duration-200 hover:border-transparent"
    >
      Log out
    </button>
  </aside>
</template>

<script>
import { useRoute } from 'vue-router'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth()

export default {
  name: 'Sidebar',

  data() {
    return {
      activeRoute: '',
      views: [
        {
          name: 'Input',
          route: '/userinput'
        },
        {
          name: 'My recordings',
          route: '/recordings'
        }
      ]
    }
  },
  methods: {
    handleChangeRoute(view) {
      console.log(view)
      this.activeRoute = view.route
    },
    handleLogOut() {
      signOut(auth)
        .then(() => {
          console.log('signed out successfully')
          router.push('/')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  mounted() {
    const currentPath = useRoute().path
    let final = currentPath.includes('input') ? '/userinput' : currentPath
    this.activeRoute = final
  }
}
</script>

<style lang="scss" scoped></style>
