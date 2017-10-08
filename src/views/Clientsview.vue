<template>
    <div class="info-view clients-list-view clearfix">
        <div class="info col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10">

            <h2>CLIENTS</h2>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1001.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1002.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1003.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1004.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1005.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1006.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1007.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1008.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1009.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1010.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1011.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1012.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1013.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1014.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1015.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1016.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1017.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1018.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1019.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1020.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1021.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1022.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1023.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1024.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1025.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1026.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1027.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1028.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1029.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1030.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1031.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1032.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1033.png" alt=""></div>
            <div class="col-sm-2 col-xs-6"><img src="../assets/img/clients/1034.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'clients-view',
    mounted(){
        setTimeout(()=> this.$('.clients-list-view').fadeIn(), 500)
    }
}
</script>

<style lang="less">
.clients-list-view {
    display: none;

    >div img {
        width: 100%;
    }
}
</style>
