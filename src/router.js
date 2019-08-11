import VueRouter from 'vue-router'

//导入对应的路由组件
import Home from './components/tabbar/home.vue'
import Member from './components/tabbar/member.vue'
import Shopcar from './components/tabbar/shopcar.vue'
import Search from './components/tabbar/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
import ProductList from './components/product/productList.vue'
import ProductInfo from './components/product/productInfo.vue'
import ProductImg from './components/product/productImg.vue'
import Comment from './components/common/comment.vue'

//创建路由对象
const router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:Home},
        {path:'/member', component:Member},
        {path:'/shopcar', component:Shopcar},
        {path:'/search' ,component:Search},
        {path:'/home/newsList', component:NewsList},
        {path:'/home/newsInfo/:id', component:NewsInfo},
        {path:'/home/photoList', component:PhotoList},
        {path:'/home/photoInfo/:id', component:PhotoInfo},
        {path:'/home/productList', component:ProductList},
        {path:'/home/productInfo/:id', component:ProductInfo},
        {path:'/home/productImg/:id', component:ProductImg},
        {path:'/home/comment/:id', component:Comment},
    ],
    linkActiveClass:'mui-active'
})

//把路由对象挂载上去
export default router