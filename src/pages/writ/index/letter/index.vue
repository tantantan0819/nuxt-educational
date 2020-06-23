<template>
    <div class="cv con">
        <div class="cv_step2">
            <div class="title_box">
                <div class="cv_title">
                    <p>我的推荐信</p>
                    <span>目前您有{{letterLength}}份推荐信，您还可新增{{count}}份推荐信</span>
                </div>
                <div class="modify_wrap">
<!--                    <info-modify :type="modifyType"></info-modify>-->
                    <span class="cv_button" @click="addLetter" :class="{'gray':count == '0'}">新增推荐信</span>
                </div>
            </div>
            <div class="refactor_table auto_table">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column type="index" label="序号" width="70"></el-table-column>
                    <el-table-column prop="name" label="推荐人" width="100"></el-table-column>
                    <el-table-column prop="sex" label="性别" width="70" :formatter="sexFormat"></el-table-column>
                    <el-table-column prop="job" label="职位头衔" width="110"></el-table-column>
                    <el-table-column prop="unit_name" label="单位名称" width="110"></el-table-column>
                    <el-table-column prop="phone" label="联系电话" width="120"></el-table-column>
                    <el-table-column
                        prop="relation"
                        label="与您的关系"
                        width="100"
                        :formatter="relashipFormat"
                    ></el-table-column>
                    <el-table-column prop="meet_year" label="认识年份" width="100"></el-table-column>
                    <el-table-column prop="email" label="单位邮箱" width="180"></el-table-column>
                    <el-table-column prop="createtime" label="创建时间"></el-table-column>
                    <el-table-column prop="operation" label="操作" width="260">
                        <template slot-scope="scope">
                          <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)"
                            class="table_btn"
                          >查看详情</el-button>
                          <el-button
                            size="mini"
                            @click="modify(scope.$index, scope.row)"
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
            <!--  推荐信须知  -->
            <div class="add notice add_note">
                <el-dialog title :visible.sync="outerVisible">
                    <div class="add_title">推荐信须知</div>
                    <div class="add_content notice_content add_con">
                        <p>1）推荐信必须遵循一定的模板和格式；</p>
                        <p>2）推荐信的长度300-500字为宜；</p>
                        <el-checkbox v-model="notice" class="notice_text">我已阅读 “推荐信须知” 内容</el-checkbox>
                        <div class="add_footer letter_footer">
                            <span @click="outerVisible=false">取消制作</span>
                            <span
                                @click="start()"
                                :class="{'letter_active':notice,'gray':!notice}"
                            >开始制作推荐信素材！</span>
                        </div>
                    </div>
                </el-dialog>
            </div>
            <!--  推荐信详情  -->
            <div class="add ps_detail add_note">
                <el-dialog title :visible.sync="psDetail" width="1377">
                    <div class="add_title">推荐信详情</div>
                    <div class="add_content add_con ps_con">
                        <div class="detail_table">
                            <el-table
                                :data="viewDetail"
                                stripe
                                style="width: 100%"
                                class="psDetail_talbe"
                            >
                                <el-table-column prop="name" label="推荐人" width="150"></el-table-column>
                                <el-table-column
                                    prop="sex"
                                    label="性别"
                                    width="98"
                                    :formatter="sexFormat"
                                ></el-table-column>
                                <el-table-column prop="job" label="职位头衔"></el-table-column>
                                <el-table-column prop="unit_name" label="单位名称"></el-table-column>
                                <el-table-column prop="phone" label="联系电话"></el-table-column>
                                <el-table-column
                                    prop="relation"
                                    label="与你的关系"
                                    width="120"
                                    :formatter="relashipFormat"
                                ></el-table-column>
                                <el-table-column prop="meet_year" label="认识年份"></el-table-column>
                                <el-table-column prop="email" label="单位邮箱" width="180"></el-table-column>
                                <el-table-column prop="createtime" label="创建时间" width="180"></el-table-column>
                            </el-table>
                        </div>
                        <el-form
                            :model="psDetailForm"
                            status-icon
                            ref="psDetailForm"
                            label-width="300px"
                            label-position="top"
                            class="psDetailForm"
                        >
                            <el-form-item label="1、 推荐人在何时何地开始与您相互认识？？">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content1"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="2、推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何？">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content2"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="3、推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content3"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="4、 推荐人在和您接触过程中对您的整体印象与评价？" prop="content4">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content4"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="5、 其他你特别想放在推荐信里面的内容">
                                <el-input
                                    type="textarea"
                                    v-model="psDetailForm.content5"
                                    readonly
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                        </el-form>
                        <div class="add_footer">
                            <span @click="close">关闭</span>
                        </div>
                    </div>
                </el-dialog>
            </div>
          <!--  推荐信修改  -->
          <div class="add ps_detail add_note">
            <el-dialog title :visible.sync="Modify" width="1377">
              <div class="add_title">推荐信修改</div>
              <div class="add_content add_con ps_con">
                <div class="detail_table">
                  <el-table
                    :data="viewModify"
                    stripe
                    style="width: 100%"
                    class="psDetail_talbe"
                  >
                    <el-table-column prop="name" label="推荐人" width="150"></el-table-column>
                    <el-table-column
                      prop="sex"
                      label="性别"
                      width="98"
                      :formatter="sexFormat"
                    ></el-table-column>
                    <el-table-column prop="job" label="职位头衔"></el-table-column>
                    <el-table-column prop="unit_name" label="单位名称"></el-table-column>
                    <el-table-column prop="phone" label="联系电话"></el-table-column>
                    <el-table-column
                      prop="relation"
                      label="与你的关系"
                      width="120"
                      :formatter="relashipFormat"
                    ></el-table-column>
                    <el-table-column prop="meet_year" label="认识年份"></el-table-column>
                    <el-table-column prop="email" label="单位邮箱" width="180"></el-table-column>
                    <el-table-column prop="createtime" label="创建时间" width="180"></el-table-column>
                  </el-table>
                </div>
                <el-form
                  :model="ModifyForm"
                  status-icon
                  ref="ModifyForm"
                  :rules="rules"
                  label-width="300px"
                  label-position="top"
                  class="psDetailForm"
                >
                  <el-form-item label="1、 推荐人在何时何地开始与您相互认识？" prop="content1">
                    <el-input
                      type="textarea"
                      v-model="ModifyForm.content1"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="2、推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何？" prop="content2">
                    <el-input
                      type="textarea"
                      v-model="ModifyForm.content2"
                      readonly
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="3、推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价" prop="content3">
                    <el-input
                      type="textarea"
                      v-model="ModifyForm.content3"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="4、 推荐人在和您接触过程中对您的整体印象与评价？" prop="content4">
                    <el-input
                      type="textarea"
                      v-model="ModifyForm.content4"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="5、 其他你特别想放在推荐信里面的内容" prop="content5">
                    <el-input
                      type="textarea"
                      v-model="ModifyForm.content5"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div class="add_footer">
                  <span @click="Modify=false">取消</span>
                  <span @click="edit('ModifyForm')">保存</span>
                </div>
              </div>
            </el-dialog>
          </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "~/assets/css/cv.scss";
