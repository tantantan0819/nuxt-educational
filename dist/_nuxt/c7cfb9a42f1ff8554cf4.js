(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{478:function(t,e,n){},479:function(t,e,n){"use strict";n(24),n(90),n(35);var r=n(5),l=n(55),o=n(7),c={props:["config"],data:function(){return{qiniu_url:"",configuration:{isShowList:!1,multiple:!1,limit:null,btnText:"上传",isPrompt:"",errorText:"请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!",accept:".jpg, .jpeg, .png, .pdf, .excel, .docx,.psd,.PSD, .JPG, .JPEG, PNG, .PDF, .EXCEL, .DOCX"},postData:{token:"",name:"",key:""},tokenParams:{bucket:"ukec",path:"upload/user",ext:""},fileList:[]}},mounted:function(){this.configuration=this.config,this.qiniu_url=o.a.qiniu_url},methods:{beforUpload:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,t.size/1024/1024<30||r.$message({message:"请上传大小不能超过30MB的文件!",type:"warning"}),r.tokenParams.ext=t.name.split(".")[1],r.postData.name=t.name,n.next=7,r.uploadToken();case 7:case"end":return n.stop()}}),n)})))()},uploadToken:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,l.a.get("/qiniu/token",t.tokenParams).then((function(t){n.postData.token=t.token,n.postData.key=t.key}));case 3:case"end":return e.stop()}}),e)})))()},handleRemove:function(t,e){this.flieBox=e,this.$emit("uploadFile",e)},handleExceed:function(t,e){this.$message.warning("当前限制选择"+this.configuration.limit+"个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},uploadError:function(){this.$message.error(this.configuration.errorText)},successUpload:function(t,e,n){this.flieBox=n,this.$emit("uploadFile",n),"false"!=this.configuration.isPrompt&&this.$message({message:"上传成功！",type:"success"})}}},_=(n(480),n(10)),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload"},[n("el-upload",{staticClass:"upload-demo",attrs:{action:t.qiniu_url,data:t.postData,"before-upload":t.beforUpload,"on-success":t.successUpload,"on-remove":t.handleRemove,"show-file-list":t.configuration.isShowList,limit:t.configuration.limit,multiple:t.configuration.multiple,"on-exceed":t.handleExceed,"file-list":t.fileList,"on-error":t.uploadError,accept:t.configuration.accept}},[t._v(t._s(t.configuration.btnText))])],1)}),[],!1,null,"331b40b8",null);e.a=component.exports},480:function(t,e,n){"use strict";var r=n(478);n.n(r).a},483:function(t,e,n){var r=n(16),l=n(57),o=n(25),c=n(484),_="["+c+"]",d=RegExp("^"+_+_+"*"),v=RegExp(_+_+"*$"),m=function(t,e,n){var l={},_=o((function(){return!!c[t]()||"​"!="​"[t]()})),d=l[t]=_?e(f):c[t];n&&(l[n]=d),r(r.P+r.F*_,"String",l)},f=m.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},484:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},485:function(t,e,n){"use strict";var r=n(11),l=n(43),o=n(56),c=n(271),_=n(126),d=n(25),v=n(91).f,m=n(127).f,f=n(23).f,h=n(483).trim,C=r.Number,w=C,F=C.prototype,k="Number"==o(n(178)(F)),y="trim"in String.prototype,x=function(t){var e=_(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=y?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(k?d((function(){F.valueOf.call(n)})):"Number"!=o(n))?c(new w(x(e)),n,C):x(e)};for(var E,S=n(17)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;S.length>N;N++)l(w,E=S[N])&&!l(C,E)&&f(C,E,m(w,E));C.prototype=F,F.constructor=C,n(26)(r,"Number",C)}},504:function(t,e,n){},547:function(t,e,n){"use strict";var r=n(504);n.n(r).a},585:function(t,e,n){"use strict";n.r(e);n(485);var r=n(71),l=(n(4),n(7)),o={layout:"refactor",components:{UploadBtn:n(479).a},data:function(){return{addShow:!1,visa:[],apply:[],type:[],status:[],img_url:"",multipleFile:["身份证","英国签证卡","学位证毕业证","成绩单"],addForm:{origin_name:"",material_name:"",file_url:"",is_private:"",material_id:""},addRules:{material_name:[{required:!0,message:"请填写您的材料名称",trigger:"blur"}],origin_name:[{required:!0,message:"请上传您的材料文件",trigger:"blur"}],is_private:[{required:!0,message:"请选择文件是否隐藏",trigger:"blur"}]},configuration:{isShowList:!1,multiple:!1,limit:null,btnText:"上传",errorText:"",accept:""}}},beforeCreate:function(){this},mounted:function(){this.getVisaApply(),this.getMyVisa(),this.getType(),this.img_url=l.a.view_host},methods:{addFile:function(t){t&&(this.addForm.file_url=t[t.length-1].response.data.url,this.addForm.origin_name=t[t.length-1].response.data.filename)},cancelAdd:function(t){this.$refs[t].resetFields(),this.addShow=!1},getType:function(){var t=this;r.a.get("/code-val/group-key-list").then((function(e){t.type=e.VISA_TYPE,t.status=e.MATERIAL_STATUS}))},typeFormat:function(t,e){var n="";return this.type.map((function(e,r){e.id==Number(t.visa_type)&&(n=e.cvalue_cn)})),n},getVisaApply:function(){var t=this;r.a.get("/utrack-visa/my-list").then((function(e){e&&(t.apply=e)}))},getMyVisa:function(){var t=this;r.a.get("/customer-material/visa-list?service_id=2").then((function(e){e&&(t.visa=e,t.visa.map((function(e){t.multipleFile.map((function(t){t==e.materialname_cn&&!0})),1==e.is_multi?e.isMultiple=!0:e.isMultiple=!1})))}))},addSubmit:function(t){var e=this;e.$refs[t].validate((function(n){n&&r.a.post("/customer-material/add",e.addForm).then((function(n){var r=e.$message({message:"提交成功！",type:"success"});setTimeout((function(){r.close(),e.$refs[t].resetFields(),e.addShow=!1,e.getMyVisa()}),1e3)}))}))},add:function(t){this.addForm.material_id=t,this.addShow=!0},loadFile:function(t,e){window.open(t+"?attname="+e,"_self")}}},c=(n(547),n(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plan con"},[t._m(0),t._v(" "),n("div",{staticClass:"accommodation accommodation_no visa_table"},[t._m(1),t._v(" "),n("div",{staticClass:"visa_table_box"},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:t.apply,"tooltip-effect":"dark"}},[n("el-table-column",{attrs:{prop:"签证类型",label:"签证类型",width:"280"}}),t._v(" "),n("el-table-column",{attrs:{prop:"肺结核检测日期",label:"肺结核检查日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"存款日期",label:"存款日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"递签地点",label:"递签地点"}}),t._v(" "),n("el-table-column",{attrs:{prop:"递签日期",label:"递签日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"获签日期",label:"获签日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"submit_voucher_file",label:"签证递交凭证"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.submit_voucher_file?n("a",{attrs:{href:t.img_url+e.row.submit_voucher_file,target:"_blank"}},[t._v(t._s(t.img_url+e.row.submit_voucher_file))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"cas_file",label:"CAS"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.cas_file?n("a",{attrs:{href:t.img_url+e.row.cas_file,target:"_blank"}},[t._v(t._s(t.img_url+e.row.cas_file))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"备注",label:"备注"}})],1)],1)]),t._v(" "),n("div",{staticClass:"visa_table"},[t._m(2),t._v(" "),n("div",{staticClass:"visa_box"},[t._m(3),t._v(" "),n("div",{staticClass:"visa_con"},t._l(t.visa,(function(e,r){return n("div",{key:r,staticClass:"visa_item"},[n("div",{staticClass:"visa_left"},[t._v(t._s(e.materialname_cn))]),t._v(" "),0==e.material_lists.length?n("div",{staticClass:"visa_con"},[t._m(4,!0)]):n("div",{staticClass:"visa_con",class:{active:e.material_lists.length>1}},t._l(e.material_lists,(function(e,r){return n("div",{key:r,staticClass:"visa_center"},[n("span",[t._v(t._s(e.material_name))]),t._v(" "),n("span",[n("a",{attrs:{href:e.file_url,target:"_blank"}},[t._v(t._s(e.origin_name))])]),t._v(" "),n("span",[t._v(t._s(e.create_time))]),t._v(" "),n("span",[t._v(t._s(e.创建人))]),t._v(" "),n("span",[t._v(t._s(e.material_status))]),t._v(" "),n("span",[t._v(t._s(e.check_time))])])})),0),t._v(" "),n("div",{staticClass:"visa_right"},[e.isMultiple||e.material_lists.length<1?n("span",{staticClass:"visa_btn",staticStyle:{width:"65px"},on:{click:function(n){return t.add(e.id)}}},[t._v("新增")]):t._e(),t._v(" "),!e.isMultiple&&e.material_lists.length>0?n("span",{staticClass:"visa_btn",staticStyle:{width:"65px"},on:{click:function(n){return t.loadFile(e.material_lists[0].file_url,e.material_lists[0].origin_name)}}},[t._v("下载")]):t._e()])])})),0)])]),t._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:t.addShow,width:"717px",center:""},on:{"update:visible":function(e){t.addShow=e}}},[n("div",{staticClass:"add_title"},[t._v("增加")]),t._v(" "),n("div",{staticClass:"add_con"},[n("el-form",{ref:"addForm",attrs:{model:t.addForm,rules:t.addRules}},[n("el-form-item",{attrs:{prop:"material_name",label:"材料名称"}},[n("el-input",{attrs:{placeholder:"请填写您的材料名称"},model:{value:t.addForm.material_name,callback:function(e){t.$set(t.addForm,"material_name",e)},expression:"addForm.material_name"}})],1),t._v(" "),n("el-form-item",{staticClass:"upload_lang",attrs:{prop:"origin_name",label:"文件"}},[n("el-input",{attrs:{readonly:"",placeholder:"请上传您的材料文件"},model:{value:t.addForm.origin_name,callback:function(e){t.$set(t.addForm,"origin_name",e)},expression:"addForm.origin_name"}}),t._v(" "),n("upload-btn",t._g({staticClass:"unload_btn",attrs:{config:t.configuration}},{uploadFile:t.addFile}))],1),t._v(" "),n("el-form-item",{attrs:{label:"是否隐藏",prop:"is_private"}},[n("el-select",{staticClass:"widthAll",attrs:{placeholder:"请选择是否隐藏"},model:{value:t.addForm.is_private,callback:function(e){t.$set(t.addForm,"is_private",e)},expression:"addForm.is_private"}},[n("el-option",{attrs:{label:"是",value:"1"}}),t._v(" "),n("el-option",{attrs:{label:"否",value:"0"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(e){return t.cancelAdd("addForm")}}},[t._v("取消")]),t._v(" "),n("span",{on:{click:function(e){return t.addSubmit("addForm")}}},[t._v("确定")])])],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"version_title"},[e("span",[this._v("我的签证")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sign_title"},[this._v("\n            签证\n            "),e("br"),this._v("申请\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sign_title"},[this._v("\n            我的\n            "),e("br"),this._v("签证\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"visa_item visa_top"},[n("div",{staticClass:"visa_left"},[t._v("类型")]),t._v(" "),n("div",{staticClass:"visa_con"},[n("div",{staticClass:"visa_center"},[n("span",[t._v("材料名称")]),t._v(" "),n("span",[t._v("文件")]),t._v(" "),n("span",[t._v("上传时间")]),t._v(" "),n("span",[t._v("上传人")]),t._v(" "),n("span",[t._v("审核状态")]),t._v(" "),n("span",[t._v("审核时间")])])]),t._v(" "),n("div",{staticClass:"visa_right"},[t._v("操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"visa_center"},[e("span"),this._v(" "),e("span"),this._v(" "),e("span"),this._v(" "),e("span"),this._v(" "),e("span"),this._v(" "),e("span")])}],!1,null,null,null);e.default=component.exports}}]);