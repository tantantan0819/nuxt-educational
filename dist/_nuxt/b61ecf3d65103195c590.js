(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{502:function(t,_,n){},550:function(t,_,n){"use strict";var e=n(502);n.n(e).a},587:function(t,_,n){"use strict";n.r(_);var e,c=n(71),v=(n(4),{layout:"refactor",data:function(){return{data:{},arrange_type:[],pay_type:[]}},beforeCreate:function(){e=this},filters:{arrangeFilters:function(t){var _="";return t&&e.arrange_type.map((function(n,e){n.id==t&&(_=n.cvalue_cn)})),_},payFilters:function(t){var _="";return e.pay_type.map((function(n,e){n.id==t&&(_=n.cvalue_cn)})),_}},mounted:function(){this.getPickUp(),this.getType()},methods:{getPickUp:function(){var t=this;c.a.get("/utrack-reception/list").then((function(_){_.length>0&&(t.data=_[0])}))},getType:function(){var t=this;c.a.get("/code-val/group-key-list").then((function(_){t.arrange_type=_.RECEPTION_ARRANGE_TYPE,t.pay_type=_.PAY_TYPE}))}}}),r=(n(550),n(10)),component=Object(r.a)(v,(function(){var t=this,_=t.$createElement,n=t._self._c||_;return n("div",{staticClass:"plan con"},[t._m(0),t._v(" "),n("div",{staticClass:"accommodation"},[n("div",{staticClass:"acc_item"},[n("span",[t._v("安排方式")]),t._v(" "),n("span",[t._v(t._s(t._f("arrangeFilters")(t.data.arrange_type)))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("接机费用")]),t._v(" "),n("span",[t._v(t._s(t.data.reception_fee))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("收款方式")]),t._v(" "),n("span",[t._v(t._s(t._f("payFilters")(t.data.pay_type)))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("申请截止日期")]),t._v(" "),n("span",[t._v(t._s(t.data.apply_end_date))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("申请递交日期")]),t._v(" "),n("span",[t._v(t._s(t.data.submit_apply_date))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("收到书面确认日期")]),t._v(" "),n("span",[t._v(t._s(t.data.recieve_confirm_date))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("通知客户日期")]),t._v(" "),n("span",[t._v(t._s(t.data.reform_customer_date))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("抵达机场")]),t._v(" "),n("span",[t._v(t._s(t.data.arrive_airport))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("航班号")]),t._v(" "),n("span",[t._v(t._s(t.data.airplan_no))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("抵达日期")]),t._v(" "),n("span",[t._v(t._s(t.data.arrive_date))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("紧急联系人")]),t._v(" "),n("span",[t._v(t._s(t.data.urgent_contract_man))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("紧急联系电话")]),t._v(" "),n("span",[t._v(t._s(t.data.urgent_contract_phone))])]),t._v(" "),n("div",{staticClass:"acc_item"},[n("span",[t._v("备注")]),t._v(" "),n("span",[t._v(t._s(t.data.note))])])])])}),[function(){var t=this.$createElement,_=this._self._c||t;return _("div",{staticClass:"version_title"},[_("span",[this._v("我的接机")])])}],!1,null,null,null);_.default=component.exports}}]);