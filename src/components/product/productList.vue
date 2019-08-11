<template>
    <div>
        <ul>
            <router-link :to="'/home/productInfo/'+item.id" tag="li" v-for="item in productList" :key="item.id">
                <img :src="item.img_url" alt="">
                <h2>{{item.title}}</h2>
                <div>
                    <p class="top">
                        <span class="sell">￥{{item.sell_price}}</span>
                        <span class="market">￥{{item.market_price}}</span>
                    </p>
                    <p class="bottom">
                        <span>热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </p>
                </div>
            </router-link>
        </ul>
        <div class="footer">
            <mt-button size="large" class="more" @click="more">加载更多</mt-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "producList",
        data(){
            return{
                productList:[],
                pageindex:1
            }
        },
        created(){
            this.getProductList()
        },
        methods:{
            getProductList(){
                this.$axios.get('/api/getgoods?pageindex='+this.pageindex)
                    .then(result => {
                        if(result.data.status ===0 ){
                            this.productList = this.productList.concat(result.data.message)
                        }
                })
            },
            more(){
                this.pageindex++;
                this.getProductList()
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        li{
            img{
                width: 100%;
            }
            display: inline-block;
            width: 47%;
            margin: 5px;
            box-shadow: 0 0 10px #888888;
            h2{
                font-size: 16px;
                height: 50px;
                /*line-height: 50px;*/
            }
            div{
                background-color: rgb(238,238,238);
                padding: 5px;
                .top{
                    .sell{
                        color: red;
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .market{
                        text-decoration:line-through;
                        padding-left: 20px;
                    }
                }
                .bottom{
                    display: flex;
                    justify-content: space-between;
                }

            }
        }
    }
    .footer{
        padding: 10px;
        .more{
            color: white;
            border:1px solid indianred;
            background-color: indianred;
        }
    }

</style>