<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-9 col-xs-12" >Exhibition - Audemars Piguet</div>
            <div class="date col-sm-3 col-xs-12"><span> Shanghai, China - Oct.29, 2016</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-6/1.jpg" alt="">
                    <p>Swiss luxury watchmaker Audemars Piguet kicked off its new exhibition at the Yuz Museum in Shanghai. The exhibition took visitors on a journey through Audemars Piguet’s history - its exquisite art of watchmaking and its role as being a pioneer in the world of contemporary art.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-offset-1 col-xs-10">
                    <img src="../../static/iconic-detail-6/2.jpg" alt="">
                    <p>Showcases included amazing photography collection by Dan Holdsworth and Wild Constellations by Alexandre Joly, both were inspired by Vallée de Joux, where Audemars Piguet was founded. The film was taken by Chinese artist Chen Ran that tells the story between Audemars Piguet and its origin. </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-offset-1 col-xs-10">
                    <img src="../../static/iconic-detail-6/3.jpg" alt="">
                    <!--<p>An incredible architectural installation conceived by French designer Mathieu Lehanneur was presented as a showroom that was in the form of an immense copper-made ring consisted by twelve rooms. Each of the twelve rooms revealed a story about Audemars Piguet through vintage and contemporary pieces: from its origins to the 21st century, from watchmaking to contemporary art. 200 timepieces were displayed across the twelve rooms,
                    	 making it the largest collection of Audemars Piguet timepieces ever to be shown outside of the Museum. </p>-->
                </div>
                <div class="s41 center col-xs-6"><img src="../../static/iconic-detail-6/4.jpg" alt=""></div>
                <div class="s43 col-xs-6">An incredible architectural installation conceived by French designer Mathieu Leha.</div>
            	<!--<div class="s43 col-xs-5">An incredible architectural installation conceived by French designer Mathieu Lehanneur was presented as a showroom that was in the form of an immense copper-made ring consisted by twelve rooms. Each of the twelve rooms revealed a story about Audemars Piguet through vintage and contemporary pieces: from its origins to the 21st century, from watchmaking to contemporary art. 200 timepieces were displayed across the twelve rooms,
                    	 making it the largest collection of Audemars Piguet timepieces ever to be shown outside of the Museum.</div>-->
                <div class="s42 col-xs-offset-7  col-xs-5"><img src="../../static/iconic-detail-6/5.jpg" alt=""></div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-6/6.jpg" alt=""></div>
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
    	top: -50px;
        z-index: 1;
    }

    .s42 {
        top: -400px;
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
        top: -60px;
    }

    .s43 {
        padding: 50px 20px;
        line-height: 1.5em;
    }
}
}
</style>