<template>
    <div>
        <!--banner-->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in banner":key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>

        </mt-swipe>
        <!--六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList" href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList" href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/productList" href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                banner:[]
            }
        },
        created(){
            this.getBanner()
        },
        methods:{
            getBanner(){
                this.$axios.get('http://www.liulongbin.top:3005/api/getlunbo')
                    .then(result => {
                        console.log(result)
                        if(result.data.status===0){
                            this.banner = result.data.message
                        }
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-grid-view.mui-grid-9{
        /*margin-top: 100px;*/
        background-color: #fff;
        .mui-table-view-cell{
            border:none;
            width: 33.33%;
            a{
                width:100%;
                img{
                    width: 50%;
                }
            }
        }
    }
    .mint-swipe{
        height: 250px;
        img{
            width: 100%;
            height: 100%;
        }
    }

</style>