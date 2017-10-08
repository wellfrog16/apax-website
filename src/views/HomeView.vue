<template>
    <div class="info-view home-view">
        <div class="info col-xs-offset-2 col-xs-8">
            <h2>WE CREATE THE NEXT WAVE</h2>
            <p>51 Chaohun has Leading ExperientialLeading Experiential Marketing company in Asia Pacific. We focus on interpreting the brand’s DNA, providing innovative and valuable commercial solutions, through multi channels and marketing platforms.</p>

            <!-- <video src="http://tronm.oss-cn-shanghai.aliyuncs.com/apax/pc-bg.mp4"></video> -->
        </div>
    </div>
</template>

<script>
export default {
    name : 'home-view',
    mounted(){
        setTimeout(()=> this.$('.home-view').fadeIn(), 500)
        setTimeout(()=> this.$('.home-view').fadeOut(() => this.$router.push('/ourwork')), 3000)
    }
}
</script>

<style lang="less">

.home-view {
    display: none;
}

</style>
