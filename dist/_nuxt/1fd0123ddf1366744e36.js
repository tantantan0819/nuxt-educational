(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{478:function(t,e,o){},479:function(t,e,o){"use strict";o(35),o(90),o(34);var n=o(5),l=o(55),r=o(7),c={props:["config"],data:function(){return{qiniu_url:"",configuration:{isShowList:!1,multiple:!1,limit:null,btnText:"上传",isPrompt:"",errorText:"请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!",accept:".jpg, .jpeg, .png, .pdf, .excel, .docx,.psd,.PSD, .JPG, .JPEG, PNG, .PDF, .EXCEL, .DOCX"},postData:{token:"",name:"",key:""},tokenParams:{bucket:"ukec",path:"upload/user",ext:""},fileList:[]}},mounted:function(){this.configuration=this.config,this.qiniu_url=r.a.qiniu_url},methods:{beforUpload:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e,t.size/1024/1024<30||n.$message({message:"请上传大小不能超过30MB的文件!",type:"warning"}),n.tokenParams.ext=t.name.split(".")[1],n.postData.name=t.name,o.next=7,n.uploadToken();case 7:case"end":return o.stop()}}),o)})))()},uploadToken:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t,e.next=3,l.a.get("/qiniu/token",t.tokenParams).then((function(t){o.postData.token=t.token,o.postData.key=t.key}));case 3:case"end":return e.stop()}}),e)})))()},handleRemove:function(t,e){this.flieBox=e,this.$emit("uploadFile",e)},handleExceed:function(t,e){this.$message.warning("当前限制选择"+this.configuration.limit+"个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},uploadError:function(){this.$message.error(this.configuration.errorText)},successUpload:function(t,e,o){this.flieBox=o,this.$emit("uploadFile",o),"false"!=this.configuration.isPrompt&&this.$message({message:"上传成功！",type:"success"})}}},d=(o(480),o(10)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upload"},[o("el-upload",{staticClass:"upload-demo",attrs:{action:t.qiniu_url,data:t.postData,"before-upload":t.beforUpload,"on-success":t.successUpload,"on-remove":t.handleRemove,"show-file-list":t.configuration.isShowList,limit:t.configuration.limit,multiple:t.configuration.multiple,"on-exceed":t.handleExceed,"file-list":t.fileList,"on-error":t.uploadError,accept:t.configuration.accept}},[t._v(t._s(t.configuration.btnText))])],1)}),[],!1,null,"331b40b8",null);e.a=component.exports},480:function(t,e,o){"use strict";var n=o(478);o.n(n).a},481:function(t,e,o){"use strict";var n=o(89),l=o(4),r={props:["type"],components:{UploadBtn:o(479).a},data:function(){return{postUrl:"",titleMaxLength:500,dialogVisible:!1,configuration:{isShowList:!0,multiple:!0,limit:5,btnText:"上传",errorText:"请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!",accept:".jpg, .jpeg, .png, .pdf,.doc,.xls,.JPG, .JPEG, PNG, .PDF,.DOC,.XLS"},flieBox:[],postData:{token:"",name:"",key:""},tokenParams:{bucket:"ukec",path:"upload/user",ext:""},fileList:[],select:{noteType:[]},modify:{note_type:"",note_body:"",note_files:[],page_type:""},rules:{note_type:[{required:!0,message:"请选择你的修改类别",trigger:"blur"}],note_body:[{required:!0,message:"请填写你的备注",trigger:"blur"}],note_files:[{required:!0,message:"请上传你的附件",trigger:"blur"}]}}},mounted:function(){var t=this;switch(t.type){case"cv":case"CV":t.modify.page_type="cv";break;case"ps":case"个人陈述":t.modify.page_type="ps";break;case"letter":case"推荐信":t.modify.page_type="res";break;default:t.modify.page_type="cv"}var e=Object(l.e)("noteType");e?(t.select.noteType=e.NOTE_TYPE_CV,t.modify.note_type=e.NOTE_TYPE_CV[0].id):n.a.get("/code-val/group-key-list").then((function(e){t.select.noteType=e.NOTE_TYPE_CV,t.modify.note_type=e.NOTE_TYPE_CV[0].id,Object(l.k)("noteType",e)}))},computed:{isShow:function(){var t=!1,e="";return this.select.noteType.map((function(t){"内容"==t.cvalue_cn&&(e=t.id)})),this.modify.note_type==e&&(t=!t),t}},methods:{addFile:function(t){this.flieBox=t,console.log(t,"文件监听")},handleClose:function(t){this.cancel("modify")},cancel:function(t){this.$refs[t].resetFields(),this.dialogVisible=!1,this.fileList=[],this.flieBox=[]},submitForm:function(t){var e=this;0==e.flieBox.length?e.modify.note_files=[]:(e.modify.note_files=[],e.flieBox.map((function(t){e.modify.note_files.push({name:t.response.data.filename,url:t.response.data.key})}))),e.$refs[t].validate((function(o){o&&n.a.post("/customer-note/add",e.modify).then((function(o){var n=e.$message({message:"提交成功！",type:"success"});setTimeout((function(){n.close(),e.cancel(t)}),1e3)}))}))}}},c=o(10),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modify modify_upload"},[o("span",{staticClass:"cv_button modify_button",on:{click:function(e){t.dialogVisible=!0}}},[t._v("修改")]),t._v(" "),o("div",{staticClass:"add add_note"},[o("el-dialog",{attrs:{title:"",visible:t.dialogVisible,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("div",{staticClass:"add_title"},[t._v("修改")]),t._v(" "),o("div",{staticClass:"add_content"},[o("el-form",{ref:"modify",attrs:{model:t.modify,"status-icon":"",rules:t.rules,"label-width":"300px","label-position":"top"}},[o("el-form-item",{attrs:{label:"类别:",prop:"note_type"}},[o("el-select",{staticClass:"widthAll",attrs:{placeholder:"类别"},model:{value:t.modify.note_type,callback:function(e){t.$set(t.modify,"note_type",e)},expression:"modify.note_type"}},t._l(t.select.noteType,(function(t,e){return o("el-option",{key:e,attrs:{label:t.cvalue_cn,value:t.id}})})),1)],1),t._v(" "),t.isShow?o("el-form-item",{staticClass:"modfityTip",attrs:{label:"  "}},[o("span",[t._v("内容修改只可进行1次，修改件的返还时间为72小时")])]):t._e(),t._v(" "),o("el-form-item",{staticClass:"cvTextareaBox modifyText",attrs:{label:"备注:",prop:"note_body"}},[o("el-input",{staticClass:"noteTextarea",attrs:{type:"textarea",autocomplete:"off"},model:{value:t.modify.note_body,callback:function(e){t.$set(t.modify,"note_body",e)},expression:"modify.note_body"}})],1),t._v(" "),o("el-form-item",{staticClass:"upload_lang",attrs:{label:"附件:",prop:"note_files"}},[o("upload-btn",t._g({attrs:{config:t.configuration}},{uploadFile:t.addFile}))],1)],1),t._v(" "),o("div",{staticClass:"footer_button"},[o("span",{on:{click:function(e){return t.cancel("modify")}}},[o("i",[t._v("取消")])]),t._v(" "),o("span",{on:{click:function(e){return t.submitForm("modify")}}},[t._v("提交")])])],1)])],1)])}),[],!1,null,null,null);e.a=component.exports},511:function(t,e,o){},557:function(t,e,o){"use strict";var n=o(511);o.n(n).a},597:function(t,e,o){"use strict";o.r(e);var n=o(89),l={layout:"refactor",components:{InfoModify:o(481).a},data:function(){return{modifyType:"cv",outerVisible:!1,tableData:[],titleMaxLength:100,cvForm4:{start_time:"",end_time:"",descript:"",company:"",job:""},rules:{start_time:[{required:!0,message:"请选择您的工作/实习经历起始时间",trigger:"blur"}],end_time:[{required:!0,message:"请选择您的工作/实习经历结束时间",trigger:"blur"}],descript:[{required:!0,message:"请输入您的您的工作/实习经历描述",trigger:"blur"}],company:[{required:!0,message:"请输入您的工作/实习单位称",trigger:"blur"}],job:[{required:!0,message:"请输入您的职位",trigger:"blur"}]}}},mounted:function(){this.getExp()},methods:{getExp:function(){var t=this;n.a.get("/customer-work-exp/list").then((function(e){t.tableData=e}))},prev:function(){this.$router.push("/writ/cv/step3")},next:function(){this.$router.push("/writ/cv/step5")},cancel:function(t){this.$refs[t].resetFields(),this.outerVisible=!1},submitForm:function(t){var e=this;e.$refs[t].validate((function(o){o&&n.a.post("/customer-work-exp/add",e.cvForm4).then((function(o){var n=e.$message({message:"提交成功！",type:"success"});setTimeout((function(){n.close(),e.getExp(),e.$refs[t].resetFields(),e.outerVisible=!1}),1e3)}))}))}}},r=(o(557),o(10)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cv_step3"},[o("div",{staticClass:"title_box"},[t._m(0),t._v(" "),o("div",{staticClass:"modify_wrap"},[o("span",{staticClass:"cv_button cv_button2",on:{click:function(e){t.outerVisible=!0}}},[t._v("新增工作/实习经历")])])]),t._v(" "),o("div",{staticClass:"cv_content cv2 centerTable step3Table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[o("el-table-column",{attrs:{type:"index",label:"序号",width:"74"}}),t._v(" "),o("el-table-column",{attrs:{prop:"start_time",label:"开始时间",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{prop:"end_time",label:"结束时间",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{prop:"company",label:"工作/实习单位",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{prop:"job",label:"职位",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{prop:"descript",label:"经历描述"}})],1)],1),t._v(" "),o("div",{staticClass:"cv_footer"},[o("div",{staticClass:"footer_button"},[o("span",{on:{click:t.prev}},[o("i",[t._v("上一步")])]),t._v(" "),o("span",{on:{click:t.next}},[t._v("下一步")])]),t._v(" "),o("span",{staticClass:"next"},[t._v("请在退出前点击“下一步”按钮，您当前填写的信息可以被保存。")])]),t._v(" "),o("div",{staticClass:"add add_note"},[o("el-dialog",{attrs:{title:"",visible:t.outerVisible},on:{"update:visible":function(e){t.outerVisible=e}}},[o("div",{staticClass:"add_title"},[t._v("添加工作/实习经历")]),t._v(" "),o("div",{staticClass:"add_content"},[o("el-form",{ref:"cvForm4",attrs:{model:t.cvForm4,"status-icon":"",rules:t.rules,"label-width":"300px","label-position":"top"}},[o("el-form-item",{attrs:{label:"开始时间",prop:"start_time"}},[o("el-date-picker",{staticClass:"widthAll",attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"请选择您的工作/实习经历起始时间"},model:{value:t.cvForm4.start_time,callback:function(e){t.$set(t.cvForm4,"start_time",e)},expression:"cvForm4.start_time"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"结束时间",prop:"end_time"}},[o("el-date-picker",{staticClass:"widthAll",attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"请选择您的工作/实习经历结束时间"},model:{value:t.cvForm4.end_time,callback:function(e){t.$set(t.cvForm4,"end_time",e)},expression:"cvForm4.end_time"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"工作/实习单位",prop:"company"}},[o("el-input",{attrs:{placeholder:"请输入您的工作/实习单位称",autocomplete:"off"},model:{value:t.cvForm4.company,callback:function(e){t.$set(t.cvForm4,"company",e)},expression:"cvForm4.company"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"职位",prop:"job"}},[o("el-input",{attrs:{placeholder:"请输入您的职位",autocomplete:"off"},model:{value:t.cvForm4.job,callback:function(e){t.$set(t.cvForm4,"job",e)},expression:"cvForm4.job"}})],1),t._v(" "),o("el-form-item",{staticClass:"cvTextareaBox",attrs:{label:"经历描述",prop:"descript"}},[o("el-input",{staticClass:"cvTextarea cvTextarea2",attrs:{type:"textarea",placeholder:"整体框架遵循【做了什么】【结果是什么】【有什么价值】的逻辑。",maxlength:"100","show-word-limit":"",autocomplete:"off"},model:{value:t.cvForm4.descript,callback:function(e){t.$set(t.cvForm4,"descript",e)},expression:"cvForm4.descript"}})],1)],1),t._v(" "),o("div",{staticClass:"footer_button"},[o("span",{on:{click:function(e){return t.cancel("cvForm4")}}},[o("i",[t._v("取消")])]),t._v(" "),o("span",{on:{click:function(e){return t.submitForm("cvForm4")}}},[t._v("保存")])])],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cv_title"},[e("p",[this._v("工作/实习经历")]),this._v(" "),e("span",[this._v("请认真填写您空缺的资料，保存后不能修改，如需修改请联系您的顾问老师进行修改")])])}],!1,null,null,null);e.default=component.exports}}]);