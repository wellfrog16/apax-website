<template>
    <div class="ourwork-view">
        <div class="ourwork">
            <div><router-link to="/ourwork/events"><img src="../assets/img/main/events.png" alt=""></router-link></div>
            <div><router-link to="/ourwork"><img src="../assets/img/main/live.png" alt=""></router-link></div>
            <div><router-link to="/clients"><img src="../assets/img/main/recreation.png" alt=""></router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ourwork-view',
    created(){
    }
}
</script>

<style lang="less">

.ourwork-view {
    display: table;
    width: 100%;
    height: 100vh;
    
    .ourwork {
        display: table-cell;
        vertical-align:middle;
        text-align:center;

        >div {
            display: inline;
            margin: 0 50px;
        }
    }
}
</style>
