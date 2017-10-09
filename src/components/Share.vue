<template>
    <div class="share">
        <a @click="shareFB"><img src="../assets/img/icon/facebook.png" alt=""></a>
        <a @click="shareWB"><img src="../assets/img/icon/weibo.png" alt=""></a>
        <a @click="shareWX"><img src="../assets/img/icon/weixin.png" alt=""></a>
    </div>
</template>


<script>
export default {
    name : 'share',
    methods : {
        shareWX(){
            this.$.ajax({
                url: 'http://www.tron-m.com/tron-api/qr/jsonp.do?text=http://www.baidu.com&jsonpcallback=success',
                dataType: 'jsonp',
                jsonpCallback:'successCallback',  
                success: function(data){
                    //console.log(JSON.stringify(data));
                    console.log(data);
                },
                error: function(){
                    console.log('失败');
                }
            })
        },

        shareWB(){
            window.open('http://v.t.sina.com.cn/share/share.php?title='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href)+'&source=bookmark','_blank','width=450,height=400')
        },

        shareFB(){
            window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href)+'&amp;t='+encodeURIComponent(document.title), 'newWindow', 'width=450, height=400','center');
        }
    }
}
</script>


<style lang="less">
.share {
    text-align: center;

    a {
        margin: 0 5px;
        cursor: pointer;
    }
}
</style>
