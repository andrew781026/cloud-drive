import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import apolloProvider from './graphql/apolloProvider'
import './assets/styles/index.css';

// install element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// productionTip must be true when production
Vue.config.productionTip =  process.env.NODE_ENV === 'production';


new Vue({
    router,
    store,
    // inject apolloProvider here like vue-router or vuex
    apolloProvider,
    render: h => h(App)
}).$mount('#app');

