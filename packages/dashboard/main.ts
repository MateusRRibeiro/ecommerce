import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import webRoutes from '@web/router'
import mobileRoutes from '@mobile/router'

import webApp from '@web/App.vue'
import mobileApp from '@mobile/App.vue'

function mountMobile() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: mobileRoutes as RouteRecordRaw[],
  })

  createApp(mobileApp).use(router).mount('#app')
}

function mountWeb() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: webRoutes as RouteRecordRaw[],
  })

  createApp(webApp).use(router).mount('#app')
}

function CreateAppAndMount() {
  const isMobile: boolean = false

  if(isMobile){
    mountMobile()
  } else {
    mountWeb()
  }
}

CreateAppAndMount()



