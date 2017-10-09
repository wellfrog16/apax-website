<template>
    <div class="info-view about-view clearfix">
        <div class="info col-xs-offset-2 col-xs-8">
            <h2>ABOUT US</h2>
            <br>
            <h4>Company Profile</h4>
            <p>APAX Group has emerged as a top leader among experiential marketing companies in Asia Pacific, focusing on the interpretation of brand DNA, innovative solutions, cross border collaborations, quality global resource integration, diversified brand interaction, providing professional branding, execution, and marketing strategy services through a Multi - Cultural Platform of fashion, sports, travel and entertainment. In partnership with Shanghai Fashion Week, APAX established Shanghai International Fashion Showcase.</p>
            <br>
            <p>At the same time, APAX has brought in international IP such as Fashion Rocks; created the Discovery Adventures Park with Discovery Channel. The "all-round " approach to business, with cross-border collaboration is the way to go as the idea of “Bringing in (the global experts to guide and educate us) and setting off (new local talents to the world) ”. At the time of engages global experts to guide and educate while at the same time introducing new local talents and ethnic Chinese culture to the world. In the future, cross-border and cross-cultural cooperation, is also an important direction of APAX Group.</p>
        </div>
        <div class="info row col-xs-offset-1 col-xs-10">
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-4">
                <h4>APAX GROUP</h4>
                <h4>SHANGHAI</h4>

                <p>Block 1, 1088 Wu Ding Road, Jing An District<br>
                Shanghai 200040, China<br>
                Tel: +86 21 6249 0829;<br>
                Fax: +86 21 6248 8377 </p>
            </div>
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-4">
                <h4>APAX GROUP</h4>
                <h4>BEIJING</h4>

                <p>Unit 902, Ruichen International Center Parking Lot,<br>
                13 Nongzhanguan S Rd,<br>
                Chaoyang Qu 100026, China<br>
                Tel: +86 10 6778 3690; Fax: +86 10 6778 4468</p>
            </div>
        </div>
        <div class="info row col-xs-offset-1 col-xs-10">
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-4">
                <h4>APAX GROUP</h4>
                <h4>HONG KONG</h4>

                <p>Unit 4&5, 52-56 King's Road,<br> 
                North PointHong Kong<br> 
                Tel: +852 2882 5452; Fax: +852 2504 4487</p>
            </div>
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-4">
                <h4>APAX GROUP</h4>
                <h4>MOGANSHAN</h4>

                <p>Discovery Adventures Moganshan Park, Zhuyuan Road,<br>
                Moganshan Town, Deqing, Zhejiang, China 313200<br>
                Tel:+86 400 900 5177</p>
            </div>
        </div>
        <div class="info row col-xs-offset-1 col-xs-10">
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-4">
                <h4>APAX GROUP</h4>
                <h4>XIAMEN</h4>

                <p>A1 No.132 HuaChang Road, Huli District, XiaMen<br>
                361000<br>
                Tel: +86592-5806868</p>
            </div>
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-4">
                <h4>APAX GROUP</h4>
                <h4>XIAMEN</h4>

                <p>A1 No.132 HuaChang Road, Huli District, XiaMen<br>
                361000<br>
                Tel: +86592-5806868</p>
            </div>
        </div>
    </div>
</template>

<script>
import Bus from '../assets/lib/helper/bus';

export default {
    name : 'about-view',
    mounted(){
        setTimeout(()=> this.$('.about-view').fadeIn(), 500);

        Bus.$emit('canvas-close');
    }
}
</script>

<style lang="less">
.about-view {
    display: none;
}
</style>
