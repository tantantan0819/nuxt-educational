<template>
  <div class="cv_step3">
    <div class="title_box">
      <div class="cv_title">
        <p>学术经历</p>
        <span>请认真填写您空缺的资料，保存后不能修改，如需修改请联系您的顾问老师进行修改</span>
      </div>
       <div class="modify_wrap">
<!--        <info-modify :type="modifyType"></info-modify>-->
        <span class="cv_button" @click="outerVisible=true">新增学术经历</span>
      </div>
    </div>
    <div class="cv_content centerTable step3Table cv2">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="74"></el-table-column>
        <el-table-column prop="start_time" label="开始时间" width="150"></el-table-column>
        <el-table-column prop="end_time" label="结束时间" width="150"></el-table-column>
        <el-table-column prop="program" label="项目名称" width="150"></el-table-column>
        <el-table-column prop="job" label="职位" width="150"></el-table-column>
        <el-table-column prop="exp" label="经历描述"></el-table-column>
      </el-table>
    </div>
    <div class="cv_footer">
      <div class="footer_button">
        <span @click="prev"><i>上一步</i></span>
        <span @click="next">下一步</span>
      </div>
      <span class="next">请在退出前点击“下一步”按钮，您当前填写的信息可以被保存。</span>
    </div>
    <!--  新增学术经历  -->
    <div class="add add_note">
      <el-dialog title="" :visible.sync="outerVisible">
        <div class="add_title">添加学术经历</div>
        <div class="add_content">
          <el-form :model="cvForm3" status-icon :rules="rules" ref="cvForm3" label-width="300px"
                   label-position="top">
            <el-form-item label="开始时间" prop="start_time">
              <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="请选择您的学术经历起始时间" v-model="cvForm3.start_time"
                              class="widthAll"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" prop="end_time">
              <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="请选择您的学术经历结束时间" v-model="cvForm3.end_time"
                              class="widthAll"></el-date-picker>
            </el-form-item>
            <el-form-item label="项目名称" prop="program">
              <el-input
                v-model="cvForm3.program"
                placeholder="请输入您的项目名称"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="职位" prop="job">
              <el-input
                v-model="cvForm3.job"
                placeholder="请输入您的职位"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="经历描述" prop="exp" class="cvTextareaBox">
              <el-input type="textarea" v-model="cvForm3.exp"  maxlength="100"
                        show-word-limit
                        placeholder="[在这个部分描述做过的项目，可以是独立的毕业设计/论文，或者小组的项目、作业，参加的宣讲，学术会议或者讲座等等][写出你负责的具体内容，调研、考察、访谈、分析、感受等，以及最终的项目成果，受到导师好评、获奖等][如：进行XX行业研究，负责调研XX的商业模式、市场空间、XXXX等影响因素， 筛选出XXXX通过XXX数据库、问卷调研、XX实验，分析其核心竞争力和持续盈利能力， 撰写3000+字调研报告，并提出XXX建议；此项目锻炼了我的XXXXX能力]整体框架遵循【做了什么】【结果是什么】【有什么价值】的逻辑。"
                        class="cvTextarea" autocomplete="off" ></el-input>
            </el-form-item>
          </el-form>
          <div class="footer_button">
            <span @click="cancel('cvForm3')"><i>取消</i></span>
            <span @click="submitForm('cvForm3')">保存</span>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/cv.scss";
</style>
<script>
    import http from "~/plugins/http";
    import InfoModify from "~/components/infoModify";
    export default {
        transition: '',
        layout: 'refactor',
        components: { InfoModify },
        data() {
            return {
                modifyType: 'cv',//修改类型
                outerVisible: false,//外层
                tableData: [], //table
                titleMaxLength: 500,//文本域最大字数
                cvForm3: {
                    start_time: '',
                    end_time: '',
                    exp: '',
                    program:'',
                    job: ''
                },//添加教育背景
                rules: {
                    start_time: [
                        {required: true, message: '请选择您的学术经历起始时间', trigger: 'blur'}
                    ],
                    end_time: [
                        {required: true, message: '请选择您的学术经历结束时间', trigger: 'blur'}
                    ],
                    exp: [
                        {required: true, message: '请输入您的学术经历描述', trigger: 'blur'}
                    ],
                    program: [
                        {required: true, message: '请输入您的项目名称', trigger: 'blur'}
                    ],
                    job: [
                        {required: true, message: '请输入您的职位', trigger: 'blur'}
                    ],

                }
            }
        },
        mounted() {
            //获取学术经历
            this.getAcademic();
        },
        methods: {
            //获取学术经历
            getAcademic() {
                http.get('/customer-academic-career/list').then((res) => {
                    this.tableData = res;
                })
            },
            //上一步
            prev() {
                this.$router.push('/writ/cv/step2')
            },
            //下一步
            next() {
                this.$router.push('/writ/cv/step4')
            },
            //取消
            cancel(formName) {
                this.$refs[formName].resetFields();
                this.outerVisible = false;
            },
            //保存--提交表单
            submitForm(formName) {
                let _this = this;
                _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        http.post('/customer-academic-career/add', _this.cvForm3).then((res) => {
                            let successMsg = _this.$message({
                                message: '提交成功！',
                                type: 'success'
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.getAcademic();
                                _this.$refs[formName].resetFields();
                                _this.outerVisible = false;
                            }, 1000);
                        })
                    }
                });
            }
        }
    }
</script>
