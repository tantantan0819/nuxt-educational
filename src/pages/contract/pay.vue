<template>
  <div class="con cv">
    <div class="version_title">
      <span>请选择支付方式</span>
    </div>
    <div class="pay_con">
      <el-radio-group v-model="pay_method">
        <div class="pay_wrap">
          <img src="/images/zhifubao.jpg" alt="">
          <el-radio  label="0">支付宝</el-radio>
        </div>
        <div class="pay_wrap">
          <img src="/images/weixin.jpg" alt="">
          <el-radio label="1">微信</el-radio>
        </div>
      </el-radio-group>
    </div>
    <div class="cv_footer">
      <div class="confirm_button">
        <span @click="next()">下一步</span>
      </div>
    </div>
  </div>
</template>
<script>
  export  default{
      layout: "refactor",
      data(){
          return{
              pay_method: null,
          }
      },
      methods:{
           next(){
               if(this.pay_method){
                  this.$router.push('/contract/result')
               }else{
                   this.$message({
                       message: "请选择您的支付方式",
                       type: "warning"
                   });
               }
          }
      }
  }
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
  @import "~/assets/css/cv.scss";
</style>

