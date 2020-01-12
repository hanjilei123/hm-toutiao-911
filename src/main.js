import Vue from 'vue'
import App from './App.vue'
import router from './permission' // 经过权限处理的router
import store from './store'
import Vant from 'vant' // 引入 vant组件库
import plugin from '@/utils/plugin'
import 'vant/lib/index.less' // vant 样式文件 换成less
import '@/styles/index.less' // 引入全局的自定义样式  因为要覆盖vant的样式
import 'amfe-flexible' // 引入自动适配插件
Vue.use(Vant) // 一旦完成注册  在任意位置就可以使用 Vant组件库的组件
Vue.use(plugin) // 注册小插件 会调用插件中的install方法
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
