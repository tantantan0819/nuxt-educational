<template>
  <div class="login">
    <div class="forget reset">
      <p class="forget_title tc">重置密码</p>
      <div class="forget_phone isForget reset_form">
        <el-form :model="resetForm" status-icon :rules="resetRules" ref="resetForm" label-width="0px" class="login_form">
          <el-form-item prop="new_password">
            <el-input type="password" v-model="resetForm.new_password" placeholder="请输入新密码" autocomplete="off" show-password></el-input>
          </el-form-item>
          <el-form-item prop="confirm">
            <el-input type="password" v-model="resetForm.confirm" placeholder="请再次输入新密码" autocomplete="off" show-password></el-input>
          </el-form-item>
          <el-form-item class="forget_submit">
            <el-button type="primary" @click="submitForm('resetForm')">确 定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/login.scss";
</style>
<script>
    import uhttp from "~/plugins/uhttp";
    import {valiPassward} from '~/plugins/validate';

    export default {
        data() {
            var validConfirm = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请再次输入新密码'));
                } else {
                    if (value != this.resetForm.new_password) {
                        callback(new Error('请确认你的新密码'));
                    } else {
                        callback();
                    }
                }
            };
            return {
                resetForm: {
                    new_password: '', // 新密码
                    confirm: '',  // 确认密码
                    password_reset_token: '', // 密码重置token
                },
                resetRules: {
                    new_password: [
                        {required: true, validator: valiPassward, trigger: 'blur'}
                    ],
                    confirm: [
                        {required: true, validator: validConfirm, trigger: 'blur'}
                    ],
                },
            }
        },
        beforeMount() {
            let token = this.$store.state.resetToken;
            this.resetForm.password_reset_token = token;
            if (!token) {
                this.$router.push('/login')
            }
        },
        methods: {
            //提交表单
            submitForm(formName) {
                let _this = this;
                _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        uhttp.post('/password/set', _this.resetForm).then((res) => {
                            let successMsg = _this.$message({
                                message: '修改成功！正在跳转至登录页面~！',
                                type: 'success'
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$router.push('/login')
                            }, 1500);
                        })
                    }
                });
            },
        }
    }
</script>

