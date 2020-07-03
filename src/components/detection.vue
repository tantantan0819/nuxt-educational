<template>
  <el-dialog title :visible.sync="signed" width="1400" :close-on-click-modal="isClose" :close-on-press-escape="isClose" class="cv sign_sign" :before-close="handleDialogClose">
    <div class="con cv">
      <div class="sign_result">
        <div class="sign_text">正在检测签章信息是否可用，请稍等</div>
        <div class="loading_show">
          <div class="point"></div>
        </div>
      </div>
      <div class="sign_result">
        <span class="el-icon-error sign_icon sign_error"></span>
        <div class="sign_text">支付失败，请回到我的合同重新支付，<span>{{seconds-1}}</span> 秒后页面自动跳转</div>
        <span class="sign_link" @click="link">立即跳转</span>
      </div>
    </div>
  </el-dialog>

</template>
<script>
    export  default{
        layout: "refactor",
        data(){
            return{
                signed: true,
                isClose: false,
                seconds: 6,
                timer: null,
            }
        },
        mounted(){
            let _this = this;
            // _this.timer = setInterval(()=>{
            //     if(_this.seconds>2){
            //         _this.seconds--;
            //     }else{
            //         clearInterval(_this.timer);
            //         _this.$router.push('/contract')
            //     }
            // },1000)
        },
        methods:{
            handleDialogClose(){
                this.signed = false;
            },
            link(){}
        }
    }
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
  @import "~/assets/css/cv.scss";

</style>

