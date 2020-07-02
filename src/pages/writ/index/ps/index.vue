<template>
    <div class="cv">
        <div class="cv_step2">
            <div class="title_box">
                <div class="cv_title">
                    <p>我的PS</p>
                </div>
<!--                <info-modify :type="modifyType"></info-modify>-->
            </div>
            <p class="noData" v-if="contract.length == 0">您名下没有留学方案，故没有PS信息</p>
            <div class="contract_box" v-for="(item,index) in contract" :key="index">
                <div class="contract_title">
                    <div class="contract_info">
                        <span>合同编号：{{item.contract_no}}</span>
                        <span>合同签约时间：{{item.sign_date}}</span>
                    </div>
                    <div class="contract_add">
                        <span>该合同有{{item.used_ps_num}}份PS，您的套餐还可新增{{item.can_use_ps_num}}份PS</span>
                        <span
                            @click="add(item.id,item.can_use_ps_num)"
                            :class="{'noPs': item.can_use_ps_num == '0'}"
                        >新增PS</span>
                    </div>
                </div>
                <div class="cv_content cv2 centerTable ps_table">
                    <el-table :data="item.apply" stripe style="width: 100%">
                        <el-table-column type="index" label="序号" width="74"></el-table-column>
                        <el-table-column prop="university_cn" label="申请院校"></el-table-column>
                        <el-table-column prop="major_cn" label="申请专业"></el-table-column>
