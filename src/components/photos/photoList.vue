<template>
    <div>
        <div id="slider" class="mui-slider" data-slider="4">

            <div id="sliderSegmentedControl"
                 class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted
    mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <!--这里放置真实显示的DOM内容-->
                        <a @click="getPhotoList(item.id)" v-for="(item,index) in cated" :key="item.id">
                            {{ item.title }}

                        </a>

                    </div>
            </div>
            <ul>
                <router-link tag="li" :to="'/home/photoInfo/'+ item.id"  class="photo" v-for="item in photoList" :key="item.id">
                    <div class="title">
                        <p>{{ item.title}}</p>
                        <p>{{ item.zhaiyao}}</p>
                    </div>
                    <img :src="item.img_url" alt="">
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min'
    //1.导入mui.js报错
    //2.分析：可能是mui.js中用的了'caller'等来封装的，但是我们通过webpack搭
    // 建的项目中可能启动了严格模式
    export default {
        name: "photoList",
        mounted(){
            mui('.mui-scroll-wrapper').scroll()
        },
        data(){
            return{
                cated:[],
                photoList:[]
            }
        },
        created(){
            this.getAllCategory()
            this.getPhotoList(0)
        },
        methods:{
            getAllCategory(){
                this.$axios.get('/api/getimgcategory')
                    .then(result => {
                        if(result.data.status===0){
                            result.data.message.unshift({title:'全部',id:0}),
                            this.cated = result.data.message
                        }
                    })
            },
            getPhotoList(cateid){
                this.$axios.get('/api/getimages/'+cateid)
                    .then(result => {
                        if(result.data.status === 0 ){
                            this.photoList = result.data.message
                        }
                    })
            }
         },
    }
</script>

<style lang="scss" scoped>
    a{
        display: inline-block;
        margin: 10px 20px;
        color: #000;
    }
    ul{
        padding: 0;
    }
    .photo{
        list-style-type: none;
        box-shadow: 0px 0px 10px #888888;
        margin: 10px;
        position: relative;
        .title{
            height: 100px;
            overflow: hidden;
            position: absolute;
            bottom: 0;
            p{
                color: white;
            }
        }
        img{
            height: 100%;
            width: 100%;
        }
    }
</style>