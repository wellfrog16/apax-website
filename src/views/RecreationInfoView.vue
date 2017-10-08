<template>
    <div class="info-view recreation-info-view clearfix">
        <div class="info recreation col-xs-offset-2 col-xs-8">
            <img src="../assets/img/main/recreation-title.png" alt="">
            <br><br><br>
            <p>Discovery Adventures Parks – As the exclusive Adventure Park Licensee in Greater China for the Discovery brand name, APAX RECREATION has created the World’s FIRST Discovery Adventures Park, located in Moganshan, Zhejiang province. The park is the perfect outdoor exploration and extreme sport destination; combining real geographic features, top level facilities, a complete system of courses, and an international coach team of trained professionals.  APAX Recreation brings to life the Discovery brand DNA of Curiosity, Adventure, Exploration and Experience, with a four-season opportunity for visitors to experience the freedom of the natural world, to share lifelong memories with family and friends, and to find inspiration on their own journey of Discovery.</p>
            <br><br>
            <router-link to="recreation/detail"><img src="../assets/img/main/more.png" alt=""></router-link>
            
        </div>
    </div>
</template>

<script>
export default {
    name : 'recreation-info-view',
    mounted(){
        setTimeout(()=> this.$('.recreation-info-view').fadeIn(), 500);
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.recreation-info-view {
    display: none;
}

.info-view {

    .recreation {
        padding-top: 10vh;
    }
}

@media screen and (max-width: @max-width) {
.info-view {    

    .recreation >img {
            width: 100%;
        }
    }
}
</style>
