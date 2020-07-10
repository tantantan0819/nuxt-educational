<template>
  <div class="con cv">
    <div class="sign_result" v-if="pay_result && !isError">
      <span class="el-icon-success sign_icon sign_success"></span>
      <div class="sign_text">已完成支付，<span>{{seconds-1}}</span> 秒后自动跳转回我的合同页面</div>
      <span class="sign_link" @click="link">立即跳转</span>
    </div>
    <div class="sign_result" v-if="!pay_result && !isError">
      <span class="el-icon-error sign_icon sign_error"></span>
      <div class="sign_text">支付失败，请回到我的合同重新支付，<span>{{seconds-1}}</span> 秒后自动跳转回我的合同页面</div>
      <span class="sign_link" @click="link">立即跳转</span>
    </div>
    <div class="sign_result" v-if="isError">
      <span class="el-icon-error sign_icon sign_error"></span>
      <div class="sign_text">没有带id参数的无效跳转，如有疑问请联系您的顾问老师</div>
      <span class="sign_link" @click="link">立即跳转</span>
    </div>
  </div>
</template>
<script>
    import http from "~/plugins/http";
    export default {
        layout: "refactor",
        data() {
            return {
                id: '',//当前合同id
                seconds: 11,//默认跳转时间
                timer: null,//定时器
                contract:{},//当前合同
                pay_result: false,//支付结果
                isError: false,//没有带id参数的跳转
            }
        },
        mounted() {
            let _this = this;
            this.id = this.$route.query.id;
            if(this.id){
                http.get('/contract/my-contract-list').then(res => {
                    if (res) {
                        res.map(item => {
                            if(item.id == _this.id && item.contract_sign_status == 2 && item.order_pay_status ==1){
                                _this.pay_result = true;
                            }
                        })
                        _this.getTimer();
                    }
                })
            }else{
              _this.isError = true;
            }
        },
        methods: {
            link() {
                this.$router.push('/contract')
            },
            //开始调用定时器
            getTimer() {
                let _this = this;
                _this.timer = setInterval(() => {
                    if (_this.seconds > 2) {
                        _this.seconds--;
                    } else {
                        clearInterval(_this.timer);
                        _this.$router.push('/contract')
                    }
                }, 1000)
            }
        }
    }
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
  @import "~/assets/css/cv.scss";
</style>

