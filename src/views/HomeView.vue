<template>
    <div class="info-view home-view clearfix">
        <div class="info col-xs-offset-2 col-xs-8">
            <h2>WE CREATE THE NEXT WAVE</h2>
            <p>Leading Experiential Marketing company in Asia Pacific. We focus on interpreting the brand’s DNA, providing innovative and valuable commercial solutions, through multi channels and marketing platforms. </p>
            <p>APAX Group presents you with multi cultural platform: EVENTS / LIVE / RECREATION With partnerships throughout the world and outstanding strength of global resources bringing you unique experiences and cooperation opportunities.We are committed to translate the best local cultures and original contents onto the international stage. We nurture, We bring forth.</p>
            <router-link to="/ourwork" class="more"><img src="../assets/img/main/more.png" alt=""></router-link>
            <!-- <video src="http://tronm.oss-cn-shanghai.aliyuncs.com/apax/pc-bg.mp4"></video> -->
        </div>
    </div>
</template>

<script>
export default {
    name : 'home-view',
    created(){
        this.$bus.$emit('canvas-close');
    },
    mounted(){
        setTimeout(()=> this.$('.home-view').fadeIn(), 500)
        //setTimeout(()=> this.$('.home-view').fadeOut(() => this.$router.push('/ourwork')), 3000);
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.home-view {
    display: none;
}

@media screen and (min-width: @max-width) {
.home-view {
    padding-top: 30vh;
}    
}

</style>