<!--                        <el-table-column prop="sign_date" label="所属合同签约时间" width="170"></el-table-column>-->
                        <el-table-column prop="createtime" label="创建时间" width="200"></el-table-column>
                        <el-table-column prop="operation" label="操作" width="300">
                            <template slot-scope="scope">
                                <el-button
                                    size="mini"
                                    @click="handleEdit(index,scope.$index)"
                                    class="table_btn"
                                >查看详情</el-button>
                              <el-button
                                size="mini"
                                @click="modify(index,scope.$index)"
                                class="table_btn"
                                v-if="!scope.row.sure_time"
                              >修改</el-button>
                              <el-button
                                size="mini"
                                @click="finalized(scope.$index, scope.row)"
                                class="table_btn"
                                v-if="!scope.row.sure_time"
                              >提交</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <!--  个人陈诉须知  -->
            <div class="add notice">
                <el-dialog title :visible.sync="outerVisible">
                    <div class="add_title">个人陈诉须知</div>
                    <div class="add_content notice_content">
                        <p>1）个人陈述是申请文书中非常重要的文件，请务必仔细阅读每个问题，并用中文或英文回答。</p>
                        <p>2）总字数不得低于1500字，不得高于3500字。字数过多或者过少，都不利于撰写文书！</p>
                        <p>3）成稿的英文PS大多数院校要求500字左右，请注意字数越少越难写！偶尔要求更多字数的，我们会根据要求撰写。</p>
                        <p>4）如果英文PS非常地道，没有任何错误，英国招生官一看就知道不是你本人写的，并没有什么实际意义。所以，我们会根据高于你本人雅思水平1分的英语水平来写作；如果您有异议，可以向入学顾问提出。</p>
                        <el-checkbox v-model="notice" class="notice_text">我已阅读 “个人陈诉须知” 内容</el-checkbox>
                        <div class="footer_button footer_button_156" :class="{'active':notice}">
                            <span @click="outerVisible = false">
                                <i>取消制作</i>
                            </span>
                            <span @click="start()">开始制作PS素材！</span>
                        </div>
                    </div>
                </el-dialog>
            </div>
            <!--  PS详情  -->
            <div class="add ps_detail add_note">
                <el-dialog title :visible.sync="psDatil" width="1377">
                    <div class="add_title">PS详情</div>
                    <div class="add_content add_con">
                        <div class="detail_table">
                            <el-table
                                :data="viewDetail"
                                stripe
                                style="width: 100%"
                                class="psDetail_talbe"
                            >
                                <el-table-column prop="university_cn" label="申请院校"></el-table-column>
                                <el-table-column prop="major_cn" label="申请专业"></el-table-column>
                                <el-table-column prop="sign_date" label="所属合同签约时间" width="178"></el-table-column>
                                <el-table-column prop="createtime" label="创建时间" width="178"></el-table-column>
                            </el-table>
                        </div>
                        <el-form
                            :model="psDetailForm"
                            status-icon
                            ref="psDetailForm"
                            label-width="300px"
                            label-position="top"
                            class="psDetailForm psDetailForm_edit"
                        >
                            <el-form-item label="1、是否需要写作老师与您本人沟通内容和逻辑？">
                                <el-radio-group v-model="psDetailForm.need_teacher">
                                    <el-radio
                                        label="204"
                                        class="need_teacher"
                                        :disabled="psDetailForm.need_teacher != '204'"
                                    >我对内容和逻辑有自己的要求，需要语音沟通</el-radio>
                                    <el-radio
                                        label="205"
                                        class="need_teacher"
                                        :disabled="psDetailForm.need_teacher != '205'"
                                    >不需要，我没有什么想法，请专业老师自行撰写</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="2、你为什么申请这个专业？">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content1"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="3、你为什么觉的自己是一个有竞争力的申请者？">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content2"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="4、请陈述就读该专业后的短期（1-5年）和长期（5-10年）的职业规划">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content8"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="5、你是否读过与申请专业相关的书籍？">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content3"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="6、是否有过与申请专业相关的实习或工作经历？">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content4"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item
                                label="7、除你的学习能力及经历之外，你是否参加过譬如学生会，社团及其他社会活动？其是否对你培养团队协作能力、组织领导能力，独立性等产生重要影响？"
                            >
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content5"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="8、其他你特别想放在PS里面的内容。比如特别想去某所大学的原因；或者其他内容。">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content6"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                        </el-form>
                        <div class="add_footer">
                            <span @click="psDatil = false">关闭</span>
                        </div>
                    </div>
                </el-dialog>
            </div>
          <!--  PS修改  -->
          <div class="add ps_detail add_note">
            <el-dialog title :visible.sync="psModify" width="1377">
              <div class="add_title">PS修改</div>
              <div class="add_content add_con">
                <div class="detail_table">
                  <el-table
                    :data="viewModify"
                    stripe
                    style="width: 100%"
                    class="psDetail_talbe"
                  >
                    <el-table-column prop="university_cn" label="申请院校"></el-table-column>
                    <el-table-column prop="major_cn" label="申请专业"></el-table-column>
                    <el-table-column prop="sign_date" label="所属合同签约时间" width="178"></el-table-column>
                    <el-table-column prop="createtime" label="创建时间" width="178"></el-table-column>
                  </el-table>
                </div>
                <el-form
                  :model="psModifyForm"
                  status-icon
                  ref="psModifyForm"
                  :rules="rules"
                  label-width="300px"
                  label-position="top"
                  class="psDetailForm psDetailForm_edit"
                >
                  <el-form-item label="1、是否需要写作老师与您本人沟通内容和逻辑？" prop="need_teacher">
                    <el-radio-group v-model="psModifyForm.need_teacher">
                      <el-radio
                        label="204"
                        class="need_teacher"
                      >我对内容和逻辑有自己的要求，需要语音沟通</el-radio>
                      <el-radio
                        label="205"
                        class="need_teacher"
                      >不需要，我没有什么想法，请专业老师自行撰写</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="2、你为什么申请这个专业？" prop="content1">
                    <el-input
                      type="textarea"
                      v-model="psModifyForm.content1"
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
                      v-model="psModifyForm.content2"
                      placeholder="写法1：请与教育顾问老师联系，确认本专业有无特殊录取要求（如对某些课程或者经历有特殊要求，务必写上）。例：曼彻斯特大学的发展金融专业要求宏观经济学，微观经济学，统计学都要达到80分以上，因此，必须在PS里面详述这三门课的学习成果，研究能力；可以通过课堂作业，小组作业等举例描述。
写法2：如专业没有特殊要求，请阐述上一阶段学习中有哪些课程是与你申请的专业相关；分别从这些课程上学到哪些具体的专业知识；锻炼了哪些能力；对你未来有哪些帮助。
补充：你是否读过相关书籍跟申请的专业相关，最好作者是国外的，如果没有，就写国内的。用两句话阐述这些书籍主要研究的是什么问题，对于你要申请的专业有什么借鉴和学习作用；你是否参加过相关内容的课程，讲座，研讨等，表明自己对这方面的浓厚兴趣和研究动机；你有什么研究案例或者著作发表跟你申请的专业特别相关，请详述；充分说明自己的研究能力、学习能力。"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="4、请陈述就读该专业后的短期（1-5年）和长期（5-10年）的职业规划" prop="content8">
                    <el-input
                      type="textarea"
                      v-model="psModifyForm.content8"
                      placeholder="请陈述就读该专业后的短期（1-5年）和长期（5-10年）的职业规划"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="5、你是否读过与申请专业相关的书籍？" prop="content3">
                    <el-input
                      type="textarea"
                      v-model="psModifyForm.content3"
                      placeholder="填写说明：
