(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{478:function(e,t,n){},479:function(e,t,n){"use strict";n(24),n(90),n(35);var o=n(5),r=n(55),l=n(7),c={props:["config"],data:function(){return{qiniu_url:"",configuration:{isShowList:!1,multiple:!1,limit:null,btnText:"上传",isPrompt:"",errorText:"请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!",accept:".jpg, .jpeg, .png, .pdf, .excel, .docx,.psd,.PSD, .JPG, .JPEG, PNG, .PDF, .EXCEL, .DOCX"},postData:{token:"",name:"",key:""},tokenParams:{bucket:"ukec",path:"upload/user",ext:""},fileList:[]}},mounted:function(){this.configuration=this.config,this.qiniu_url=l.a.qiniu_url},methods:{beforUpload:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t,e.size/1024/1024<30||o.$message({message:"请上传大小不能超过30MB的文件!",type:"warning"}),o.tokenParams.ext=e.name.split(".")[1],o.postData.name=e.name,n.next=7,o.uploadToken();case 7:case"end":return n.stop()}}),n)})))()},uploadToken:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,r.a.get("/qiniu/token",e.tokenParams).then((function(e){n.postData.token=e.token,n.postData.key=e.key}));case 3:case"end":return t.stop()}}),t)})))()},handleRemove:function(e,t){this.flieBox=t,this.$emit("uploadFile",t)},handleExceed:function(e,t){this.$message.warning("当前限制选择"+this.configuration.limit+"个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},uploadError:function(){this.$message.error(this.configuration.errorText)},successUpload:function(e,t,n){this.flieBox=n,this.$emit("uploadFile",n),"false"!=this.configuration.isPrompt&&this.$message({message:"上传成功！",type:"success"})}}},d=(n(480),n(10)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload"},[n("el-upload",{staticClass:"upload-demo",attrs:{action:e.qiniu_url,data:e.postData,"before-upload":e.beforUpload,"on-success":e.successUpload,"on-remove":e.handleRemove,"show-file-list":e.configuration.isShowList,limit:e.configuration.limit,multiple:e.configuration.multiple,"on-exceed":e.handleExceed,"file-list":e.fileList,"on-error":e.uploadError,accept:e.configuration.accept}},[e._v(e._s(e.configuration.btnText))])],1)}),[],!1,null,"331b40b8",null);t.a=component.exports},480:function(e,t,n){"use strict";var o=n(478);n.n(o).a},483:function(e,t,n){var o=n(16),r=n(57),l=n(25),c=n(484),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),_=function(e,t,n){var r={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),f=r[e]=d?t(v):c[e];n&&(r[n]=f),o(o.P+o.F*d,"String",r)},v=_.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(m,"")),e};e.exports=_},484:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},485:function(e,t,n){"use strict";var o=n(11),r=n(43),l=n(56),c=n(271),d=n(126),f=n(25),m=n(91).f,_=n(127).f,v=n(23).f,h=n(483).trim,F=o.Number,w=F,k=F.prototype,x="Number"==l(n(178)(k)),C="trim"in String.prototype,y=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,l=(t=C?t.trim():h(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+t};if(!F(" 0o1")||!F("0b1")||F("+0x1")){F=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof F&&(x?f((function(){k.valueOf.call(n)})):"Number"!=l(n))?c(new w(y(t)),n,F):y(t)};for(var S,E=n(17)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)r(w,S=E[N])&&!r(F,S)&&v(F,S,_(w,S));F.prototype=k,k.constructor=F,n(26)(o,"Number",F)}},498:function(e,t,n){},541:function(e,t,n){"use strict";var o=n(498);n.n(o).a},579:function(e,t,n){"use strict";n.r(t);n(485);var o=n(71),r={layout:"refactor",components:{UploadBtn:n(479).a},data:function(){return{uploadShow:!1,addShow:!1,langTotal:0,page:1,page_size:10,isHidden:!0,langData:[],langType:[],configuration:{isShowList:!1,multiple:!1,limit:null,btnText:"上传",errorText:"请上传PNG、JPG、PDF格式的文件!",accept:".jpg, .jpeg, .png, .pdf, .JPG, .JPEG, PNG, .PDF"},uploadForm:{id:"",file:"",file_name:""},uploadRules:{file_name:[{required:!0,message:"请上传证书",trigger:"none"}]},addForm:{language_certificate:"",score:"",cert_date:"",parts_score:"",lang_note:"",file:"",file_name:""},addRules:{language_certificate:[{required:!0,message:"请选择您的证书类型",trigger:"blur"}],score:[{required:!0,message:"请填写您的证书成绩",trigger:"blur"}],cert_date:[{required:!0,message:"请选择您的考试日期",trigger:"blur"}]}}},mounted:function(){var e=this;e.getLang(),o.a.get("/code-val/group-key-list").then((function(t){e.langType=t.LANGUAGE_CERTIFICATE}))},methods:{handleCurrentChange:function(e){this.page=e,this.getLang()},addFile:function(e){e&&(this.addForm.file=e[e.length-1].response.data.url,this.addForm.file_name=e[e.length-1].response.data.filename)},changeFile:function(e){e&&(this.uploadForm.file=e[e.length-1].response.data.url,this.uploadForm.file_name=e[e.length-1].response.data.filename)},getLang:function(){var e=this;o.a.get("/customer-language/list",{page:e.page,page_size:e.page_size}).then((function(t){t&&(e.langData=t.rows,e.langTotal=Number(t.count))}))},typeFormat:function(e,t){var n="";return this.langType.map((function(t,o){t.id==Number(e.language_certificate)&&(n=t.cvalue_cn)})),n},cancelAdd:function(e){this.$refs[e].resetFields(),this.addShow=!1},cancelUpload:function(e){this.$refs[e].resetFields(),this.uploadShow=!1},viewUpload:function(e,t){this.uploadForm.id=t.id,this.uploadShow=!0},uploadSubmit:function(e){var t=this;t.$refs[e].validate((function(n){n&&o.a.post("/customer-language/update",t.uploadForm).then((function(n){var o=t.$message({message:"提交成功！",type:"success"});setTimeout((function(){o.close(),t.$refs[e].resetFields(),t.uploadShow=!1,t.getLang()}),1e3)}))}))},addSubmit:function(e){var t=this;t.$refs[e].validate((function(n){n&&o.a.post("/customer-language/add",t.addForm).then((function(n){var o=t.$message({message:"提交成功！",type:"success"});setTimeout((function(){o.close(),t.$refs[e].resetFields(),t.addShow=!1,t.getLang()}),1e3)}))}))}}},l=(n(541),n(10)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"plan con sign"},[n("div",{staticClass:"version_title two_title"},[n("span",[e._v("语言成绩")]),e._v(" "),n("span",{on:{click:function(t){e.addShow=!0}}},[e._v("新增证书")])]),e._v(" "),n("div",{staticClass:"refactor_table"},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:e.langData,"tooltip-effect":"dark"}},[n("el-table-column",{attrs:{prop:"language_certificate",label:"考试类别",width:"300",formatter:e.typeFormat}}),e._v(" "),n("el-table-column",{attrs:{prop:"cert_date",label:"考试日期"}}),e._v(" "),n("el-table-column",{attrs:{prop:"score",label:"考试成绩"}}),e._v(" "),n("el-table-column",{attrs:{prop:"parts_score",label:"小分"}}),e._v(" "),n("el-table-column",{attrs:{label:"文件",prop:"file"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("a",{attrs:{href:t.row.file,target:"_blank"}},[e._v(e._s(t.row.file_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"lang_note",label:"备注"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"table_btn",attrs:{size:"mini"},on:{click:function(n){return e.viewUpload(t.$index,t.row)}}},[e._v("上传证书")])]}}])})],1)],1),e._v(" "),n("div",{staticClass:"lang_page"},[n("el-pagination",{attrs:{"hide-on-single-page":e.isHidden,layout:"total,prev, pager, next",total:e.langTotal},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:e.uploadShow,width:"717px",center:""},on:{"update:visible":function(t){e.uploadShow=t}}},[n("div",{staticClass:"add_title"},[e._v("上传证书")]),e._v(" "),n("div",{staticClass:"add_con"},[n("el-form",{ref:"uploadForm",attrs:{model:e.uploadForm,rules:e.uploadRules}},[n("el-form-item",{staticClass:"upload_lang",attrs:{prop:"file_name",label:"上传证书"}},[n("span",{staticClass:"unload_tip"},[e._v("仅支持jpg、png、pdf格式文件")]),e._v(" "),n("el-input",{attrs:{readonly:""},model:{value:e.uploadForm.file_name,callback:function(t){e.$set(e.uploadForm,"file_name",t)},expression:"uploadForm.file_name"}}),e._v(" "),n("upload-btn",e._g({staticClass:"unload_btn",attrs:{config:e.configuration}},{uploadFile:e.changeFile}))],1)],1),e._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(t){e.uploadShow=!1}}},[e._v("取消")]),e._v(" "),n("span",{on:{click:function(t){return e.uploadSubmit("uploadForm")}}},[e._v("确定")])])],1)])],1),e._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:e.addShow,width:"717px",center:""},on:{"update:visible":function(t){e.addShow=t}}},[n("div",{staticClass:"add_title"},[e._v("新增证书")]),e._v(" "),n("div",{staticClass:"add_con"},[n("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.addRules}},[n("el-form-item",{attrs:{label:"证书",prop:"language_certificate"}},[n("el-select",{staticClass:"widthAll",attrs:{placeholder:"请选择您的证书类型"},model:{value:e.addForm.language_certificate,callback:function(t){e.$set(e.addForm,"language_certificate",t)},expression:"addForm.language_certificate"}},e._l(e.langType,(function(e,t){return n("el-option",{key:t,attrs:{label:e.cvalue_cn,value:e.id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"考试日期",prop:"cert_date"}},[n("el-date-picker",{staticClass:"widthAll",attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"请选择您的考试日期"},model:{value:e.addForm.cert_date,callback:function(t){e.$set(e.addForm,"cert_date",t)},expression:"addForm.cert_date"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"score",label:"成绩",placeholder:"请填写您的证书成绩"}},[n("el-input",{model:{value:e.addForm.score,callback:function(t){e.$set(e.addForm,"score",t)},expression:"addForm.score"}})],1),e._v(" "),n("el-form-item",{staticClass:"upload_lang",attrs:{prop:"file_name",label:"上传文件"}},[n("span",{staticClass:"unload_tip"},[e._v("如暂无文件，可后续再行上传。仅支持jpg、png、pdf格式文件")]),e._v(" "),n("el-input",{attrs:{readonly:""},model:{value:e.addForm.file_name,callback:function(t){e.$set(e.addForm,"file_name",t)},expression:"addForm.file_name"}}),e._v(" "),n("upload-btn",e._g({staticClass:"unload_btn",attrs:{config:e.configuration}},{uploadFile:e.addFile}))],1),e._v(" "),n("el-form-item",{attrs:{prop:"parts_score",label:"小分",placeholder:"请填写您的小分"}},[n("el-input",{model:{value:e.addForm.parts_score,callback:function(t){e.$set(e.addForm,"parts_score",t)},expression:"addForm.parts_score"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"lang_note",label:"备注",placeholder:"请填写您的备注"}},[n("el-input",{model:{value:e.addForm.lang_note,callback:function(t){e.$set(e.addForm,"lang_note",t)},expression:"addForm.lang_note"}})],1)],1),e._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(t){return e.cancelAdd("addForm")}}},[e._v("取消")]),e._v(" "),n("span",{on:{click:function(t){return e.addSubmit("addForm")}}},[e._v("确定")])])],1)])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);