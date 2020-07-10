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
<!--        <div class="pay_wrap">-->
<!--          <img src="/images/weixin.jpg" alt="">-->
<!--          <el-radio label="1">微信</el-radio>-->
<!--        </div>-->
      </el-radio-group>
    </div>
    <div v-html="zhifubao" id="zhifubao"></div>
    <div class="cv_footer pay_footer">
      <div class="confirm_button">
        <span @click="next()">下一步</span>
      </div>
    </div>
  </div>
</template>
<script>
  import http from "~/plugins/http";
  export  default{
      layout: "refactor",
      data(){
          return{
              pay_method: null,
              id: '',
              zhifubao: ''
          }
      },
      mounted(){
          this.id = this.$route.query.id;
      },
      methods:{
           next(){
               if(!this.pay_method){
                   this.$message({
                       message: "请先选择您的支付方式",
                       type: "warning"
                   });
                  // this.$router.push('/contract/result')
               }else{
                    //支付宝
                   http.post('/pay/zfb',{id:this.id}).then(res=>{
                       this.zhifubao = res.body;
                       setTimeout(function () {
                           // IE浏览器
                           if(document.all) {
                               document.querySelector("input[type=submit]").click();
                           }
                           // 其它浏览器
                           else {
                               var e = document.createEvent("MouseEvents");
                               e.initEvent("click", true, true);
                               document.querySelector("input[type=submit]").dispatchEvent(e);
                           }
                       },100)
                   }).catch(error=>{
                       this.$message({
                           message: error,
                           type: "warning"
                       });
                   })
               }
          }
      }
  }
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
  @import "~/assets/css/cv.scss";
  .pay_footer{
    border: none!important;
  }
</style>

