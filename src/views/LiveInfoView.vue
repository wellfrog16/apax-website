<template>
    <div class="info-view live-info-view clearfix">
        <div class="info live col-xs-offset-2 col-xs-8">
            <img src="../assets/img/main/live-title.png" alt="">
            <br><br><br>
            <p>PAX LIVE unites entertainment, music & lifestyle concepts, and experiences through two unique platforms – Fashion Rocks & Shanghai International Fashion Showcase (SIFS).  </p>
            <br><br>
            <router-link to="live/nav"><img src="../assets/img/main/more.png" alt=""></router-link>
            
        </div>
    </div>
</template>

<script>
import Bus from '../assets/lib/helper/bus';

export default {
    name : 'live-info-view',
    mounted(){
        setTimeout(()=> this.$('.live-info-view').fadeIn(), 500);

        Bus.$emit('canvas-close');
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.live-info-view {
    display: none;
}

.info-view {

    .live {
        padding-top: 10vh;
    }
}

@media screen and (max-width: @max-width) {
.info-view {    

    .live >img {
            width: 100%;
        }
    }
}
</style>
