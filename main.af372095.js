!function(t){function e(e){for(var r,o,a=e[0],u=e[1],c=e[2],l=0,p=[];l<a.length;l++)o=a[l],n[o]&&p.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,a=1;a<s.length;a++){var u=s[a];0!==n[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},n={1:0};var i=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var f=u;i.push([13,0]),s()}([function(t,e,s){"use strict";e.__esModule=!0,e.default=void 0;var r={mounted:function(){var t=this;this.$refs.topProgress.start(),setTimeout(function(){t.$refs.topProgress.done()},2e3)},components:{vueTopprogress:s(8).vueTopprogress}};e.default=r},,function(t,e,s){"use strict";s.d(e,"a",function(){return r}),s.d(e,"b",function(){return n});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("vue-topprogress",{ref:"topProgress"}),t._v(" "),s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("vue-top-progress")]),t._v(" "),s("div",{staticClass:"actions"},[s("div",{staticClass:"action"},[s("div",{staticClass:"button",on:{click:function(e){t.$refs.topProgress.start()}}},[t._v("\n          Start\n        ")])]),t._v(" "),s("div",{staticClass:"action"},[s("div",{staticClass:"button",on:{click:function(e){t.$refs.topProgress.pause()}}},[t._v("\n          Pause\n        ")])]),t._v(" "),s("div",{staticClass:"action"},[s("div",{staticClass:"button",on:{click:function(e){t.$refs.topProgress.done()}}},[t._v("\n          Done\n        ")])]),t._v(" "),s("div",{staticClass:"action"},[s("div",{staticClass:"button",on:{click:function(e){t.$refs.topProgress.fail()}}},[t._v("\n          Fail\n        ")])]),t._v(" "),s("div",{staticClass:"action"},[s("div",{staticClass:"button",on:{click:function(e){t.$refs.topProgress.increase(20)}}},[t._v("\n          Increase(20)\n        ")])]),t._v(" "),s("div",{staticClass:"action"},[s("div",{staticClass:"button",on:{click:function(e){t.$refs.topProgress.decrease(20)}}},[t._v("\n          Decrease(20)\n        ")])]),t._v(" "),s("div",{staticClass:"action"},[s("div",{staticClass:"button",on:{click:function(e){t.$refs.topProgress.set(20)}}},[t._v("\n          Set(20)\n        ")])])]),t._v(" "),t._m(0)])],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("a",{staticClass:"button green download",attrs:{href:"https://github.com/dalphyx/vue-top-progress"}},[this._v("\n        Download\n      ")])])}]},,,,,,function(t,e,s){"use strict";t.exports=function(){function t(t,e,s){return t<e?e:t>s?s:t}var e=function(){var t=[];function e(){var s=t.shift();s&&s(e)}return function(s){t.push(s),1===t.length&&e()}}(),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{css:!1},on:{"before-enter":this.beforeEnter,enter:this.enter,"after-enter":this.afterEnter}},[this.show?e("div",{staticClass:"top-progress",style:this.barStyle},[e("div",{staticClass:"peg",style:this.pegStyle})]):this._e()])},staticRenderFns:[],name:"vueTopprogress",data:function(){return{error:!1,show:!1,progress:0,opacity:1,status:null,isPaused:!1}},props:{speed:{type:Number,default:350},color:{type:String,default:"#29d"},colorShadow:String,errorColor:{type:String,default:"#f44336"},trickle:{type:Boolean,default:!0},trickleSpeed:{type:Number,default:250},easing:{type:String,default:"linear"},height:{type:Number,default:3},minimum:{type:Number,default:.8},maximum:{type:Number,default:97.5},zIndex:{type:Number,default:9999}},computed:{progressColor:function(){return this.error?this.errorColor:this.color},isStarted:function(){return"number"==typeof this.status},boxShadow:function(){return this.colorShadow||this.progressColor},barStyle:function(){return{position:"fixed",top:"0",left:"0",right:"0",width:this.progress+"%",height:this.height+"px",backgroundColor:this.progressColor,transition:"all "+this.speed+"ms "+this.easing,opacity:""+this.opacity,zIndex:""+this.zIndex}},pegStyle:function(){return{display:"block",position:"absolute",right:"0",width:"100px",height:"100%",opacity:this.progress?"1":"0",boxShadow:"0 0 10px "+this.boxShadow+", 0 0 5px "+this.boxShadow,transform:"rotate(3deg) translate(0px, -4px)"}}},methods:{beforeEnter:function(t){this.opacity=0,this.progress=0,this.width=0},enter:function(t,e){this.opacity=1,e()},afterEnter:function(t){this._runStart()},_work:function(){var t=this;setTimeout(function(){t.isStarted&&!t.isPaused&&(t.increase(),t._work())},this.trickleSpeed)},_runStart:function(){this.status=100===this.progress?null:this.progress,this.trickle&&this._work()},start:function(){this.isPaused=!1,this.show?this._runStart():this.show=!0},set:function(s){var r,n=this;this.isPaused=!1,r=this.isStarted?s<this.progress?t(s,0,100):t(s,this.minimum,100):0,this.status=100===r?null:r,e(function(t){n.progress=r,100===r?setTimeout(function(){n.opacity=0,setTimeout(function(){n.show=!1,n.error=!1,t()},n.speed)},n.speed):setTimeout(t,n.speed)})},increase:function(e){var s=this.progress;s<100&&"number"!=typeof e&&(e=s>=0&&s<25?3*Math.random()+3:s>=25&&s<50?3*Math.random():s>=50&&s<85?2*Math.random():s>=85&&s<99?.5:0),this.set(t(s+e,0,this.maximum))},decrease:function(t){0!==this.progress&&this.increase(-t)},done:function(){this.set(100)},getProgress:function(){return this.status?this.progress:0},pause:function(){this.isPaused=!0},fail:function(){this.error=!0,this.done()}}},r=function t(e,r){void 0===r&&(r={}),t.installed||e.component(s.name,s)};return"undefined"!=typeof window&&window.Vue&&r(window.Vue),{vueTopprogress:s,install:r}}()},,function(t,e,s){},function(t,e,s){"use strict";s.r(e);var r=s(0),n=s.n(r);for(var i in r)"default"!==i&&function(t){s.d(e,t,function(){return r[t]})}(i);var o=s(2),a=s(3);var u=function(t){s(10)},c=Object(a.a)(n.a,o.a,o.b,!1,u,null,null);e.default=c.exports},function(t,e,s){"use strict";var r=i(s(11)),n=i(s(7));function i(t){return t&&t.__esModule?t:{default:t}}"undefined"!=typeof window&&new n.default({el:"#app",render:function(t){return t(r.default)}})},function(t,e,s){t.exports=s(12)}]);
//# sourceMappingURL=main.af372095.js.map