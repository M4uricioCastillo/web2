import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import { createPinia } from 'pinia';
import i18n from './i18n.js';

import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import DatePicker from 'primevue/datepicker';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(PrimeVue, {theme: { preset: Material}
});

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-input-text', InputText);
app.component('pv-dialog', Dialog);
app.component('pv-datepicker', DatePicker);
app.mount('#app');