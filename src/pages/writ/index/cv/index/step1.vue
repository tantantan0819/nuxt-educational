<template>
  <!--取的crm数据，提交到crm-->
  <div class="cv_step1">
    <div class="title_box">
      <div class="cv_title">
        <p>基本信息</p>
        <span>请认真填写您空缺的资料，保存后不能修改，如需修改请联系您的顾问老师进行修改</span>
      </div>
    <info-modify :type="modifyType"></info-modify>
    </div>
    <div class="cv_content cv1">
      <el-form :model="cvForm1" status-icon :rules="rules" ref="cvForm1" label-width="300px" label-position="top">
        <el-form-item label="姓名" prop="customer_name">
          <el-input v-model="cvForm1.customer_name" placeholder="请输入您的姓名" autocomplete="off"
                    v-bind:readonly="userForm.customer_name | textFormat"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" readonly>
          <el-select v-model="cvForm1.sex" class="widthAll" placeholder="请选择您的性别" @change="$forceUpdate()">
            <!--crm规则：0:未知 男：4 女：5-->
            <el-option value="4" label="男" v-bind:disabled="userForm.sex | textFormat"></el-option>
            <el-option value="5" label="女" v-bind:disabled="userForm.sex | textFormat"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="请输入您的生日"
                          v-model="cvForm1.birthday" class="widthAll"
                          v-bind:readonly="userForm.birthday | textFormat"></el-date-picker>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model.number="cvForm1.phone" placeholder="请输入您的手机" autocomplete="off"
                    v-bind:readonly="userForm.phone | textFormat"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="cvForm1.email" placeholder="请输入您的邮箱" autocomplete="off"
                    v-bind:readonly="userForm.email | textFormat"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="now_address">
          <el-input v-model="cvForm1.now_address" placeholder="请输入您的地址" autocomplete="off"
                    v-bind:readonly="userForm.now_address | textFormat"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="cv_footer">
      <div class="footer_button">
        <span @click="submitForm('cvForm1')">下一步</span>
      </div>
      <span class="next">请在退出前点击“下一步”按钮，您当前填写的信息可以被保存。</span>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/cv.scss";
</style>
<script>
    import {validEmail, validPhone} from '~/plugins/validate';
    import {deepClone, emptyObj} from '~/plugins/utils';
    import {getStore, setStore} from '~/plugins/utils';
    import http from "~/plugins/http";
    import InfoModify from "~/components/infoModify";

    export default {
        transition: '',
       layout: "refactor",
        components: { InfoModify},
        data() {
            return {
                modifyType: 'cv',//修改类型
                userForm: {},
                cvForm1: {
                    customer_name: '',
                    sex: '',
                    birthday: '',
                    phone: '',
                    email: '',
                    now_address: ''
                },
                rules: {
                    customer_name: [
                        {required: true, message: '请输入您的姓名', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择您的性别', trigger: 'blur'}
                    ],
                    birthday: [
                        {required: true, message: '请输入您的生日', trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, validator: validPhone, trigger: 'blur'}
                    ],
                    email: [
                        {required: true, validator: validEmail, trigger: 'blur'}
                    ],
                    now_address: [
                        {required: true, message: '请输入您的地址', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {
            let _this = this;
            //获取用户信息
            http.get('/customer/get-info').then((res) => {
                if(res){
                    //不能动态修改mutations数据
                    _this.userForm = res;
                    res.sex == 0 || !res.sex ? _this.cvForm1.sex = '' : _this.cvForm1.sex = res.sex + '';
                    _this.cvForm1.customer_name = res.customer_name;
                    _this.cvForm1.birthday = res.birthday;
                    _this.cvForm1.phone = res.phone;
                    _this.cvForm1.email = res.email;
                    _this.cvForm1.now_address = res.now_address;
                }
            })
        },
        filters: {
            textFormat(val) {
                if (typeof val == 'undefined') {
                    return false;
                }
                if (val == '') {
                    return false;
                }
                if (!val && typeof (val) != "undefined" && val != 0) {
                    return false;
                }
                return true;
            },
        },
        methods: {
            //提交表单 --下一步
            submitForm(formName) {
                let _this = this;
                _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        _this.cvForm1.phone += '';
                        http.post('/customer/edit', _this.cvForm1).then((res) => {
                            _this.$store.commit('user/SET_USER', _this.cvForm1);
                            let successMsg = _this.$message({
                                message: '提交成功',
                                type: 'success'
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$router.push('/writ/cv/step2')
                            }, 1000);
                        })
                    }
                });
            },
        }
    }
</script>
