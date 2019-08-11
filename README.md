##关于用vue写网页

### 一：导入项目软件

​	①导入项目框架vue

```
import Vue from 'Vue'
import App from './app.vue'
```

​	②导入mint-ui，mui和公共样式

```
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)
import './lib/mui/css/mui.min.css'
```

​	③导入路由，路由需要自己创建相应的组件和对象

```
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
```

​	④然后挂载

### 二：关于首页

①Tabbar渲染, 点击tabbar跳转对应的页面, 右近左出过渡效果

②从MUI中把尾部的框架复制过来，这里的购物车图标需要用到扩展图标

需要把mui的扩展图标导入进去

```
import './lib/mui/css/icons-extra.css'
```

③轮播图的样式

- 直接去mt中找到他们说的swipe样式，直接拿过来套用就可以了
- 然后渲染对应的图片进去

④六宫格的样式

- 六宫格的样式可以从mui中复制，把相应的样式修改一下直接套用就行	

### 三：新闻资讯

​	①首页直接进行渲染就行了，需要注意到的是时间的修改，需要导入全局过滤器，用来格式时间

```
//下载moment.js,时间插件
import moment from 'moment'
//设置全局过滤器，用来格式化时间
Vue.filter('dateFormat',function (dataStr,partern="YYYY-MM-DD HH:mm:ss") {
    //YYYY-MM-DD HH:mm:ss
    return  moment().format(partern)
})
```

#### 	新闻详情

，直接渲染数据添加样式，主要的是评论和加载更多

- 发表评论需要用到非空效验一下

- 然后点击加载更多显示下一页，这里需要注意的是加载更多是直接在后面添加，这里需要用到拼接

- 因为发表评论我们在很多地方需要用到，所以可以把他做成公共样式。

  - 因为是公共样式，所以这里可以用到父路由中增加子路由。

  - 首先导入，然后注册子组件，然后获取父路由的id

  - ```
    import comment from '../common/comment.vue'
    components:{
                comment
            },
    ```

### 四：图片分享

1. 点击首页的图文分享, 跳转到图文列表，进行渲染并添加样式。

2. 首部有一个局部滑动，这里需要引入mui.js，但是引入了会导致报错，所以需要做些修改

3. ```
   import mui from '../../lib/mui/js/mui.min'
   //1.导入mui.js报错
   //2.分析：可能是mui.js中用的了'caller'等来封装的，但是我们通过webpack搭
   // 建的项目中可能启动了严格模式
   ```

4.然后渲染全部图片，并做到点击标题跳转对应的图片

#### 图文详情

1. 点击图文列表的某一列渲染对应的图文详情—请求接口，直接渲染就行
2. 点击图片放大预览功能。这里需要用到图片预览插件，又需要我们导入了

```
//导入图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
```

- 图文详情下面也有一个评论列表，所以我们可以直接将之前封装好的拿来直接用，只需要直接创建它的组件名就可以

  ```
  <comment :cmtid="id"></comment>
  ```

### 五：商品购买

1. 点击首页的商品购买跳转到商品列表页面
2. 渲染商品
3. 完成商品购买中的商品列表功能模块(包含加载更多的功能效果)，加载更多和评论的加载更多一样的，直接照的写就行

#### 商品详情

- 完成商品购买中的商品详情模块, 包含轮播图，直接渲染就行
- 点击图文介绍进入对应的图文详情
  - 图文详情和图片分享中的图文详情是一样的，直接渲染就行
- 点击商品评论进入对应的商品评论
  - 这个商品评论直接用公共的评论就行，创建一个新的vue，直接放个盒子，盒子里面放子组件的组件名就行

```
<comment :cmtid="id"></comment>
```