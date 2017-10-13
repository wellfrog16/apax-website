<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-9 col-xs-12" >STAR WARS</div>
            <div class="date col-sm-3 col-xs-12"><span> Oct. 20, 2015 - Great wall, Beijin</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-7/1.jpg" alt="">
                    <p>When the third and final trailer for Star Wars: The Force Awakens was released into the world, advance ticket sales crashed website. But nothing can match Disney’s latest frankly terrifying stunt – flying an army of storm troopers in to line up on the Great Wall of China, a landmark that was once believed to be visible from space itself</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-7/2.jpg" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-offset-2 col-xs-10">
                    <img src="../../static/iconic-detail-7/3.jpg" alt="">
                    <p>With a section of the awe-inspiring, 4,000-mile-long structure snaking up the mountain behind them, 88 models walked a runway 88 meters long in an expanded version of Fendi's spring-summer collection. Hundreds of journalists and TV crews were invited to document the event, 
                    	along with some of its best customers from Asia. Flanking the show were a series of dinners and cocktails.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-7/4.jpg" alt="">
                </div>
                <!--<div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="s41 center col-xs-9"><img src="../../static/iconic-detail-1/4.jpg" alt=""></div>
                <div class=" col-xs-12">
                <div class="s43 col-xs-5">The 500 figures stood in motionless formation on the steps below one of the famous guard towers on Tuesday night, as giant billboards flashed with the message “The Force Awakens” , and fans waved the free red and blue lightsabers being handed out for the ultimate selfie. It’s an magnificent chapter for the the global premieres. </div>
                <div class="s42  col-xs-7"><img src="../../static/iconic-detail/19.jpg" alt=""></div>
				</div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-1/6.jpg" alt=""></div>-->
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
        padding: 100px 50px;
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
        line-height: 1.5em;
    }
}
}
</style>