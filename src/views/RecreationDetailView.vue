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
                    <div class="mask"><div class="middle"><img class="play" src="../assets/img/icon/play.png" alt=""></div></div>
                </div>
            </div>
            <div class="back col-xs-1">
                <a href="#" @click="goback">BACK</a>
            </div>
            <div class="share col-xs-offset-1 col-xs-8">
                <Share></Share>
            </div>
        </div>

        <!-- 播放器 -->
        <div class="player-box">
            <div>
                <div id="object">
                    <video src="../../static/recreation.mp4" controls="controls"></video>
                </div>
                <div class="close"><img src="../assets/img/icon/close.png" alt="关闭" /></div>
                <div class="tips"></div>
            </div>
        </div>
    </div>
</template>

<script>
import OurworkSubNav from '@/components/OurworkSubNav.vue';
import Arrow from '@/components/Arrow.vue';
import Share from '@/components/Share.vue';

export default {
    name : 'recreation-detail-view',
    components : { OurworkSubNav, Arrow, Share },
    data (){
        return {
            link : 'recreation'
        }
    },
    created(){
        this.$bus.$emit('canvas-open');
    },
    mounted(){
        $('.recreation-detail-view .play').on('click', () => $('.player-box').show().find('video')[0].play());
        $('.player-box .close').on('click', () => $('.player-box').hide());
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

    .player-box {
        position:fixed;
        z-index:20;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0, 0.8);
        top:0;
        display:none;

        > div {
            position:relative;
            top:50%;
            left:50%;
            margin-top:-300px;
            margin-left:-450px;
            width:900px;
            height:600px;
            padding:5px;
            background-color:#fff;
        }

        object, #object {
            width:100%;
            height:100%;

            video {
                width: 100%;
                height: 100%;
            }
        }

        .close {
            position:absolute;
            right:10px;
            top:10px;
            animation:kf-close-out 500ms ease;
            cursor:pointer;

            &:hover {
                animation:kf-close-in 500ms ease;
            }
        }

        .tips {
            position:absolute;
            bottom:20px;
            left:40px;
        }
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