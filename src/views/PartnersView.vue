<template>
    <div class="info-view partners-view clearfix">
        <div class="info col-xs-offset-2 col-xs-8">

            <h2>PARTNERS</h2>
            <br />
            <h4>51Chaohun</h4>
            <p>51 Chaohun has been a major breakthrough in “celebrity weddings". Upholding it's "life planning concept", the agency retains "planning" expertise to help people prepare for life's most important four stages. From single to fall in love; from the wedding day, to the marriage life.</p>
            <br />
            <h4>Campaign China</h4>
            <p>Campaign China creates intelligent retail solutions that push the boundaries of the consumer experience and transformative personalized brand spaces that define the retail landscape.</p>

        </div>
    </div>
</template>

<script>
import Bus from '../assets/lib/helper/bus';

export default {
    name : 'partners-view',
    mounted(){
        setTimeout(()=> this.$('.partners-view').fadeIn(), 500);
        Bus.$emit('canvas-close');
    }
}
</script>

<style lang="less">
.partners-view {
    display: none;
}
</style>
