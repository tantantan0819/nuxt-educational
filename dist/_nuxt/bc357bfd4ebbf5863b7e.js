(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{482:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return f}));var o=/^1[345789]\d{9}$/,l=/^\w+@\w+(?:\.\w+)+$/,n=/[a-z0-9]{6,16}/,c=function(e,t,r){t?n.test(t)?r():r(new Error("请输入6-16位字母和数字组合的密码")):r(new Error("请输入密码"))},m=function(e,t,r){t?l.test(t)?r():r(new Error("请输入正确的电子邮箱格式")):r(new Error("请输入邮箱号码"))},f=function(e,t,r){t?o.test(t)?r():r(new Error("请输入正确的手机号码")):r(new Error("请输入手机号码"))}},483:function(e,t,r){var o=r(16),l=r(57),n=r(25),c=r(484),m="["+c+"]",f=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),v=function(e,t,r){var l={},m=n((function(){return!!c[e]()||"​"!="​"[e]()})),f=l[e]=m?t(F):c[e];r&&(l[r]=f),o(o.P+o.F*m,"String",l)},F=v.trim=function(e,t){return e=String(l(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(d,"")),e};e.exports=v},484:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},485:function(e,t,r){"use strict";var o=r(11),l=r(43),n=r(56),c=r(271),m=r(126),f=r(25),d=r(91).f,v=r(127).f,F=r(23).f,_=r(483).trim,h=o.Number,x=h,y=h.prototype,N="Number"==n(r(178)(y)),$="trim"in String.prototype,k=function(e){var t=m(e,!1);if("string"==typeof t&&t.length>2){var r,o,l,n=(t=$?t.trim():_(t,3)).charCodeAt(0);if(43===n||45===n){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,o)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof h&&(N?f((function(){y.valueOf.call(r)})):"Number"!=n(r))?c(new x(k(t)),r,h):k(t)};for(var w,I=r(17)?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)l(x,w=I[E])&&!l(h,w)&&F(h,w,v(x,w));h.prototype=y,y.constructor=h,r(26)(o,"Number",h)}},522:function(e,t,r){},565:function(e,t,r){var o=r(16),l=r(566);o(o.S+o.F*(Number.parseInt!=l),"Number",{parseInt:l})},566:function(e,t,r){var o=r(11).parseInt,l=r(483).trim,n=r(484),c=/^[-+]?0[xX]/;e.exports=8!==o(n+"08")||22!==o(n+"0x16")?function(e,t){var r=l(String(e),3);return o(r,t>>>0||(c.test(r)?16:10))}:o},567:function(e,t,r){"use strict";var o=r(522);r.n(o).a},602:function(e,t,r){"use strict";r.r(t);r(45),r(46),r(18),r(485),r(565),r(35);var o=r(5),l=r(71),n=(r(4),r(482),{layout:"refactor",data:function(){return{titleMaxLength50:50,titleMaxLength100:100,titleMaxLength200:200,relaship:[],sexList:[],letterForm:{name:"",sex:"",job:"",unit_address:"",unit_name:"",phone:"",email:"",relation:"",content1:"",content2:"",content3:"",content4:"",content5:"",createtime:"",meet_year:""},rules:{meet_year:[{required:!0,message:"请选择与推荐人认识的年份",trigger:"blur"}],name:[{required:!0,message:"请输入推荐人姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择推荐人性别",trigger:"blur"}],job:[{required:!0,message:"请输入推荐人职位头衔",trigger:"blur"}],unit_address:[{required:!0,message:"请输入推荐人单位地址",trigger:"blur"}],unit_name:[{required:!0,message:"请输入推荐人单位名称",trigger:"blur"}],phone:[{required:!0,message:"请输入推荐人联系电话称",trigger:"blur"}],email:[{required:!0,message:"请输入推荐人单位邮箱",trigger:"blur"}],relation:[{required:!0,message:"请选择推荐人与您的关系",trigger:"blur"}],content1:[{required:!0,message:"请输入推荐人在何时何地开始与您相互认识",trigger:"blur"}],content2:[{required:!0,message:"请输入推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何",trigger:"blur"}],content3:[{required:!0,message:"请输入推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价",trigger:"blur"}],content4:[{required:!0,message:"请输入推荐人在和您接触过程中对您的整体印象与评价",trigger:"blur"}],content5:[{required:!0,message:"请输入其他你特别想放在推荐信里面的内容",trigger:"blur"}]}}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(r=e).$route.query.id,t.next=4,l.a.get("/code-val/group-key-list");case 4:n=t.sent,r.sexList=n.SEX,r.relaship=n.MY_RELATIONSHIP,l.a.post("/customer-recommendation/view",{id:o}).then((function(e){e&&(r.letterForm=e,r.letterForm.sex=Number.parseInt(r.letterForm.sex)),r.relaship.map((function(e){e.id==r.letterForm.relation&&(r.letterForm.relation=e.cvalue_cn)}))}));case 8:case"end":return t.stop()}}),t)})))()},methods:{cancel:function(e){this.$refs[e].resetFields(),this.$router.go(-1)},submitForm:function(e){var t=this;t.letterForm.phone=t.letterForm.phone+"","NaN"==parseFloat(t.letterForm.relation).toString()&&t.relaship.map((function(e){e.cvalue_cn==t.letterForm.relation&&(t.letterForm.relation=e.id)})),t.$refs[e].validate((function(r){if(!r)return t.$message({message:"请完整填写表单！",type:"error"}),!1;t.letterForm.sex+="",l.a.post("/customer-recommendation/edit",t.letterForm).then((function(r){var o=t.$message({message:"提交成功！",type:"success"});setTimeout((function(){o.close(),t.$refs[e].resetFields(),t.$router.go(-1)}),1e3)}))}))}}}),c=(r(567),r(10)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cv ps"},[r("div",{staticClass:"cv_step2"},[e._m(0),e._v(" "),r("div",{staticClass:"cv_content ps_add ps_detail add add_con"},[r("span",{staticClass:"ps_tip"},[e._v("内容填写完毕，提交后将无法修改，请认真回答以下所有问题！如需修改只能联系自己的顾问老师协助修改")]),e._v(" "),r("div",{staticClass:"ps_plan"},[r("div",{staticClass:"add_content add_form letter_form"},[r("el-form",{ref:"letterForm",staticClass:"letterForm",attrs:{model:e.letterForm,rules:e.rules,"status-icon":"","label-width":"300px","label-position":"top"}},[r("div",{staticClass:"letter_info"},[r("el-form-item",{attrs:{label:"推荐人：",prop:"name","label-width":"300"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的姓名",autocomplete:"off"},model:{value:e.letterForm.name,callback:function(t){e.$set(e.letterForm,"name",t)},expression:"letterForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别：",prop:"sex",placeholder:"请选择推荐人的性别"}},[r("el-select",{staticClass:"widthAll",attrs:{placeholder:"请选择推荐人的性别"},model:{value:e.letterForm.sex,callback:function(t){e.$set(e.letterForm,"sex",t)},expression:"letterForm.sex"}},e._l(e.sexList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.cvalue_cn,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"职位头衔：",prop:"job"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的职位头衔",autocomplete:"off"},model:{value:e.letterForm.job,callback:function(t){e.$set(e.letterForm,"job",t)},expression:"letterForm.job"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单位地址：",prop:"unit_address"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的单位地址",autocomplete:"off"},model:{value:e.letterForm.unit_address,callback:function(t){e.$set(e.letterForm,"unit_address",t)},expression:"letterForm.unit_address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单位名称：",prop:"unit_name"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的单位名称",autocomplete:"off"},model:{value:e.letterForm.unit_name,callback:function(t){e.$set(e.letterForm,"unit_name",t)},expression:"letterForm.unit_name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系电话：",prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的联系电话",autocomplete:"off"},model:{value:e.letterForm.phone,callback:function(t){e.$set(e.letterForm,"phone",t)},expression:"letterForm.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"与您的关系：",prop:"relation"}},[r("el-select",{staticClass:"widthAll",attrs:{placeholder:"请选择推荐人与您的关系"},model:{value:e.letterForm.relation,callback:function(t){e.$set(e.letterForm,"relation",t)},expression:"letterForm.relation"}},e._l(e.relaship,(function(e,t){return r("el-option",{key:t,attrs:{label:e.cvalue_cn,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"认识时间",prop:"meet_year"}},[r("el-date-picker",{staticClass:"widthAll",attrs:{type:"year",format:"yyyy","value-format":"yyyy",placeholder:"请选择时间"},model:{value:e.letterForm.meet_year,callback:function(t){e.$set(e.letterForm,"meet_year",t)},expression:"letterForm.meet_year"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单位邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"请输入推荐人的单位邮箱",autocomplete:"off"},model:{value:e.letterForm.email,callback:function(t){e.$set(e.letterForm,"email",t)},expression:"letterForm.email"}})],1)],1),e._v(" "),r("div",{staticClass:"letter_content psDetailForm cvTextareaBox"},[r("el-form-item",{attrs:{label:"1、 推荐人在何时何地开始与您相互认识？",prop:"content1"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：课堂上，新生入学，面试，某个活动等",autocomplete:"off"},model:{value:e.letterForm.content1,callback:function(t){e.$set(e.letterForm,"content1",t)},expression:"letterForm.content1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"2、推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何？",prop:"content2"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：学年+学期+课程名称+课程分数等",autocomplete:"off"},model:{value:e.letterForm.content2,callback:function(t){e.$set(e.letterForm,"content2",t)},expression:"letterForm.content2"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"3、推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价",prop:"content3"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：什么项目+什么事情引起了老师的注意+老师如何评价",autocomplete:"off"},model:{value:e.letterForm.content3,callback:function(t){e.$set(e.letterForm,"content3",t)},expression:"letterForm.content3"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"4、 推荐人在和您接触过程中对您的整体印象与评价？",prop:"content4"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：课堂或表现、学习或工作能力、主动性、独立性、创新性、责任感等，请以评价+具体事例结合的方式阐述：",autocomplete:"off"},model:{value:e.letterForm.content4,callback:function(t){e.$set(e.letterForm,"content4",t)},expression:"letterForm.content4"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"5、 其他你特别想放在推荐信里面的内容",prop:"content5"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例：课堂或表现、学习或工作能力、主动性、独立性、创新性、责任感等，请以评价+具体事例结合的方式阐述：",autocomplete:"off"},model:{value:e.letterForm.content5,callback:function(t){e.$set(e.letterForm,"content5",t)},expression:"letterForm.content5"}})],1)],1)])],1)])]),e._v(" "),r("div",{staticClass:"add_footer"},[r("span",{on:{click:function(t){return e.cancel("letterForm")}}},[e._v("取消")]),e._v(" "),r("span",{on:{click:function(t){return e.submitForm("letterForm")}}},[e._v("保存")])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title_box"},[t("div",{staticClass:"cv_title"},[t("p",[this._v("修改推荐信")])])])}],!1,null,null,null);t.default=component.exports}}]);