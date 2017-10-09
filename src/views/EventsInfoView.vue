<template>
    <div class="info-view events-info-view clearfix">
        <div class="info events col-xs-offset-2 col-xs-8">
            <img src="../assets/img/main/events-title.png" alt="">
            <h3>EXPERIENTIAL MARKETING</h3>
            <p>APAX EVENTS provides immersed “Experiential Marketing” service integrating all aspects in communication and resources. <p>
            <p>Our offices in Asia and business network covers throughout the world. </p>
            <p>We develop and deliver a wide range of services covering fashion and premium events, art exhibitions, retail design, as well as <br> official fashion organization management such as Shanghai Fashion Week and Shanghai International Fashion Showcase. </p>

            <router-link to="/ourwork/events/list"><img src="../assets/img/main/more.png" alt=""></router-link>
            
        </div>
    </div>
</template>

<script>
import Bus from '../assets/lib/helper/bus';

export default {
    name : 'events-info-view',
    mounted(){
        setTimeout(()=> this.$('.events-info-view').fadeIn(), 500);

        Bus.$emit('canvas-close');
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.events-info-view {
    display: none;
}

.info-view {    

    .events {
        padding-top: 5vh;
    }
}

@media screen and (max-width: @max-width) {
.info-view {    

    .events >img {
            width: 100%;
        }
    }
}
</style>
