<template>
    <div>
        <h2>{{ productImg.title}}</h2>
        <hr>

        <div v-html="productImg.content" class="content"></div>

    </div>
</template>

<script>
    export default {
        name: "productImg",
        data(){
            return{
                id:this.$route.params.id,
                productImg:{},
            }
        },
        created(){
            this.getProductImg();
        },
        methods:{
            getProductImg(){
                this.$axios.get('/api/goods/getdesc/'+this.id)
                    .then(result => {
                        if(result.data.status === 0){
                            this.productImg = result.data.message[0]
                        }
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    h2{
        font-size: 20px;
        text-align: center;
        color: blue;
        padding: 10px 0px;
    }

</style>