1）用两句话阐述这些书籍主要研究的是什么问题？对于你要申请的专业有什么借鉴和学习作用？
2）首选作者是外国人的书籍，如果没有，可选国内作者书籍。 "
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="6、是否有过与申请专业相关的实习或工作经历？" prop="content4">
                    <el-input
                      type="textarea"
                      v-model="psModifyForm.content4"
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
                      v-model="psModifyForm.content5"
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
                  <el-form-item label="8、其他你特别想放在PS里面的内容。比如特别想去某所大学的原因；或者其他内容。"  prop="content6">
                    <el-input
                      type="textarea"
                      v-model="psModifyForm.content6"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div class="add_footer">
                  <span @click="psModify = false">取消</span>
                  <span @click="edit('psModifyForm')">保存</span>
                </div>
              </div>
            </el-dialog>
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
import InfoModify from "~/components/infoModify";
import {deepClone, emptyObj} from '~/plugins/utils';
export default {
    layout: "refactor",
    components: { InfoModify },
    data() {
        return {
            modifyType: "ps", //修改类型
            contract: [], //ps合同
            AID: "1",
            outerVisible: false, // 外层
            innerVisible: false, // 内层
            notice: "", // 个人陈诉须知
            psDatil: false, // ps查看详情
            psModify: false, // ps修改详情
            tableData: [], //table
            viewDetail: [], //查看当前ps
            viewModify: [], //查看当前ps
            psDetailForm: {}, // ps详情
            psModifyForm: {}, // ps修改
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
            },
            isEdit: true
        };
    },
    mounted() {
        let _this = this;
        //ps列表
        _this.getPs();
    },
    methods: {
        //获取ps列表
        getPs(){
            http.get("/customer-apply-question/get-my-ps1").then(res => {
                this.contract = res;
            });
        },
        //新增PS
        add(id, num) {
            if (num > 0) {
                this.$router.push({ path: "/writ/ps/add", query: { id: id } });
            } else {
                this.$message({
                    message:
                        "该合同下的套餐已不能新增PS，如有疑问，请联系您的顾问老师！",
                    type: "warning"
                });
            }
        },
        //开始制作PS素材
        start() {
            if (!this.notice) {
                this.$message({
                    message: "请先勾选“我已阅读 “个人陈诉须知” 内容”",
                    type: "warning"
                });
            } else {
                this.$router.push("/writ/ps/add");
            }
        },
        //查看ps详情
        handleEdit(contract, index) {
            let _this = this;
            _this.viewDetail = [];
            _this.viewDetail.push(deepClone(_this.contract[contract].apply[index]));
            _this.psDetailForm = this.viewDetail[0];
            _this.psDetailForm.need_teacher += "";
            _this.psDatil = true;
        },
        //提交-ps
        submit(contract,index){
            console.log(contract,index,'提交内容')
        },
        //修改
        modify(contract,index){
            let _this = this;
            _this.viewModify = [];
            _this.viewModify.push(deepClone(_this.contract[contract].apply[index]));
            _this.psModifyForm = this.viewModify[0];
            _this.psModifyForm.need_teacher += "";
            _this.psModify = true;
        },
        //编辑推荐信
        edit(formName){
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid&&_this.isEdit) {
                    _this.isEdit = false;
                    http.post(
                        "/customer-apply-question/edit",
                        _this.psModifyForm
                    ).then(res => {
                        let successMsg = _this.$message({
                            message: "提交成功！",
                            type: "success"
                        });
                        setTimeout(() => {
                            successMsg.close();
                            _this.getPs();
                            _this.psModify = false;
                            _this.isEdit = true;
                            _this.$refs[formName].resetFields();
                        }, 1000);
                    }).catch(error=>{
                        _this.isEdit = true;
                    })
                } else {
                    _this.$message({
                        message: "请完整填写表单！",
                        type: "error"
                    });
                    _this.isEdit = true;
                    return false;
                }
            });
        },
        //定稿
        finalized(index,data){
            let _this = this;
            this.$confirm('提交以后将不能修改，是否继续提交', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                http.post("/customer-apply-question/sure",{id:data.id}).then(res => {
                    if (res) {
                        let successMsg = _this.$message({
                            message: "提交成功！",
                            type: "success"
                        });
                        _this.getPs();
                    }
                });
            })

        }
    }
};
</script>
