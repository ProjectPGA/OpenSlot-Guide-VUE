import Vue from 'vue';
import App from './App.vue';

import i18n from '@/localization/localization';
import { store } from './store';
import router from './router';

import vClickOutside from 'v-click-outside';
import VueMq from 'vue-mq';
import iView from 'iview';

import { Device } from '@/models/utils/Device';

import './registerServiceWorker';

import 'iview/dist/styles/iview.css';
import './styles/main.less';
import './styles/utilities.less';

Vue.config.productionTip = false;

Vue.use(VueMq, {
    breakpoints: {
        [Device.sm]: 769,
        [Device.md]: 1025,
        [Device.lg]: 1216,
        [Device.xl]: 1408,
    },
    defaultBreakpoint: 'sm',
});

Vue.use(iView);
Vue.use(vClickOutside);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
