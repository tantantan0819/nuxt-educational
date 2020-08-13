<template>
    <div class="cv ps">
        <div class="cv_step2">
            <div class="title_box">
                <div class="cv_title">
                    <p>新增PS</p>
                    <span>目前您有{{plan.used_ps_num}}份PS，您的套餐还可新增{{plan.can_use_ps_num}}份PS</span>
                </div>
            </div>
            <div class="cv_content ps_add ps_detail add">
              <div class="ps_remind">
                <p>个人陈述是申请文书中非常重要的文件，请务必仔细阅读每个问题，并用中文或英文回答。总字数不得低于1500字，不得高于2500字。字数过多或者过少，都不利于撰写文书！</p>
                <p>•撰写PS前，您必须懂得的规则（请认真阅读）：</p>
                <p class="text-indent">•大多数院校要求成稿的英文PS需要500-800字左右即可，请注意字数越少越难写！偶尔要求更多字数的，我们会根据要求撰写。</p>
                <p class="text-indent">•如果英文PS非常地道，没有任何错误，英国招生官很容易发现并非本人撰写；所以，我们会保持客观真实性。 </p>
                <p class="text-indent">•写作老师会从您提供的素材中进行筛选和提炼，并进行创意写作。若其中某部分内容是您特别需要体现在PS中，请务必在正文内容标注出来。</p>
              </div>
                <div class="ps_plan">
                    <div class="add_content add_form cvTextareaBox">
                        <el-form
                            :model="psDetailForm"
                            status-icon
                            ref="psDetailForm"
                            :rules="rules"
                            label-width="300px"
                            label-position="top"
                            class="psDetailForm psDetailForm_edit"
                        >
                            <el-form-item label="1、是否需要写作老师与您本人沟通内容和逻辑？" prop="need_teacher">
                                <el-radio-group v-model="psDetailForm.need_teacher">
                                    <el-radio label="204">我对内容和逻辑有自己的要求，需要语音沟通</el-radio>
                                    <el-radio label="205">不需要，我没有什么想法，请专业老师自行撰写</el-radio>
                                </el-radio-group>
                            </el-form-item>
                          <div class="ps_newTitle">2、您选择这个专业的动机是什么？（请至少选填2个动机，每个动机不超过300字）</div>
                          <div class="ps_formIndent">
                            <el-form-item
                              label="•动机1：研究兴趣；因为本科阶段就读于该专业，并对做过的相关项目/论文/课题的研究进行描述，对于深入研究某个点有浓厚的兴趣。（同专业申请必填）"
                              prop="dongji1"
                            >
                              <el-input type="textarea" v-model="psDetailForm.dongji1" autocomplete="off" maxlength="300" show-word-limit></el-input>
                            </el-form-item>
                            <el-form-item
                              label="•动机2：因为想解决某个问题而选择的这门课程；比如：因为一次行业事件，发现现在国内的XX行业存在什么样的问题，想要通过学习这门课来深入研究解决"
                              prop="dongji2"
                            >
                              <el-input type="textarea" v-model="psDetailForm.dongji2" autocomplete="off" maxlength="300" show-word-limit></el-input>
                            </el-form-item>
                            <el-form-item
                              label="•动机3：因为一本书，一部电影、一次活动，一次演讲，一次课程，一次实习的影响对这个行业及专业产生了浓厚的兴趣。（转专业申请必填）"
                              prop="dongji3"
                            >
                              <el-input type="textarea" v-model="psDetailForm.dongji3" autocomplete="off" maxlength="300" show-word-limit></el-input>
                            </el-form-item>
                          </div>
                          <div class="ps_newTitle">3、您的职业规划是什么？</div>
                          <div class="ps_formIndent">
                            <el-form-item
                              label="•短期规划（请列出希望就职的公司名称，具体岗位以及该岗位的要求）"
                              prop="duanqiguihua"
                            >
                              <el-input type="textarea" v-model="psDetailForm.duanqiguihua" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item
                              label="•长期规划（在达成短期目标之后，未来5-10年又有何种学术或工作方面的目标）"
                              prop="changqiguihua"
                            >
                              <el-input type="textarea" v-model="psDetailForm.changqiguihua" autocomplete="off"></el-input>
                            </el-form-item>
                          </div>
                          <div class="ps_newTitle">4、 您为什么觉的自己是一个有竞争力的申请者？(请至少选填3个方式,共1000字以内）？</div>
                          <div class="ps_formIndent">
                            <el-form-item label="•方式1：请与教育顾问老师联系，确认本专业有无特殊的录取要求，如对于某些课程或者经历有特殊要求的，务必添加。比如：曼彻斯特大学的发展金融专业要求宏观经济学，微观经济学，统计学都要达到80分以上，因此，必须在PS里面详述这三门课的学习成果，研究能力；可以通过课堂作业，小组作业等举例描述"
                              prop="ziwoyoushi1"
                            >
                              <el-input type="textarea" v-model="psDetailForm.ziwoyoushi1" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="•方式2：请详述2-3门与您申请的专业相关的课程：具体描述从这些课程上掌握了哪些具体的专业技能；可协助解决哪些问题；对您未来有哪些帮助"
                              prop="ziwoyoushi2"
                            >
                              <el-input type="textarea" v-model="psDetailForm.ziwoyoushi2" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="•方式3：您是否写过或发表过跟申请专业相关的论文或者文章（发表在重要期刊上）？是否读过相关论文或者文章？是否参加过相关的课程，讲座，作业练习，小组练习。用两句话阐述这些文章或者活动主要研究的问题是什么，对于您的研究能力和学习能力有哪些提高？对于您要申请的专业有什么借鉴和学习作用"
                              prop="ziwoyoushi3"
                            >
                              <el-input type="textarea" v-model="psDetailForm.ziwoyoushi3" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="•方式4：您是否读过跟申请的专业相关的课外书籍，最好作者是国外的，如无，就写国内的。用两句话阐述这些书籍主要研究的是什么问题，对于您要申请的专业有什么借鉴和学习作用。（选填，100字，切忌写成读后感，详述1-2本即可）"
                              prop="ziwoyoushi4"
                            >
                              <el-input type="textarea" v-model="psDetailForm.ziwoyoushi4" autocomplete="off" maxlength="100" show-word-limit></el-input>
                            </el-form-item>
                            <el-form-item label="•方式5：您是否有相关实习或工作经历？若有，详述公司名称和工作具体日期以及工作期间您个人所做的具体工作内容（务必通过描述过程中遇到的挫折，如何运用专业技能客服困难以及获得的成果和对您自身具体哪些知识和能力的提升） （必填，500字以内）"
                              prop="ziwoyoushi5"
                            >
                              <el-input type="textarea" v-model="psDetailForm.ziwoyoushi5" autocomplete="off" maxlength="500" show-word-limit></el-input>
                            </el-form-item>
                          </div>
                            <el-form-item prop="shenqingliyou" label="5、 为什么想要申请该院校的该专业？（请填写1-2门课程，选修或必修，建议选所有申请院校中重复率最高的课程，请参考官网课程介绍，详述希望通过该课程掌握哪些技能，以及对个人未来的帮助 ）" >
                                <el-input type="textarea" v-model="psDetailForm.shenqingliyou" autocomplete="off"></el-input>
                            </el-form-item>
                          <el-form-item  prop="content5" label="6、  除开您的学习能力及经历之外，您还参加了譬如学生会，社团及其他社会活动对您团队协作，组织领导能力，独立性养成等有重要影响。（如果有若干事件都相关，请选取您认为有代表性的，切勿一一罗列，写明具体时间和具体工作内容，以及您获得的收获）（动机与学术背景较为充实的可不填写，200字）" >
                            <el-input type="textarea" v-model="psDetailForm.content5" autocomplete="off" maxlength="200" show-word-limit></el-input>
                          </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
            <div class="cv_footer ps_edit_footer">
                <div class="footer_button">
                    <span @click="prev">
                        <i>上一步</i>
                    </span>
                    <span @click="submitForm('psDetailForm')">保存</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "~/assets/css/cv.scss";
@import "~/assets/css/ps.scss";
</style>
<script>
import http from "~/plugins/http";

export default {
    layout: "refactor",
    data() {
        return {
            plan: "", //选中的合同
            id: "", //合同id
            type: "", //选中的方案
            psLength: "", //当前ps长度
            addIndex: 1, // 选中的ps方案
            outerVisible: false, // 外层弹出框
            tableData: [], //table
            isSubmit: true, //是否可提交，避免重复提交
            psDetailForm: {
                apply_id: "", //ps-id
                need_teacher: "",//是否需要写作老师与您本人沟通内容和逻辑？
                dongji1: '',//动机1
                dongji2: '',//动机2
                dongji3: '',//动机3
                duanqiguihua: '',//长期规划
                changqiguihua:'',//长期规划
                ziwoyoushi1:'',//方式1
                ziwoyoushi2: '',//方式2
                ziwoyoushi3: '',//方式3
                ziwoyoushi4: '',//方式4
                ziwoyoushi5: '',//方式5
                shenqingliyou:'',//问题5
                content5: '',//问题6
            }, // ps详情
            rules: {
                need_teacher: [
                    {
                        required: true,
                        message: "请选择是否需要写作老师与您本人沟通内容和逻辑",
                        trigger: "blur"
                    }
                ],
                duanqiguihua: [
                    {
                        required: true,
                        message: "请填写您的短期职业规划",
                        trigger: "blur"
                    }
                ],
                ziwoyoushi5: [
                    {
                        required: true,
                        message: "请填写请填写相关实习或工作内容",
                        trigger: "blur"
                    }
                ],
                changqiguihua: [
                    {
                        required: true,
                        message: "请填写您的长期职业规划",
                        trigger: "blur"
                    }
                ],
                shenqingliyou: [
                    {
                        required: true,
                        message: "请填写您为什么想要申请该院校的该专业",
                        trigger: "blur"
                    }
                ],
            }
        };
    },
    mounted() {
        let _this = this;
        _this.id = _this.$route.query.id;
        _this.psDetailForm.apply_id = _this.$route.query.apply_id;
        _this.type = _this.$route.query.type;
        //获取可以申请方案列表
        http.get(
            "/customer-apply-question/get-my-ps?search[id]=" + _this.id
        ).then(res => {
            if (res && res.length != 0) {
                _this.plan = res[0];
                _this.tableData.push(res[0].apply[_this.type]);
            }
        });
    },
    methods: {
        //上一步
        prev() {
            this.$router.push({ path: "/writ/ps/add", query: { id: this.id } });
        },
        //保存--提交表单
        submitForm(formName) {
            let _this = this;
            let dongjiNum = 0;
            let yousiNum = 0;
            let yousiLength = _this.psDetailForm.ziwoyoushi1.length + _this.psDetailForm.ziwoyoushi2.length + _this.psDetailForm.ziwoyoushi3.length + _this.psDetailForm.ziwoyoushi4.length + _this.psDetailForm.ziwoyoushi5.length;
            _this.psDetailForm.dongji1 == '' ? dongjiNum++ : '';
            _this.psDetailForm.dongji2 == '' ? dongjiNum++ : '';
            _this.psDetailForm.dongji3 == '' ? dongjiNum++ : '';
            _this.psDetailForm.ziwoyoushi1 == '' ? yousiNum++ : '';
            _this.psDetailForm.ziwoyoushi2 == '' ? yousiNum++ : '';
            _this.psDetailForm.ziwoyoushi3 == '' ? yousiNum++ : '';
            _this.psDetailForm.ziwoyoushi4 == '' ? yousiNum++ : '';
            _this.psDetailForm.ziwoyoushi5 == '' ? yousiNum++ : '';
            if(dongjiNum>1){
                _this.$message({
                    message: "请至少选填2个选择该专业的动机！",
                    type: "error"
                });
                return false;
            }
            if(yousiNum>2){
                _this.$message({
                    message: "请至少选填3个觉得自己是一个有竞争力的申请者的方式！",
                    type: "error"
                });
                return false;
            }
            if(yousiLength>1000){
                _this.$message({
                    message: "觉得自己是一个有竞争力的申请者的方式内容超出1000字",
                    type: "error"
                });
                return false;
            }
            _this.$refs[formName].validate(valid => {
                if (valid && _this.isSubmit) {
                    _this.isSubmit = false;
                    http.post(
                        "/customer-apply-question/add",
                        _this.psDetailForm
                    ).then(res => {
                        if (res) {
                            let successMsg = _this.$message({
                                message: "提交成功！",
                                type: "success"
                            });
                            setTimeout(() => {
                                _this.isSubmit = true;
                                successMsg.close();
                                _this.$router.push("/writ/ps");
                            }, 1500);
                        }
                    });
                }else {
                    _this.$message({
                        message: "请完整填写表单！",
                        type: "error"
                    });
                    _this.isSubmit = true;
                    return false;
                }
            });
        }
    }
};
</script>
