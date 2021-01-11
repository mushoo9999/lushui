var waterfallCanvas = function(c, cw, ch) {
    var abc;
    var _this = this;
    this.c = c; //画布
    this.ctx = c.getContext('2d');
    this.cw = cw; //水流宽度
    this.ch = ch; //水流高度
    this.particleRate = 0; //流速
    this.gravity = 0; //重力
    this.particles = [];

    this.init = function() {
        cancelAnimationFrame(abc);
        abc = undefined;
        this.particles = [];
        this.particleRate = 6; //流速
        this.gravity = .15; //重力
        this.loop(); //循环
    };

    this.reset = function() { //重置画布
        this.ctx.clearRect(0, 0, this.cw, this.ch);
        this.particles = [];
    };

    this.rand = function(rMi, rMa) { //色彩算法
        return ~~((Math.random() * (rMa - rMi + 1)) + rMi);
    };


    this.Particle = function() { //水流对象
        var newWidth = _this.rand(1, 20);//横向密度
        var newHeight = _this.rand(1, 45);//纵向密度
        this.x = _this.rand(10 + (newWidth / 2), _this.cw - 10 - (newWidth / 2));
        this.y = -newHeight;
        this.vx = 0;
        this.vy = 0;
        this.width = newWidth;
        this.height = newHeight;
        this.hue = _this.rand(200, 220); //色调
        this.saturation = _this.rand(30, 60); //饱和度
        this.lightness = _this.rand(10, 40); //明亮度
    };
    this.Particle.prototype.update = function(i) { //水流下降
        this.vx += this.vx;
        this.vy += _this.gravity;
        this.x += this.vx;
        this.y += this.vy;
    };

    this.Particle.prototype.render = function() { //水流动效
        _this.ctx.strokeStyle = 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, .05)';
        _this.ctx.beginPath();
        _this.ctx.moveTo(this.x, this.y);
        _this.ctx.lineTo(this.x, this.y + this.height);
        _this.ctx.lineWidth = this.width / 2;
        _this.ctx.lineCap = 'round';
        _this.ctx.stroke();
    };

    this.Particle.prototype.renderBubble = function() { //水泡
        _this.ctx.fillStyle = 'hsla(' + this.hue + ', 40%, 40%, 1)';
        _this.ctx.fillStyle = 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, .3)';
        _this.ctx.beginPath();
        _this.ctx.arc(this.x + this.width / 2, _this.ch - 20 - _this.rand(0, 10), _this.rand(1, 8), 0, Math.PI * 2, false);
        _this.ctx.fill();
    };

    this.createParticles = function() { //创建水流
        var i = this.particleRate;
        while (i--) {
            this.particles.push(new this.Particle());
        }
    };

    this.removeParticles = function() { //删除水流
        var i = this.particleRate;
        while (i--) {
            var p = this.particles[i];
            if (p.y > _this.ch - 20 - p.height) {
                p.renderBubble();
                _this.particles.splice(i, 1);
            }
        }
    };

    this.updateParticles = function() { //水流向下
        var i = this.particles.length;
        while (i--) {
            var p = this.particles[i];
            p.update(i);
        };
    };

    this.renderParticles = function() { //水流下落动态
        var i = this.particles.length;
        while (i--) {
            var p = this.particles[i];
            p.render();
        };
    };

    this.clearCanvas = function() {
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillStyle = 'rgba(255,255,255,.05)';
        this.ctx.fillRect(0, 0, this.cw, this.ch);
        this.ctx.globalCompositeOperation = 'lighter';
    };

    this.loop = function() {
        var loopIt = function() {
            _this.clearCanvas();
            _this.createParticles();
            _this.updateParticles();
            _this.renderParticles();
            _this.removeParticles();
            abc = requestAnimationFrame(loopIt, _this.c);
        };
        loopIt();
    };
    this.stop = function() {
        let aaa = setInterval(function() {
            cancelAnimationFrame(abc);
            _this.particleRate = _this.particleRate - 1;
            _this.loop();
        }, 500)
        setTimeout(function() {
            clearInterval(aaa);
        }, 3000)

    }
};

var c = document.getElementById('waterfall');
var cw = c.width = 110;
var ch = c.height = 100;
var waterfall = new waterfallCanvas(c, cw, ch);
if (document.getElementById('abc')) {
    document.getElementById('abc').onclick = function() {
        waterfall.stop();
    }
}
if (document.getElementById('abcd')) {
    document.getElementById('abcd').onclick = function() {
        waterfall.init();
    }
}
//waterfall.init();
//setupRAF();
// var isCanvasSupported = function() {
//  var elem = document.createElement('canvas');
//  return !!(elem.getContext && elem.getContext('2d'));
// };

// var setupRAF = function(){
//  var lastTime = 0;
//  var vendors = ['ms', 'moz', 'webkit', 'o'];
//  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
//    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
//    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
//  };

//  if(!window.requestAnimationFrame){
//    window.requestAnimationFrame = function(callback, element){
//      var currTime = new Date().getTime();
//      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//      var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
//      lastTime = currTime + timeToCall;
//      return id;
//    };
//  };

//  if (!window.cancelAnimationFrame){
//    window.cancelAnimationFrame = function(id){
//      clearTimeout(id);
//    };
//  };
// };

// if(isCanvasSupported()){

// }
