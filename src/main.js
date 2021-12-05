import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'normalize.css'

import english from '@/locales/en/app.json'
import { createI18n } from 'vue-i18n'

library.add(fab, fas)

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: { en: english }
})

const app = createApp(App)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
