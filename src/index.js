//1.导入项目框架
import Vue from 'Vue'
import App from './app.vue'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)
//导入mui
import './lib/mui/css/mui.min.css'
//导入mui扩展图标库
import './lib/mui/css/icons-extra.css'
//导入公共样式
import './app.css'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/';

//下载moment.js,时间插件
import moment from 'moment'
//设置全局过滤器，用来格式化时间
Vue.filter('dateFormat',function (dataStr,partern="YYYY-MM-DD HH:mm:ss") {
    //YYYY-MM-DD HH:mm:ss
    return  moment().format(partern)
})


//导入图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



new Vue({
    el:'#app',
    data:{},
    render: c => c(App),
    router
})