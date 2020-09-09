import Vue from 'vue'
import App from './App.vue'
import AredUI from '../packages'
Vue.config.productionTip = false
    // => 调用index.js中的install方法进行全局的注册
Vue.use(AredUI)
new Vue({
    render: h => h(App),
}).$mount('#app')