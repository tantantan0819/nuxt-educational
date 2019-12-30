<template>
  <div class="login">
    <div class="forget">
      <p class="forget_title tc">找回密码</p>
      <ul class="forget_nav">
        <li class="tc" v-for="(item,index) in forgetNav" :key="index" @click="activeNav=item"
            :class="{'active': activeNav == item}">{{item}}
        </li>
      </ul>
      <!-- 手机找回 -->
      <div class="forget_phone isForget" v-if="activeNav == forgetNav[0]" key="phone_code">
        <el-form :model="phoneForm" status-icon :rules="phoneRules" ref="phoneForm" label-width="0px"
                 class="login_form">
          <div id="isPhone">
            <el-form-item class="isRegion">
              <el-select v-model="phoneForm.region" placeholder="请选择区号" @change="areaSelect">
                <el-option v-for="(item,index) in region" :key="index" :label="item.region" :value="item.region">
                  {{item.region}}
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="phone" class="isPhone">
              <el-input v-model.number="phoneForm.phone" placeholder="请输入手机号" autocomplete="off"></el-input>
            </el-form-item>
          </div>
          <div id="graphic">
            <el-form-item prop="graphic">
              <el-input type="text" v-model.trim="phoneForm.graphic" placeholder="请输入图形验证码"
                        autocomplete="off"></el-input>
            </el-form-item>
            <img :src="codeImg" alt="" @click="changeGraphic">
          </div>
          <div class="code">
            <el-form-item prop="code">
              <el-input type="text" v-model.trim="phoneForm.code" placeholder="请输入短信验证码" autocomplete="off"></el-input>
            </el-form-item>
            <el-button type="primary" class="sendCode" @click="sendCode('phone')">
              {{isSendEmail?'发送验证码':phoneTime+'秒后可重新发送'}}
            </el-button>
          </div>
          <el-form-item class="forget_submit">
            <el-button type="primary" @click="submitForm('phoneForm')">确 定</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 邮箱找回 -->
      <div class="forget_email isForget" v-else-if="activeNav == forgetNav[1]" key="email_code">
        <el-form :model="emailForm" status-icon :rules="emailRules" ref="emailForm" label-width="0px"
                 class="login_form">
          <el-form-item prop="email">
            <el-input type="text" v-model.trim="emailForm.email" placeholder="请输入您的邮箱号" autocomplete="off"></el-input>
          </el-form-item>
          <div class="code">
            <el-form-item prop="code">
              <el-input type="text" v-model.trim="emailForm.code" placeholder="请输入邮箱验证码" autocomplete="off"></el-input>
            </el-form-item>
            <el-button type="primary" class="sendCode" @click="sendCode('email')">
              {{isSendEmail?'发送验证码':emailTime+'秒后可重新发送'}}
            </el-button>
          </div>
          <el-form-item class="forget_submit">
            <el-button type="primary" @click="submitForm('emailForm')">确 定</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 人工找回 -->
      <div class="forget_artificial isForget" v-else>
        <p>customerservice@ukec.com</p>
        <p>UKEC-CustomerService</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/login.scss";
