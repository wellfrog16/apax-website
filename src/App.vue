<template>
    <div id="app">
        <div class="header">
            <router-link to="/"><img src="./assets/img/main/logo.png" alt="APAX"></router-link>
        </div>
        <main-nav></main-nav>
        <div class="wrapper clearfix">
            <!-- <transition name="fade">
                <keep-alive> -->
                    <router-view></router-view>
                <!-- </keep-alive>
            </transition> -->
        </div>        
        <div class="footer">沪公网安备31010602001763号</div>
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
@import './assets/style/apax.less';

* { box-sizing:border-box; }
img { border:0;}
a { text-decoration:none;}

html, body {
    width: 100%;
    height: 100%;

    padding: 0;
    margin: 0;

    //font-family: 'Miscrosoft Yahei', '微软雅黑';
    //font-family: HurmeGeometricSans3, Futura, Din, Helvetica Neue, Helvetica, Arial, '思源黑体', Hiragino Sans GB, '华文细黑', STXihei, '微软雅黑', Microsoft yahei, Sans-serif;
    font-family: "Fort-Light",'NotoSansSC-Light',"Arial",sans-serif;
    font-size:12px;

    color: @main-color;
    background-color:#000;
    //overflow:hidden;
}

#app {
    height: 100%;
}

.header {
    text-align: center;
    position: absolute;
    width: 100%;

    img { margin-top: 40px; }
}

.wrapper {
    min-height: 100%;
}

.footer {
    text-align: center;
    margin-top: -54px;
    //margin-top: -30px;
    //display: none;
}

</style>
