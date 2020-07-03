<template>
  <el-dialog title :visible.sync="signed" width="1400" :close-on-click-modal="isClose" :close-on-press-escape="isClose" class="cv sign_sign" :before-close="handleDialogClose">
    <div class="sign_con">同学你好，填写签章申请后才能继续支付合同，是否已填写签章申请？</div>
    <div class="cv_footer ps_footer">
      <div class="footer_button">
                    <span @click="close">
                        <i>未填写，立刻申请</i>
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
    export  default {
        data(){
            return{
                isClose: false,
                signed: true,
                student: '',//学生姓名
                idNumber: '',//身份证
                idAddress: '',//身份证地址
                nowAddress: '',//现住地址
                guardian: '',//监护人
                relation: '',//系学生的
                idRelation: '',//监护人身份证
                gua_idAddress: '',//监护人身份证地址
                gua_nowAddress: '',//监护人现住地址
                phone:'',//手机号
                family_phone: '' ,//家庭号码
                email: '',//邮箱
                checkList: [],
            }
        },
        mounted() {

        },
        methods:{
            close(){
                this.signed = false;
                this.$emit("closeContr");
            },
            sure(){
                this.$emit("closeContr");
                this.$router.push('/contract/pay')
            },
            handleDialogClose(){
                this.signed = false;
            }
        },
    }
</script>
