<template>
    <div class="iconic-list-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="list col-xs-offset-1 col-xs-10">
            <div class="item" v-for="item in items" :key="item.id" @click="goDetail(item.id)">
                <img alt="" :src="item.imgSrc">
                <div class="hover">
                    <div class="mask">
                        <h2>{{ item.title }}</h2>
                        <div class="date">{{ item.url }}</div>
                        <div class="brief" v-html="item.brief">{{ item.brief }}</div>
                        <router-link :to="{ name: 'iconic-detail', params: { id: item.id }}" class="more"><img src="../assets/img/main/more.png" alt=""></router-link>
                    </div>
                </div>
            </div>

            <!-- <div class="item" @click="goDeail(1)">
                <img src="../../static/iconic/101.jpg" alt="">
                <div class="hover">
                    <div class="mask">
                        <h2>Fendi on the Wall</h2>
                        <div class="date">The Great Wall, Beijing, China - Oct. 19, 2007</div>
                        <div class="brief">Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>
The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.</div>
                        <router-link :to="{ name: 'iconic-detail', params: { id: 1 }}" class="more"><img src="../assets/img/main/more.png" alt=""></router-link>
                    </div>
                </div>
            </div> -->

        </div>
    </div>
</template>

<script>
import OurworkSubNav from '../components/OurworkSubNav.vue'
import Arrow from '../components/Arrow.vue'
import Bus from '../assets/lib/helper/bus';

export default {
    name : 'iconic-list-view',
    components : { OurworkSubNav, Arrow },
    data(){
        return {
            link : 'events',
            items : this.getData()
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
    },
    updated(){
            let sr = this.$sr({ reset: true, delay: 300 });
            sr.reveal('.item', { duration: 1000 });
    },
    mounted(){
        Bus.$emit('canvas-open');
    },
    methods: {
        replaceImgSrc(){
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].thumbnailUrl = this.items[i].thumbnailUrl.replace('150', '640X180');
            }
        },

        getData(){
            var result = [];

            for(let i = 1; i<= 10; i++) {
                result.push({
                    id : i,
                    title : 'Fendi on the Wall',
                    imgSrc : 'http://www.tron-m.com/frog/apax/static/iconic/' + (100+i) + '.jpg',
                    date : 'The Great Wall, Beijing, China - Oct. 19, 2007',
                    brief : 'Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.<br>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke.'
                })
            }

            return result;
        },

        goDetail(id){
            this.$router.push({ name: 'iconic-detail', params: { id: id }});
        }
    }
}
</script>


<style lang="less">
.iconic-list-view {
    padding-bottom: 150px;

    .subnav {
        padding-top: 80px;
    }

    .list {
        margin-top: 5em;

        .item {
            font-size: 0;
            position: relative;
            margin-bottom: 2%;

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
                padding: 2em;
                position: relative;
            }

            .more {
                position: absolute;
                bottom: 2em;
                right: 2em;
            }

            .date {
                margin-bottom: 2em;
            }

            .brief {
                line-height: 2em;
            }

            h2 {
                margin-bottom: 1em;
            }
        }
    }
}
</style>