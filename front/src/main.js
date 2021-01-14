import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.css';

// install material-icons
import 'material-icons/iconfont/material-icons.css';

// install element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-TW';
Vue.use(ElementUI, {locale});

// collapse 展開折疊
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)

// install vue-composition-api
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

// productionTip must be true when production
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
