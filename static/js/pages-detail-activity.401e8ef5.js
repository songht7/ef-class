(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-activity"],{"1ca5":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"activity-page"},[t.lm?t._e():[a("v-uni-view",{staticClass:"page-loading"},[t._v("正在加载...")])],t.lm?[a("v-uni-view",{staticClass:"activity-block"},[a("img",{staticClass:"head-img",attrs:{src:t.sourceUrl+t.firstImage}})]),a("v-uni-view",{staticClass:"activity-main"},[a("v-uni-view",{staticClass:"activity-block article-info"},[a("v-uni-view",{staticClass:"article-title"},[t._v(t._s(t.detail.name))]),a("v-uni-view",{staticClass:"article-ov"},[a("v-uni-text",{staticClass:"txt"},[t._v("售价："+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元")]),a("v-uni-text",{staticClass:"txt"},[t._v("适合年龄："+t._s(t.detail.age_min)+"-"+t._s(t.detail.age_max)+"岁")])],1),a("v-uni-view",{staticClass:"article-overview"},[t._v(t._s(t.detail.overview))])],1),0!=t.Countdown||0==t.surplus?[a("v-uni-view",{staticClass:"activity-block help-user",class:0==t.surplus?"help-user-succ":""},[t._l(t.help_list,function(t,i){return a("v-uni-view",{key:i,staticClass:"help-user-portrait portrait-block"},[a("img",{staticClass:"portrait-img",attrs:{src:t.headimgurl,alt:""}})])}),t._l(parseInt(t.surplus),function(i){return t.surplus>1?a("v-uni-view",{key:i,staticClass:"help-user-portrait portrait-block"},[a("img",{staticClass:"portrait-img",attrs:{src:e("8e0c"),alt:""}})]):t._e()}),1==t.surplus?a("v-uni-view",{staticClass:"help-user-portrait portrait-block"},[a("img",{staticClass:"portrait-img",attrs:{src:e("8e0c"),alt:""}})]):t._e()],2)]:t._e(),t.surplus>0&&0!=t.Countdown?a("v-uni-view",{staticClass:"activity-block share-info-block"},[a("v-uni-view",{staticClass:"share-info-txt"},[t._v("还差 "+t._s(t.surplus)+" 位好友助力即可免费申请")]),a("v-uni-view",{staticClass:"share-info-txt"},[t._v("赶快召唤小伙伴吧！")]),a("v-uni-view",{staticClass:"share-info-txt"},[t._v("剩余"),a("uni-countdown",{attrs:{timer:t.Countdown}}),t._v("时间助力结束")],1)],1):t._e(),0==t.Countdown||t.surplus<=0?a("v-uni-view",{staticClass:"activity-block share-info-block"},[a("v-uni-view",{staticClass:"share-info"},[t._v("恭喜您获得"),a("v-uni-text",{staticClass:"free"},[t._v("免费体验")])],1),a("v-uni-view",{staticClass:"share-info"},[t._v("原价"+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元"+t._s(t.detail.name))])],1):t._e(),t.surplus>0&&0!=t.Countdown?a("v-uni-view",{staticClass:"activity-block share-info-block"},[a("v-uni-view",{staticClass:"share-info"},[t._v("分享成功即可"),a("v-uni-text",{staticClass:"free"},[t._v("免费体验")])],1),a("v-uni-view",{staticClass:"share-info"},[t._v("原价"+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元"+t._s(t.detail.name))])],1):t._e(),t.surplus>0&&0!=t.Countdown?a("v-uni-view",{staticClass:"activity-block help-block"},[a("v-uni-view",{staticClass:"help-info",on:{click:function(i){i=t.$handleEvent(i),t.toHelp()}}},[t._v("帮我助力")])],1):t._e(),t.parent_openid!=t.openid?[0==t.Countdown||t.surplus<=0?a("v-uni-view",{staticClass:"activity-block help-block"},[a("v-uni-navigator",{staticClass:"help-info",attrs:{url:"/pages/detail/index?id="+t.that.article_id}},[t._v("我也要预约")])],1):t._e()]:t._e()],2)]:t._e()],2)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},3876:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uni-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""}},data:function(){return{setTime:null,h:"00",i:"00",s:"00",leftTime:0}},created:function(t){var i=/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/,e=this.timer.match(i);if(null==e)return console.log("时间格式错误"),!1;var a=parseInt(e[1]);if(a<1e3)return console.log("时间格式错误"),!1;var n=parseInt(e[2]),r=parseInt(e[3]),o=parseInt(e[4]);if(o<0||o>24)return console.log("时间格式错误"),!1;var s=parseInt(e[5]);if(s<0||s>60)return console.log("时间格式错误"),!1;var l=parseInt(e[6]);if(l<0||l>60)return console.log("时间格式错误"),!1;var c=new Date(a,n-1,r,o,s,l);this.leftTime=c,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval(function(){t.countDown(t)},1e3)},countDown:function(t){var i=t.leftTime-new Date;if(i>0)var e=parseInt(i/1e3/60/60,10),a=parseInt(i/1e3/60%60,10),n=parseInt(i/1e3%60,10);else e=0,a=0,n=0;e<10&&(e="0"+e),a<10&&(a="0"+a),n<10&&(n="0"+n),t.h=e,t.i=a,t.s=n}}};i.default=a},"40b0":function(t,i,e){"use strict";e.r(i);var a=e("cf40"),n=e("f070");for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);var o=e("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);i["default"]=s.exports},"4f45":function(t,i,e){"use strict";e.r(i);var a=e("ee79"),n=e("c58c");for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);e("c70d");var o=e("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"1cd579f5",null);i["default"]=s.exports},"52d8":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o(e("b344")),n=o(e("4f45")),r=o(e("40b0"));function o(t){return t&&t.__esModule?t:{default:t}}var s=a.default.module,l=a.default.Interface,c=l.apiurl,u={data:function(){return{userInfo:{},article_id:"",portrait:"",detail:[],firstImage:"",brand_id:"",lm_id:"",parent_openid:"",openid:"",lm:"",help_list:{},surplus:2,total:3,Countdown:this.getDate({format:!0})}},components:{uniCountdown:n.default,uniIcon:r.default},onLoad:function(t){this.lm_id=t.lm_id,this.parent_openid=t.uid},onShow:function(){this.getData()},methods:{setShare:function(t){var i=window.location.hash,e=location.origin+"/?type=activity"+i,n=t.name?t.name:"英语免费试听",r=t.image?c+t.image[0]["original_src"]:a.default.Interface.domain+"/static/share.jpg",o="给好友助力，获得免费体验课";s.wxShare(e,n,r,o)},getData:function(){var t=this,i=function(i){if(i)t.userInfo=i,t.portrait=i.headimgurl,t.openid=i.openid;else{var e=window.location.hash,a=location.origin+"/?type=activity"+e;uni.setStorage({key:"temp",data:{parent_openid:t.parent_openid,lm_id:t.lm_id},success:function(){}}),s.getWXCode(a)}},e=(s.getMyStorage("uWXInfo","",i),t.parent_openid),a={};""!=e&&(a={openid:e});var n=c+l.addr.getHelp+"?lm_id="+t.lm_id,r=function(i){var e=i.article.data;t.article_id=e.id;var a=i.lm;t.lm=a;var n=a.arrive_time+" 24:00:00",r=Date.parse(new Date),o=Date.parse(n);t.Countdown=o<=r?0:n;var s=t.total-a.help.total;t.surplus=s<=0?0:s,t.help_list=a.help.list,e&&(t.detail=e,t.firstImage=e.image[0]["original_src"],t.setShare(e),t.brand_id=e.brand_id,uni.setNavigationBarTitle({title:e.name}))};s.getData(n,r,"GET","",a)},toHelp:function(){var t=this,i=c+l.addr.saveHelp,e={lm_id:t.lm_id};l.wx.test_openid&&(e["help"]="self");var a=t.openid;if(a!=t.parent_openid||""!=l.wx.test_openid){var n={};""!=a&&(n={openid:a});var r=function(i,e){console.log("======toHelp========"),console.log(e),e.success?uni.showToast({title:"助力成功!",duration:2e3,complete:function(i){setTimeout(function(){uni.navigateTo({url:"/pages/detail/index?id="+t.article_id})},2500)}}):uni.showToast({title:"助力失败",icon:"none",duration:2e3})};s.getData(i,r,"POST",e,n)}else uni.showToast({title:"分享给好友完成助力",icon:"none",duration:2e3})},getDate:function(t){var i=new Date,e=i.getFullYear(),a=i.getMonth()+1,n=i.getDate();"start"===t?e-=60:"end"===t&&(e+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n;var r="".concat(e,"-").concat(a,"-").concat(n," 24:00:00");return r}}};i.default=u},"7c41":function(t,i,e){"use strict";e.r(i);var a=e("52d8"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);i["default"]=n.a},"7e31":function(t,i,e){var a=e("b943");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("724c858a",a,!0,{sourceMap:!1,shadowMode:!1})},"8e0c":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAYAAAG032q1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTNBMURCQTAzRTMzMTFFOTlGNEFEODY5M0Y1RTQ0ODMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTNBMURCQTEzRTMzMTFFOTlGNEFEODY5M0Y1RTQ0ODMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5M0ExREI5RTNFMzMxMUU5OUY0QUQ4NjkzRjVFNDQ4MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5M0ExREI5RjNFMzMxMUU5OUY0QUQ4NjkzRjVFNDQ4MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvFSZHIAAEBjSURBVHjapFRNjxJB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"},"8eb9":function(t,i,e){"use strict";var a=e("b3d6"),n=e.n(a);n.a},"929e":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".page-loading[data-v-1cc97716]{padding:%?80?% 0;line-height:2;color:#fe9c01;text-shadow:-1px 0 5px #fff,0 1px 5px #fff,1px 0 5px #fff,0 -1px 5px #fff;text-align:center;font-size:%?40?%}.activity-page[data-v-1cc97716]{background:#ffdda7;min-height:900px}.head-img[data-v-1cc97716]{display:block;width:100%}.activity-main[data-v-1cc97716]{width:90%;margin:0 auto;position:relative;top:%?-5?%;z-index:1;padding:0 0 %?100?%}.article-info[data-v-1cc97716]{background:#fff;padding:%?10?% %?15?%;-webkit-box-shadow:0 %?2?% %?10?% #a7a7a7;box-shadow:0 %?2?% %?10?% #a7a7a7}.article-title[data-v-1cc97716]{color:#fdbe5c;font-size:%?38?%;line-height:1.4}.txt[data-v-1cc97716]{padding-right:%?20?%}.article-overview[data-v-1cc97716]{padding:%?40?% 0 %?5?%}.share-info-block[data-v-1cc97716]{padding:%?20?% 0}.share-info[data-v-1cc97716],.share-info-txt[data-v-1cc97716]{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;font-size:%?32?%;color:#fe9c01;text-shadow:-1px 0 5px #fff,0 1px 5px #fff,1px 0 5px #fff,0 -1px 5px #fff;letter-spacing:1px}.share-info-txt[data-v-1cc97716]{text-shadow:none;color:#333}.free[data-v-1cc97716]{font-size:%?40?%}.help-user[data-v-1cc97716]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?30?% 0 0}.help-user-succ[data-v-1cc97716]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.help-user-portrait[data-v-1cc97716]{width:45px;height:45px;border-radius:50%;overflow:hidden}.portrait-img[data-v-1cc97716]{width:100%}.help-info[data-v-1cc97716]{background:#fab951;color:#fff;text-align:center;padding:%?10?% 0;width:100%;border-radius:%?10?%;font-size:%?32?%}.portrait-block[data-v-1cc97716]{margin-right:%?5?%}",""])},b3d6:function(t,i,e){var a=e("929e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("35747568",a,!0,{sourceMap:!1,shadowMode:!1})},b81e:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};i.default=a},b943:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-countdown[data-v-1cd579f5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?2?% 0;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-countdown-splitor[data-v-1cd579f5]{width:auto!important;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%}.uni-countdown-numbers[data-v-1cd579f5]{line-height:%?44?%;width:auto!important;padding:0 %?10?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?44?%;border-radius:%?8?%;margin:0 %?5?%;border:1px solid #000;font-size:%?22?%}",""])},c58c:function(t,i,e){"use strict";e.r(i);var a=e("3876"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);i["default"]=n.a},c70d:function(t,i,e){"use strict";var a=e("7e31"),n=e.n(a);n.a},cf40:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(i){i=t.$handleEvent(i),t.onClick()}}})},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},d51c:function(t,i,e){"use strict";e.r(i);var a=e("1ca5"),n=e("7c41");for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);e("8eb9");var o=e("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"1cc97716",null);i["default"]=s.exports},ee79:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-countdown"},[e("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.h))]),e("v-uni-view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor}},[t._v(":")]),e("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.i))]),e("v-uni-view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor}},[t._v(":")]),e("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.s))])],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},f070:function(t,i,e){"use strict";e.r(i);var a=e("b81e"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);i["default"]=n.a}}]);