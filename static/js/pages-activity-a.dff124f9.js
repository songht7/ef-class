(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-a"],{2623:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("281c")),u=a(n("46a3")),r=u.default.module,i={data:function(){return{type:"a"}},onLoad:function(t){this.setShare()},onShow:function(){},onReady:function(){var t=uni.createVideoContext("myVideo");this.videoContext=t,t.play()},components:{safTemp:o.default},methods:{setShare:function(t){var e=this,n=u.default.Interface.domain+"/?type=".concat(e.type,"#/pages/activity/").concat(e.type),a="免费获得 SAF 专业择校评估",o=u.default.Interface.domain+"/static/h5/saf.png",i="带您叩开世界名校之门";r.wxShare(n,a,o,i)}}};e.default=i},"88f3":function(t,e,n){"use strict";n.r(e);var a=n("f174"),o=n("bdcd");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"00225dbf",null);e["default"]=i.exports},bdcd:function(t,e,n){"use strict";n.r(e);var a=n("2623"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},f174:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("saf-temp",{attrs:{type:t.type}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}}]);