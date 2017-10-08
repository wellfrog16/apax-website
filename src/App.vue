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
        <div class="footer clearfix">沪公网安备31010602001763号</div>
        <div class="bg" id="a">
            <div id="b">
            <canvas id="c"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import MainNav from './components/MainNav'
import './assets/lib/bootstrap/less-3.3.7/bootstrap.less'

export default {
    name: 'app',
    components : { MainNav },
    mounted(){
        this.canvas3();
    },
    methods : {
        canvas1() {
            var c=document.getElementById("c");
            var w = c.width = window.innerWidth,
                h = c.height = window.innerHeight,
                ctx = c.getContext('2d'),
            
            count = (w*h/6000)|0,
            speed = 4,
            range = 80,
            lineAlpha = .05,
            
            particles = [],
            huePart = 360/count;

            for(var i = 0; i < count; ++i)
            particles.push(new Particle((huePart*i)|0));

            function Particle(hue){
            this.x = Math.random()*w;
            this.y = Math.random()*h;
            this.vx = (Math.random()-.5)*speed;
            this.vy = (Math.random()-.5)*speed;
            
            this.hue = hue;
            }
            Particle.prototype.update = function(){
            this.x += this.vx;
            this.y += this.vy;
            
            if(this.x < 0 || this.x > w) this.vx *= -1;
            if(this.y < 0 || this.y > h) this.vy *= -1;
            }

            function checkDist(a, b, dist){
            var x = a.x - b.x,
                y = a.y - b.y;
            
            return x*x + y*y <= dist*dist;
            }

            function anim(){
            window.requestAnimationFrame(anim);
            
            ctx.fillStyle = 'rgba(0, 0, 0, .05)';
            ctx.fillRect(0, 0, w, h);
            
            for(var i = 0; i < particles.length; ++i){
                var p1 = particles[i];
                p1.update();
                
                for(var j = i+1; j < particles.length; ++j){
                var p2 = particles[j];
                if(checkDist(p1, p2, range)){
                    ctx.strokeStyle = 'hsla(hue, 80%, 50%, alp)'
                    .replace('hue', ((p1.hue  + p2.hue + 3)/2) % 360)
                    .replace('alp', lineAlpha);
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
                }
            }
            }

            anim();
        },

        canvas2(){

            var canvas = document.getElementById("c");
            var ctx = canvas.getContext("2d");

            resize();
            window.onresize = resize;

            function resize() {
                canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            }

            var RAF = (function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                    };
            })();

            // 鼠标活动时，获取鼠标坐标
            var warea = {x: null, y: null, max: 20000};
            window.onmousemove = function(e) {
                e = e || window.event;

                warea.x = e.clientX;
                warea.y = e.clientY;
            };
            window.onmouseout = function(e) {
                warea.x = null;
                warea.y = null;
            };

            // 添加粒子
            // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
            var dots = [];
            for (var i = 0; i < 300; i++) {
                var x = Math.random() * canvas.width;
                var y = Math.random() * canvas.height;
                var xa = Math.random() * 2 - 1;
                var ya = Math.random() * 2 - 1;

                dots.push({
                x: x,
                y: y,
                xa: xa,
                ya: ya,
                max: 6000
                })
            }

            // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
            setTimeout(function() {
                animate();
            }, 100);

            // 每一帧循环的逻辑
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
                var ndots = [warea].concat(dots);

                dots.forEach(function(dot) {

                // 粒子位移
                dot.x += dot.xa;
                dot.y += dot.ya;

                // 遇到边界将加速度反向
                dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1;
                dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1;

                // 绘制点
                ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

                // 循环比对粒子间的距离
                for (var i = 0; i < ndots.length; i++) {
                    var d2 = ndots[i];

                    if (dot === d2 || d2.x === null || d2.y === null) continue;

                    var xc = dot.x - d2.x;
                    var yc = dot.y - d2.y;

                    // 两个粒子之间的距离
                    var dis = xc * xc + yc * yc;

                    // 距离比
                    var ratio;

                    // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
                    if (dis < d2.max) {

                    // 如果是鼠标，则让粒子向鼠标的位置移动
                    if (d2 === warea && dis > (d2.max / 2)) {
                        dot.x -= xc * 0.03;
                        dot.y -= yc * 0.03;
                    }

                    // 计算距离比
                    ratio = (d2.max - dis) / d2.max;

                    // 画线
                    ctx.beginPath();
                    ctx.lineWidth = ratio / 2;
                    ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(d2.x, d2.y);
                    ctx.stroke();
                    }
                }

                // 将已经计算过的粒子从数组中删除
                ndots.splice(ndots.indexOf(dot), 1);
                });

                RAF(animate);
            }

        },

        canvas3(){
            var self = this;        
            self.$(function () {
                if (!window.ActiveXObject && !!document.createElement("canvas").getContext) {
                    self.$.getScript("http://im-img.qq.com/pcqq/js/200/cav.js?_=1428576021379",
                            function () {
                                var t = {
                                    width: 1.5,
                                    height: 1.5,
                                    depth: 10,
                                    segments: 12,
                                    slices: 6,
                                    xRange: 0.8,
                                    yRange: 0.1,
                                    zRange: 1,
                                    ambient: "#525252",
                                    diffuse: "#FFFFFF",
                                    speed: 0.0002
                                };
                                var G = {
                                    count: 2,
                                    xyScalar: 1,
                                    zOffset: 100,
                                    ambient: "#000000",
                                    diffuse: "#222222",
                                    speed: 0.001,
                                    gravity: 1200,
                                    dampening: 0.95,
                                    minLimit: 10,
                                    maxLimit: null,
                                    minDistance: 20,
                                    maxDistance: 400,
                                    autopilot: false,
                                    draw: false,
                                    bounds: CAV.Vector3.create(),
                                    step: CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1))
                                };
                                var m = "canvas";
                                var E = "svg";
                                var x = {
                                    renderer: m
                                };
                                var i, n = Date.now();
                                var L = CAV.Vector3.create();
                                var k = CAV.Vector3.create();
                                var z = document.getElementById("a");
                                var w = document.getElementById("b");
                                var D, I, h, q, y;
                                var g;
                                var r;

                                function C() {
                                    F();
                                    p();
                                    s();
                                    B();
                                    v();
                                    K(z.offsetWidth, z.offsetHeight);
                                    o()
                                }

                                function F() {
                                    g = new CAV.CanvasRenderer();
                                    H(x.renderer)
                                }

                                function H(N) {
                                    if (D) {
                                        w.removeChild(D.element)
                                    }
                                    switch (N) {
                                        case m:
                                            D = g;
                                            break
                                    }
                                    D.setSize(z.offsetWidth, z.offsetHeight);
                                    w.appendChild(D.element)
                                }

                                function p() {
                                    I = new CAV.Scene()
                                }

                                function s() {
                                    I.remove(h);
                                    D.clear();
                                    q = new CAV.Plane(t.width * D.width, t.height * D.height, t.segments, t.slices);
                                    y = new CAV.Material(t.ambient, t.diffuse);
                                    h = new CAV.Mesh(q, y);
                                    I.add(h);
                                    var N, O;
                                    for (N = q.vertices.length - 1; N >= 0; N--) {
                                        O = q.vertices[N];
                                        O.anchor = CAV.Vector3.clone(O.position);
                                        O.step = CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1));
                                        O.time = Math.randomInRange(0, Math.PIM2)
                                    }
                                }

                                function B() {
                                    var O, N;
                                    for (O = I.lights.length - 1; O >= 0; O--) {
                                        N = I.lights[O];
                                        I.remove(N)
                                    }
                                    D.clear();
                                    for (O = 0; O < G.count; O++) {
                                        N = new CAV.Light(G.ambient, G.diffuse);
                                        N.ambientHex = N.ambient.format();
                                        N.diffuseHex = N.diffuse.format();
                                        I.add(N);
                                        N.mass = Math.randomInRange(0.5, 1);
                                        N.velocity = CAV.Vector3.create();
                                        N.acceleration = CAV.Vector3.create();
                                        N.force = CAV.Vector3.create()
                                    }
                                }

                                function K(O, N) {
                                    D.setSize(O, N);
                                    CAV.Vector3.set(L, D.halfWidth, D.halfHeight);
                                    s()
                                }

                                function o() {
                                    i = Date.now() - n;
                                    u();
                                    M();
                                    requestAnimationFrame(o)
                                }

                                function u() {
                                    var Q, P, O, R, T, V, U, S = t.depth / 2;
                                    CAV.Vector3.copy(G.bounds, L);
                                    CAV.Vector3.multiplyScalar(G.bounds, G.xyScalar);
                                    CAV.Vector3.setZ(k, G.zOffset);
                                    for (R = I.lights.length - 1; R >= 0; R--) {
                                        T = I.lights[R];
                                        CAV.Vector3.setZ(T.position, G.zOffset);
                                        var N = Math.clamp(CAV.Vector3.distanceSquared(T.position, k), G.minDistance, G.maxDistance);
                                        var W = G.gravity * T.mass / N;
                                        CAV.Vector3.subtractVectors(T.force, k, T.position);
                                        CAV.Vector3.normalise(T.force);
                                        CAV.Vector3.multiplyScalar(T.force, W);
                                        CAV.Vector3.set(T.acceleration);
                                        CAV.Vector3.add(T.acceleration, T.force);
                                        CAV.Vector3.add(T.velocity, T.acceleration);
                                        CAV.Vector3.multiplyScalar(T.velocity, G.dampening);
                                        CAV.Vector3.limit(T.velocity, G.minLimit, G.maxLimit);
                                        CAV.Vector3.add(T.position, T.velocity)
                                    }
                                    for (V = q.vertices.length - 1; V >= 0; V--) {
                                        U = q.vertices[V];
                                        Q = Math.sin(U.time + U.step[0] * i * t.speed);
                                        P = Math.cos(U.time + U.step[1] * i * t.speed);
                                        O = Math.sin(U.time + U.step[2] * i * t.speed);
                                        CAV.Vector3.set(U.position, t.xRange * q.segmentWidth * Q, t.yRange * q.sliceHeight * P, t.zRange * S * O - S);
                                        CAV.Vector3.add(U.position, U.anchor)
                                    }
                                    q.dirty = true
                                }

                                function M() {
                                    D.render(I)
                                }

                                function J(O) {
                                    var Q, N, S = O;
                                    var P = function (T) {
                                        for (Q = 0, l = I.lights.length; Q < l; Q++) {
                                            N = I.lights[Q];
                                            N.ambient.set(T);
                                            N.ambientHex = N.ambient.format()
                                        }
                                    };
                                    var R = function (T) {
                                        for (Q = 0, l = I.lights.length; Q < l; Q++) {
                                            N = I.lights[Q];
                                            N.diffuse.set(T);
                                            N.diffuseHex = N.diffuse.format()
                                        }
                                    };
                                    return {
                                        set: function () {
                                            P(S[0]);
                                            R(S[1])
                                        }
                                    }
                                }

                                function v() {
                                    window.addEventListener("resize", j)
                                }

                                function A(N) {
                                    CAV.Vector3.set(k, N.x, D.height - N.y);
                                    CAV.Vector3.subtract(k, L)
                                }

                                function j(N) {
                                    K(z.offsetWidth, z.offsetHeight);
                                    M()
                                }

                                C();
                            })
                } else {
                    alert('调用cav.js失败');
                }
            });

        }
    }
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
    //background-color:#000;
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

.bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    //background-color: #000;

    canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

</style>