</style>
<script>
    import {validEmail} from '~/plugins/validate';
    import {getStore, setStore} from '~/plugins/utils';
    import uhttp from "~/plugins/uhttp";

    export default {
        data() {
            var validPhone = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请输入您的手机号码'));
                } else {
                    let reg = this.regex;
                    reg = reg.substring(1,reg.length-1);
                    let regex = new RegExp(reg);
                    if (!regex.test(value)) {
                        callback(new Error('请输入正确的手机号码'));
                    } else {
                        callback();
                    }
                }
            };
            return {
                activeNav: '', // 选中导航
                codeImg: '', // 图形验证码
                region: [],//区号下拉
                regex: {},//电话号码正则
                isSendEmail: true, //是否可发送邮箱验证码
                isSendPhone: true, //是否可发送手机验证码
                emailTime: 60,//60秒后可以发送邮箱验证码
                phoneTime: 60,//60秒后可以发送手机验证码
                forgetNav: ['手机找回', '邮箱找回', '人工找回'],
                phoneForm: {
                    region: '', // 手机区号
                    code: '', // 短信验证码
                    graphic: '',  // 图形验证码
                    phone: '',
                    type: '1', //1为手机找回，2为邮箱找回
                },// 手机找回
                phoneRules: {
                    phone: [
                        {required: true, validator: validPhone, trigger: 'blur'}
                    ],
                    graphic: [
                        {required: true, message: '请输入图形验证码', trigger: 'blur'}
                    ],
                    code: [
                        {required: true, message: '请输入短信验证码', trigger: 'blur'}
                    ],
                },
                emailForm: {
                    email: '', // 邮箱号码
                    code: '', // 邮箱验证码
                    type: '1',
                },// 邮箱找回
                emailRules: {
                    email: [
                        {required: true, validator: validEmail, trigger: 'blur'}
                    ],
                    code: [
                        {required: true, message: '请输入邮箱验证码', trigger: 'blur'}
                    ],
                }

            }
        },
        mounted() {
            let _this = this;
            _this.activeNav = _this.forgetNav[0];
            //获取区号下拉
            let result = getStore('region');
            if (result) {
                _this.region = result;
                _this.regex = result[0].regex;
            } else {
                uhttp.get('/region/list').then((res) => {
                    _this.region = res;
                    _this.regex = res[0].regex;
                    setStore('region', res)
                });
            }
            if (_this.region.length != 0) {
                _this.phoneForm.region = _this.region[0].region;
            }
            //获取图形验证码
            _this.changeGraphic();
        },
        methods: {
            //手机区号下拉框选择事件
            areaSelect(val) {
                let _this = this;
                _this.regex = _this.region.filter(item => item.region == val)[0].regex;
            },
            //获取图形验证码
            changeGraphic() {
                uhttp.get('/verify/captcha').then((res) => {
                    this.codeImg = res.base64_images;
                })
            },
            //发送验证码
            sendCode(type) {
                let _this = this;
                if (type == 'phone' && _this.isSendPhone) {
                    _this.$refs['phoneForm'].validateField('phone', (res) => {
                        if (res == '') {
                            _this.$refs['phoneForm'].validateField('graphic', (response) => {
                                if (response == '') {
                                    let parms = {
                                        code: _this.phoneForm.graphic,
                                        phone: _this.phoneForm.phone,
                                        region: _this.phoneForm.region,
                                        type: '1'// 0普通，1找回密码
                                    };
                                    uhttp.post('/verify/send-phone', parms).then((res) => {
                                        if(res){
                                            _this.isSendPhone = false;
                                            _this.$message({
                                                message: '手机证码发送成功！',
                                                type: 'success'
                                            });
                                            let phoneTimer = setInterval(() => {
                                                _this.phoneTime--;
                                                if (_this.phoneTime == 0) {
                                                    _this.isSendPhone = true;
                                                    _this.phoneTime = 60;
                                                    clearInterval(phoneTimer);
                                                }
                                            }, 1000)
                                        }
                                    }).catch((err) => {
                                        _this.isSendPhone = true;
                                    })
                                } else {
                                    _this.$message({
                                        message: response,
                                        type: 'error'
                                    });
                                }
                            })
                        } else {
                            _this.$message({
                                message: res,
                                type: 'error'
                            });
                        }
                    })
                }
                //发送邮箱验证码
                if (type == 'email' && _this.isSendEmail) {
                    _this.$refs['emailForm'].validateField('email', (res) => {
                        if (res == '') {
                            let parms = {
                                email: _this.emailForm.email,
                                type: '1'// 0普通，1找回密码
                            }
                            uhttp.post('/verify/send-email', parms).then((res) => {
                                if (res) {
                                    _this.isSendEmail = false;
                                    _this.$message({
                                        message: '邮箱验证码发送成功！',
                                        type: 'success'
                                    });
                                    let emailTimer = setInterval(() => {
                                        _this.emailTime--;
                                        if (_this.emailTime == 0) {
                                            _this.isSendEmail = true;
                                            _this.emailTime = 60;
                                            clearInterval(emailTimer);
                                        }
                                    }, 1000)
                                }
                            }).catch((err) => {
                                _this.isSendEmail = true;
                            })
                        } else {
                            _this.$message({
                                message: res,
                                type: 'error'
                            });
                        }
                    })
                }
            },
            //提交表单
            submitForm(formName) {
                let _this = this;
                _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //邮箱登录
                        let parms = {};
                        if (formName == 'emailForm') {
                            parms = {
                                code: _this.emailForm.code,
                                accept: _this.emailForm.email,
                            };
                        } else {
                            parms = {
                                code: _this.phoneForm.code,
                                accept: _this.phoneForm.phone,
                            };
                        }
                        //重置密码
                        uhttp.post('/password/reset-token', parms).then((res) => {
                            if (res.password_reset_token) {
                                let successMsg = _this.$message({
                                    message: '正在跳转至重置密码页面~！',
                                    type: 'success'
                                });
                                setTimeout(() => {
                                    successMsg.close();
                                    _this.$store.commit('SET_RESET', res.password_reset_token);
                                    _this.$router.push('/login/password');
                                }, 1500);
                            }

                        })
                    }
                });
            },
        }
    }
</script>

