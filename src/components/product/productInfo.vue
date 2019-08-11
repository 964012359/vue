<template>
    <div>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in banner":key="item.id">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="title" v-for="item in productInfo" :key="item.id">
            <div class="price">
                <h2>{{ item.title}}</h2>
                <p>
                    市场价：<span class="one">{{ item.market_price}}</span>
                    销售价：<span class="two">{{ item.sell_price}}</span>
                </p>
                <p>
                    购买数量：
                </p>
                <button>立即购买</button>
                <button>加入购物车</button>
            </div>

            <div class="param">
                <h2>商品参数</h2>
                <div>
                    <p>商品货号：{{ item.goods_no }}</p>
                    <p>库存情况：{{ item.stock_quantity}}</p>
                    <p>上架时间：{{ item.add_time | dateFormat}}</p>
                </div>
                <div class="btn">
                    <router-link tag="button" :to="'/home/productImg/'+item.id"  size="large" class="btn1">图文介绍</router-link>
                    <router-link tag="button" :to="'/home/comment/'+item.id" size="large" class="btn2">商品评论</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "productInfo",
        data(){
            return{
                id:this.$route.params.id,
                banner:[],
                productInfo:[]
            }
        },
        created(){
          this.getBanner();
          this.getProductInfo();
        },
        methods:{
            getBanner(){
                this.$axios.get('/api/getthumimages/'+this.id)
                    .then(result => {
                        if(result.data.status === 0 ){
                            this.banner = result.data.message
                        }
                    })
            },
            getProductInfo(){
                this.$axios.get('/api/goods/getinfo/'+this.id)
                    .then(result => {
                        if(result.data.status === 0){
                            this.productInfo = result.data.message
                        }
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 320px;
        padding: 10px ;
        margin: 10px;
        box-shadow: 0 0 10px #888888;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .price{
        padding: 10px ;
        margin: 10px;
        box-shadow: 0 0 10px #888888;
        h2{
            font-size: 18px;
            display: inline-block;
            width: 100%;
            border-bottom: 1px solid #888888;
            padding-bottom: 10px;
        }
        p{
            font-size: 14px;
            .one{
                text-decoration: line-through;
            }
            .two{
                color: red;
                font-size: 16px;
                font-weight: bold;
            }
        }
    }
    .param{
        padding: 10px ;
        margin: 10px;
        box-shadow: 0 0 10px #888888;
        h2{
            font-size: 18px;
            display: inline-block;
            width: 100%;
            border-bottom: 1px solid #888888;
            padding-bottom: 10px;
        }
        .btn{
            padding:10px;
            .button{


            }
            .btn1{
                color: rgb(38,162,255);
                border: 1px solid rgb(38,162,255);
                display: block;
                width: 100%;
                font-size: 18px;
                margin: 10px 0;
            }
            .btn2{
                color: hotpink;
                border: 1px solid hotpink;
                display: block;
                width: 100%;
                font-size: 18px;
            }

        }
    }
</style>