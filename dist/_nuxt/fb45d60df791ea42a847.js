(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{529:function(e,t,o){},574:function(e,t,o){"use strict";var l=o(529);o.n(l).a},609:function(e,t,o){"use strict";o.r(t);var l=o(89),r={layout:"refactor",data:function(){return{plan:"",id:"",type:"",psLength:"",addIndex:1,outerVisible:!1,tableData:[],isSubmit:!0,psDetailForm:{apply_id:"",need_teacher:"",dongji1:"",dongji2:"",dongji3:"",duanqiguihua:"",changqiguihua:"",ziwoyoushi1:"",ziwoyoushi2:"",ziwoyoushi3:"",ziwoyoushi4:"",ziwoyoushi5:"",shenqingliyou:"",content5:""},rules:{need_teacher:[{required:!0,message:"请选择是否需要写作老师与您本人沟通内容和逻辑",trigger:"blur"}],duanqiguihua:[{required:!0,message:"请填写您的短期职业规划",trigger:"blur"}],ziwoyoushi5:[{required:!0,message:"请填写请填写相关实习或工作内容",trigger:"blur"}],changqiguihua:[{required:!0,message:"请填写您的长期职业规划",trigger:"blur"}],shenqingliyou:[{required:!0,message:"请填写您为什么想要申请该院校的该专业",trigger:"blur"}]}}},mounted:function(){var e=this;e.id=e.$route.query.id,e.psDetailForm.apply_id=e.$route.query.apply_id,e.type=e.$route.query.type,l.a.get("/customer-apply-question/get-my-ps?search[id]="+e.id).then((function(t){t&&0!=t.length&&(e.plan=t[0],e.tableData.push(t[0].apply[e.type]))}))},methods:{prev:function(){this.$router.push({path:"/writ/ps/add",query:{id:this.id}})},submitForm:function(e){var t=this,o=0,r=0,n=t.psDetailForm.ziwoyoushi1.length+t.psDetailForm.ziwoyoushi2.length+t.psDetailForm.ziwoyoushi3.length+t.psDetailForm.ziwoyoushi4.length+t.psDetailForm.ziwoyoushi5.length;return""==t.psDetailForm.dongji1&&o++,""==t.psDetailForm.dongji2&&o++,""==t.psDetailForm.dongji3&&o++,""==t.psDetailForm.ziwoyoushi1&&r++,""==t.psDetailForm.ziwoyoushi2&&r++,""==t.psDetailForm.ziwoyoushi3&&r++,""==t.psDetailForm.ziwoyoushi4&&r++,""==t.psDetailForm.ziwoyoushi5&&r++,o>1?(t.$message({message:"请至少选填2个选择该专业的动机！",type:"error"}),!1):r>2?(t.$message({message:"请至少选填3个觉得自己是一个有竞争力的申请者的方式！",type:"error"}),!1):n>1e3?(t.$message({message:"觉得自己是一个有竞争力的申请者的方式内容超出1000字",type:"error"}),!1):void t.$refs[e].validate((function(e){if(!e)return t.$message({message:"请完整填写表单！",type:"error"}),!1;t.isSubmit?(t.isSubmit=!1,t.psDetailForm.version=1,l.a.post("/customer-apply-question/add",t.psDetailForm).then((function(e){if(e){var o=t.$message({message:"提交成功！",type:"success"});setTimeout((function(){t.isSubmit=!0,o.close(),t.$router.push("/writ/ps")}),1500)}}))):t.$message({message:"请勿重复提交！",type:"error"})}))}}},n=(o(574),o(10)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cv ps"},[o("div",{staticClass:"cv_step2"},[o("div",{staticClass:"title_box"},[o("div",{staticClass:"cv_title"},[o("p",[e._v("新增PS")]),e._v(" "),o("span",[e._v("目前您有"+e._s(e.plan.used_ps_num)+"份PS，您的套餐还可新增"+e._s(e.plan.can_use_ps_num)+"份PS")])])]),e._v(" "),o("div",{staticClass:"cv_content ps_add ps_detail add"},[e._m(0),e._v(" "),o("div",{staticClass:"ps_plan"},[o("div",{staticClass:"add_content add_form cvTextareaBox"},[o("el-form",{ref:"psDetailForm",staticClass:"psDetailForm psDetailForm_edit",attrs:{model:e.psDetailForm,"status-icon":"",rules:e.rules,"label-width":"300px","label-position":"top"}},[o("el-form-item",{attrs:{label:"1、是否需要写作老师与您本人沟通内容和逻辑？",prop:"need_teacher"}},[o("el-radio-group",{model:{value:e.psDetailForm.need_teacher,callback:function(t){e.$set(e.psDetailForm,"need_teacher",t)},expression:"psDetailForm.need_teacher"}},[o("el-radio",{attrs:{label:"204"}},[e._v("我对内容和逻辑有自己的要求，需要语音沟通")]),e._v(" "),o("el-radio",{attrs:{label:"205"}},[e._v("不需要，我没有什么想法，请专业老师自行撰写")])],1)],1),e._v(" "),o("div",{staticClass:"ps_newTitle mt50"},[e._v("2、您选择这个专业的动机是什么？（请至少选填2个动机，每个动机不超过300字）")]),e._v(" "),o("div",{staticClass:"ps_formIndent"},[o("el-form-item",{attrs:{label:"•动机1：研究兴趣；因为本科阶段就读于该专业，并对做过的相关项目/论文/课题的研究进行描述，对于深入研究某个点有浓厚的兴趣。（同专业申请必填）",prop:"dongji1"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off",maxlength:"300","show-word-limit":""},model:{value:e.psDetailForm.dongji1,callback:function(t){e.$set(e.psDetailForm,"dongji1",t)},expression:"psDetailForm.dongji1"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"•动机2：因为想解决某个问题而选择的这门课程；比如：因为一次行业事件，发现现在国内的XX行业存在什么样的问题，想要通过学习这门课来深入研究解决",prop:"dongji2"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off",maxlength:"300","show-word-limit":""},model:{value:e.psDetailForm.dongji2,callback:function(t){e.$set(e.psDetailForm,"dongji2",t)},expression:"psDetailForm.dongji2"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"•动机3：因为一本书，一部电影、一次活动，一次演讲，一次课程，一次实习的影响对这个行业及专业产生了浓厚的兴趣。（转专业申请必填）",prop:"dongji3"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off",maxlength:"300","show-word-limit":""},model:{value:e.psDetailForm.dongji3,callback:function(t){e.$set(e.psDetailForm,"dongji3",t)},expression:"psDetailForm.dongji3"}})],1)],1),e._v(" "),o("div",{staticClass:"ps_newTitle mt50"},[e._v("3、您的职业规划是什么？")]),e._v(" "),o("div",{staticClass:"ps_formIndent"},[o("el-form-item",{attrs:{label:"•短期规划（请列出希望就职的公司名称，具体岗位以及该岗位的要求）",prop:"duanqiguihua"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.psDetailForm.duanqiguihua,callback:function(t){e.$set(e.psDetailForm,"duanqiguihua",t)},expression:"psDetailForm.duanqiguihua"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"•长期规划（在达成短期目标之后，未来5-10年又有何种学术或工作方面的目标）",prop:"changqiguihua"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.psDetailForm.changqiguihua,callback:function(t){e.$set(e.psDetailForm,"changqiguihua",t)},expression:"psDetailForm.changqiguihua"}})],1)],1),e._v(" "),o("div",{staticClass:"ps_newTitle mt50"},[e._v("4、 您为什么觉的自己是一个有竞争力的申请者？(请至少选填3个方式,共1000字以内）？")]),e._v(" "),o("div",{staticClass:"ps_formIndent"},[o("el-form-item",{attrs:{label:"•方式1：请与教育顾问老师联系，确认本专业有无特殊的录取要求，如对于某些课程或者经历有特殊要求的，务必添加。比如：曼彻斯特大学的发展金融专业要求宏观经济学，微观经济学，统计学都要达到80分以上，因此，必须在PS里面详述这三门课的学习成果，研究能力；可以通过课堂作业，小组作业等举例描述",prop:"ziwoyoushi1"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.psDetailForm.ziwoyoushi1,callback:function(t){e.$set(e.psDetailForm,"ziwoyoushi1",t)},expression:"psDetailForm.ziwoyoushi1"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"•方式2：请详述2-3门与您申请的专业相关的课程：具体描述从这些课程上掌握了哪些具体的专业技能；可协助解决哪些问题；对您未来有哪些帮助",prop:"ziwoyoushi2"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.psDetailForm.ziwoyoushi2,callback:function(t){e.$set(e.psDetailForm,"ziwoyoushi2",t)},expression:"psDetailForm.ziwoyoushi2"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"•方式3：您是否写过或发表过跟申请专业相关的论文或者文章（发表在重要期刊上）？是否读过相关论文或者文章？是否参加过相关的课程，讲座，作业练习，小组练习。用两句话阐述这些文章或者活动主要研究的问题是什么，对于您的研究能力和学习能力有哪些提高？对于您要申请的专业有什么借鉴和学习作用",prop:"ziwoyoushi3"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.psDetailForm.ziwoyoushi3,callback:function(t){e.$set(e.psDetailForm,"ziwoyoushi3",t)},expression:"psDetailForm.ziwoyoushi3"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"•方式4：您是否读过跟申请的专业相关的课外书籍，最好作者是国外的，如无，就写国内的。用两句话阐述这些书籍主要研究的是什么问题，对于您要申请的专业有什么借鉴和学习作用。（选填，100字，切忌写成读后感，详述1-2本即可）",prop:"ziwoyoushi4"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off",maxlength:"100","show-word-limit":""},model:{value:e.psDetailForm.ziwoyoushi4,callback:function(t){e.$set(e.psDetailForm,"ziwoyoushi4",t)},expression:"psDetailForm.ziwoyoushi4"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"•方式5：您是否有相关实习或工作经历？若有，详述公司名称和工作具体日期以及工作期间您个人所做的具体工作内容（务必通过描述过程中遇到的挫折，如何运用专业技能客服困难以及获得的成果和对您自身具体哪些知识和能力的提升） （必填，500字以内）",prop:"ziwoyoushi5"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off",maxlength:"500","show-word-limit":""},model:{value:e.psDetailForm.ziwoyoushi5,callback:function(t){e.$set(e.psDetailForm,"ziwoyoushi5",t)},expression:"psDetailForm.ziwoyoushi5"}})],1)],1),e._v(" "),o("el-form-item",{staticClass:"mt50",attrs:{prop:"shenqingliyou",label:"5、 为什么想要申请该院校的该专业？（请填写1-2门课程，选修或必修，建议选所有申请院校中重复率最高的课程，请参考官网课程介绍，详述希望通过该课程掌握哪些技能，以及对个人未来的帮助 ）"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.psDetailForm.shenqingliyou,callback:function(t){e.$set(e.psDetailForm,"shenqingliyou",t)},expression:"psDetailForm.shenqingliyou"}})],1),e._v(" "),o("el-form-item",{staticClass:"mt50",attrs:{prop:"content5",label:"6、  除开您的学习能力及经历之外，您还参加了譬如学生会，社团及其他社会活动对您团队协作，组织领导能力，独立性养成等有重要影响。（如果有若干事件都相关，请选取您认为有代表性的，切勿一一罗列，写明具体时间和具体工作内容，以及您获得的收获）（动机与学术背景较为充实的可不填写，200字）"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off",maxlength:"200","show-word-limit":""},model:{value:e.psDetailForm.content5,callback:function(t){e.$set(e.psDetailForm,"content5",t)},expression:"psDetailForm.content5"}})],1)],1)],1)])]),e._v(" "),o("div",{staticClass:"cv_footer ps_edit_footer"},[o("div",{staticClass:"footer_button"},[o("span",{on:{click:e.prev}},[o("i",[e._v("上一步")])]),e._v(" "),o("span",{on:{click:function(t){return e.submitForm("psDetailForm")}}},[e._v("保存")])])])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ps_remind"},[o("p",[e._v("个人陈述是申请文书中非常重要的文件，请务必仔细阅读每个问题，并用中文或英文回答。总字数不得低于1500字，不得高于2500字。字数过多或者过少，都不利于撰写文书！")]),e._v(" "),o("p",[e._v("•撰写PS前，您必须懂得的规则（请认真阅读）：")]),e._v(" "),o("p",{staticClass:"text-indent"},[e._v("•大多数院校要求成稿的英文PS需要500-800字左右即可，请注意字数越少越难写！偶尔要求更多字数的，我们会根据要求撰写。")]),e._v(" "),o("p",{staticClass:"text-indent"},[e._v("•如果英文PS非常地道，没有任何错误，英国招生官很容易发现并非本人撰写；所以，我们会保持客观真实性。 ")]),e._v(" "),o("p",{staticClass:"text-indent"},[e._v("•写作老师会从您提供的素材中进行筛选和提炼，并进行创意写作。若其中某部分内容是您特别需要体现在PS中，请务必在正文内容标注出来。")])])}],!1,null,null,null);t.default=component.exports}}]);