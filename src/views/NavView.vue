<template>
    <div class="nav-view">
        <div class="nav">
            <router-link to="/">HOME</router-link>
            <router-link to="/ourwork">OURWORK</router-link>
            <router-link to="/clients">CLIENTS</router-link>
            <router-link to="/news">NEWS</router-link>
            <router-link to="/partners">PARTNERS</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/career">CAREER</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name : 'nav-view',
    created(){
        console.log(0);
    }
}
</script>

<style lang="less">
@import '../assets/style/common.less';

.nav-view {
    display: table;
    width: 100%;
    height: 100vh;
    
    .nav {
        display: table-cell;
        vertical-align:middle;
        text-align:center;
    }

    a {
        margin: 0 20px;
        color: @main-color;

        &:hover {
            color: @over-color;
        }
    }
}

@media screen and (max-width: @max-width) {
.nav-view {
    a {
        display: block;
        line-height: 50px;
    }
}
}
</style>
