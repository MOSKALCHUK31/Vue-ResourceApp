import { createApp } from 'vue';

import App from './App.vue';
import CardBase from './components/UI/CardBase.vue';
import TheButton from './components/UI/TheButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('card-base', CardBase);
app.component('the-button', TheButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
