<template>
    <div class="share">
        <a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdolphin.com%2Fhappy-new-year%2F&t=Enter%20your%20name%20and%20see%20what%20you%20might%20encounter%20in%20the%20new%20year." target="_blank" id="J-share-facebook"><img src="../assets/img/icon/facebook.png" alt=""></a>
        <a href="javascript:(function(){window.open('http://v.t.sina.com.cn/share/share.php?title='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href)+'&source=bookmark','_blank','width=450,height=400');})()"><img src="../assets/img/icon/weibo.png" alt=""></a>
        <a href=""><img src="../assets/img/icon/weixin.png" alt=""></a>
    </div>
</template>


<script>
export default {
    name : 'share',
}
</script>


<style lang="less">
.share {
    text-align: center;

    a {
        margin: 0 5px;
    }
}
</style>
