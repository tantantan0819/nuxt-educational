<template>
  <el-dialog title :visible.sync="signed" width="1400" :close-on-click-modal="isClose" :close-on-press-escape="isClose"
             class="cv" :close="handleDialogClose">
    <div class="con cv">
      <!--   检测签章信息   -->
      <div class="sign_result detection_result" v-if="isDetection">
        <div class="sign_text">正在检测签章信息是否可用，请稍等</div>
        <div class="loading_show">
          <div id="loadingWrap1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <!--    签署失败   -->
      <div class="sign_result detection_result" v-else>
        <span class="el-icon-error sign_icon sign_error"></span>
        <div class="sign_text">{{msg}}<span>{{seconds-1}}</span>秒后将自动为您跳转到签章页面</div>
<!--        <span class="sign_link" @click="link">立即跳转</span>-->
      </div>
    </div>
  </el-dialog>

</template>
<script>
    import http from "~/plugins/http";
    import error from "../layouts/error";
    export default {
        layout: "refactor",
        props: ['id'],
        data() {
            return {
                signed: true,
                isClose: false,
                seconds: 11,
                timer: null,
                isDetection: true,//是否展示检测签章合同
                msg: ''
            }
        },
        mounted() {
            http.post('/contract/check-sign',{id:this.id}).then(res=>{
                //未签署--获取
                if(res.contract_sign_status == 0){
                    console.log('检测正常--未签署');
                    http.get('/contract/my-sign-url',{contract_id:this.id}).then(res=>{
                      if(res.url.shorturl){
                          this.msg = '系统检测到您还未填写签章信息，';
                          this.isDetection = false;
                          this.showFail(res.url.shorturl);
                      }
                    })
                }
                //签署中
                if(res.contract_sign_status == 1){
                    console.log('检测正常--签署中');
                    this.msg = '系统检测到您的签章信息正在签署中，';
                    this.isDetection = false;
                    this.showFail();
                }
                //签署完成
                if(res.contract_sign_status == 2){
                    console.log('检测正常--签署完成');
                    this.signed = false;
                    this.$emit("closeContr");
                    this.$router.push({ path: "/contract/pay", query: { id: this.id } });
                }
                //签署失败
                if(res.contract_sign_status == 3){
                    console.log('检测正常--签署失败');
                    this.msg = "系统检测到您的签章信息状态为失败，";
                    this.isDetection = false;
                    this.showFail();
                }

            }).catch(error=>{

            })
        },
        methods: {
            handleDialogClose() {
                this.signed = false;
                this.$emit("closeContr");
            },
            showFail(url){
                let _this = this;
                _this.timer = setInterval(()=>{
                    if(_this.seconds>2){
                        _this.seconds--;
                    }else{
                        clearInterval(_this.timer);
                        _this.signed = false;
                        _this.$emit("closeContr");
                        url?window.open(url,'_blank'):'';
                    }
                },1000)
            },
            link() {
                this.$emit("closeContr");
                this.signed = false;
            }
        }
    }
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
  @import "~/assets/css/cv.scss";
  @import "~/assets/css/detection.scss";
</style>

