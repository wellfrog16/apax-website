<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-9 col-xs-12" >HUAWEI Global product launch Barcelona</div>
            <div class="date col-sm-3 col-xs-12"><span> GreaBarcelona, Spain - Feb. 26, 2017</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-4/1.jpg" alt="">
                    <p>Huawei launched their new products to a worldwide audience - the W Product 2017 world Press Conference in Barcelona for their new Huawei P10 and smart watch.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="s41 center col-xs-9"><img src="../../static/iconic-detail-4/2.jpg" alt=""></div>
                <div class=" col-xs-12">
                <div class="s43 col-xs-5">The semi-circle door as the Façade showed a diamond cutting surface that formed as a natural crack to metaphor the breakthrough in innovation and the modern and art attraction. The special dress sculpture at the entrance reception featured the color of Huawei P10 cases that shine under the sky.</div>
                <div class="s42  col-xs-7"><img src="../../static/iconic-detail-4/3.jpg" alt=""></div>
				</div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-4/4.jpg" alt="">
                	<p>The lighting show and animation effects welcomed Speakers at the launch moment. Instead of making them walk from backstage to the front, we put them on the blind area by playing around the light and shades. Speakers appeared when the sunbeam penetrated the dark spot.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-offset-1 col-xs-10">
                    <img src="../../static/iconic-detail-4/5.jpg" alt="">
                    <p>The demo area presented a strong fashion approach with art gallery. Leica Studio was special designed for providing an immediate experience with P10 camera. Guests shared the real time experience on social media.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-4/6.jpg" alt="">
                    <p>The event received high reputation, the buzz was well created via social media. Tens of thousands of articles and reviews that helped drive sales to an all-time high.</p>
                </div>
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
import OurworkSubNav from '@/components/OurworkSubNav.vue';
import AContent from '@/components/AContent.vue';
import Share from '@/components/Share.vue';
import Arrow from '@/components/Arrow.vue';

export default {
    name : 'iconic-detail-view',
    components : { OurworkSubNav, AContent, Arrow, Share },
    data(){
        return {
            link : 'events',
            info : {}
        }
    },
    created(){
        this.$bus.$emit('canvas-open');
    },
    mounted(){
        window.scrollTo(0, 0);
        let sr = this.$sr({ reset: true, delay: 0 });
        sr.reveal('.content div', { duration: 1000 });
    },
    methods : {
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/style/common.less';

.iconic-detail-view {
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

        .space {
            padding: 10px 0;
        }

        .center {
            text-align: center;
        }

        img {
            width: 100%;
        }
    }

    .s11 {
        top: -100px;
        z-index: 1;
    }

    .s12 {
        top: -200px;
    }

    .s21 {
        top: -50px;
    }

    .s31 {
        z-index: 3;
    }

    .s32 {
        z-index: 2;
        top: -50px;
    }

    .s33 {
        top: -100px;
    }

    .s41 {
        z-index: 1;
    }

    .s42 {
        top: -100px;
    }

    .s43 {
        padding-top: 450px;
        line-height: 2em;
    }
}

@media screen and (max-width: @max-width) {
.iconic-detail-view {
    .info {
        padding-top: 4em;
    }

    .title {
        font-size: 1.5em;
    }

    .date {
        text-align: left;
    }

    .s11 {
        top: -20px;
        z-index: 1;
    }

    .s12 {
        top: -40px;
    }

    .s21 {
        top: -20px;
    }

    .s31 {
        z-index: 3;
    }

    .s32 {
        z-index: 2;
        top: -20px;
    }

    .s33 {
        top: -40px;
    }

    .s41 {
        z-index: 1;
    }

    .s42 {
        top: -40px;
    }

    .s43 {
        padding: 0px 10px;
        line-height: 1em;
    }
}
}
</style>