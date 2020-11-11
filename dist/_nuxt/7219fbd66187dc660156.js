(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{503:function(t,_,n){},546:function(t,_,n){"use strict";var e=n(503);n.n(e).a},584:function(t,_,n){"use strict";n.r(_);var e=n(71),l=n(7),v={layout:"refactor",data:function(){return{signShow:!1,aboradShow:!1,schoolShow:!1,paymentShow:!1,writShow:!1,visaTable:[],visaDetail:{},aboradTable:[],aboradDetail:{},service_id:2,img_url:""}},mounted:function(){this.getAborad(),this.getSign(),this.img_url=l.a.view_host},methods:{getAborad:function(){var t=this;e.a.get("/contract/my-list").then((function(_){_&&(t.aboradTable=_)}))},getSign:function(){var t=this;e.a.get("/contract/my-list-visa").then((function(_){_&&(t.visaTable=_)}))},viewSign:function(t,_){var n=this,l=this;e.a.get("/contract/my-visa-detail",{id:_.id,service_id:l.service_id}).then((function(t){t&&(l.visaDetail=t,n.signShow=!0)}))},viewAborad:function(t,_){var n=_.package_type,l=_.is_son_flag,v=this;e.a.get("/contract/my-detail",{id:_.id,service_id:v.service_id}).then((function(t){t&&(v.aboradDetail=t,l&&"院校加申"==n?v.schoolShow=!0:l&&"文书加写"==n?v.writShow=!0:l&&"补齐尾款"==n?v.paymentShow=!0:v.aboradShow=!0)}))}}},o=(n(546),n(10)),component=Object(o.a)(v,(function(){var t=this,_=t.$createElement,n=t._self._c||_;return n("div",{staticClass:"plan con sign"},[t._m(0),t._v(" "),n("div",{staticClass:"refactor_table"},[t._m(1),t._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:t.aboradTable,"tooltip-effect":"dark"}},[n("el-table-column",{attrs:{prop:"contract_no",label:"合同编号",width:"300"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sign_type",label:"合同类型"}}),t._v(" "),n("el-table-column",{attrs:{prop:"package_type",label:"套餐类型"}}),t._v(" "),n("el-table-column",{attrs:{prop:"created_at",label:"签约时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"encrol_date_show_text",label:"入学时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"course_type",label:"课程类型"}}),t._v(" "),n("el-table-column",{attrs:{prop:"apply_num",label:"院校申请方案数"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:t._u([{key:"default",fn:function(_){return[n("el-button",{staticClass:"table_btn",attrs:{size:"mini"},on:{click:function(n){return t.viewAborad(_.$index,_.row)}}},[t._v("详情")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"refactor_table"},[t._m(2),t._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:t.visaTable,"tooltip-effect":"dark"}},[n("el-table-column",{attrs:{prop:"contract_no",label:"合同编号",width:"300"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sign_type",label:"合同类型"}}),t._v(" "),n("el-table-column",{attrs:{prop:"invoice_number",label:"InvoiceNumber"}}),t._v(" "),n("el-table-column",{attrs:{prop:"created_at",label:"签约时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sign_end_date",label:"预计最迟递签时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"due_fee",label:"应收服务费"},scopedSlots:t._u([{key:"default",fn:function(_){return[n("p",{staticClass:"free"},[_.row.due_fee?n("i",[t._v("￥")]):t._e(),t._v("\n                            "+t._s(_.row.due_fee)+"\n                        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"sum_fee",label:"实收服务费"},scopedSlots:t._u([{key:"default",fn:function(_){return[n("p",{staticClass:"free"},[_.row.sum_fee?n("i",[t._v("￥")]):t._e(),t._v("\n                            "+t._s(_.row.sum_fee)+"\n                        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:t._u([{key:"default",fn:function(_){return[n("el-button",{staticClass:"table_btn",attrs:{size:"mini"},on:{click:function(n){return t.viewSign(_.$index,_.row)}}},[t._v("详情")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:t.signShow,width:"1024px",center:""},on:{"update:visible":function(_){t.signShow=_}}},[n("div",{staticClass:"add_title"},[t._v("签证合同详情")]),t._v(" "),n("div",{staticClass:"add_con plan_add_plan sign_add_con aborad"},[n("div",{staticClass:"plan_item"},[n("div",{staticClass:"plan_wrap"},[n("div",{staticClass:"plan_box"},[n("span",[t._v("合同编号")]),t._v(" "),n("span",[t._v(t._s(t.visaDetail.contract_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("所属部门")]),t._v(" "),n("span",[t._v(t._s(t.visaDetail.depart_name))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("收款方式")]),t._v(" "),n("span",[t._v(t._s(t.visaDetail.pay_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同类型")]),t._v(" "),n("span",[t._v(t._s(t.visaDetail.sign_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("签约类型")]),t._v(" "),n("span",[t._v(t._s(t.visaDetail.finance_id_project_cn))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("预计最迟递签日期")]),t._v(" "),n("span",[t._v(t._s(t.visaDetail.sign_end_date))])]),t._v(" "),n("div",{staticClass:"plan_box plan_free"},[n("span",[t._v("应收服务费")]),t._v(" "),n("span",[n("i",[t._v("￥"+t._s(t.visaDetail.due_fee))])])]),t._v(" "),n("div",{staticClass:"plan_box plan_free"},[n("span",[t._v("实收服务费")]),t._v(" "),n("span",[n("i",[t._v("￥"+t._s(t.visaDetail.sum_fee))])])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("发票/收据号")]),t._v(" "),n("span",[t._v(t._s(t.visaDetail.contract_finance_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("付款证明")]),t._v(" "),n("span",[t.visaDetail.fee_file?n("a",{attrs:{href:t.img_url+t.visaDetail.fee_file,target:"_blank"}},[t._v(t._s(t.img_url+t.visaDetail.fee_file))]):t._e()])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("备注")]),t._v(" "),n("span",[t._v(t._s(t.visaDetail.special_note))])])])]),t._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(_){t.signShow=!1}}},[t._v("取消")])])])])],1),t._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:t.aboradShow,width:"1024px",center:""},on:{"update:visible":function(_){t.aboradShow=_}}},[n("div",{staticClass:"add_title"},[t._v("留学合同详情")]),t._v(" "),n("div",{staticClass:"add_con plan_add_plan aborad"},[n("div",{staticClass:"plan_item"},[n("div",{staticClass:"plan_wrap"},[n("div",{staticClass:"plan_box"},[n("span",[t._v("客户姓名")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.customer_name))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("所属部门")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.depart_name))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同编号")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.contract_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同类型")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.sign_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("收款方式")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.pay_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("课程类型")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.course_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请方案数")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.apply_num))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v(t._s(t.aboradDetail.finance_id_project_cn)+"应收金额")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.finance_id_due_fee))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v(t._s(t.aboradDetail.finance_id_project_cn)+"实收金额")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.finance_id_sum_fee))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("PS总数")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.ps_number))])]),t._v(" "),n("div",{staticClass:"plan_box plan_free"},[n("span",[t._v("应收总金额")]),t._v(" "),n("span",[n("i",[t._v("￥"+t._s(t.aboradDetail.due_fee))])])]),t._v(" "),n("div",{staticClass:"plan_box plan_free"},[n("span",[t._v("实收总金额")]),t._v(" "),n("span",[n("i",[t._v("￥"+t._s(t.aboradDetail.sum_fee))])])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("发票/收据号")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.contract_finance_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("入学时间")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.encrol_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("签约时间")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.sign_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span"),t._v(" "),n("span")])])]),t._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(_){t.aboradShow=!1}}},[t._v("取消")])])])])],1),t._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:t.schoolShow,width:"1024px",center:""},on:{"update:visible":function(_){t.schoolShow=_}}},[n("div",{staticClass:"add_title"},[t._v("留学合同详情")]),t._v(" "),n("div",{staticClass:"add_con plan_add_plan aborad sign_add_con"},[n("div",{staticClass:"plan_item"},[n("div",{staticClass:"plan_wrap"},[n("div",{staticClass:"plan_box"},[n("span",[t._v("客户姓名")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.customer_name))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("所属部门")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.depart_name))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同编号")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.contract_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同类型")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.sign_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("支付方式")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.pay_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("课程类型")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.course_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("加申方案数")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.apply_num))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("入学时间")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.encrol_date))])]),t._v(" "),n("div",{staticClass:"plan_box plan_free"},[n("span",[t._v("院校加申")]),t._v(" "),n("span",[t._v("加校费 "),n("i",[t._v("￥"+t._s(t.aboradDetail.add_school_fee))]),t._v(" 优惠金额 "),n("i",[t._v("￥"+t._s(t.aboradDetail.discount_fee))]),t._v(" 应收金额 "),n("i",[t._v("￥"+t._s(t.aboradDetail.due_fee))]),t._v(" 实收金额 "),n("i",[t._v("￥"+t._s(t.aboradDetail.sum_fee))])])])])]),t._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(_){t.schoolShow=!1}}},[t._v("取消")])])])])],1),t._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:t.writShow,width:"1024px",center:""},on:{"update:visible":function(_){t.writShow=_}}},[n("div",{staticClass:"add_title"},[t._v("留学合同详情")]),t._v(" "),n("div",{staticClass:"add_con plan_add_plan aborad sign_add_con"},[n("div",{staticClass:"plan_item"},[n("div",{staticClass:"plan_wrap"},[n("div",{staticClass:"plan_box"},[n("span",[t._v("所属部门")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.depart_name))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同编号")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.contract_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同类型")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.sign_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("支付方式")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.pay_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("服务内容")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.package_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("服务数量")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.service_num))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("入学时间")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.encrol_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span"),t._v(" "),n("span")]),t._v(" "),n("div",{staticClass:"plan_box plan_free"},[n("span",[t._v("服务收费")]),t._v(" "),n("span",[t._v("加写费 "),n("i",[t._v("￥"+t._s(t.aboradDetail.add_school_fee))]),t._v(" 优惠金额 "),n("i",[t._v("￥"+t._s(t.aboradDetail.discount_fee))]),t._v(" 应收金额 "),n("i",[t._v("￥"+t._s(t.aboradDetail.due_fee))]),t._v(" 实收金额 "),n("i",[t._v("￥"+t._s(t.aboradDetail.sum_fee))])])])])]),t._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(_){t.writShow=!1}}},[t._v("取消")])])])])],1),t._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:t.paymentShow,width:"1024px",center:""},on:{"update:visible":function(_){t.paymentShow=_}}},[n("div",{staticClass:"add_title"},[t._v("留学合同详情")]),t._v(" "),n("div",{staticClass:"add_con plan_add_plan aborad sign_add_con"},[n("div",{staticClass:"plan_item"},[n("div",{staticClass:"plan_wrap"},[n("div",{staticClass:"plan_box"},[n("span",[t._v("客户姓名")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.customer_name))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("所属部门")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.depart_name))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同编号")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.contract_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("合同类型")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.sign_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("支付方式")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.pay_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("课程类型")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.course_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请方案数")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.apply_num))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("入学时间")]),t._v(" "),n("span",[t._v(t._s(t.aboradDetail.encrol_date))])]),t._v(" "),n("div",{staticClass:"plan_box plan_free"},[n("span",[t._v("补齐尾款")]),t._v(" "),n("span",[t._v("应收金额 "),n("i",[t._v("￥"+t._s(t.aboradDetail.due_fee))]),t._v(" 实收金额 "),n("i",[t._v("￥"+t._s(t.aboradDetail.sum_fee))])])])])]),t._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(_){t.paymentShow=!1}}},[t._v("取消")])])])])],1)])}),[function(){var t=this.$createElement,_=this._self._c||t;return _("div",{staticClass:"version_title"},[_("span",[this._v("我的签约")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("div",{staticClass:"sign_title"},[this._v("\n                留学\n                "),_("br"),this._v("合同\n            ")])},function(){var t=this.$createElement,_=this._self._c||t;return _("div",{staticClass:"sign_title"},[this._v("\n                签证\n                "),_("br"),this._v("合同\n            ")])}],!1,null,null,null);_.default=component.exports}}]);