<template>
    <div class="main-nav">
        <div class="nav1"></div>
        <div class="nav2"></div>
        <div class="nav-toggle" @click="goNav" v-show="toggle"></div>
        <div class="nav-close" @click="goBack" v-show="close"></div>
        <div class="nav"></div>
        <div class="language"><span>中文</span><span>EN</span></div>
    </div>
</template>


<script>
export default {
    name : 'main-nav',
    data (){
        return {
            toggle : true,
            close : false
        }
    },
    mounted(){
        this.$bus.$on('change',()=> {
            this.toggle = true;
            this.close = false;
        });
    },
    methods : {
        goNav (){
            this.$router.push('/nav');
            this.toggle = !this.toggle;
            this.close = !this.close;
        },
        goBack (){
            this.$router.go(-1);
            this.toggle = !this.toggle;
            this.close = !this.close;
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

    .nav-close {
        width: 14px;
        height: 15px;
        background-image: url('../assets/img/icon/nav-close.png');
        position: fixed;
        top: @padding-height;
        right: @padding-width;
        cursor: pointer;

        &:hover {
            background-position-x: -14px;
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


