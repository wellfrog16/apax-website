<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-9 col-xs-12" >UNDER ARMOUR Stephen Curry Asian Tour</div>
            <div class="date col-sm-3 col-xs-12"><span>Taimiao, Beijing, China - July 22, 2017</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-9/1.jpg" alt="">
                    <p>For the third straight year, Stephen Curry went on the 2017 Asian tour powered by Under Armour beginning from the Imperial Ancestral Temple of Beijing.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-offset-1 col-xs-10">
                    <img src="../../static/iconic-detail-9/2.jpg" alt="">
                    <p>In the beautiful landmark building - Imperial Ancestral Temple, Under Armour kicked off the evening with a fashion show combined modern chic and classical elegance together to bring the audience a brand-new experience.It was a great opportunity for fans across Asia to receive firsthand training from Stephen and his brother Seth Curry (Dallas Mavericks point guard). </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="s41 center col-xs-9"><img src="../../static/iconic-detail-9/3.jpg" alt=""></div>
                <div class=" col-xs-12">
                <div class="s42 col-xs-offset-4 col-xs-8"><img src="../../static/iconic-detail-9/4.jpg" alt="">
                	<p>he new 3ZERO unveiled via the lion dance, which was hidden in the ball that the lion dangled to the stage. Stephen expressed his story and love toward the new 3ZERO. The 3rd UA Asian tour was an opportunity for Stephen to grow both on-and-off the court, as he continues to "Stare Down Destiny" and further strengthen himself mentally, physically and spiritually throughout this summer journey.</p>
                </div>
				</div>
                <div class="center col-xs-12"><img src="../../static/iconic-detail-9/5.jpg" alt=""></div>
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