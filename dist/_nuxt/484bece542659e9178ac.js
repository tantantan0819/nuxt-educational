(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{478:function(t,e,o){},479:function(t,e,o){"use strict";o(35),o(90),o(34);var n=o(5),l=o(55),r=o(7),c={props:["config"],data:function(){return{qiniu_url:"",configuration:{isShowList:!1,multiple:!1,limit:null,btnText:"上传",isPrompt:"",errorText:"请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!",accept:".jpg, .jpeg, .png, .pdf, .excel, .docx,.psd,.PSD, .JPG, .JPEG, PNG, .PDF, .EXCEL, .DOCX"},postData:{token:"",name:"",key:""},tokenParams:{bucket:"ukec",path:"upload/user",ext:""},fileList:[]}},mounted:function(){this.configuration=this.config,this.qiniu_url=r.a.qiniu_url},methods:{beforUpload:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e,t.size/1024/1024<30||n.$message({message:"请上传大小不能超过30MB的文件!",type:"warning"}),n.tokenParams.ext=t.name.split(".")[1],n.postData.name=t.name,o.next=7,n.uploadToken();case 7:case"end":return o.stop()}}),o)})))()},uploadToken:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t,e.next=3,l.a.get("/qiniu/token",t.tokenParams).then((function(t){o.postData.token=t.token,o.postData.key=t.key}));case 3:case"end":return e.stop()}}),e)})))()},handleRemove:function(t,e){this.flieBox=e,this.$emit("uploadFile",e)},handleExceed:function(t,e){this.$message.warning("当前限制选择"+this.configuration.limit+"个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},uploadError:function(){this.$message.error(this.configuration.errorText)},successUpload:function(t,e,o){this.flieBox=o,this.$emit("uploadFile",o),"false"!=this.configuration.isPrompt&&this.$message({message:"上传成功！",type:"success"})}}},d=(o(480),o(10)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upload"},[o("el-upload",{staticClass:"upload-demo",attrs:{action:t.qiniu_url,data:t.postData,"before-upload":t.beforUpload,"on-success":t.successUpload,"on-remove":t.handleRemove,"show-file-list":t.configuration.isShowList,limit:t.configuration.limit,multiple:t.configuration.multiple,"on-exceed":t.handleExceed,"file-list":t.fileList,"on-error":t.uploadError,accept:t.configuration.accept}},[t._v(t._s(t.configuration.btnText))])],1)}),[],!1,null,"331b40b8",null);e.a=component.exports},480:function(t,e,o){"use strict";var n=o(478);o.n(n).a},481:function(t,e,o){"use strict";var n=o(89),l=o(4),r={props:["type"],components:{UploadBtn:o(479).a},data:function(){return{postUrl:"",titleMaxLength:500,dialogVisible:!1,configuration:{isShowList:!0,multiple:!0,limit:5,btnText:"上传",errorText:"请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!",accept:".jpg, .jpeg, .png, .pdf,.doc,.xls,.JPG, .JPEG, PNG, .PDF,.DOC,.XLS"},flieBox:[],postData:{token:"",name:"",key:""},tokenParams:{bucket:"ukec",path:"upload/user",ext:""},fileList:[],select:{noteType:[]},modify:{note_type:"",note_body:"",note_files:[],page_type:""},rules:{note_type:[{required:!0,message:"请选择你的修改类别",trigger:"blur"}],note_body:[{required:!0,message:"请填写你的备注",trigger:"blur"}],note_files:[{required:!0,message:"请上传你的附件",trigger:"blur"}]}}},mounted:function(){var t=this;switch(t.type){case"cv":case"CV":t.modify.page_type="cv";break;case"ps":case"个人陈述":t.modify.page_type="ps";break;case"letter":case"推荐信":t.modify.page_type="res";break;default:t.modify.page_type="cv"}var e=Object(l.e)("noteType");e?(t.select.noteType=e.NOTE_TYPE_CV,t.modify.note_type=e.NOTE_TYPE_CV[0].id):n.a.get("/code-val/group-key-list").then((function(e){t.select.noteType=e.NOTE_TYPE_CV,t.modify.note_type=e.NOTE_TYPE_CV[0].id,Object(l.k)("noteType",e)}))},computed:{isShow:function(){var t=!1,e="";return this.select.noteType.map((function(t){"内容"==t.cvalue_cn&&(e=t.id)})),this.modify.note_type==e&&(t=!t),t}},methods:{addFile:function(t){this.flieBox=t,console.log(t,"文件监听")},handleClose:function(t){this.cancel("modify")},cancel:function(t){this.$refs[t].resetFields(),this.dialogVisible=!1,this.fileList=[],this.flieBox=[]},submitForm:function(t){var e=this;0==e.flieBox.length?e.modify.note_files=[]:(e.modify.note_files=[],e.flieBox.map((function(t){e.modify.note_files.push({name:t.response.data.filename,url:t.response.data.key})}))),e.$refs[t].validate((function(o){o&&n.a.post("/customer-note/add",e.modify).then((function(o){var n=e.$message({message:"提交成功！",type:"success"});setTimeout((function(){n.close(),e.cancel(t)}),1e3)}))}))}}},c=o(10),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modify modify_upload"},[o("span",{staticClass:"cv_button modify_button",on:{click:function(e){t.dialogVisible=!0}}},[t._v("修改")]),t._v(" "),o("div",{staticClass:"add add_note"},[o("el-dialog",{attrs:{title:"",visible:t.dialogVisible,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("div",{staticClass:"add_title"},[t._v("修改")]),t._v(" "),o("div",{staticClass:"add_content"},[o("el-form",{ref:"modify",attrs:{model:t.modify,"status-icon":"",rules:t.rules,"label-width":"300px","label-position":"top"}},[o("el-form-item",{attrs:{label:"类别:",prop:"note_type"}},[o("el-select",{staticClass:"widthAll",attrs:{placeholder:"类别"},model:{value:t.modify.note_type,callback:function(e){t.$set(t.modify,"note_type",e)},expression:"modify.note_type"}},t._l(t.select.noteType,(function(t,e){return o("el-option",{key:e,attrs:{label:t.cvalue_cn,value:t.id}})})),1)],1),t._v(" "),t.isShow?o("el-form-item",{staticClass:"modfityTip",attrs:{label:"  "}},[o("span",[t._v("内容修改只可进行1次，修改件的返还时间为72小时")])]):t._e(),t._v(" "),o("el-form-item",{staticClass:"cvTextareaBox modifyText",attrs:{label:"备注:",prop:"note_body"}},[o("el-input",{staticClass:"noteTextarea",attrs:{type:"textarea",autocomplete:"off"},model:{value:t.modify.note_body,callback:function(e){t.$set(t.modify,"note_body",e)},expression:"modify.note_body"}})],1),t._v(" "),o("el-form-item",{staticClass:"upload_lang",attrs:{label:"附件:",prop:"note_files"}},[o("upload-btn",t._g({attrs:{config:t.configuration}},{uploadFile:t.addFile}))],1)],1),t._v(" "),o("div",{staticClass:"footer_button"},[o("span",{on:{click:function(e){return t.cancel("modify")}}},[o("i",[t._v("取消")])]),t._v(" "),o("span",{on:{click:function(e){return t.submitForm("modify")}}},[t._v("提交")])])],1)])],1)])}),[],!1,null,null,null);e.a=component.exports},482:function(t,e,o){var n=o(16),l=o(57),r=o(24),c=o(483),d="["+c+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),_=function(t,e,o){var l={},d=r((function(){return!!c[t]()||"​"!="​"[t]()})),m=l[t]=d?e(v):c[t];o&&(l[o]=m),n(n.P+n.F*d,"String",l)},v=_.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=_},483:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},485:function(t,e,o){"use strict";var n=o(11),l=o(43),r=o(56),c=o(271),d=o(126),m=o(24),f=o(91).f,_=o(127).f,v=o(23).f,h=o(482).trim,y=n.Number,x=y,F=y.prototype,w="Number"==r(o(178)(F)),k="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,n,l,r=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof y&&(w?m((function(){F.valueOf.call(o)})):"Number"!=r(o))?c(new x(C(e)),o,y):C(e)};for(var D,E=o(17)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;E.length>T;T++)l(x,D=E[T])&&!l(y,D)&&v(y,D,_(x,D));y.prototype=F,F.constructor=y,o(25)(n,"Number",y)}},515:function(t,e,o){},563:function(t,e,o){"use strict";var n=o(515);o.n(n).a},601:function(t,e,o){"use strict";o.r(e);o(485);var n=o(89),l=o(4),r={layout:"refactor",components:{InfoModify:o(481).a},data:function(){return{modifyType:"letter",outerVisible:!1,notice:"",psDetail:!1,Modify:!1,major:["专业xxx","专业yyy"],record:["初中","高中"],tableData:[],relaship:[],sexList:[],psDetailForm:{},ModifyForm:{},viewDetail:[],viewModify:[],letterLength:"",allLetter:2,rules:{meet_year:[{required:!0,message:"请选择与推荐人认识的年份",trigger:"blur"}],name:[{required:!0,message:"请输入推荐人姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择推荐人性别",trigger:"blur"}],job:[{required:!0,message:"请输入推荐人职位头衔",trigger:"blur"}],unit_address:[{required:!0,message:"请输入推荐人单位地址",trigger:"blur"}],unit_name:[{required:!0,message:"请输入推荐人单位名称",trigger:"blur"}],phone:[{required:!0,trigger:"blur"}],email:[{required:!0,trigger:"blur"}],relation:[{required:!0,message:"请选择推荐人与您的关系",trigger:"blur"}],content1:[{required:!0,message:"请输入推荐人在何时何地开始与您相互认识",trigger:"blur"}],content2:[{required:!0,message:"请输入推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何",trigger:"blur"}],content3:[{required:!0,message:"请输入推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价",trigger:"blur"}],content4:[{required:!0,message:"请输入推荐人在和您接触过程中对您的整体印象与评价",trigger:"blur"}],content5:[{required:!0,message:"请输入其他你特别想放在推荐信里面的内容",trigger:"blur"}]},isEdit:!0}},mounted:function(){var t=this;t.getLetter(),n.a.get("/code-val/group-key-list").then((function(e){t.sexList=e.SEX,t.relaship=e.MY_RELATIONSHIP}))},computed:{count:function(){var t=this.allLetter-this.letterLength;return t>0?t:0}},methods:{getLetter:function(){var t=this;n.a.get("/customer-recommendation/list").then((function(e){e&&(t.tableData=e,t.letterLength=e.length,t.$store.commit("SET_LEETER",t.letterLength))}))},sexFormat:function(t,e){var o="未知";return this.sexList.map((function(e,n){e.id==Number(t.sex)&&(o=e.cvalue_cn)})),o},relashipFormat:function(t,e){var o="";return this.relaship.map((function(e,n){e.id==Number(t.relation)&&(o=e.cvalue_cn)})),o},addLetter:function(){"0"!=this.count?this.outerVisible=!0:this.$message({message:"您推荐信份数已用完，如有疑问，请联系您的顾问老师！",type:"warning"})},cancel:function(){this.outerVisible=!1},start:function(){this.notice?this.$router.push({path:"/writ/letter/edit",query:{num:this.allLetter}}):this.$message({message:"请先勾选“我已阅读 “推荐信须知” 内容”",type:"warning"})},handleEdit:function(t,data){this.viewDetail=[],this.viewDetail.push(Object(l.b)(this.tableData[t])),this.psDetailForm=this.viewDetail[0],this.psDetail=!0},close:function(){this.psDetail=!1},modify:function(t,data){this.$router.push({path:"/writ/letter/modify",query:{id:data.id}})},edit:function(t){var e=this;e.$refs[t].validate((function(o){if(!o||!e.isEdit)return e.$message({message:"请完整填写表单！",type:"error"}),e.isEdit=!0,!1;e.isEdit=!1,n.a.post("/customer-recommendation/edit",e.ModifyForm).then((function(o){var n=e.$message({message:"提交成功！",type:"success"});setTimeout((function(){n.close(),e.getLetter(),e.Modify=!1,e.isEdit=!0,e.$refs[t].resetFields()}),1e3)})).catch((function(t){e.isEdit=!0}))}))},finalized:function(t,data){var e=this;this.$confirm("请确定是否提交给顾问老师？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.a.post("/customer-recommendation/sure",{id:data.id}).then((function(t){if(t){e.$message({message:"提交成功！",type:"success"});e.getLetter()}}))}))}}},c=(o(563),o(10)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cv con"},[o("div",{staticClass:"cv_step2"},[o("div",{staticClass:"title_box"},[o("div",{staticClass:"cv_title"},[o("p",[t._v("我的推荐信")]),t._v(" "),o("span",[t._v("目前您有"+t._s(t.letterLength)+"份推荐信，您还可新增"+t._s(t.count)+"份推荐信")])]),t._v(" "),o("div",{staticClass:"modify_wrap"},[o("span",{staticClass:"cv_button",class:{gray:"0"==t.count},on:{click:t.addLetter}},[t._v("新增推荐信")])])]),t._v(" "),o("div",{staticClass:"refactor_table auto_table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[o("el-table-column",{attrs:{type:"index",label:"序号",width:"70"}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"推荐人",width:"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"sex",label:"性别",width:"70",formatter:t.sexFormat}}),t._v(" "),o("el-table-column",{attrs:{prop:"job",label:"职位头衔",width:"110"}}),t._v(" "),o("el-table-column",{attrs:{prop:"unit_name",label:"单位名称",width:"110"}}),t._v(" "),o("el-table-column",{attrs:{prop:"phone",label:"联系电话",width:"120"}}),t._v(" "),o("el-table-column",{attrs:{prop:"relation",label:"与您的关系",width:"100",formatter:t.relashipFormat}}),t._v(" "),o("el-table-column",{attrs:{prop:"meet_year",label:"认识年份",width:"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"email",label:"单位邮箱",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{prop:"createtime",label:"创建时间"}}),t._v(" "),o("el-table-column",{attrs:{prop:"operation",label:"操作",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{staticClass:"table_btn",attrs:{size:"mini"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("查看详情")]),t._v(" "),o("el-button",{staticClass:"table_btn",attrs:{size:"mini"},on:{click:function(o){return t.modify(e.$index,e.row)}}},[t._v("修改")]),t._v(" "),o("el-button",{staticClass:"table_btn",attrs:{size:"mini"},on:{click:function(o){return t.finalized(e.$index,e.row)}}},[t._v("提交")])]}}])})],1)],1),t._v(" "),o("div",{staticClass:"add notice add_note"},[o("el-dialog",{attrs:{title:"",visible:t.outerVisible},on:{"update:visible":function(e){t.outerVisible=e}}},[o("div",{staticClass:"add_title"},[t._v("推荐信须知")]),t._v(" "),o("div",{staticClass:"add_content notice_content add_con"},[o("p",[t._v("1）推荐信必须遵循一定的模板和格式；")]),t._v(" "),o("p",[t._v("2）推荐信的长度300-500字为宜；")]),t._v(" "),o("el-checkbox",{staticClass:"notice_text",model:{value:t.notice,callback:function(e){t.notice=e},expression:"notice"}},[t._v("我已阅读 “推荐信须知” 内容")]),t._v(" "),o("div",{staticClass:"add_footer letter_footer"},[o("span",{on:{click:function(e){t.outerVisible=!1}}},[t._v("取消制作")]),t._v(" "),o("span",{class:{letter_active:t.notice,gray:!t.notice},on:{click:function(e){return t.start()}}},[t._v("开始制作推荐信素材！")])])],1)])],1),t._v(" "),o("div",{staticClass:"add ps_detail add_note"},[o("el-dialog",{attrs:{title:"",visible:t.psDetail,width:"1377"},on:{"update:visible":function(e){t.psDetail=e}}},[o("div",{staticClass:"add_title"},[t._v("推荐信详情")]),t._v(" "),o("div",{staticClass:"add_content add_con ps_con"},[o("div",{staticClass:"detail_table"},[o("el-table",{staticClass:"psDetail_talbe",staticStyle:{width:"100%"},attrs:{data:t.viewDetail,stripe:""}},[o("el-table-column",{attrs:{prop:"name",label:"推荐人",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{prop:"sex",label:"性别",width:"98",formatter:t.sexFormat}}),t._v(" "),o("el-table-column",{attrs:{prop:"job",label:"职位头衔"}}),t._v(" "),o("el-table-column",{attrs:{prop:"unit_name",label:"单位名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"phone",label:"联系电话"}}),t._v(" "),o("el-table-column",{attrs:{prop:"relation",label:"与你的关系",width:"120",formatter:t.relashipFormat}}),t._v(" "),o("el-table-column",{attrs:{prop:"meet_year",label:"认识年份"}}),t._v(" "),o("el-table-column",{attrs:{prop:"email",label:"单位邮箱",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{prop:"createtime",label:"创建时间",width:"180"}})],1)],1),t._v(" "),o("el-form",{ref:"psDetailForm",staticClass:"psDetailForm",attrs:{model:t.psDetailForm,"status-icon":"","label-width":"300px","label-position":"top"}},[o("el-form-item",{attrs:{label:"1、 推荐人在何时何地开始与您相互认识？？"}},[o("el-input",{attrs:{type:"textarea",readonly:"",autocomplete:"off"},model:{value:t.psDetailForm.content1,callback:function(e){t.$set(t.psDetailForm,"content1",e)},expression:"psDetailForm.content1"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"2、推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何？"}},[o("el-input",{attrs:{type:"textarea",readonly:"",autocomplete:"off"},model:{value:t.psDetailForm.content2,callback:function(e){t.$set(t.psDetailForm,"content2",e)},expression:"psDetailForm.content2"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"3、推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价"}},[o("el-input",{attrs:{type:"textarea",readonly:"",autocomplete:"off"},model:{value:t.psDetailForm.content3,callback:function(e){t.$set(t.psDetailForm,"content3",e)},expression:"psDetailForm.content3"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"4、 推荐人在和您接触过程中对您的整体印象与评价？",prop:"content4"}},[o("el-input",{attrs:{type:"textarea",readonly:"",autocomplete:"off"},model:{value:t.psDetailForm.content4,callback:function(e){t.$set(t.psDetailForm,"content4",e)},expression:"psDetailForm.content4"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"5、 其他你特别想放在推荐信里面的内容"}},[o("el-input",{attrs:{type:"textarea",readonly:"",autocomplete:"off"},model:{value:t.psDetailForm.content5,callback:function(e){t.$set(t.psDetailForm,"content5",e)},expression:"psDetailForm.content5"}})],1)],1),t._v(" "),o("div",{staticClass:"add_footer"},[o("span",{on:{click:t.close}},[t._v("关闭")])])],1)])],1),t._v(" "),o("div",{staticClass:"add ps_detail add_note"},[o("el-dialog",{attrs:{title:"",visible:t.Modify,width:"1377"},on:{"update:visible":function(e){t.Modify=e}}},[o("div",{staticClass:"add_title"},[t._v("推荐信修改")]),t._v(" "),o("div",{staticClass:"add_content add_con ps_con"},[o("div",{staticClass:"detail_table"},[o("el-table",{staticClass:"psDetail_talbe",staticStyle:{width:"100%"},attrs:{data:t.viewModify,stripe:""}},[o("el-table-column",{attrs:{prop:"name",label:"推荐人",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{prop:"sex",label:"性别",width:"98",formatter:t.sexFormat}}),t._v(" "),o("el-table-column",{attrs:{prop:"job",label:"职位头衔"}}),t._v(" "),o("el-table-column",{attrs:{prop:"unit_name",label:"单位名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"phone",label:"联系电话"}}),t._v(" "),o("el-table-column",{attrs:{prop:"relation",label:"与你的关系",width:"120",formatter:t.relashipFormat}}),t._v(" "),o("el-table-column",{attrs:{prop:"meet_year",label:"认识年份"}}),t._v(" "),o("el-table-column",{attrs:{prop:"email",label:"单位邮箱",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{prop:"createtime",label:"创建时间",width:"180"}})],1)],1),t._v(" "),o("el-form",{ref:"ModifyForm",staticClass:"psDetailForm",attrs:{model:t.ModifyForm,"status-icon":"",rules:t.rules,"label-width":"300px","label-position":"top"}},[o("el-form-item",{attrs:{label:"1、 推荐人在何时何地开始与您相互认识？",prop:"content1"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.ModifyForm.content1,callback:function(e){t.$set(t.ModifyForm,"content1",e)},expression:"ModifyForm.content1"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"2、推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何？",prop:"content2"}},[o("el-input",{attrs:{type:"textarea",readonly:"",autocomplete:"off"},model:{value:t.ModifyForm.content2,callback:function(e){t.$set(t.ModifyForm,"content2",e)},expression:"ModifyForm.content2"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"3、推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价",prop:"content3"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.ModifyForm.content3,callback:function(e){t.$set(t.ModifyForm,"content3",e)},expression:"ModifyForm.content3"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"4、 推荐人在和您接触过程中对您的整体印象与评价？",prop:"content4"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.ModifyForm.content4,callback:function(e){t.$set(t.ModifyForm,"content4",e)},expression:"ModifyForm.content4"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"5、 其他你特别想放在推荐信里面的内容",prop:"content5"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.ModifyForm.content5,callback:function(e){t.$set(t.ModifyForm,"content5",e)},expression:"ModifyForm.content5"}})],1)],1),t._v(" "),o("div",{staticClass:"add_footer"},[o("span",{on:{click:function(e){t.Modify=!1}}},[t._v("取消")]),t._v(" "),o("span",{on:{click:function(e){return t.edit("ModifyForm")}}},[t._v("保存")])])],1)])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);