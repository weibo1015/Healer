(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-734c338e"],{"226d":function(t,s,a){},"26fa":function(t,s,a){"use strict";var c=a("226d"),e=a.n(c);e.a},"2c70":function(t,s,a){"use strict";a.r(s);var c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"exchange"},[a("div",{staticClass:"page"},[a("header",[a("router-link",{attrs:{to:"/benefit"}},[a("i",{staticClass:"el-icon-arrow-left"})]),a("span",[t._v("兑换红包")])],1),a("form",{staticClass:"exchange_code"},[a("el-input",{staticClass:"exchange_input",attrs:{type:"text",placeholder:"请输入兑换码"},model:{value:t.exCode,callback:function(s){t.exCode=s},expression:"exCode"}}),a("section",{staticClass:"input_container captcha_code_container"},[a("el-input",{staticClass:"input_c",attrs:{type:"text",placeholder:"验证码",maxlength:"4"},model:{value:t.capCode,callback:function(s){t.capCode=s},expression:"capCode"}}),a("div",{staticClass:"img_change_img"},[a("img",{staticClass:"img1",attrs:{src:t.capUrl}}),a("div",{staticClass:"change_img",on:{click:t.changeCap}},[a("p",{staticClass:"p1"},[t._v("看不清")]),a("p",{staticClass:"p2"},[t._v("换一张")])])])],1)],1),t.isShow2?a("div",{staticClass:"alet_container  animated bounceIn"},[a("section",{staticClass:"tip_text_container"},[t._m(0),a("p",{staticClass:"tip_text"},[t._v("无效的兑换码")]),a("div",{staticClass:"confrim",on:{click:function(s){t.isShow2=!t.isShow2}}},[t._v("确认")])])]):t._e(),t.isShow3?a("div",{staticClass:"alet_container  animated bounceIn"},[a("section",{staticClass:"tip_text_container"},[t._m(1),a("p",{staticClass:"tip_text"},[t._v("无效的兑换码")]),a("div",{staticClass:"confrim",on:{click:function(s){t.isShow3=!t.isShow3}}},[t._v("确认")])])]):t._e(),a("div",{staticClass:"determine",style:{"background-color":t.isShow1?"#ccc":"#4cd964"},on:{click:t.exchange}},[t._v("兑换")])])])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip_icon"},[a("span",{staticClass:"tip_icon_s1"}),a("span",{staticClass:"tip_icon_s2"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip_icon"},[a("span",{staticClass:"tip_icon_s1"}),a("span",{staticClass:"tip_icon_s2"})])}],i={name:"Exchange",data:function(){return{capCode:"",capUrl:"",isShow1:!1,isShow2:!1,isShow3:!1,exCode:"",user_id:"",exchange_code:"",captcha_code:""}},created:function(){this.changeCap(),this.user_id=JSON.parse(localStorage.getItem("user_id"))},methods:{changeCap:function(){var t=this;this.axios.post("/v1/captchas").then((function(s){t.capUrl=s.code})).catch((function(t){}))},exchange:function(){var t=this;this.axios.post("/v1/users/"+this.user_id+"/hongbao/exchange",{params:{exchange_code:this.exchange_code,captcha_code:this.captcha_code}}).then((function(s){"无效的兑换码"==s.message?t.isShow2=!0:"请输入验证码"==s.message?t.isShow3=!0:(t.isShow2=!1,t.isShow3=!1)})).catch((function(t){}))}}},n=i,o=(a("26fa"),a("2877")),l=Object(o["a"])(n,c,e,!1,null,"03590782",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-734c338e.ce5cd96e.js.map