<template>
    <div class="events-detail-view clearfix">
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
            <div class="col-xs-2">
                <router-link :to="{ name : 'events-detail', params : { id : prevId } }" v-if="!prevId==0"><img src="../assets/img/icon/page-prev.png" alt=""></router-link>
                <router-link :to="{ name : 'events-detail', params : { id : nextId } }" v-if="!nextId==0"><img src="../assets/img/icon/page-next.png" alt=""></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import OurworkSubNav from '@/components/OurworkSubNav.vue';
import AContent from '@/components/AContent.vue';
import Share from '@/components/Share.vue';
import Arrow from '@/components/Arrow.vue';
import config from '@js-app/config';

export default {
    name : 'events-detail-view',
    components : { OurworkSubNav, AContent, Arrow, Share },
    data(){
        return {
            link : 'events',
            title : '',
            config,
            info : {
                title : '1',
                date : null,
                content : '2'
            },
            prevId : 0,
            nextId : 0
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.setBg();
        this.setPage();
        this.loadDetail();
        next();
    },
    created(){
        this.setBg();
        this.setPage();

    },
    mounted(){
        this.loadDetail();
    },
    methods : {
        goback(){
            this.$router.go(-1);
        },

        setBg(){
            this.$bus.$emit('canvas-open');
        },

        setPage(){
            this.$axios.get('http://www.tron-m.com/apax/news/navigation.do?id=' + this.$route.params.id + '&category=ourwork').then((response) => {
                //console.log(response);
                var data = response.data.result;

                if (data.prev) { this.prevId = data.prev.id; }

                if (data.next) { this.nextId = data.next.id; }

            }, (error) => {
                console.log(error)
            });
        },

        loadDetail(){
            this.$axios.get('http://www.tron-m.com/apax/news/get.do?id=' + this.$route.params.id).then((response) => {
                //console.log(response.data.result);
                this.info.title = response.data.result.enTitle;
                this.info.content = response.data.result.enHtml;
                this.info.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
                window.scrollTo(0, 0);
            }, (error) => {
                console.log(error)
            });
        }
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.events-detail-view {
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
.events-detail-view {
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