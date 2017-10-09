<template>
    <div class="sifs-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-10 col-xs-12" >{{ info.title }}</div>
            <div class="date col-sm-2 col-xs-12"><span>{{ info.date }}</span></div>
            <div class="content col-xs-12">
                <AContent :content="info.content"></AContent>
            </div>
            <div class="back col-xs-1">
                <a href="#" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-8">
                <Share></Share>
            </div>
        </div>
    </div>
</template>

<script>
import OurworkSubNav from '../components/OurworkSubNav.vue'
import AContent from '../components/AContent.vue'
import Share from '../components/Share.vue'
import Arrow from '../components/Arrow.vue'
import Bus from '../assets/lib/helper/bus'

export default {
    name : 'sifs-detail-view',
    components : { OurworkSubNav, AContent, Arrow, Share },
    data(){
        return {
            link : 'sifs',
            info : {
                title : '1',
                date : null,
                content : '2'
            }
        }
    },
    created(){
        //console.log(this.$route.params)
        // this.$axios.get('http://jsonplaceholder.typicode.com/photos/' + this.$route.params.id).then((response) => {
        //     this.info = response.data;
        //     this.info.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
        //     this.info.content = `
        //         大量内容
        //     `
        //     window.scrollTo(0, 0);
        //     //console.log(this.info)
        // }, (error) => {
        //     console.log(error)
        // });
    },
    mounted(){
        Bus.$emit('canvas-open');
        this.$axios.get('http://www.tron-m.com/apax/news/get.do?id=' + this.$route.params.id).then((response) => {
            //console.log(response.data.result);
            this.info.title = response.data.result.enTitle;
            this.info.content = response.data.result.enHtml;
            this.info.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
            // this.info.content = `
            //     大量内容
            // `
            window.scrollTo(0, 0);
        }, (error) => {
            console.log(error)
        });
    },
    methods : {
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.sifs-detail-view {
    padding-bottom: 150px;

    .subnav {
        padding-top: 80px;
    }

    .info {
        padding-top: 8em;
    }

    .title {
        font-size: 3em;
    }

    .date {
        text-align: right;

        span {
            position: relative;
            top:2em;
        }
    }

    .content {
        margin: 5em 0;
    }

    .share {
        text-align: center;
    }
}

@media screen and (max-width: @max-width) {
.sifs-detail-view {
    .info {
        padding-top: 4em;
    }

    .title {
        font-size: 1.5em;
    }

    .date {
        text-align: left;
    }
}
}
</style>