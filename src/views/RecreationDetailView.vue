<template>
    <div class="recreation-detail-view clearfix">
        <div class="subnav">
            <OurworkSubNav :links="link"></OurworkSubNav>
        </div>        

        <Arrow></Arrow>

        <div class="info col-xs-offset-1 col-xs-10">
            <div class="title col-xs-12" >
                <img src="../assets/img/main/recreation-title.png" alt="">
                <p>The world's leading fashion brand DIESEL landed in Shanghai Exhibition Center, bringing DIESEL official opening party for shanghai international fashion showcase(SIFS). Its design inspiration was derived 
from the daily life, along with the trends, justified The brand's features of always being young and cutting edge.</p>
            </div>
            <div class="content col-xs-12">
                <!-- <img src="../assets/img/main/video-bg.jpg" alt=""> -->
                <img src="../../static/video-bg.jpg" alt="11">
                <div class="hover">
                    <div class="mask"><div class="middle"><img src="../assets/img/icon/play.png" alt=""></div></div>
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
import OurworkSubNav from '../components/OurworkSubNav.vue'
import Arrow from '../components/Arrow.vue'
import Bus from '../assets/lib/helper/bus'
import Share from '../components/Share.vue'

export default {
    name : 'recreation-detail-view',
    components : { OurworkSubNav, Arrow, Share },
    data (){
        return {
            link : 'recreation'
        }
    },
    mounted(){
        Bus.$emit('canvas-open');
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

.recreation-detail-view {
    padding-bottom: 150px;

    .subnav {
        padding-top: 80px;
    }

    .info {
        padding-top: 8em;
    }

    .title {
        text-align: center;
        padding: 0 5em;

        p {
            line-height: 2em;
        }
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
        position: relative;

        >img {
            width: 100%;
        }

        &:hover {
            .hover {
                opacity: 1;
                transition: all 0.3s ease-in-out; 
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
                
                display: table;
            }

            .middle {
                display: table-cell;
                vertical-align: middle;
                text-align: center;

                img {
                    cursor: pointer;
                }
            }
        }
    }

    .share {
        text-align: center;
    }
}

@media screen and (max-width: @max-width) {
.recreation-detail-view {

    .info {
        padding-top: 5em;
    }

    .title {
        padding: 0 2em;

        img {
            width: 100%;
        }
    }

    .content {
        margin: 3em 0;

        .hover {
            padding: 5px;
            opacity: 1;
        }
    }
}
}
</style>