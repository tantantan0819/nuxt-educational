(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{478:function(t,_,n){},479:function(t,_,n){"use strict";n(24),n(90),n(35);var l=n(5),e=n(55),v=n(7),o={props:["config"],data:function(){return{qiniu_url:"",configuration:{isShowList:!1,multiple:!1,limit:null,btnText:"上传",isPrompt:"",errorText:"请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!",accept:".jpg, .jpeg, .png, .pdf, .excel, .docx,.psd,.PSD, .JPG, .JPEG, PNG, .PDF, .EXCEL, .DOCX"},postData:{token:"",name:"",key:""},tokenParams:{bucket:"ukec",path:"upload/user",ext:""},fileList:[]}},mounted:function(){this.configuration=this.config,this.qiniu_url=v.a.qiniu_url},methods:{beforUpload:function(t){var _=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=_,t.size/1024/1024<30||l.$message({message:"请上传大小不能超过30MB的文件!",type:"warning"}),l.tokenParams.ext=t.name.split(".")[1],l.postData.name=t.name,n.next=7,l.uploadToken();case 7:case"end":return n.stop()}}),n)})))()},uploadToken:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function _(){var n;return regeneratorRuntime.wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return n=t,_.next=3,e.a.get("/qiniu/token",t.tokenParams).then((function(t){n.postData.token=t.token,n.postData.key=t.key}));case 3:case"end":return _.stop()}}),_)})))()},handleRemove:function(t,_){this.flieBox=_,this.$emit("uploadFile",_)},handleExceed:function(t,_){this.$message.warning("当前限制选择"+this.configuration.limit+"个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+_.length," 个文件"))},uploadError:function(){this.$message.error(this.configuration.errorText)},successUpload:function(t,_,n){this.flieBox=n,this.$emit("uploadFile",n),"false"!=this.configuration.isPrompt&&this.$message({message:"上传成功！",type:"success"})}}},c=(n(480),n(10)),component=Object(c.a)(o,(function(){var t=this,_=t.$createElement,n=t._self._c||_;return n("div",{staticClass:"upload"},[n("el-upload",{staticClass:"upload-demo",attrs:{action:t.qiniu_url,data:t.postData,"before-upload":t.beforUpload,"on-success":t.successUpload,"on-remove":t.handleRemove,"show-file-list":t.configuration.isShowList,limit:t.configuration.limit,multiple:t.configuration.multiple,"on-exceed":t.handleExceed,"file-list":t.fileList,"on-error":t.uploadError,accept:t.configuration.accept}},[t._v(t._s(t.configuration.btnText))])],1)}),[],!1,null,"331b40b8",null);_.a=component.exports},480:function(t,_,n){"use strict";var l=n(478);n.n(l).a},487:function(t,_,n){},530:function(t,_,n){"use strict";var l=n(487);n.n(l).a},577:function(t,_,n){"use strict";n.r(_);var l=n(71),e=n(7),v={layout:"refactor",components:{UploadBtn:n(479).a},data:function(){return{applyShow:!1,contract:[],apply:{},img_url:""}},mounted:function(){this.getApply(),this.img_url=e.a.view_host},methods:{loadCo:function(t){window.open(t+"?attname=","_self")},loadUo:function(t){window.open(t+"?attname=","_self")},viewApply:function(t,_){var n=this;l.a.get("/utrack-apply-school/detail",{id:_.id}).then((function(t){t&&(n.apply=t,n.applyShow=!0)}))},getApply:function(){var t=this;l.a.get("/utrack-apply-school/list").then((function(_){_&&(t.contract=_)}))}}},o=(n(530),n(10)),component=Object(o.a)(v,(function(){var t=this,_=t.$createElement,n=t._self._c||_;return n("div",{staticClass:"con"},[t._m(0),t._v(" "),n("div",{staticClass:"apply"},t._l(t.contract,(function(_,l){return n("div",{key:l,staticClass:"apply_table"},[n("div",{staticClass:"apply_top"},[n("div",{staticClass:"apply_left apply_box"},[n("div",{staticClass:"apply_item"},[n("span",[t._v("合同编号")]),t._v(" "),n("span",[t._v(t._s(_.contract_no))])])]),t._v(" "),n("div",{staticClass:"apply_right apply_box"},[n("div",{staticClass:"apply_item"},[n("span",[t._v("合同类型")]),t._v(" "),n("span",[t._v(t._s(_.sign_type))])]),t._v(" "),n("div",{staticClass:"apply_item"},[n("span",[t._v("签约时间")]),t._v(" "),n("span",[t._v(t._s(_.sign_date))])]),t._v(" "),n("div",{staticClass:"apply_item"},[n("span",[t._v("签约人")]),t._v(" "),n("span",[t._v(t._s(_.sign_uid))])]),t._v(" "),n("div",{staticClass:"apply_item"},[n("span",[t._v("入学时间")]),t._v(" "),n("span",[t._v(t._s(_.encrol_date_apply_show))])]),t._v(" "),n("div",{staticClass:"apply_item"},[n("span",[t._v("最大申请方案数")]),t._v(" "),n("span",[t._v(t._s(_.apply_num))])])])]),t._v(" "),n("el-table",{ref:"multipleTable",refInFor:!0,staticStyle:{width:"100%"},attrs:{stripe:"",data:_.apply_arr,"tooltip-effect":"dark"}},[n("el-table-column",{attrs:{prop:"university_cn",label:"申请院校",width:"140"}}),t._v(" "),n("el-table-column",{attrs:{prop:"major_cn",label:"申请专业",width:"110"}}),t._v(" "),n("el-table-column",{attrs:{prop:"apply_major_url",label:"专业链接"},scopedSlots:t._u([{key:"default",fn:function(_){return[_.row.专业链接?n("a",{staticClass:"view_link",attrs:{href:_.row.专业链接,target:"_blank"}},[t._v("官网链接")]):t._e()]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{prop:"申请专用邮箱",label:"申请专用邮箱",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"申请结果",label:"申请结果",width:"90"}}),t._v(" "),n("el-table-column",{attrs:{prop:"是否接受",label:"是否接受",width:"90"}}),t._v(" "),n("el-table-column",{attrs:{prop:"申请档案号",label:"申请档案号",width:"230"}}),t._v(" "),n("el-table-column",{attrs:{prop:"入学状态",label:"入学状态",width:"90"}}),t._v(" "),n("el-table-column",{attrs:{prop:"定校时间",label:"定校时间",width:"90"}}),t._v(" "),n("el-table-column",{attrs:{prop:"申请提交日期",label:"申请提交日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"意向院校",label:"意向院校"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(_){return[n("el-button",{staticClass:"table_btn",attrs:{size:"mini"},on:{click:function(n){return t.viewApply(_.$index,_.row)}}},[t._v("详情")])]}}],null,!0)})],1)],1)})),0),t._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:t.applyShow,width:"1024px",center:""},on:{"update:visible":function(_){t.applyShow=_}}},[n("div",{staticClass:"add_title"},[t._v("申请详情")]),t._v(" "),n("div",{staticClass:"add_con plan_add_plan apply_add_plan"},[n("div",{staticClass:"plan_item"},[n("div",{staticClass:"plan_title"},[t._v("主课申请")]),t._v(" "),n("div",{staticClass:"plan_wrap"},[n("div",{staticClass:"plan_box"},[n("span",[t._v("方案号")]),t._v(" "),n("span",[t._v(t._s(t.apply.scheme_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("课程类型")]),t._v(" "),n("span",[t._v(t._s(t.apply.apply_course_type))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请院校")]),t._v(" "),n("span",[t._v(t._s(t.apply.university_cn))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请专业")]),t._v(" "),n("span",[t._v(t._s(t.apply.major_cn))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请专用邮箱")]),t._v(" "),n("span",[t._v(t._s(t.apply.apply_special_email))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("邮箱密码")]),t._v(" "),n("span",[t._v(t._s(t.apply.apply_special_password))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请递交日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.net_submit_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请结果")]),t._v(" "),n("span",[t._v(t._s(t.apply.result_offer))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请费")]),t._v(" "),n("span",[t._v(t._s(t.apply.apply_fee))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("入学条件/拒绝理由")]),t._v(" "),n("span",[t._v(t._s(t.apply.result_con))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请结果日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.record_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("学费")]),t._v(" "),n("span",[t._v(t._s(t.apply.tuition_fee))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("开学日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.school_open_time))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("押金截止日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.deposit_end_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("接受录取截止日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.accept_result_end_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("押金缴纳时间")]),t._v(" "),n("span",[t._v(t._s(t.apply.deposit_amount_pay_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("接受录取时间")]),t._v(" "),n("span",[t._v(t._s(t.apply.school_confirm_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("奖学金")]),t._v(" "),n("span",[t._v(t._s(t.apply.scholarship))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("押金")]),t._v(" "),n("span",[t._v(t._s(t.apply.deposit_amount))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("主课CAS编号")]),t._v(" "),n("span",[t._v(t._s(t.apply.cas_no))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("主课CAS日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.recept_cas_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("UO")]),t._v(" "),n("span",[n("a",{attrs:{href:t.img_url+t.apply.UO图片,target:"_blank"}},[n("img",{attrs:{src:t.img_url+t.apply.UO图片,alt:""}})]),t._v(" "),t.apply.UO图片?n("button",{on:{click:function(_){return t.loadUo(t.img_url+t.apply.UO图片)}}},[t._v("下载")]):t._e()])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("CO")]),t._v(" "),n("span",[n("a",{attrs:{href:t.img_url+t.apply.CO图片,target:"_blank"}},[n("img",{attrs:{src:t.img_url+t.apply.CO图片,alt:""}})]),t._v(" "),t.apply.CO图片?n("button",{on:{click:function(_){return t.loadCo(t.img_url+t.apply.CO图片)}}},[t._v("下载")]):t._e()])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span"),t._v(" "),n("span")])])]),t._v(" "),n("div",{staticClass:"plan_item"},[n("div",{staticClass:"plan_title"},[t._v("语言申请")]),t._v(" "),n("div",{staticClass:"plan_wrap"},[n("div",{staticClass:"plan_box"},[n("span",[t._v("语言课程")]),t._v(" "),n("span",[t._v(t._s(t.apply.language_course))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("语言课程日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.language_course_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请递交日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.apply_submit_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请费")]),t._v(" "),n("span",[t._v(t._s(t.apply.language_apply_fee))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请结果日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.apply_result_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("申请结果")]),t._v(" "),n("span",[t._v(t._s(t.apply.apply_result))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("语言开课日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.school_satrt_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("语言结课日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.school_end_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("接受录取截止日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.accept_save_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("押金截止日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.foregift_end_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("接受录取时间")]),t._v(" "),n("span",[t._v(t._s(t.apply.accept_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("押金缴纳时间")]),t._v(" "),n("span",[t._v(t._s(t.apply.foregift_pay_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("押金")]),t._v(" "),n("span",[t._v(t._s(t.apply.foregift_fee))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("学费")]),t._v(" "),n("span",[t._v(t._s(t.apply.school_fee))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("语言CAS日期")]),t._v(" "),n("span",[t._v(t._s(t.apply.language_cas_date))])]),t._v(" "),n("div",{staticClass:"plan_box"},[n("span",[t._v("语言CAS编号")]),t._v(" "),n("span",[t._v(t._s(t.apply.language_cas_number))])])])]),t._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(_){t.applyShow=!1}}},[t._v("关闭")])])])])],1)])}),[function(){var t=this.$createElement,_=this._self._c||t;return _("div",{staticClass:"version_title"},[_("span",[this._v("我的申请")])])}],!1,null,null,null);_.default=component.exports}}]);