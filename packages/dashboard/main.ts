import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import webRoutes from './web/src/router'
import mobileRoutes from './mobile/src/router'


import webApp from './web/src/App.vue'
import mobileApp from './mobile/src/App.vue'

function mountMobile() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: mobileRoutes,
  })

  createApp(mobileApp).use(router).mount('#app')
}

function mountWeb() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: webRoutes,
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



