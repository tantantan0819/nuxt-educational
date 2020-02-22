<template>
  <div class="cv ps">
    <div class="cv_step2">
      <div class="title_box">
        <div class="cv_title">
          <p>新增推荐信</p>
          <span>目前您有{{letterLength}}份推荐信，您还可新增{{allLetter-letterLength}}份推荐信</span>
        </div>
      </div>
      <div class="cv_content ps_add ps_detail add">
        <span class="ps_tip">内容填写完毕，保存后将无法修改，请认真回答以下所有问题！如需修改只能联系自己的顾问老师协助修改</span>
        <div class="ps_plan">
          <div class="add_content add_form letter_form">
            <el-form :model="letterForm" :rules="rules" status-icon ref="letterForm" label-width="300px"
                     label-position="top" class="letterForm">
              <div class="letter_info">
                <el-form-item label="推荐人：" prop="name" label-width="300">
                  <el-input v-model="letterForm.name" placeholder="请输入推荐人的姓名" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别：" prop="sex" placeholder="请选择推荐人的性别">
                  <el-select v-model="letterForm.sex" class="widthAll" placeholder="请选择推荐人的性别">
                    <!--crm规则：0:未知 男：4 女：5-->
                    <el-option v-for="(item,index) in sexList" :key="index" :label="item.cvalue_cn"
                               :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="职位头衔：" prop="job">
                  <el-input v-model="letterForm.job" placeholder="请输入推荐人的职位头衔" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="单位地址：" prop="unit_address">
                  <el-input v-model="letterForm.unit_address" placeholder="请输入推荐人的单位地址"
                            autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="单位名称：" prop="unit_name">
                  <el-input v-model="letterForm.unit_name" placeholder="请输入推荐人的单位名称"
                            autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话：" prop="phone">
                  <el-input v-model="letterForm.phone" placeholder="请输入推荐人的联系电话" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="与您的关系：" prop="relation">
                  <el-select v-model="letterForm.relation" class="widthAll" placeholder="请选择推荐人与您的关系">
                    <el-option v-for="(item,index) in relaship" :key=index :label="item.cvalue_cn"
                               :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                  <el-form-item label="单位邮箱" prop="email">
                  <el-input v-model="letterForm.email" placeholder="请输入推荐人的单位邮箱" autocomplete="off"></el-input>
                </el-form-item>
              </div>
              <div class="letter_content psDetailForm cvTextareaBox">
                <el-form-item label="1、 推荐人在何时何地开始与您相互认识？" prop="content1">
                  <el-input type="textarea" v-model="letterForm.content1" placeholder="例：课堂上，新生入学，面试，某个活动等"
                            autocomplete="off" :maxlength="titleMaxLength50"></el-input>
                  <span class="textareaTip">还可输入{{titleMaxLength50 - letterForm.content1.length}}字</span>
                </el-form-item>
                <el-form-item label="2、推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何？" prop="content2">
                  <el-input type="textarea" v-model="letterForm.content2" placeholder="例：学年+学期+课程名称+课程分数等"
                            autocomplete="off" :maxlength="titleMaxLength100"></el-input>
                  <span class="textareaTip">还可输入{{titleMaxLength100 - letterForm.content2.length}}字</span>
                </el-form-item>
                <el-form-item label="3、推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价" prop="content3">
                  <el-input type="textarea" v-model="letterForm.content3" placeholder="例：什么项目+什么事情引起了老师的注意+老师如何评价"
                            autocomplete="off" :maxlength="titleMaxLength200"></el-input>
                  <span class="textareaTip">还可输入{{titleMaxLength200 - letterForm.content3.length}}字</span>
                </el-form-item>
                <el-form-item label="4、 推荐人在和您接触过程中对您的整体印象与评价？" prop="content4">
                  <el-input type="textarea" v-model="letterForm.content4" placeholder="例：课堂或表现、学习或工作能力、主动性、独立性、创新性、责任感等，请以评价+具体事例结合的方式阐述："
                            autocomplete="off" :maxlength="titleMaxLength50"></el-input>
                  <span class="textareaTip">还可输入{{titleMaxLength50 - letterForm.content4.length}}字</span>
                </el-form-item>
                <el-form-item label="5、 其他你特别想放在推荐信里面的内容" prop="content5">
                  <el-input type="textarea" v-model="letterForm.content5" placeholder="例：课堂或表现、学习或工作能力、主动性、独立性、创新性、责任感等，请以评价+具体事例结合的方式阐述："
                            autocomplete="off" :maxlength="titleMaxLength100"></el-input>
                  <span class="textareaTip">还可输入{{titleMaxLength100 - letterForm.content5.length}}字</span>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
      </div>
      <div class="cv_footer">
        <div class="footer_button">
          <span @click="cancel('letterForm')"><i>取消</i></span>
          <span @click="submitForm('letterForm')">完成</span>
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
    import {getStore, setStore} from '~/plugins/utils';
    import {validEmail, validPhone} from '~/plugins/validate';

    export default {
        layout: 'utrack',
        data() {
            // var validPhone = (rule, value, callback) => {
            //     if (!value) {
            //         callback(new Error('请输入联系人电话'))
            //     } else if (!/^1[345789]\d{9}$/.test(value)) {
            //         callback(new Error('请输入正确的联系人电话'))
            //     } else {
            //         callback()
            //     }
            // };
            return {
                allLetter: 0,//推荐信限制数量
                letterLength: '',//当前推荐信条数
                titleMaxLength50: 50,//文本域最大字数
                titleMaxLength100: 100,//文本域最大字数
                titleMaxLength200: 200,//文本域最大字数
                relaship: [], //关系下拉
                sexList: [],//性别下拉
                letterForm: {
                    name: '',
                    sex: '',//男：4，女：5
                    job: '',
                    unit_address: '',
                    unit_name: '',
                    phone: '',
                    email:'',
                    relation: '',
                    content1: '',
                    content2: '',
                    content3: '',
                    content4: '',
                    content5: '',
                    createtime: ''
                },// ps详情
                rules: {
                    name: [
                        {required: true, message: '请输入推荐人姓名', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择推荐人性别', trigger: 'blur'}
                    ],
                    job: [
                        {required: true, message: '请输入推荐人职位头衔', trigger: 'blur'}
                    ],
                    unit_address: [
                        {required: true, message: '请输入推荐人单位地址', trigger: 'blur'}
                    ],
                    unit_name: [
                        {required: true, message: '请输入推荐人单位名称', trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, validator: validPhone, trigger: 'blur'}
                    ],
                    email: [
                        {required: true, validator: validEmail, trigger: 'blur'}
                    ],
                    relation: [
                        {required: true, message: '请选择推荐人与您的关系', trigger: 'blur'}
                    ],
                    content1: [
                        {required: true, message: '请输入推荐人在何时何地开始与您相互认识', trigger: 'blur'}
                    ],
                    content2: [
                        {required: true, message: '请输入推荐人如果是您的授课老师，具体教授您哪些课程，分别的课程成绩如何', trigger: 'blur'}
                    ],
                    content3: [
                        {required: true, message: '请输入推荐人是否对您有进行跟申请相关的项目或论文指导，如有，请简述在此过程中的印象与评价', trigger: 'blur'}
                    ],
                    content4: [
                        {required: true, message: '请输入推荐人在和您接触过程中对您的整体印象与评价', trigger: 'blur'}
                    ],
                    content5: [
                        {required: true, message: '请输入其他你特别想放在推荐信里面的内容', trigger: 'blur'}
                    ],
                }
            }
        },
        mounted() {
            let _this = this;
            _this.allLetter = _this.$route.query.num;
            //获取关系、性别下拉
            let dictionary = getStore('dictionary');
            if (dictionary) {
                _this.sexList = dictionary.SEX;
                _this.relaship = dictionary.MY_RELATIONSHIP;
            } else {
                http.get('/code-val/group-key-list').then((res) => {
                    _this.sexList = res.SEX;
                    _this.relaship = res.MY_RELATIONSHIP;
                    setStore('dictionary', res)
                })
            }
            //推荐信条数
            _this.letterLength = _this.$store.state.letter;
        },
        methods: {
            //取消
            cancel(formName) {
                this.$refs[formName].resetFields();
                this.$router.go(-1);
            },
            //保存--提交表单
            submitForm(formName) {
                let _this = this;
                _this.letterForm.phone = _this.letterForm.phone + '';
                _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        _this.letterForm.sex += '';
                        http.post('/customer-recommendation/add', _this.letterForm).then((res) => {
                            let successMsg = _this.$message({
                                message: '提交成功！',
                                type: 'success'
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$refs[formName].resetFields();
                                _this.$router.go(-1);
                            }, 1000);
                        })
                    } else {
                        _this.$message({
                            message: '请完整填写表单！',
                            type: 'error'
                        });
                        return false;
                    }
                });
            },
        }
    }
</script>
