<template>
    <div class="ourwork-nav-view">
        <div class="nav">
            <div><router-link to="/ourwork/events"><img src="../assets/img/main/events.png" alt=""></router-link></div>
            <div><router-link to="/ourwork/live"><img src="../assets/img/main/live.png" alt=""></router-link></div>
            <div><router-link to="/ourwork/recreation"><img src="../assets/img/main/recreation.png" alt=""></router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ourwork-nav-view',
    mounted(){
        setTimeout(()=> this.$('.ourwork-nav-view a').fadeIn(), 500)
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.ourwork-nav-view {
    display: table;
    width: 100%;
    height: 100vh;
    
    .nav {
        display: table-cell;
        vertical-align:middle;
        text-align:center;

        >div {
            display: inline;
            margin: 0 50px;
        }

        a {
            display: none;
        }
    }
}

@media screen and (max-width: @max-width) {
.ourwork-nav-view {    

    .nav > div {
        display: block;
        margin: 50px 0;
    }
}
}
</style>
