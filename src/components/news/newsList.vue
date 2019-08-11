<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in moment" :key="item.id">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body" >
                        <h2>{{ item.title }}</h2>
                        <p>
                            <span>发表时间：{{ item.add_time | dateFormat("YYYY-MM-DD") }}</span>
                            <span>点击次数：{{ item.click }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "newsList",
        data(){
            return{
                moment:[]
            }
        },
        created(){
            this.getMoment()
        },
        methods:{
            getMoment(){
                this.$axios.get('/api/getnewslist')
                    .then(result => {
                        if(result.data.status === 0){
                            this.moment = result.data.message
                        }
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view{
        .mui-table-view-cell{
            h2{
                font-size: 14px;
            }
            p{
                font-size: 12px;
                color: #32b281;
                display:flex;
                justify-content: space-between;
            }
        }

    }
</style>