</style>
<script>
import http from "~/plugins/http";
import {deepClone, emptyObj} from '~/plugins/utils';
import InfoModify from "~/components/infoModify";
export default {
    layout: "refactor",
    components: { InfoModify },
    data() {
        return {
            modifyType: "letter", //修改类型
            outerVisible: false, // 新增
            notice: "", // 个人陈诉须知
            psDetail: false, // ps查看详情
            Modify: false, // ps查看详情
            major: ["专业xxx", "专业yyy"], // 专业
            record: ["初中", "高中"], // 学历
            tableData: [], //table
            relaship: [], //关系下拉
            sexList: [], //性别下拉
            psDetailForm: {}, // ps详情内容
            ModifyForm: {}, // 修改详情内容
            viewDetail: [], // 当前详情
            viewModify: [], // 当前修改
            letterLength: "", //当前推荐信条数
            allLetter: 2,//推荐信限制数量
            rules: {
                meet_year: [
                    {
                        required: true,
                        message: "请选择与推荐人认识的年份",
                        trigger: "blur"
                    }
                ],
                name: [
                    {
                        required: true,
                        message: "请输入推荐人姓名",
                        trigger: "blur"
                    }
                ],
                sex: [
                    {
                        required: true,
                        message: "请选择推荐人性别",
                        trigger: "blur"
                    }
                ],
                job: [
                    {
                        required: true,
                        message: "请输入推荐人职位头衔",
                        trigger: "blur"
                    }
                ],
                unit_address: [
                    {
                        required: true,
                        message: "请输入推荐人单位地址",
                        trigger: "blur"
                    }
                ],
                unit_name: [
                    {
                        required: true,
                        message: "请输入推荐人单位名称",
                        trigger: "blur"
                    }
                ],
                phone: [
                    { required: true,  trigger: "blur" }
                ],
                email: [
                    { required: true,  trigger: "blur" }
                ],
                relation: [
                    {
                        required: true,
                        message: "请选择推荐人与您的关系",
                        trigger: "blur"
                    }
                ],
                content1: [
                    {
                        required: true,
                        message: "请输入推荐人在何时何地开始与您相互认识",
                        trigger: "blur"
                    }
                ],
                content2: [
                    {
                        required: true,
                        message:
                            "请输入推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何",
                        trigger: "blur"
                    }
                ],
                content3: [
                    {
                        required: true,
                        message:
                            "请输入推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价",
                        trigger: "blur"
                    }
                ],
                content4: [
                    {
                        required: true,
                        message:
                            "请输入推荐人在和您接触过程中对您的整体印象与评价",
                        trigger: "blur"
                    }
                ],
                content5: [
                    {
                        required: true,
                        message: "请输入其他你特别想放在推荐信里面的内容",
                        trigger: "blur"
                    }
                ]
            },
            isEdit: true
        };
    },
    mounted() {
        let _this = this;
        //获取推荐信列表
        _this.getLetter();
        //获取关系、性别下拉
        http.get("/code-val/group-key-list").then(res => {
            _this.sexList = res.SEX;
            _this.relaship = res.MY_RELATIONSHIP;
        });
    },
    computed: {
        //剩余推荐信份数
        count() {
            let residue = this.allLetter - this.letterLength;
            if (residue > 0) {
                return residue;
            }
            return 0;
        }
    },
    methods: {
        //获取推荐信列表
        getLetter(){
            let _this = this;
            http.get("/customer-recommendation/list").then(res => {
                if (res) {
                    _this.tableData = res;
                    _this.letterLength = res.length;
                    _this.$store.commit("SET_LEETER", _this.letterLength);
                }
            });
        },
        //过滤性别
        sexFormat(row, column) {
            let sex = "未知";
            this.sexList.map((item, index) => {
                if (item.id == Number(row.sex)) {
                    sex = item.cvalue_cn;
                }
            });
            return sex;
        },
        //过滤关系
        relashipFormat(row, column) {
            let relaship = "";
            this.relaship.map((item, index) => {
                if (item.id == Number(row.relation)) {
                    relaship = item.cvalue_cn;
                }
            });
            return relaship;
        },
        //新增推荐信
        addLetter() {
            if (this.count != "0") {
                this.outerVisible = true;
            } else {
                this.$message({
                    message:
                        "您推荐信份数已用完，如有疑问，请联系您的顾问老师！",
                    type: "warning"
                });
            }
        },
        //取消制作
        cancel() {
            this.outerVisible = false;
        },
        //开始制作PS素材
        start() {
            if (!this.notice) {
                this.$message({
                    message: "请先勾选“我已阅读 “推荐信须知” 内容”",
                    type: "warning"
                });
            } else {
                this.$router.push({
                    path: "/writ/letter/edit",
                    query: { num: this.allLetter }
                });
            }
        },
        //查看详情
        handleEdit(index,data) {
            let _this = this;
            _this.viewDetail = [];
            _this.viewDetail.push(deepClone(_this.tableData[index]));
            _this.psDetailForm = _this.viewDetail[0];
            _this.psDetail = true;
        },
        // 关闭查看详情
        close() {
            this.psDetail = false;
        },
        //修改
        modify(index,data){
            let _this = this;
            _this.viewModify = [];
            _this.viewModify.push(deepClone(data));
            _this.ModifyForm = deepClone(data);
            _this.Modify = true;
        },
        //编辑推荐信
        edit(formName){
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid&&_this.isEdit) {
                    _this.isEdit = false;
                    http.post(
                        "/customer-recommendation/edit",
                        _this.ModifyForm
                    ).then(res => {
                        let successMsg = _this.$message({
                            message: "提交成功！",
                            type: "success"
                        });
                        setTimeout(() => {
                            successMsg.close();
                            _this.getLetter();
                            _this.Modify = false;
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
            http.post("/customer-recommendation/sure",{id:data.id}).then(res => {
                if (res) {
                    let successMsg = _this.$message({
                        message: "提交成功！",
                        type: "success"
                    });
                    _this.getLetter();
                }
            });
        }
    }
};
</script>
