(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{505:function(t,n,c){},549:function(t,n,c){"use strict";var e=c(505);c.n(e).a},586:function(t,n,c){"use strict";c.r(n);var e=c(89),r={data:function(){return{confirm:[]}},mounted:function(){var t=this;e.a.get("/customer-material/apply-list").then((function(n){if(n.length>0){t.confirm=n;var c=!1;n.map((function(t){"未确认"==t.material_status&&(c=!0)})),t.$store.commit("SET_CONFIRM",c)}}))},methods:{link:function(t,n){this.$router.push({path:"/writ/confirm/detail",query:{id:t,index:n}})}}},l=(c(549),c(10)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"cv con"},[c("div",{staticClass:"cv_step2"},[t._m(0),t._v(" "),c("div",{staticClass:"confirm"},t._l(t.confirm,(function(n,e){return c("div",{key:e,staticClass:"item",class:{red:"未通过"==n.material_status,green:"已通过"==n.material_status},on:{click:function(c){return t.link(n.id,e)}}},[c("div",{staticClass:"top",class:{active:"未确定"==n.material_status}},[c("span",[t._v("方案号："+t._s(n.scheme_no))])]),t._v(" "),c("div",{staticClass:"con"},[c("div",{staticClass:"in"},[c("p",[t._v("申请院校")]),t._v(" "),c("p",[t._v(t._s(n.university_cn))])]),t._v(" "),c("div",{staticClass:"in"},[c("p",[t._v("申请专业")]),t._v(" "),c("p",[t._v(t._s(n.major_cn))])]),t._v(" "),c("div",{staticClass:"in"},[c("p",[t._v("确认状态")]),t._v(" "),c("p",[t._v(t._s(n.material_status))])])])])})),0)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title_box"},[n("div",{staticClass:"cv_title"},[n("p",[this._v("材料确认")])])])}],!1,null,null,null);n.default=component.exports}}]);