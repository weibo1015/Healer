(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4179a572"],{5360:function(t,s,e){},"7e55":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"addWarp"},[e("div",{staticClass:"rating_page"},[e("header",[e("router-link",{attrs:{to:"/address"}},[e("i",{staticClass:"el-icon-arrow-left"})]),e("span",[t._v("新增地址")])],1),e("div",{staticClass:"adddetail"},[e("div",{staticClass:"adddetail_div"},[e("div",{staticClass:"input_new"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input1",attrs:{type:"text",placeholder:"请填写你的姓名"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),e("div",{staticClass:"input_new",on:{click:t.adddetail}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"input1",attrs:{type:"text",placeholder:"小区/写字楼/学校等"},domProps:{value:t.address},on:{input:function(s){s.target.composing||(t.address=s.target.value)}}})]),e("div",{staticClass:"input_new"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.address_detail,expression:"address_detail"}],staticClass:"input1",attrs:{type:"text",placeholder:"请填写详细送餐地址"},domProps:{value:t.address_detail},on:{input:function(s){s.target.composing||(t.address_detail=s.target.value)}}})]),e("div",{staticClass:"input_new"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input1",attrs:{type:"tel",placeholder:"请填写能够联系到您的手机号",maxlength:"11"},domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}})]),e("div",{staticClass:"input_new"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_bk,expression:"phone_bk"}],staticClass:"input1",attrs:{type:"tel",placeholder:"备用联系电话（选填）",maxlength:"11"},domProps:{value:t.phone_bk},on:{input:function(s){s.target.composing||(t.phone_bk=s.target.value)}}})])])]),t.isShow1?e("div",{staticClass:"alet_container  animated bounceIn"},[e("section",{staticClass:"tip_text_container"},[t._m(0),e("p",{staticClass:"tip_text"},[t._v("收货人姓名错误")]),e("div",{staticClass:"confrim",on:{click:function(s){t.isShow1=!t.isShow1}}},[t._v("确认")])])]):t._e(),t.isShow2?e("div",{staticClass:"alet_container  animated bounceIn"},[e("section",{staticClass:"tip_text_container"},[t._m(1),e("p",{staticClass:"tip_text"},[t._v("地址信息错误")]),e("div",{staticClass:"confrim",on:{click:function(s){t.isShow2=!t.isShow2}}},[t._v("确认")])])]):t._e(),t.isShow3?e("div",{staticClass:"alet_container  animated bounceIn"},[e("section",{staticClass:"tip_text_container"},[t._m(2),e("p",{staticClass:"tip_text"},[t._v("地址信息错误")]),e("div",{staticClass:"confrim",on:{click:function(s){t.isShow3=!t.isShow3}}},[t._v("确认")])])]):t._e(),t.isShow4?e("div",{staticClass:"alet_container  animated bounceIn"},[e("section",{staticClass:"tip_text_container"},[t._m(3),e("p",{staticClass:"tip_text"},[t._v("添加地址成功")]),e("div",{staticClass:"confrim",on:{click:function(s){t.isShow4=!t.isShow4}}},[t._v("确认")])])]):t._e(),e("div",{staticClass:"addbutton"},[e("el-button",{staticClass:"addbtn",on:{click:t.newAddress}},[t._v("新增地址")])],1)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip_icon"},[e("span",{staticClass:"tip_icon_s1"}),e("span",{staticClass:"tip_icon_s2"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip_icon"},[e("span",{staticClass:"tip_icon_s1"}),e("span",{staticClass:"tip_icon_s2"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip_icon"},[e("span",{staticClass:"tip_icon_s1"}),e("span",{staticClass:"tip_icon_s2"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip_icon"},[e("span",{staticClass:"tip_icon_s1"}),e("span",{staticClass:"tip_icon_s2"})])}],n=(e("b0c0"),{name:"Add",data:function(){return{msite:"",address:"",name:"",address_detail:"",phone:"",phone_bk:"",user_id:"",geohash:"",tag:"家",sex:1,tag_type:2,isShow1:!1,isShow2:!1,isShow3:!1,isShow4:!1,a:[]}},created:function(){this.name=JSON.parse(localStorage.getItem("name")),this.address=JSON.parse(localStorage.getItem("add")),this.user_id=JSON.parse(localStorage.getItem("user_id")),this.msite=JSON.parse(localStorage.getItem("msite")),this.geohash=this.msite.geohash,localStorage.removeItem("add")},methods:{newAddress:function(){var t=this;this.axios.post("/v1/users/"+this.user_id+"/addresses",{user_id:this.user_id,address:this.address,address_detail:this.address_detail,geohash:this.geohash,name:this.name,phone:this.phone,tag:this.tag,sex:this.sex,phone_bk:this.phone_bk,tag_type:this.tag_type}).then((function(s){console.log(s),"收货人姓名错误"==s.message||""==t.name?t.isShow1=!0:"地址信息错误"==s.message||""==t.address||""==t.address_detail?t.isShow2=!0:"收获手机号错误"==s.message?t.isShow3=!0:"添加地址成功"==s.success?(t.isShow4=!0,t.name="",t.address="",t.address_detail="",t.phone="",t.phone_bk="",localStorage.removeItem("name")):(t.isShow1=!1,t.isShow2=!1,t.isShow3=!1)})).catch((function(t){}))},adddetail:function(){localStorage.setItem("name",JSON.stringify(this.name)),this.$router.push("/adddetail")}}}),o=n,c=(e("fd73"),e("2877")),d=Object(c["a"])(o,a,i,!1,null,"f2f22148",null);s["default"]=d.exports},b0c0:function(t,s,e){var a=e("83ab"),i=e("9bf2").f,n=Function.prototype,o=n.toString,c=/^\s*function ([^ (]*)/,d="name";a&&!(d in n)&&i(n,d,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},fd73:function(t,s,e){"use strict";var a=e("5360"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-4179a572.03dea59b.js.map