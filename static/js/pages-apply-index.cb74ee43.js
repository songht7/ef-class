(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-apply-index"],{"17e0":function(e,t,i){i("c975"),i("a9e3"),i("4d63"),i("ac1f"),i("25f0"),i("1276"),e.exports={error:"",check:function(e,t){for(var i=0;i<t.length;i++){if(!t[i].checkType)return!0;if(!t[i].name)return!0;if(!t[i].errorMsg)return!0;if(!e[t[i].name])return this.error=t[i].errorMsg,!1;switch(t[i].checkType){case"string":var n=new RegExp("^.{"+t[i].checkRule+"}$");if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[i].checkRule+"}$");if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[i].name]))return this.error=t[i].errorMsg,!1;var a=t[i].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[i].name]>a[1]||e[t[i].name]<a[0])return this.error=t[i].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;a=t[i].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[i].name]>a[1]||e[t[i].name]<a[0])return this.error=t[i].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;a=t[i].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[i].name]>a[1]||e[t[i].name]<a[0])return this.error=t[i].errorMsg,!1;break;case"same":if(e[t[i].name]!=t[i].checkRule)return this.error=t[i].errorMsg,!1;break;case"notsame":if(e[t[i].name]==t[i].checkRule)return this.error=t[i].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"reg":n=new RegExp(t[i].checkRule);if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"in":if(-1==t[i].checkRule.indexOf(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"notnull":if(null==e[t[i].name]||e[t[i].name].length<1)return this.error=t[i].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},"1c98":function(e,t,i){"use strict";var n=i("763c"),a=i.n(n);a.a},"588e":function(e,t,i){"use strict";i.r(t);var n=i("b78c"),a=i("fa2e");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("1c98");var s,l=i("f0c5"),u=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"2c13b378",null,!1,n["a"],s);t["default"]=u.exports},"763c":function(e,t,i){var n=i("9412");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6701cb2a",n,!0,{sourceMap:!1,shadowMode:!1})},9412:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-list[data-v-2c13b378]{margin-bottom:%?15?%}.uni-list[data-v-2c13b378]:before{background:none}.half-box[data-v-2c13b378]:after{background:none}.radio-block[data-v-2c13b378]{padding-left:%?20?%}.uni-input[data-v-2c13b378]{background:#fff}.half[data-v-2c13b378]{width:45%;display:-webkit-box;display:-webkit-flex;display:flex}.apply-btn[data-v-2c13b378]{width:80%;margin:%?20?% auto;color:#fff;background:-webkit-gradient(linear,left top,right top,from(#f9d744),to(#fca526));background:-webkit-linear-gradient(left,#f9d744,#fca526);background:linear-gradient(90deg,#f9d744,#fca526);-webkit-box-shadow:1px 1px 5px rgba(249,215,68,.8);box-shadow:1px 1px 5px rgba(249,215,68,.8);text-align:center;line-height:2;-webkit-border-radius:%?30?%;border-radius:%?30?%;font-size:%?32?%;padding:%?5?% 0}.apply-date[data-v-2c13b378]{display:none}",""]),e.exports=t},af6f:function(e,t,i){"use strict";var n=i("ee27");i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("4ea1")),r=n(i("6b64")),s=i("17e0"),l=a.default.Interface,u=2e3,c={data:function(){return{_wxApi:"",brand:"",date:"",gender:["男","女"],index:0,loading:!1}},onLoad:function(e){var t=e.key,i=a.default.getList(t);i.title;console.log(i);var n=a.default.wxApi();this._wxApi=n,a.default.getToken(),this.date=e.date||this.getDate({format:!0}),this.brand=i.title,uni.setNavigationBarTitle({title:"申请预约 - "+i.title})},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},components:{uniIcon:r.default},methods:{bindPickerChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},formSubmit:function(e){var t=this;if(1!=this.loading){var i=e.detail.value;this.loading=!0;var n=[{name:"UserName",checkType:"notnull",checkRule:"",errorMsg:"请填写姓名"},{name:"UserPhone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"},{name:"Age",checkType:"betweenD",checkRule:"1,90",errorMsg:"请填写正确的年龄"},{name:"Email",checkType:"email",checkRule:"",errorMsg:"请填写正确的邮箱"}],a=s.check(i,n);if(a){var r={"预约品牌":this.brand,"客户姓名":i.UserName,"客户手机号":i.UserPhone,"年龄":i.Age,"性别":0==i.Gender?"男":"女","邮箱":i.Email,"意向区域":i.area||"全国","可约时间":i.ApplyDate};uni.request({url:l.SendMail,data:r,method:"POST",dataType:"json",success:function(e){uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:u}),t.res=JSON.stringify(e),console.log(e)},fail:function(e){console.log("request fail",e),uni.showModal({content:e.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})}else uni.showToast({title:s.error,icon:"none"}),this.loading=!1}},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)}}};t.default=c},b78c:function(e,t,i){"use strict";var n={uniIcon:i("9ebe").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)},reset:function(t){arguments[0]=t=e.$handleEvent(t),e.formReset.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("姓名")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"UserName",placeholder:""}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("电话")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"UserPhone",type:"number",placeholder:""}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-list half-box"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list half"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("年龄")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"Age",type:"number",placeholder:"",value:""}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-list half"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("性别")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{name:"Gender",value:e.index,range:e.gender},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.gender[e.index]))])],1)],1),i("uni-icon",{attrs:{size:"20",type:"arrowdown",color:"#DDDDDF"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("邮箱")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"Email",placeholder:""}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-list apply-date"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("可约时间")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{mode:"date",name:"ApplyDate",value:e.date,start:e.startDate,end:e.endDate},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.date))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"apply-btn",attrs:{formType:"submit",loading:e.loading}},[e._v("立即申请")])],1)],1),i("v-uni-view",{domProps:{innerHTML:e._s(e._wxApi)}})],1)},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}))},fa2e:function(e,t,i){"use strict";i.r(t);var n=i("af6f"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a}}]);