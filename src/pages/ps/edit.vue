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
            <el-table :data="tableData" stripe style="width: 100%" class="psDetail_talbe">
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
            <el-form :model="psDetailForm" status-icon ref="psDetailForm" :rules="rules" label-width="300px"
                     label-position="top" class="psDetailForm">
              <el-form-item label="1、是否需要写作老师与您本人沟通内容和逻辑？" prop="need_teacher">
                <el-radio-group v-model="psDetailForm.need_teacher">
                  <el-radio label="204">我对内容和逻辑有自己的要求，需要语音沟通</el-radio>
                  <el-radio label="205">不需要，我没有什么想法，请专业老师自行撰写</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="2、你选择这个研究领域有什么职业规划方面的考虑？" prop="content1">
                <span class="textareaTip">还可输入{{titleMaxLength - psDetailForm.content1.length}}字</span>
                <el-input type="textarea" v-model="psDetailForm.content1"
                          placeholder="可以简述这个行业目前在中国的发展或者行业大事，越细节的事件越好；可以描述自己未来的职业理想；可以描述自己向往的公司及自己的职业规划；可以描述自己PHD方向的研究想法"
                          autocomplete="off" :maxlength="titleMaxLength"></el-input>
              </el-form-item>
              <el-form-item label="3、如果你是转专业申请的话，什么原因促使你转到这个领域来学习？" prop="content2">
                <span class="textareaTip">还可输入{{titleMaxLength - psDetailForm.content1.length}}字</span>
                <el-input type="textarea" v-model="psDetailForm.content2"
                          placeholder="以因为一次事件的激励或者从兴趣出发；事件可以是一次会议，一次讲座或者任何能激发你学习兴趣的事件；可以对于行业前景比较看好；" autocomplete="off"
                          :maxlength="titleMaxLength"></el-input>
              </el-form-item>
              <el-form-item label="4、你为什么选择这个专业而不是其他专业？" prop="content3">
                <span class="textareaTip">还可输入{{titleMaxLength - psDetailForm.content3.length}}字</span>
                <el-input type="textarea" v-model="psDetailForm.content3"
                          placeholder="选修课中有你喜欢的课程可以作为原因；官网公布的该专业特色可以作为原因；该专业在中国的就业趋势可以作为原因；你的学术研究兴趣偏向于这个方面； "
                          autocomplete="off" :maxlength="titleMaxLength"></el-input>
              </el-form-item>
              <el-form-item label="5、你本科或者上一段学习阶段，在专业课上学习成果如何？" prop="content4">
                <span class="textareaTip">还可输入{{titleMaxLength - psDetailForm.content4.length}}字</span>
                <el-input type="textarea" v-model="psDetailForm.content4"
                          placeholder="有哪些课程是与你申请的专业相关；分别从这些课程上学到哪些具体的专业知识；锻炼了哪些核心能力；对你未来有哪些帮助；有什么研究案例跟你申请的专业特别相关，请详述；"
                          autocomplete="off" :maxlength="titleMaxLength"></el-input>
              </el-form-item>
              <el-form-item label="6、你为什么觉的自己是一个有竞争力的申请者？" prop="content5">
                <span class="textareaTip">还可输入{{titleMaxLength - psDetailForm.content5.length}}字</span>
                <el-input type="textarea" v-model="psDetailForm.content5"
                          placeholder="如果学校排名不高，可以着重描述专业领域在中国的地位；学习成绩出色、专业排名等；做过很多这方面的研究，列举1-2个；这个专业所具备的专业技能掌握的如何；详细描述1-2个特别相关的实习经历"
                          autocomplete="off" :maxlength="titleMaxLength"></el-input>
              </el-form-item>
              <el-form-item label="7、你是否读过相关书籍跟申请的专业相关？" prop="content6">
                <span class="textareaTip">还可输入{{titleMaxLength - psDetailForm.content6.length}}字</span>
                <el-input type="textarea" v-model="psDetailForm.content6"
                          placeholder="最好作者是国外的，如果没有，就写国内的。用两句话阐述这些书籍主要研究的是什么问题，对于你要申请的专业有什么借鉴和学习作用。" autocomplete="off"
                          :maxlength="titleMaxLength"></el-input>
              </el-form-item>
              <el-form-item label="8、其他你特别想放在PS里面的内容。" prop="content7">
                <span class="textareaTip">还可输入{{titleMaxLength - psDetailForm.content7.length}}字</span>
                <el-input type="textarea" v-model="psDetailForm.content7" placeholder="其他你特别想放在PS里面的内容。"
                          autocomplete="off" :maxlength="titleMaxLength"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="cv_footer">
        <div class="footer_button">
          <span @click="prev"><i>上一步</i></span>
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
    import {validEmail, validPhone} from '~/plugins/validate';
    import http from "~/plugins/http";

    export default {
        layout: 'utrack',
        data() {
            return {
                plan: '',//选中的合同
                id: '',//合同id
                type: '',//选中的方案
                psLength: '',//当前ps长度
                addIndex: 1,// 选中的ps方案
                outerVisible: false,// 外层弹出框
                titleMaxLength: 100,//文本域最大字数
                tableData: [], //table
                psDetailForm: {
                    apply_id: '',//ps-id
                    need_teacher: '',
                    content1: '',
                    content2: '',
                    content3: '',
                    content4: '',
                    content5: '',
                    content6: '',
                    content7: ''
                },// ps详情
                rules: {
                    need_teacher: [
                        {required: true, message: '请选择是否需要写作老师与您本人沟通内容和逻辑', trigger: 'blur'}
                    ],
                    content1: [
                        {required: true, message: '请填写你选择这个研究领域有什么职业规划方面的考虑', trigger: 'blur'}
                    ],
                    content2: [
                        {required: true, message: '请填写你是转专业申请的话，什么原因促使你转到这个领域来学习', trigger: 'blur'}
                    ],
                    content3: [
                        {required: true, message: '请填写你为什么选择这个专业而不是其他专业', trigger: 'blur'}
                    ],
                    content4: [
                        {required: true, message: '请填写你本科或者上一段学习阶段，在专业课上学习成果如何', trigger: 'blur'}
                    ],
                    content5: [
                        {required: true, message: '请填写你为什么觉的自己是一个有竞争力的申请者', trigger: 'blur'}
                    ],
                    content6: [
                        {required: true, message: '请填写你是否读过相关书籍跟申请的专业相关', trigger: 'blur'}
                    ],
                    content7: [
                        {required: true, message: '请填写其他你特别想放在PS里面的内容', trigger: 'blur'}
                    ]
                }

            }
        },
        mounted() {
            let _this = this;
            _this.id = _this.$route.query.id;
            _this.psDetailForm.apply_id = _this.$route.query.apply_id;
            _this.type = _this.$route.query.type;
            //获取可以申请方案列表
            http.get('customer-apply-question/get-my-ps?search[id]=' + _this.id).then((res) => {
                if (res && res.length != 0) {
                    _this.plan = res[0];
                    _this.tableData.push(res[0].apply[_this.type]);
                }
            });
        },
        methods: {
            //上一步
            prev() {
                this.$router.go(-1);
            },
            //保存--提交表单
            submitForm(formName) {
                let _this = this;
                _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        http.post('customer-apply-question/add', _this.psDetailForm).then((res) => {
                            if (res) {
                                let successMsg = _this.$message({
                                    message: '提交成功！',
                                    type: 'success'
                                });
                                setTimeout(() => {
                                    successMsg.close();
                                    _this.$router.push('/ps')
                                }, 1500);
                            }

                        })
                    }
                });
            },
        }
    }
</script>
