(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{526:function(t,_,e){},573:function(t,_,e){"use strict";var v=e(526);e.n(v).a},608:function(t,_,e){"use strict";e.r(_);var v,d=e(89),n=e(7),l={layout:"refactor",data:function(){return{isNext:!1,plan:{},detail:{},addIndex:0,outerVisible:!1,tipVisible:!1,view_href:"",id:"",apply_id:"",deposit:[],resultArr:[],update:[],signList:[],course:[],isView:!1}},beforeCreate:function(){v=this},beforeRouteEnter:function(t,_,e){e((function(t){"/ps"!=_.path||(t.tipVisible=!0)}))},mounted:function(){var t=this,_=this;_.id=_.$route.query.id,this.view_href=n.a.view_host,d.a.get("/customer-apply-question/get-my-ps?search[id]="+_.id).then((function(e){0!=e.length?(_.plan=e[0],0!=e[0].apply.length&&(t.apply_id=e[0].apply[0].id,t.isNext=!0)):(_.isNext=!1,_.plan={})})),d.a.get("/code-val/group-key-list").then((function(t){_.resultArr=t.RESULT_OFFER,_.deposit=t.DEPOSIT_TYPE,_.signList=t.APPLY_TYPE,_.course=t.COURSE_TYPE}))},methods:{prev:function(){this.$router.push("/writ/ps")},tip:function(){this.tipVisible=!1},next:function(){this.isNext?this.$router.push({path:"/writ/ps/edit",query:{id:this.id,type:this.addIndex,apply_id:this.apply_id}}):this.$message({message:"该合同下暂无可申请的PS方案哦~ 如有疑问，请联系你的顾问老师！",type:"warning"})},viewDetail:function(t,_){var e=this;d.a.get("/customer-apply-update/list",{apply_id:_}).then((function(t){e.update=t})),this.detail=this.plan.apply[t],this.outerVisible=!0},selectApply:function(t){this.addIndex=t,this.apply_id=this.plan.apply[t].id}},filters:{resultFormat:function(t){var _="";return v.resultArr.map((function(e){if(e.id==t)return _=e.cvalue_cn})),_},signFormat:function(t){var _="";return v.signList.map((function(e){if(e.id==t)return _=e.cvalue_cn})),_},depositFormat:function(t){var _="";return v.deposit.map((function(e){if(e.id==t)return _=e.cvalue_cn})),_},courseFormat:function(t){var _="";return v.course.map((function(e){if(e.id==t)return _=e.cvalue_cn})),_}}},r=(e(573),e(10)),component=Object(r.a)(l,(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("div",{staticClass:"cv ps"},[e("div",{staticClass:"cv_step2"},[e("div",{staticClass:"title_box"},[e("div",{staticClass:"cv_title"},[e("p",[t._v("新增PS")]),t._v(" "),e("span",[t._v("目前您有"+t._s(t.plan.used_ps_num)+"份PS，您的套餐还可新增"+t._s(t.plan.can_use_ps_num)+"份PS")])])]),t._v(" "),e("div",{staticClass:"cv_content ps_add ps_add2"},[t.isNext?e("span",{staticClass:"ps_tip"},[t._v("请选择您要新增PS的申请方案")]):e("span",{staticClass:"ps_tip"},[t._v("该合同下暂无可申请的PS方案哦~ 如有疑问，请联系你的顾问老师！")]),t._v(" "),e("div",{staticClass:"add_box"},t._l(t.plan.apply,(function(_,v){return e("div",{key:v,staticClass:"add_item",class:{active:v==t.addIndex}},[e("div",{staticClass:"add_title"},[t._v("\n                        申请方案"+t._s(v+1)+"\n                        "),t.isView?e("span",{on:{click:function(e){return t.viewDetail(v,_.id)}}},[t._v("查看详情")]):t._e()]),t._v(" "),e("div",{staticClass:"add_content",on:{click:function(_){return t.selectApply(v)}}},[e("div",{staticClass:"detail_item"},[e("span",[t._v("申请院校")]),t._v(" "),e("p",[t._v(t._s(_.university_en)+" "+t._s(_.university_cn))])]),t._v(" "),e("div",{staticClass:"detail_item"},[e("span",[t._v("申请专业")]),t._v(" "),e("p",[t._v(t._s(_.major_en)+" "+t._s(_.major_cn))])]),t._v(" "),e("div",{staticClass:"detail_item"},[e("span",[t._v("所属合同签约日期")]),t._v(" "),e("p",[t._v(t._s(t.plan.created_at))])])])])})),0)]),t._v(" "),e("div",{staticClass:"cv_footer ps_footer"},[e("div",{staticClass:"footer_button"},[e("span",{on:{click:t.prev}},[e("i",[t._v("取消")])]),t._v(" "),e("span",{class:{gray:!t.isNext},on:{click:t.next}},[t._v("下一步")])])])]),t._v(" "),e("div",{staticClass:"add ps_detail table_dialog"},[e("el-dialog",{attrs:{title:"",visible:t.outerVisible},on:{"update:visible":function(_){t.outerVisible=_}}},[e("div",{staticClass:"add_title"},[t._v("方案详情")]),t._v(" "),e("div",{staticClass:"add_content"},[e("div",{staticClass:"detail_table"},[e("table",{attrs:{border:"1"}},[e("tr",[e("td",[t._v("方案号")]),t._v(" "),e("td",[t._v(t._s(t.detail.scheme_no))]),t._v(" "),e("td",[t._v("课程类型")]),t._v(" "),e("td",[t._v(t._s(t._f("courseFormat")(t.detail.apply_course_type)))])]),t._v(" "),e("tr",[e("td",[t._v("申请院校")]),t._v(" "),e("td",[t._v(t._s(t.detail.university_cn))]),t._v(" "),e("td",[t._v("申请专业")]),t._v(" "),e("td",[t._v(t._s(t.detail.apply_course_name_cn))])]),t._v(" "),e("tr",[e("td",[t._v("申请专用邮箱")]),t._v(" "),e("td",[t._v(t._s(t.detail.apply_special_email))]),t._v(" "),e("td",[t._v("邮箱密码")]),t._v(" "),e("td",[t._v(t._s(t.detail.apply_special_password))])]),t._v(" "),e("tr",[e("td",[t._v("网申提交日期")]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.detail.net_submit_date))])]),t._v(" "),e("tr",[e("td",[t._v("网申方式")]),t._v(" "),e("td",[t._v(t._s(t._f("signFormat")(t.detail.sign_inapply_type)))]),t._v(" "),e("td",[t._v("网申账号")]),t._v(" "),e("td",[t._v(t._s(t.detail.net_client_id))])]),t._v(" "),e("tr",[e("td",[t._v("网申密码")]),t._v(" "),e("td",[t._v(t._s(t.detail.net_password))]),t._v(" "),e("td",[t._v("院校申请档案号")]),t._v(" "),e("td",[t._v(t._s(t.detail.school_apply_no))])]),t._v(" "),e("tr",[e("td",[t._v("网申链接")]),t._v(" "),e("td",[t._v(t._s(t.detail.net_url))]),t._v(" "),e("td",[t._v("可查进度日期")]),t._v(" "),e("td",[t._v(t._s(t.detail.state_query_date))])]),t._v(" "),e("tr",[e("td",[t._v("申请结果")]),t._v(" "),e("td",[t._v(t._s(t._f("resultFormat")(t.detail.result_offer)))]),t._v(" "),e("td",[t._v("申请结果日期")]),t._v(" "),e("td",[t._v(t._s(t.detail.result_con))])]),t._v(" "),e("tr",[e("td",[t._v("入学条件")]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.detail.result_con))])]),t._v(" "),e("tr",[e("td",[t._v("申请费")]),t._v(" "),e("td",[t._v(t._s(t.detail.apply_fee))]),t._v(" "),e("td",[t._v("押金条件")]),t._v(" "),e("td",[t._v(t._s(t.detail.deposit_requirement))])]),t._v(" "),e("tr",[e("td",[t._v("押金类型")]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t._f("depositFormat")(t.detail.deposit_type)))])]),t._v(" "),e("tr",[e("td",[t._v("押金截止日期")]),t._v(" "),e("td",[t._v(t._s(t.detail.deposit_end_date))]),t._v(" "),e("td",[t._v("接受录取结果截止日期")]),t._v(" "),e("td",[t._v(t._s(t.detail.accept_result_end_date))])]),t._v(" "),e("tr",[e("td",[t._v("导入学计划")]),t._v(" "),e("td",[t._v(t._s(t.detail.leading_plan))]),t._v(" "),e("td",[t._v("CAS编号")]),t._v(" "),e("td",[t._v(t._s(t.detail.cas_no))])]),t._v(" "),e("tr",[e("td",[t._v("学校确认接受日期")]),t._v(" "),e("td",[t._v(t._s(t.detail.school_confirm_date))]),t._v(" "),e("td",[t._v("收到cas日期")]),t._v(" "),e("td",[t._v(t._s(t.detail.recept_cas_date))])]),t._v(" "),e("tr",[e("td",[t._v("CO")]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t.detail.co_file?e("a",{staticClass:"reviewBtn",attrs:{target:"_blank",href:t.view_href+t.detail.co_file}},[t._v("查看CO")]):t._e()])]),t._v(" "),e("tr",[e("td",[t._v("UO")]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t.detail.uo_file?e("a",{staticClass:"reviewBtn",attrs:{target:"_blank",href:t.view_href+t.detail.uo_file}},[t._v("查看UO")]):t._e()])]),t._v(" "),e("tr",[e("td",[t._v("CAS")]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t.detail.cas_file?e("a",{staticClass:"reviewBtn",attrs:{target:"_blank",href:t.view_href+t.detail.cas_file}},[t._v("查看CAS")]):t._e()])]),t._v(" "),e("tr",[e("td",[t._v("备注")]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.detail.apply_note))])]),t._v(" "),e("tr",[e("td",{staticClass:"detail_update",attrs:{colspan:"4"}},[t._v("实时更新")])]),t._v(" "),t._l(t.update,(function(_,v){return e("tr",{key:v,staticClass:"update_text"},[e("td",[t._v(t._s(_.update_time))]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t._v(t._s(_.update_content))])])}))],2)]),t._v(" "),e("div",{staticClass:"footer_button psDetail_button"},[e("span",{on:{click:function(_){t.outerVisible=!1}}},[e("i",[t._v("关闭")])])])])])],1),t._v(" "),e("div",{staticClass:"add notice"},[e("el-dialog",{attrs:{title:"",visible:t.tipVisible,closeOnClickModal:!1},on:{"update:visible":function(_){t.tipVisible=_}}},[e("div",{staticClass:"add_title"},[t._v("新增PS须知")]),t._v(" "),e("div",{staticClass:"add_content notice_content"},[e("p",[t._v("请仔细阅读以下内容，一旦点击“我已了解”，默认为已阅读并同意如下所有内容：")]),t._v(" "),e("p",[t._v("1）开始前，再次确认目前可新增PS数量；如可新增PS数量为0，代表不能添加PS素材收集表；")]),t._v(" "),e("p",[t._v("2）请在确认并选择你的主申院校与专业后，开始制作第一份PS素材收集表；")]),t._v(" "),e("p",[t._v("3）如主申院校与专业不确定，将默认以第一次选择的院校与专业为主申院校；")]),t._v(" "),e("p",[t._v("4）PS撰写时，将以主申院校与专业对PS的要求为基础，提取PS素材收集表内容撰写通用版PS；")]),t._v(" "),e("p",[t._v("5）非主申院校与专业的PS只在通用版PS上进行修改，修改占比约5%，不单独撰写PS；")]),t._v(" "),e("p",[t._v("6）PS素材收集表内问题均带有填写提示，请仔细阅读后再填写；")]),t._v(" "),e("p",[t._v("7）如需额外撰写非主申院校与专业的PS，请联系您的销售顾问，额外采购“加写PS服务”。")]),t._v(" "),e("div",{staticClass:"footer_button footer_button_156 footer_tip active"},[e("span",{on:{click:t.tip}},[t._v("我已了解！")])])])])],1)])}),[],!1,null,null,null);_.default=component.exports}}]);