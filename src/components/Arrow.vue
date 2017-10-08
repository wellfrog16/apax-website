<template>
    <div class="arrow">
        <div class="left"><img src="../assets/img/icon/arrow-s.png" alt=""></div>
        <div class="right"><img src="../assets/img/icon/arrow-n.png" alt=""></div>
    </div>
</template>


<script>
export default {
    name : 'arrow'
}
</script>


<style lang="less">
.arrow {
    >div {
        position: fixed;
        width: 8.333333%;
        top: 45vh;
    }

    .left {
        left:0;
        text-align: right;

        img {
            position: relative;
            right:30%;
        }
    }
    .right {
        right:0;
        text-align: left;

        img {
            position: relative;
            left:30%;
        }
    }
}
</style>
