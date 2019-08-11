<template>
    <div class="container" >
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="要评论就速度评论，不评论就别BB"  name="" id="" cols="30" rows="10" id="textarea" v-model="list"></textarea>

        <mt-button type="primary" size="large" @click="show">发表评论</mt-button>
        <div class="list" >
            <div class="item" v-for="(item,index) in comments" :key="comments.id">
                <div class="title">
                    第{{ index+1 }}楼  用户：{{ item.user_name}}
                    发表时间：{{ item.add_time | dateFormat}}
                </div>
                <div class="body">
                    {{ item.content }}
                </div>
            </div>
            <mt-button size="large" class="more" @click="more">加载更多</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comment",
        props:["cmtid"],
        data(){
            return{
                comments:[],
                list:'',
                pageindex:1,
                id:this.$route.params.id,
            }
        },
        created(){
            this.getComments();
            this.getComment()
        },
        methods:{
            getComments(){
                this.$axios.get('/api/getcomments/'+this.cmtid+'?pageindex='+this.pageindex)
                    .then(result => {
                        if(result.data.status === 0){
                            this.comments = this.comments.concat(result.data.message)
                        }
                    })

            },

            getComment(){
                this.$axios.get('/api/getcomments/'+this.id+'?pageindex='+this.pageindex)
                    .then(result => {
                        if(result.data.status === 0){
                            this.comments = this.comments.concat(result.data.message)
                        }
                    })

            },
            show(){
                this.$axios.post('/api/postcomment/'+this.cmtid,{content:this.list})
                    .then(result => {
                        if(this.list.length === 0)return false
                        this.getComments()
                        this.getComment()
                        this.list = ''
                    })
            },
            show(){
                this.$axios.post('/api/postcomment/'+this.id,{content:this.list})
                    .then(result => {
                        if(this.list.length === 0)return false
                        this.getComments()
                        this.getComment()
                        this.list = ''
                    })
            },
            more(){
                this.pageindex++;
                this.getComments();
                this.getComment()
            }
        },
    }
</script>

<style lang="scss" scoped>
    .list{
        .item{
            margin: 10px 0;
            .title{
                background-color: rgb(204,204,204);
                margin-top:10px;
                height: 60px;
                line-height: 30px;
                padding-right: 30px;
            }
            .body{
                height: 40px;
                line-height: 40px;
                text-indent: 2em;
            }
        }
    }
    .more{
        color: indianred;
        border:1px solid indianred;
    }
    textarea{
        height:100px;
    }
</style>