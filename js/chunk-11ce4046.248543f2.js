(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11ce4046"],{"60ce":function(t,e,s){},af69:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"setusername"},[s("div",{staticClass:"rating_page"},[t._m(0),s("div",{staticClass:"setname"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow1,expression:"isShow1"}],staticClass:"setname_top"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputV,expression:"inputV"}],staticClass:"setname_top_input",attrs:{type:"text"},domProps:{value:t.inputV},on:{input:function(e){e.target.composing||(t.inputV=e.target.value)}}}),t._m(1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow2,expression:"isShow2"}],staticClass:"setname_top"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputV,expression:"inputV"}],staticClass:"setname_top_input1",attrs:{type:"text"},domProps:{value:t.inputV},on:{input:function(e){e.target.composing||(t.inputV=e.target.value)}}}),t._m(2)]),s("div",{staticClass:"reset"},[s("button",{staticClass:"reset_btn",on:{click:t.setusername}},[t._v("确认修改")])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("a",{attrs:{href:"javascript:history.back(-1)"}},[s("i",{staticClass:"el-icon-arrow-left"})]),s("span",[t._v("修改用户名")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"setname_top_div_p"},[t._v("用户名只能修改一次（5-24字符之间）")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"setname_top_div_p1"},[t._v("用户名长度5到24位之间")])])}],n={name:"SetUserName",data:function(){return{inputV:"",user:{},isShow1:!0,isShow2:!1}},created:function(){this.user=JSON.parse(localStorage.getItem("profile"))},methods:{setusername:function(){this.inputV.length<5?(this.isShow1=!1,this.isShow2=!0):(this.user.username=this.inputV,this.$router.push("/info"),localStorage.setItem("profile",JSON.stringify(this.user)))}}},r=n,o=(s("e1e0"),s("2877")),u=Object(o["a"])(r,i,a,!1,null,"5f23d26e",null);e["default"]=u.exports},e1e0:function(t,e,s){"use strict";var i=s("60ce"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-11ce4046.248543f2.js.map