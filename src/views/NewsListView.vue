<template>
    <div class="news-list-view clearfix">
        
        <div class="list col-xs-offset-1 col-xs-10">
            <div class="item col-sm-6 col-xs-12" v-for="item in items" :key="item.id" @click="goDetail(item.id)">
                <img alt="" :src="item.conver">
                <div class="hover">
                    <div class="mask">
                        <h2>{{ item.title }}</h2>
                        <router-link :to="{ name: 'news-detail', params: { id: item.id }}"><img src="../assets/img/main/more.png" alt=""></router-link>
                    </div>
                </div>
            </div>
            <!-- <div class="col-xs-6">4</div> -->
        </div>
    </div>
</template>

<script>

import Arrow from '../components/Arrow.vue'
import Bus from '../assets/lib/helper/bus';

export default {
    name : 'news-list-view',
    components : { Arrow },
    data(){
        return {
            items : []
        }
    },
    created() {
        // this.$axios.get('http://jsonplaceholder.typicode.com/photos?albumId=1').then((response) => {
        //     this.items = response.data;
        //     this.items.splice(11, this.items.length);
        //     this.replaceImgSrc();
        // }, (error) => {
        //     console.log(error)
        // });
        this.items = [];
        this.$axios.get('http://www.tron-m.com/apax/news/list.do?page=1&rows=4&category=ourwork&orderBy=id:desc').then((response) => {
            
            this.items = response.data.result.content;
        }, (error) => {
            console.log(error)
        });
    },
    mounted(){
        Bus.$emit('canvas-open');
    },
    updated(){
            let sr = this.$sr({ reset: true, delay: 300 });
            sr.reveal('.item', { duration: 1000 });
    },
    methods: {
        replaceImgSrc(){
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].thumbnailUrl = this.items[i].thumbnailUrl.replace('150', '640X360');
            }
        },

        goDetail(id){
            this.$router.push({ name: 'news-detail', params: { id: id }});
        }
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.news-list-view {
    padding-top: 80px;
    padding-bottom: 150px;

    .list {
        margin-top: 5em;

        .item {
            font-size: 0;
            position: relative;

            >img {
                width: 100%;
            }

            &:hover {
                .hover {
                    opacity: 1;
                    transition: all 0.3s ease-in-out; 
                }
            }
        }

        .hover {
            position: absolute;
            height: 100%;
            width: 100%;
            padding: 12px;
            top:0;
            left:0;
            opacity: 0;
            transition: all 0.3s ease-in-out; 

            .mask {
                background-color: rgba(0, 0, 0, 0.5);
                transition: all 0.3s ease-in-out; 
                width: 100%;
                height: 100%;
                color: #fff;
                font-size: 12px;
                text-align: center;
                padding-top: 20%;
            }

            h2 {
                margin-bottom: 2em;
            }
        }
    }
}

@media screen and (max-width: @max-width) {
.news-list-view {
    
    .list {
        margin-top: 4em;
    }
}
}
</style>
