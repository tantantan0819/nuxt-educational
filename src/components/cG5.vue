<template>
  <el-dialog title :visible.sync="signed" width="1400">
    <div class="page">
      <div class="top"><img src="/images/contract1.png" alt=""></div>
      <div class="con">
        <div class="mate">
          <span>协议类别【DIV-A】</span>
          <span>入学年月【2018-11-02】</span>
          <span>协议编号【--2018-11-02-----A】</span>
        </div>
        <div class="title mt20">英国留学委托代理协议</div>
        <p>甲方：</p>
        <div class="arw">
          <p>学生：</p>
          <el-input v-model="student"></el-input>
          <p>身份证号码：</p>
          <el-input v-model="idNumber"></el-input>
        </div>
        <div class="arw">
          <p>身份证地址：</p>
          <el-input v-model="idAddress"></el-input>
        </div>
        <div class="arw">
          <p>现住地址：</p>
          <el-input v-model="nowAddress"></el-input>
        </div>
        <div class="arw">
          <p>监护人：</p>
          <el-input v-model="guardian"></el-input>
          <p>系学生的</p>
          <el-input v-model="relation"></el-input>
          <p>身份证号码：</p>
          <el-input v-model="idRelation"></el-input>
        </div>
        <div class="arw">
          <p>身份证地址：</p>
          <el-input v-model="gua_idAddress"></el-input>
        </div>
        <div class="arw">
          <p>现住地址：</p>
          <el-input v-model="gua_nowAddress"></el-input>
        </div>
        <div class="arw">
          <p>手机号：</p>
          <el-input v-model="phone"></el-input>
          <p>家庭电话：</p>
          <el-input v-model="family_phone"></el-input>
          <p>邮箱：</p>
          <el-input v-model="email"></el-input>
        </div>
        <p class="mt50">乙 方：四川英华联教育咨询有限公司</p>
        <p class="mt20">法定代表人：梁军</p>
        <p class="mt50">经营地址：四川省成都市高新区天府大道中段 530 号东方希望天祥广场 A 座 30 楼</p>
        <p class="mt10 lin30">鉴于甲方有英国留学服务需求，乙方为英国教育中心（UKEC LIMITED, 公司注册号 06685056，经营
          地址 St. James Building, 79 Oxford Street, Manchester, M1 6FQ）的长期战略合作伙伴，甲乙双方本着自愿、
          平等、诚信的原则，根据《中华人民共和国合同法》及相关法律法规规定，就乙方接受甲方的委托提供自
          费出国留学中介服务事宜，达成如下协议:</p>
        <p></p>
      </div>
    </div>
  </el-dialog>
</template>
<script>
  export  default {
      props: ["show"],
      data(){
          return{
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
          }
      },
      mounted() {
          console.log(this.signed)
      },
      watch: {
          show(val) {
              this.signed = val;
          }
      }
  }
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
</style>
