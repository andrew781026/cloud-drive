import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import apolloProvider from './graphql/apolloProvider'
import './assets/styles/index.css';

// install element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-TW';
Vue.use(ElementUI, {locale});

// collapse 展开折叠
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
    // inject apolloProvider here like vue-router or vuex
    apolloProvider,
    render: h => h(App)
}).$mount('#app');

