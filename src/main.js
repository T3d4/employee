/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css';
import router from './router';


import { createApp } from 'vue'
import App from './App.vue'

import Avatar from 'primevue/avatar';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('ButtonVue', Button)
app.component('Breadcrumb', Breadcrumb)
app.component('Avatar', Avatar)

app.mount('#app')

