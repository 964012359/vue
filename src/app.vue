<template>
    <div class="app_container">
        <!--header-->
        <mt-header fixed title="VueWebpack"></mt-header>


        <!--router-view-->
        <transition>
            <router-view>

            </router-view>

        </transition>




        <!--tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="my-mui-tab-item" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/member" class="my-mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/shopcar" class="my-mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/search" class="my-mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>


    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>
    .mint-header.is-fixed{
        /*z-index: 9999;*/
    }
    .app_container{
        padding-top:40px;
        padding-bottom: 50px;
        overflow-x:hidden
    }
    .v-enter{
        opacity:0;
        transform:translateX(100%);
    }
    .v-leave-to{
        position: absolute;
        opacity:0;
        transform:translateX(-100%);
    }
    .v-enter-active,
    .v-leave-active{
        transition:all 1s linear;
    }

    .mui-bar-tab .my-mui-tab-item.mui-active {
        color: #007aff;
    }

    .mui-bar-tab .my-mui-tab-item {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .my-mui-tab-item .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .my-mui-tab-item .mui-icon[data-v-bced26ea] {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .my-mui-tab-item .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>