<template>
    <div class="newsInfo_container" >
        <h3 class="title">{{ newsInfo.title }}</h3>
        <p>
            <span>发表时间：{{ newsInfo.add_time | dateFormat }}</span>
            <span>点击：{{ newsInfo.click }}次</span>
        </p>
        <hr>

        <!--content-->
        <div v-html="newsInfo.content"></div>
        <comment :cmtid="id"></comment>
    </div>
</template>

<script>
    import comment from '../common/comment.vue'
    export default {
        name: "newsInfo",
        //注册子组件
        components:{
            comment
        },
        data(){
            return{
                id:this.$route.params.id,
                newsInfo:{},
            }
        },
        created(){
          this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$axios.get('/api/getnew/'+this.id)
                    .then(result => {
                        console.log(result)
                        if(result.data.status === 0){
                            this.newsInfo = result.data.message[0]
                        }
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .newsInfo_container{
        h3{
            color: red;
            font-size: 22px;
            text-align: center;
            padding: 20px 0;
        }
        p{
            color: #31b0d5;
            font-size: 10px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>