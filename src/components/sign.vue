<template>
  <el-dialog title :visible.sync="signed" width="1400" :close-on-click-modal="isClose" :close-on-press-escape="isClose" class="cv sign_sign" :before-close="handleDialogClose">
    <div class="sign_con">同学你好，填写签章申请后才能继续支付合同，是否已填写签章申请？</div>
    <div class="cv_footer ps_footer">
      <div class="footer_button">
                    <span @click="close">
                        <i>{{isClick?'未填写，立刻申请':'加载中……'}}</i>
                       <i class="el-icon-loading loading_btn" v-if="!isClick"></i>
                    </span>
        <span @click="sure">已填写</span>
      </div>
    </div>
  </el-dialog>
</template>
<style lang="scss" scoped>
  @import "~/assets/css/contract.scss";
  @import "~/assets/css/cv.scss";
</style>
<script>
    import http from "~/plugins/http";
    export  default {
        props: ['id'],
        data(){
            return{
                isClose: false,
                signed: true,
                isClick: true,
                newUrl: '',
            }
        },
        watch:{
            newUrl(){
                window.open(this.newUrl,"_blank")
            }
        },
        methods:{
           async close(){
                if(this.isClick){
                    this.isClick = false;
                    let res  = await http.get('/contract/my-sign-url',{contract_id:this.id});
                    if(res.url.shorturl){
                        this.newUrl = res.url.shorturl;
                    }
                    this.isClick = true;
                    // http.get('/contract/my-sign-url',{contract_id:this.id}).then(res=>{
                    //     if(res.url.shorturl){
                    //         window.open(res.url.shorturl,'_blank')
                    //     }
                    //     this.isClick = true;
                    // })
                }
            },
            sure(){
                this.$emit("closeContr",true);
            },
            handleDialogClose(){
                this.signed = false;
                this.$emit("closeContr",false);
            }
        },
    }
</script>
