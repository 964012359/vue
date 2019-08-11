<template>
    <div>
        <h3 class="title">{{ photoInfo.title }}</h3>
        <p>
            <span>发表时间：{{ photoInfo.add_time | dateFormat}}</span>
            <span>点击：{{ photoInfo.click}}次</span>
        </p>
        <hr>
        <vue-preview :slides="imgList" @close="handleClose"></vue-preview>


        <div v-html="photoInfo.content" class="content"></div>
        <comment :cmtid="id"></comment>
    </div>
</template>

<script>
    import comment from '../common/comment.vue'

    export default {
        name: "photoInfo",
        components:{
            comment
        },
        data(){
          return{
              id:this.$route.params.id,
              photoInfo:{},
              imgList:[],
          }
        },
        created(){
            this.getPhotoInfo();
            this.getImgList();
        },
        methods:{
            getPhotoInfo(){
                this.$axios.get('/api/getimageInfo/'+ this.id)
                    .then(result => {
                        if(result.data.status ===0){
                            this.photoInfo = result.data.message[0]
                        }
                    })
            },
            getImgList(){
                this.$axios.get('/api/getthumimages/'+this.id)
                    .then(result => {
                        if(result.data.status === 0){
                            result.data.message.forEach(function (item,i) {
                                item.msrc = item.src;
                                item.w=600;
                                item.h=400;
                            })
                            this.imgList = result.data.message
                        }
                    })
            },
            handleClose () {
                console.log('close event')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title{
        color: #26a2ff;
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
    .content{
        margin: 15px;
        font-size: 16px;
        line-height: 35px;
        height: 140px;
        overflow: hidden;
    }
</style>