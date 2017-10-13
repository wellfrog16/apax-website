<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-9 col-xs-12" >Tiffany Blue Book Taimiao Gala </div>
            <div class="date col-sm-3 col-xs-12"><span> Beijing, China - Oct.23, 2010</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/1.jpg" alt="">
                    <p>Beijing was filled with jewelry from the Tiffany 2011 collection and there were 400 guests dining under a transparent tent in front of the Taimiao and listening to Donna Summer live.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-5/2.jpg" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="s41 center col-xs-9"><img src="../../static/iconic-detail-5/3.jpg" alt=""></div>
                <div class=" col-xs-12">
                <div class="sone col-xs-offset-4  col-xs-7"><img src="../../static/iconic-detail-5/4.jpg" alt=""></div>
				</div>
            </div>
            <div class="title col-sm-9 col-xs-12" >Tiffany Diamond </div>
           	<div class="date col-sm-3 col-xs-12"><span> Beijing, China - Dec.7, 2013</span></div>
           	<div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/5.jpg" alt="">
                    <p> & E Mansion was turned into a Tiffany Blue Temple for the Tiffany legendary yellow diamond ceremony.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-8">
                    <img src="../../static/iconic-detail-5/6.jpg" alt="">
                </div>
                <div class="col-xs-4">
                	<p>The guests were impressed by the beauty of the yellow diamond. Artist Tan Dun presented and performed the music that specially composed for the legendary diamond, together to create a Tiffany dream night.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" center col-xs-12"><img src="../../static/iconic-detail-5/7.jpg" alt=""></div>
            </div>
            <div class="title col-sm-9 col-xs-12" >“The Art of Transformation”  </div>
            <div class="date col-sm-3 col-xs-12"><span> Beijing, China - Jun.3, 2016</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/8.jpg" alt="">
                    <p>Tiffany & Co. held a glorious exhibition titled “The Art of Transformation” which consisted of 200 stunning fine jewelry pieces, with the worldwide debut of 70 fine jewelry and the precious antique jewelry collection.</p>
                </div>
                
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="s41 center col-xs-9"><img src="../../static/iconic-detail-5/9.jpg" alt=""></div>
                <div class=" col-xs-12">
                <div class="sone col-xs-offset-4  col-xs-7"><img src="../../static/iconic-detail-5/10.jpg" alt=""></div>
				</div>
				<div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class=" col-xs-offset-1 col-xs-10">
                    <img src="../../static/iconic-detail-5/11.jpg" alt="">
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-offset-1 col-xs-10">
                    <img src="../../static/iconic-detail-5/12.jpg" alt="">
                </div>
            </div>
            <div class="title col-sm-9 col-xs-12" >“This is Tiffany” </div>
            <div class="date col-sm-3 col-xs-12"><span> Beijing, China - Jun.9, 2017</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail-5/13.jpg" alt="">
                    <p> “This is Tiffany” brand cultural exhibition took place in Phoenix International Media Center Beijing. The "This is Tiffany" brand cultural exhibition recalled the legendary history of Tiffany & Co. by recreating the journey through five display areas.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="s41 center col-xs-9"><img src="../../static/iconic-detail-5/14.jpg" alt=""></div>
                <div class="sone col-xs-offset-4  col-xs-7"><img src="../../static/iconic-detail-5/15.jpg" alt=""></div>
                <div class=" col-xs-12">
                    <img src="../../static/iconic-detail-5/16.jpg" alt="">
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
	.sone{
		top:-100px;
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
	.sone{
		top: -40px;
	}
    .s43 {
        padding: 0px 10px;
        line-height: 1.5em;
    }
}
}
</style>