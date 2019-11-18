<template>
  <div class="cv_step3">
    <div class="title_box">
      <div class="cv_title">
        <p>校园活动</p>
        <span>请认真填写您空缺的资料，保存后不能修改，如需修改请联系您的顾问老师进行修改</span>
      </div>
      <span class="cv_button" @click="outerVisible=true">新增校园活动</span>
    </div>
    <div class="cv_content cv2 centerTable step3Table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="74"></el-table-column>
        <el-table-column prop="start_time" label="入学时间" width="150"></el-table-column>
        <el-table-column prop="end_time" label="毕业时间" width="150"></el-table-column>
        <el-table-column prop="descript" label="校园活动"></el-table-column>
      </el-table>
    </div>
    <div class="cv_footer">
      <div class="footer_button">
        <span @click="prev"><i>上一步</i></span>
        <span @click="next">下一步</span>
      </div>
      <span class="next">请在退出前点击“下一步”按钮，您当前填写的信息可以被保存。</span>
    </div>
    <!--  新增校园活动  -->
    <div class="add">
      <el-dialog title="" :visible.sync="outerVisible">
        <div class="add_title">添加校园活动</div>
        <div class="add_content">
          <el-form :model="cvForm5" status-icon :rules="rules" ref="cvForm5" label-width="300px"
                   label-position="top">
            <el-form-item label="起始时间" prop="start_time">
              <el-date-picker type="date" placeholder="请选择您的校园活动起始时间" v-model="cvForm5.start_time"
                              class="widthAll"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" prop="end_time">
              <el-date-picker type="date" placeholder="请选择您的校园活动结束时间" v-model="cvForm5.end_time"
                              class="widthAll"></el-date-picker>
            </el-form-item>
            <el-form-item label="活动描述" prop="descript" class="cvTextareaBox">
              <el-input type="textarea" v-model="cvForm5.descript" placeholder="整体框架遵循【做了什么】【结果是什么】【有什么价值】的逻辑。"
                        class="cvTextarea cvTextarea2" autocomplete="off" :maxlength="titleMaxLength" ></el-input>
              <span class="textareaTip">还可输入{{titleMaxLength - cvForm5.descript.length}}字</span>
            </el-form-item>
          </el-form>
          <div class="footer_button">
            <span @click="cancel('cvForm5')"><i>取消</i></span>
            <span @click="submitForm('cvForm5')">保存</span>
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
    import {dateFormat} from '~/plugins/utils';

    export default {
        layout: 'utrack',
        data() {
            return {
                outerVisible: false,//外层
                tableData: [], //table
                titleMaxLength: 100,//文本域最大字数
                cvForm5: {
                    start_time: '',
                    end_time: '',
                    descript: '',
                },//添加教育背景
                rules: {
                    start_time: [
                        {required: true, message: '请选择您的校园活动起始时间', trigger: 'blur'}
                    ],
                    end_time: [
                        {required: true, message: '请选择您的校园活动结束时间', trigger: 'blur'}
                    ],
                    descript: [
                        {required: true, message: '请输入您的校园活动描述', trigger: 'blur'}
                    ],

                }
            }
        },
        mounted() {
            //获取校园活动
            this.getSchool();
        },
        methods: {
            //获取校园活动
            getSchool() {
                http.get('/customer-school-exp/list').then((res) => {
                    this.tableData = res;
                })
            },
            //上一步
            prev() {
                this.$router.push('/cv/step4')
            },
            //下一步
            next() {
                this.$router.push('/cv/step6')
            },
            //取消
            cancel(formName) {
                this.$refs[formName].resetFields();
                this.outerVisible = false;
            },
            //保存--提交表单
            submitForm(formName) {
                let _this = this;
                _this.cvForm5.end_time = dateFormat(_this.cvForm5.end_time);
                _this.cvForm5.start_time = dateFormat(_this.cvForm5.start_time);
                _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        http.post('/customer-school-exp/add', _this.cvForm5).then((res) => {
                            let successMsg = _this.$message({
                                message: '提交成功！',
                                type: 'success'
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.getSchool();
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
