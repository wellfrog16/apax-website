<template>
    <div class="main-nav">
        <div class="nav1"></div>
        <div class="nav2"></div>
        <div class="nav-toggle" @click="goNav"></div>
        <div class="nav"></div>
        <div class="language"><span>中文</span><span>EN</span></div>
    </div>
</template>


<script>
export default {
    name : 'main-nav',
    methods : {
        goNav (){
            this.$router.push('nav');
        }
    }
}
</script>

<style lang="less">

@import '../assets/style/common.less';

.main-nav {
    @padding-height : 40px;
    @padding-width: 20px;

    >div {
        z-index: 10;
    }

    .nav1 {
        width: 16px;
        height: 14px;
        background-image: url('../assets/img/icon/triangle-border.png');
        position: fixed;
        top: @padding-height;
        left: @padding-width;
        cursor: pointer;

        &:hover {
            background-position-x: -16px;
        }
    }

    .nav2 {
        width: 15px;
        height: 14px;
        background-image: url('../assets/img/icon/triangle-grey.png');
        position: fixed;
        bottom: @padding-height;
        left: @padding-width;
        cursor: pointer;

        &:hover {
            background-position-x: -15px;
        }
    }

    .nav-toggle {
        width: 20px;
        height: 13px;
        background-image: url('../assets/img/icon/nav-toggle.png');
        position: fixed;
        top: @padding-height;
        right: @padding-width;
        cursor: pointer;

        &:hover {
            background-position-x: -20px;
        }
    }

    .language {
        position: fixed;
        bottom: @padding-height;
        right: @padding-width;

        span {
            margin-left: 10px;
            cursor: pointer;

            &:hover {
                color: @over-color;
            }
        }
    }
}
</style>


