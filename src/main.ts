import Vue from 'vue';
import App from './App.vue';

import iView from 'iview';
import { store } from './store';
import router from './router';
import i18n from '@/localization/localization';

import './registerServiceWorker';

import 'iview/dist/styles/iview.css';
import './styles/main.less';

Vue.config.productionTip = false;

Vue.use(iView);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
