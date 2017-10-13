import '@preloadjs';

export default function(){

}



//function loader()

// var loader = {
//     start: function () {
//         this.preload();
//     },

//     init : function(){
//         var l = new createjs.LoadQueue(false);
//         // 关键！----设置并发数  
//         l.setMaxConnections(5);
//         // 关键！---一定要将其设置为 true, 否则不起作用。  
//         l.maintainScriptOrder = true;

//         return l;
//     },

//     preload: function () {
//         var l = this.init();

//         var source = []

//         l.on("complete", onComplete);
//         l.loadManifest(source, true, 'img/');

//         function onComplete() {
//             $('body').append(page.template.loading);

//             loader.mainload();
//         }
//     },

//     mainload: function () {
//         var l = this.init();

//         var source = []

//         l.on("progress", onProgress);
//         l.on("complete", onComplete);
//         l.loadManifest(source, true, 'img/');


//         function onComplete(e) {

//         }

//         function onProgress(e) {
//             $('.loading .line').css('width', (l.progress * 99 | 0) + "%");
//         }
//     }
// }