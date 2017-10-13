<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-9 col-xs-12" >Fendi on the Wall</div>
            <div class="date col-sm-3 col-xs-12"><span> The Great Wall, Beijing, China - Oct. 19, 2007</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-1/1.jpg" alt="">
                    <p>Karl Lagerfeld and Fendi held a monumental fashion show - atop the Great Wall of China, no less - the first ever fashion show in history at the Great Wall.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-10">
                    <img src="../../static/iconic-detail-1/2.jpg" alt="">
                    <p>The show was capped off with giant double-F logos projected onto neighboring mountains. "This is about positioning Fendi for the next 50 years," says Fendi CEO Michael Burke. </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-1/3.jpg" alt="">
                    <p>With a section of the awe-inspiring, 4,000-mile-long structure snaking up the mountain behind them, 88 models walked a runway 88 meters long in an expanded version of Fendi's spring-summer collection. Hundreds of journalists and TV crews were invited to document the event, 
                    	along with some of its best customers from Asia. Flanking the show were a series of dinners and cocktails.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="s41 center col-xs-9"><img src="../../static/iconic-detail-1/4.jpg" alt=""></div>
                <div class=" col-xs-12">
                <div class="s43 col-xs-5">For both Fendi and Karl Lagerfeld, “Fendi on the Wall” was recorded as an epic masterpiece in history.</div>
                <div class="s42  col-xs-7"><img src="../../static/iconic-detail-1/5.jpg" alt=""></div>
				</div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-1/6.jpg" alt=""></div>
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