<template>
  <div class="login">
    <div class="login_box">
      <el-carousel id="loginImg" trigger="click" height="601px" indicator-position="none" arrow="never"
                   :interval=interval>
        <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="loginForm">
        <div class="form_box">
          <p class="login_title tc">欢迎登录</p>
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="0px" class="login_form" autocomplete="off">
            <el-form-item prop="username">
              <el-input v-model.number="loginForm.username" placeholder="请输入账号" autocomplete="off" v-if="isShow" @keydown.enter.native="submitForm('loginForm')"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="passward" v-model="loginForm.password" placeholder="请输入密码" autocomplete="off"  @keydown.enter.native="submitForm('loginForm')" v-if="isShow" show-password></el-input>
            </el-form-item>
            <el-form-item class="login_submit">
              <div class="forget_password"><span @click="forget">忘记密码?</span></div>
              <el-button type="primary" @click="submitForm('loginForm')"> 登 录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/login.scss";
</style>
<script>
    import {valiPassward} from '~/plugins/validate';
    import {setStore} from '~/plugins/utils';
    import uhttp from "~/plugins/uhttp";
    import http from "~/plugins/http";

    export default {
        data() {
            return {
                isShow: false,
                interval: 2000,//轮播切换时间
                carouselImg: [
                    '/images/login/utrack_login.jpg',
                ],//轮播图片
                loginForm: {
                    password: '',
                    username: '',
                    from:'PC',//来源 PC IOS Android
                },
                rules: {
                    username: [
                        {required: true, message: '请输入账号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, validator: valiPassward, trigger: 'blur'}
                    ]
                }

            }
        },
        mounted(){
            //谷歌自动填充
            setTimeout(()=>{
                this.isShow = true;
            },1)
        },
        methods: {
            //登陆sso
            async login(){
                let _this = this;
                return uhttp.post('/login/login', _this.loginForm);
            },
            //判断是否是crm的客户
            async isCrm(){
                let _this = this;
                const isLogin = await this.login();
                if(isLogin) {
                    //是否是crm的客户
                    http.get('/utrack-user/is-crm-user').then((res) => {
                        if (res == 'yes') {
                            let successMsg = _this.$message({
                                message: '登录成功！',
                                type: 'success'
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$store.commit('user/SET_USER', {});
                                _this.$store.commit('SET_RESET', '');
                                setStore('isLogin', '1');
                                _this.$router.push('/home');
                            }, 1500);
                        } else {
                            _this.$message({
                                message: '该客户不在crm系统内，请联系您的顾问老师！',
                                type: 'error'
                            });
                        }
                    })
                }
            },
            //提交表单
             submitForm(formName){
                let _this = this;
                  _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        _this.isCrm();
                    }
                });
            },
            //忘记密码
            forget() {
                this.$router.push('/login/forget');
            }
        }
    }
</script>

