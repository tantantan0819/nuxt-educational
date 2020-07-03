<template>
  <div class="con cv">
      <div class="sign_result">
        <span class="el-icon-success sign_icon sign_success"></span>
        <div class="sign_text">已完成支付，<span>{{seconds-1}}</span> 秒后自动跳转回我的合同页面</div>
        <span class="sign_link" @click="link">立即跳转</span>
      </div>
    <div class="sign_result">
      <span class="el-icon-error sign_icon sign_error"></span>
      <div class="sign_text">支付失败，请回到我的合同重新支付，<span>{{seconds-1}}</span> 秒后页面自动跳转</div>
      <span class="sign_link" @click="link">立即跳转</span>
    </div>
  </div>
</template>
<script>
    export  default{
        layout: "refactor",
        data(){
            return{
                seconds: 6,
                timer: null,
            }
        },
        mounted(){
            let _this = this;
            _this.timer = setInterval(()=>{
               if(_this.seconds>2){
                   _this.seconds--;
               }else{
                   clearInterval(_this.timer);
                   _this.$router.push('/contract')
               }
            },1000)
        },
        methods:{
            link(){
                this.$router.push('/contract')
            }
        }
    }
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
  @import "~/assets/css/cv.scss";
</style>

