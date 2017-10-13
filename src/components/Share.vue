<template>
    <div class="share hidden-xs">
        <a @click="shareFB"><img src="../assets/img/icon/facebook.png" alt=""></a>
        <a @click="shareWB"><img src="../assets/img/icon/weibo.png" alt=""></a>
        <a @click="shareWX" class="weixin">
            <img src="../assets/img/icon/weixin.png" alt="">
            <div><img :src="qr"></div>
        </a>
    </div>
</template>


<script>
export default {
    name : 'share',
    data(){
        return {
            qr:''
        }
    },
    methods : {
        shareWX(){
            if (this.qr === '') {
                this.$axios.get('http://www.tron-m.com/api/qr/json.do?text=' + encodeURIComponent(location.href)).then((response) => {
                    this.qr = 'data:img/png;base64,' + response.data.msg;
                    $('.weixin div').toggle();
                }, (error) => {
                    console.log(error)
                });
            }
            else {
                $('.weixin div').toggle();
            }
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
        position: relative;

        div {
            position: absolute;
            top:-220px;
            left:-100px;
            width: 200px;
            height: 200px;
            background-color: #fff;
            display: none;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
