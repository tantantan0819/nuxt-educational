(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{484:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return d}));var l=/^1[345789]\d{9}$/,o=/^\w+@\w+(?:\.\w+)+$/,n=/[a-z0-9]{6,16}/,c=function(e,t,r){t?n.test(t)?r():r(new Error("请输入6-16位字母和数字组合的密码")):r(new Error("请输入密码"))},m=function(e,t,r){t?o.test(t)?r():r(new Error("请输入正确的电子邮箱格式")):r(new Error("请输入邮箱号码"))},d=function(e,t,r){t?l.test(t)?r():r(new Error("请输入正确的手机号码")):r(new Error("请输入手机号码"))}},526:function(e,t,r){},571:function(e,t,r){"use strict";var l=r(526);r.n(l).a},606:function(e,t,r){"use strict";r.r(t);var l=r(89),o=(r(4),r(484),{layout:"refactor",data:function(){return{allLetter:0,letterLength:"",titleMaxLength50:50,titleMaxLength100:100,titleMaxLength200:200,relaship:[],sexList:[],isSubmit:!0,letterForm:{name:"",sex:"",job:"",unit_address:"",unit_name:"",phone:"",email:"",relation:"",content1:"",content2:"",content3:"",content4:"",content5:"",createtime:"",meet_year:""},rules:{meet_year:[{required:!0,message:"请选择与推荐人认识的年份",trigger:"blur"}],name:[{required:!0,message:"请输入推荐人姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择推荐人性别",trigger:"blur"}],job:[{required:!0,message:"请输入推荐人职位头衔",trigger:"blur"}],unit_address:[{required:!0,message:"请输入推荐人单位地址",trigger:"blur"}],unit_name:[{required:!0,message:"请输入推荐人单位名称",trigger:"blur"}],phone:[{required:!0,message:"请输入推荐人联系电话称",trigger:"blur"}],email:[{required:!0,message:"请输入推荐人单位邮箱",trigger:"blur"}],relation:[{required:!0,message:"请选择推荐人与您的关系",trigger:"blur"}],content1:[{required:!0,message:"请输入推荐人在何时何地开始与您相互认识",trigger:"blur"}],content2:[{required:!0,message:"请输入推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何",trigger:"blur"}],content3:[{required:!0,message:"请输入推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价",trigger:"blur"}],content4:[{required:!0,message:"请输入推荐人在和您接触过程中对您的整体印象与评价",trigger:"blur"}],content5:[{required:!0,message:"请输入其他你特别想放在推荐信里面的内容",trigger:"blur"}]}}},mounted:function(){var e=this;e.allLetter=e.$route.query.num,l.a.get("/code-val/group-key-list").then((function(t){e.sexList=t.SEX,e.relaship=t.MY_RELATIONSHIP})),e.letterLength=e.$store.state.letter},methods:{cancel:function(e){this.$refs[e].resetFields(),this.$router.go(-1)},submitForm:function(e){var t=this;t.letterForm.phone=t.letterForm.phone+"",t.$refs[e].validate((function(r){if(!r)return t.$message({message:"请完整填写表单！",type:"error"}),!1;t.isSubmit?(t.letterForm.sex+="",t.isSubmit=!1,l.a.post("/customer-recommendation/add",t.letterForm).then((function(r){var l=t.$message({message:"提交成功！",type:"success"});setTimeout((function(){l.close(),t.isSubmit=!0,t.$refs[e].resetFields(),t.$router.go(-1)}),1e3)}))):t.$message({message:"请勿重复提交！",type:"error"})}))}}}),n=(r(571),r(10)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cv ps"},[r("div",{staticClass:"cv_step2"},[r("div",{staticClass:"title_box"},[r("div",{staticClass:"cv_title"},[r("p",[e._v("新增推荐信")]),e._v(" "),r("span",[e._v("目前您有"+e._s(e.letterLength)+"份推荐信，您还可新增"+e._s(e.allLetter-e.letterLength)+"份推荐信")])])]),e._v(" "),r("div",{staticClass:"cv_content ps_add ps_detail add add_con"},[r("span",{staticClass:"ps_tip"},[e._v("内容填写完毕，提交后将无法修改，请认真回答以下所有问题！如需修改只能联系自己的顾问老师协助修改")]),e._v(" "),r("div",{staticClass:"ps_plan"},[r("div",{staticClass:"add_content add_form letter_form"},[r("el-form",{ref:"letterForm",staticClass:"letterForm",attrs:{model:e.letterForm,rules:e.rules,"status-icon":"","label-width":"300px","label-position":"top"}},[r("div",{staticClass:"letter_info"},[r("el-form-item",{attrs:{label:"推荐人：",prop:"name","label-width":"300"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的姓名",autocomplete:"off"},model:{value:e.letterForm.name,callback:function(t){e.$set(e.letterForm,"name",t)},expression:"letterForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别：",prop:"sex",placeholder:"请选择推荐人的性别"}},[r("el-select",{staticClass:"widthAll",attrs:{placeholder:"请选择推荐人的性别"},model:{value:e.letterForm.sex,callback:function(t){e.$set(e.letterForm,"sex",t)},expression:"letterForm.sex"}},e._l(e.sexList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.cvalue_cn,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"职位头衔：",prop:"job"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的职位头衔",autocomplete:"off"},model:{value:e.letterForm.job,callback:function(t){e.$set(e.letterForm,"job",t)},expression:"letterForm.job"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单位地址：",prop:"unit_address"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的单位地址",autocomplete:"off"},model:{value:e.letterForm.unit_address,callback:function(t){e.$set(e.letterForm,"unit_address",t)},expression:"letterForm.unit_address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单位名称：",prop:"unit_name"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的单位名称",autocomplete:"off"},model:{value:e.letterForm.unit_name,callback:function(t){e.$set(e.letterForm,"unit_name",t)},expression:"letterForm.unit_name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系电话：",prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的联系电话",autocomplete:"off"},model:{value:e.letterForm.phone,callback:function(t){e.$set(e.letterForm,"phone",t)},expression:"letterForm.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"与您的关系：",prop:"relation"}},[r("el-select",{staticClass:"widthAll",attrs:{placeholder:"请选择推荐人与您的关系"},model:{value:e.letterForm.relation,callback:function(t){e.$set(e.letterForm,"relation",t)},expression:"letterForm.relation"}},e._l(e.relaship,(function(e,t){return r("el-option",{key:t,attrs:{label:e.cvalue_cn,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"认识时间",prop:"meet_year"}},[r("el-date-picker",{staticClass:"widthAll",attrs:{type:"year",format:"yyyy","value-format":"yyyy",placeholder:"请选择时间"},model:{value:e.letterForm.meet_year,callback:function(t){e.$set(e.letterForm,"meet_year",t)},expression:"letterForm.meet_year"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单位邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的单位邮箱",autocomplete:"off"},model:{value:e.letterForm.email,callback:function(t){e.$set(e.letterForm,"email",t)},expression:"letterForm.email"}})],1)],1),e._v(" "),r("div",{staticClass:"letter_content psDetailForm cvTextareaBox"},[r("el-form-item",{attrs:{label:"1、 推荐人在何时何地开始与您相互认识？",prop:"content1"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：课堂上，新生入学，面试，某个活动等",autocomplete:"off"},model:{value:e.letterForm.content1,callback:function(t){e.$set(e.letterForm,"content1",t)},expression:"letterForm.content1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"2、推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何？",prop:"content2"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：学年+学期+课程名称+课程分数等",autocomplete:"off"},model:{value:e.letterForm.content2,callback:function(t){e.$set(e.letterForm,"content2",t)},expression:"letterForm.content2"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"3、推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价",prop:"content3"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：什么项目+什么事情引起了老师的注意+老师如何评价",autocomplete:"off"},model:{value:e.letterForm.content3,callback:function(t){e.$set(e.letterForm,"content3",t)},expression:"letterForm.content3"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"4、 推荐人在和您接触过程中对您的整体印象与评价？",prop:"content4"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：课堂或表现、学习或工作能力、主动性、独立性、创新性、责任感等，请以评价+具体事例结合的方式阐述：",autocomplete:"off"},model:{value:e.letterForm.content4,callback:function(t){e.$set(e.letterForm,"content4",t)},expression:"letterForm.content4"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"5、 其他你特别想放在推荐信里面的内容",prop:"content5"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：课堂或表现、学习或工作能力、主动性、独立性、创新性、责任感等，请以评价+具体事例结合的方式阐述：",autocomplete:"off"},model:{value:e.letterForm.content5,callback:function(t){e.$set(e.letterForm,"content5",t)},expression:"letterForm.content5"}})],1)],1)])],1)])]),e._v(" "),r("div",{staticClass:"add_footer"},[r("span",{on:{click:function(t){return e.cancel("letterForm")}}},[e._v("取消")]),e._v(" "),r("span",{on:{click:function(t){return e.submitForm("letterForm")}}},[e._v("完成")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);