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
                <span class="ps_tip">内容填写完毕，保存后将无法修改，请认真回答以下所有问题！如需修改只能联系自己的顾问老师协助修改</span>
                <div class="ps_plan">
                    <div class="detail_table">
                        <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%"
                            class="psDetail_talbe"
                        >
                            <el-table-column prop="university_cn" label="申请院校"></el-table-column>
                            <el-table-column prop="major_cn" label="申请专业"></el-table-column>
                            <el-table-column prop="contractTime" label="所属合同签约时间">
                                <template slot-scope="scope">
                                    <span>{{plan.sign_date}}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
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
                            <el-form-item
                                label="2、你为什么申请这个专业？（请选择2个动机并分段回答，每个动机500字以内）"
                                prop="content1"
                            >
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content1"
                                    placeholder="动机1：因为职业发展的考虑，简述自己的职业规划、行业现状及发展、向往的公司及职业状态。（必选）
动机2：因为选修课里有我非常喜欢的专业；搜索官网课程，挑选自己真正喜欢的课程，说明喜欢的原因。
动机3：因为想解决某个问题而选择这门课程；比如：因为一次行业事件，发现现在国内的XX行业存在什么样的问题，想要通过学习这门课来深入研究解决。
动机4：因为本科阶段已经对该课程产生了浓厚的兴趣；希望进行大量的研究或深入钻研某个兴趣点；也可以是因为未来继续读PHD，钻研某个领域。
动机5：因为一本书，一次活动，一次演讲，一次课程，一个故事对这个行业及相关专业产生了浓厚的兴趣。
动机6：官网公布的选择理由。"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="3、你为什么觉的自己是一个有竞争力的申请者？" prop="content2">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content2"
                                    placeholder="写法1：请与教育顾问老师联系，确认本专业有无特殊录取要求（如对某些课程或者经历有特殊要求，务必写上）。例：曼彻斯特大学的发展金融专业要求宏观经济学，微观经济学，统计学都要达到80分以上，因此，必须在PS里面详述这三门课的学习成果，研究能力；可以通过课堂作业，小组作业等举例描述。
写法2：如专业没有特殊要求，请阐述上一阶段学习中有哪些课程是与你申请的专业相关；分别从这些课程上学到哪些具体的专业知识；锻炼了哪些能力；对你未来有哪些帮助。
补充：你是否读过相关书籍跟申请的专业相关，最好作者是国外的，如果没有，就写国内的。用两句话阐述这些书籍主要研究的是什么问题，对于你要申请的专业有什么借鉴和学习作用；你是否参加过相关内容的课程，讲座，研讨等，表明自己对这方面的浓厚兴趣和研究动机；你有什么研究案例或者著作发表跟你申请的专业特别相关，请详述；充分说明自己的研究能力、学习能力。"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item
                                label="4、请陈述就读该专业后的短期（1-5年）和长期（5-10年）的职业规划"
                                prop="content8"
                            >
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content8"
                                    placeholder="请陈述就读该专业后的短期（1-5年）和长期（5-10年）的职业规划"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="5、你是否读过与申请专业相关的书籍？" prop="content3">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content3"
                                    placeholder="填写说明：
1）用两句话阐述这些书籍主要研究的是什么问题？对于你要申请的专业有什么借鉴和学习作用？
2）首选作者是外国人的书籍，如果没有，可选国内作者书籍。 "
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="6、是否有过与申请专业相关的实习或工作经历？" prop="content4">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content4"
                                    placeholder="填写说明：
1）请填写实习/工作具体起止时间、公司名称、岗位及工作内容（包括获得的成果、给你带来哪些具体知识和能力的提升）、工作表现（遇到的挫折及克服方法、收获与经验）共计4项内容；
2）请按照如下格式填写（如有多个经历，中间请空出一行作为间隔）；
     起止时间：
     公司名称：
     岗位及工作内容：
     工作表现："
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item
                                label="7、除你的学习能力及经历之外，你是否参加过譬如学生会，社团及其他社会活动？其是否对你培养团队协作能力、组织领导能力，独立性等产生重要影响？"
                                prop="content5"
                            >
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content5"
                                    placeholder="填写说明：
1）如有多个备选事件，请选取你认为最具代表性的，切勿全部罗列；
2）请写明具体起止时间和个人的具体工作内容，以及你获得的收获；
3）请按照如下格式填写：
    起止时间：
    具体工作内容：
    获得收获："
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item
                                label="8、其他你特别想放在PS里面的内容。比如特别想去某所大学的原因；或者其他内容。"
                                prop="content6"
                            >
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content6"
                                    placeholder
                                    autocomplete="off"
                                ></el-input>
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
import { validEmail, validPhone } from "~/plugins/validate";
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
            titleMaxLength: 500, //文本域最大字数
            titleMaxLength2: 1000, //文本域最大字数
            tableData: [], //table
            isSubmit: true, //是否可提交，避免重复提交
            psDetailForm: {
                apply_id: "", //ps-id
                need_teacher: "",
                content1: "",
                content2: "",
                content3: "",
                content4: "",
                content5: "",
                content6: "",
                content8: ""
                // content7: ''
            }, // ps详情
            rules: {
                content8: [
                    {
                        required: true,
                        message:
                            "请陈述就读该专业后的短期（1-5年）和长期（5-10年）的职业规划",
                        trigger: "blur"
                    }
                ],
                need_teacher: [
                    {
                        required: true,
                        message: "请选择是否需要写作老师与您本人沟通内容和逻辑",
                        trigger: "blur"
                    }
                ],
                content1: [
                    {
                        required: true,
                        message: "请填写你为什么申请这个专业",
                        trigger: "blur"
                    }
                ],
                content2: [
                    {
                        required: true,
                        message: "请填写你为什么觉的自己是一个有竞争力的申请者",
                        trigger: "blur"
                    }
                ],
                content3: [
                    {
                        required: true,
                        message: "你是否读过与申请专业相关的书籍",
                        trigger: "blur"
                    }
                ]
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
                } else if (!valid) {
                    _this.$message({
                        message: "请完整填写表单！",
                        type: "error"
                    });
                    return false;
                }
            });
        }
    }
};
</script>
