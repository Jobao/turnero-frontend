import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './index.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import DatePicker from 'primevue/datepicker'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.component('datePicker', DatePicker)

app.mount('#app')
