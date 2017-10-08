<template>
    <div class="iconic-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-sm-9 col-xs-12" >HOME TO LUXURY</div>
            <div class="date col-sm-3 col-xs-12"><span>Plaza 66, Shanghai, China  September. 8, 2017</span></div>
            <div class="content col-xs-12">
                <!-- <AContent :content="info.title"></AContent> -->
                <div class="col-xs-12">
                    <img src="../../static/iconic-detail/1.jpg" alt="">
                    <p>Hang Lung Properties was set to mark a milestone in the history of its flagship Shanghai, Plaza 66, to celebrate the completion of a transformation that looks to redefine luxury retail in China. </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-offset-1 col-xs-10">
                    <img src="../../static/iconic-detail/2.jpg" alt="">
                    <p>Thousands of guests, including business partners, and investors, as well as local and overseas media attended the star-studded celebration. </p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-offset-1 col-xs-10">
                    <img src="../../static/iconic-detail/3.jpg" alt="">
                    <p>The grand celebration - Home To Luxury was to mark the transformation of Plaza 66 in Shanghai on September 8.</p>
                </div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-offset-1 col-xs-7"><img src="../../static/iconic-detail/4.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="col-xs-offset-5 col-xs-7 clearfix"><img src="../../static/iconic-detail/5.jpg" alt=""></div>
                <div class="s11 col-xs-7 clearfix"><img src="../../static/iconic-detail/6.jpg" alt=""></div>
                <div class="s12 col-xs-offset-5 col-xs-7 clearfix"><img src="../../static/iconic-detail/7.jpg" alt=""></div>


                <div class="col-xs-offset-1 col-xs-7"><img src="../../static/iconic-detail/8.jpg" alt=""></div>
                <div class="s11 col-xs-offset-5 col-xs-7"><img src="../../static/iconic-detail/9.jpg" alt=""></div>
                <div class="s12 col-xs-7"><img src="../../static/iconic-detail/10.jpg" alt=""></div>

                <div class="col-xs-offset-1 col-xs-7"><img src="../../static/iconic-detail/11.jpg" alt=""></div>
                <div class="s21 col-xs-offset-3 col-xs-7"><img src="../../static/iconic-detail/12.jpg" alt=""></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="space clearfix"></div>
                <div class="s31 col-xs-offset-4 col-xs-7"><img src="../../static/iconic-detail/13.jpg" alt=""></div>
                <div class="s32 col-xs-7"><img src="../../static/iconic-detail/14.jpg" alt=""></div>
                <div class="s33 col-xs-offset-4 col-xs-7">
                    <img src="../../static/iconic-detail/15.jpg" alt="">
                    <p>he highlight of the soiree was not only star-studded celebration but the 66 Showcases, which showed numerous luxury brands unveil their autumn/winter 2017 collections along with exclusive lines.</p>
                </div>

                <div class="col-xs-11"><img src="../../static/iconic-detail/16.jpg" alt=""></div>
                <div class="s11 col-xs-offset-1 col-xs-11">
                    <img src="../../static/iconic-detail/17.jpg" alt="">
                    <p>The 3D mapping kicked off the grand ceremony by highlighting the beauty of the plaza 66 atrium and the shopping levels. </p>
                </div>

                <div class="s41 center col-xs-5"><img src="../../static/iconic-detail/18.jpg" alt=""><br><br>Alicia Keys</div>
                <div class="s43 col-xs-7">nternational superstar, the Grammy© Award winning Singer - Alicia Keys performed her greatest hits in the splendid evening to mark the mega-scale transformation of Plaza 66.</div>
                <div class="s42 col-xs-offset-4 col-xs-8"><img src="../../static/iconic-detail/19.jpg" alt=""></div>

                <div class="center col-xs-12"><img src="../../static/iconic-detail/20.jpg" alt=""><br><br>The Rooftop Party</div>
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
        //console.log(this.$route.params)
        this.$axios.get('http://jsonplaceholder.typicode.com/photos/' + this.$route.params.id).then((response) => {
            this.info = response.data;
            this.info.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDay() + 1);
            this.info.content = `
                大量内容
            `
            window.scrollTo(0, 0);
            //console.log(this.info)
        }, (error) => {
            console.log(error)
        });
    },
    mounted(){
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

<style lang="less">
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
        top: -300px;
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