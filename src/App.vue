<template>
    <div id="app">
        <main-nav></main-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import MainNav from './components/MainNav'
import './assets/lib/bootstrap/less-3.3.7/bootstrap.less'

export default {
    name: 'app',
    components : { MainNav }
}
</script>

<style lang="less">

* { box-sizing:border-box; }
img { border:0;}
a { text-decoration:none;}

html, body {
    width: 100%;
    height: 100%;

    padding: 0;
    margin: 0;

    font-family: 'Miscrosoft Yahei', '微软雅黑';
    font-size:14px;

    color:#fff;
    background-color:#000;
    overflow:hidden;
}
</style>
