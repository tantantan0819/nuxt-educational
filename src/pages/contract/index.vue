<template>
  <div class="con">
    <div class="version_title">
      <span>我的合同</span>
    </div>
    <div class="contract">
      <div class="item" v-for="(item,index) in list" :key="index" @click="contract(item)">
        <img src="/images/contract.png" alt="">
        <span>{{item.finance_name}} - {{item.status | status}}</span>
      </div>
    </div>
    <!-- 合同签约 -->
    <div class="signed">
      <diy-a v-if="isDiyA" :id="con_id" :type="pay_type" :state="status_status" v-on="{closeContr: showDiyA}"></diy-a>
      <diy-b v-if="isDiyB" :id="con_id" :type="pay_type" :state="status_status" v-on="{closeContr: showDiyB}"></diy-b>
      <c-ps3 v-if="isPs3" :id="con_id" :type="pay_type" :state="status_status" v-on="{closeContr: showPs3}"></c-ps3>
      <c-ps1 v-if="isPs1" :id="con_id"  :type="pay_type" :state="status_status" v-on="{closeContr: showPs1}"></c-ps1>
      <c-g5 v-if="isG5" :id="con_id" :type="pay_type" :state="status_status" v-on="{closeContr: showG5}"></c-g5>
      <g-ps3 v-if="isgPs" :id="con_id" :type="pay_type" :state="status_status" v-on="{closeContr: showGps}"></g-ps3>
      <sign v-if="isSign" :id="con_id"  :type="pay_type" :state="status_status" v-on="{closeContr: showSign}"></sign>
      <detection :id="con_id" v-if="isDetetion" :state="status_status" v-on="{closeContr: showDetetion}"></detection>
    </div>
  </div>
</template>
<script>
    import http from "~/plugins/http";
    import config from "~/plugins/config";
    import DiyA from "~/components/diyA";
    import DiyB from "~/components/diyB";
    import CG5 from "~/components/cG5";
    import CPs3 from "~/components/cPs3";
    import CPs1 from "~/components/cPs1";
    import GPs3 from "~/components/gPs3";
    import Sign from "~/components/sign";
    import Detection from "~/components/detection";

    export default {
        layout: "refactor",
        components: {DiyA, DiyB, CG5, CPs3, CPs1, GPs3, Sign, Detection},
        data() {
            return {
                signed: false,//合同签署弹出层
                isDiyA: false,//签约类型选择为“DIY A套餐”时调用【协议1000】2020 finance_id == 59
                isDiyB: false,//（new）签约类型选择为“DIY B套餐”时调用【协议2000】2020 finance_id == 57
                isG5: false,//（new）签约类型选择为“精英G5套餐”时调用【协议15000】2020 finance_id == 102
                isPs3: false,//签约类型选择为“VIP套餐(3个PS)”时调用【协议12000】2020 finance_id == 99
                isPs1: false,//签约类型选择为“标准全套套餐（1个PS）”时调用【协议10000】2020 finance_id == 98
                isgPs: false,//签约类型选择为“豪华G5套餐(3个PS)”时调用【协议18000】2020 finance_id == 100
                isSign: false,//同学你好，填写签章申请后才能继续支付合同，是否已填写签章申请？
                isDetetion: false,//正在检测签章信息是否可用
                list: [],//合同列表
                con_id: '',//查看的合同id
                status_status: '',//点击当前合同的签约状态
                pay_type: ''//非596则为线下支付签约，直接返回合同列表--没有确认签约按钮
            };
        },
        mounted() {
            //获取合同列表
            this.getContract();
        },
        filters: {
            //合同状态
            status(val) {
                let text;
                switch (val) {
                    case 0:
                        text = '待签约';
                        break;
                    case 1:
                        text = '待支付';
                        break;
                    case 2:
                        text = '已完成';
                        break;
                    case 3:
                        text = '签署中';
                        break;
                    case 4:
                        text = '签署中';
                        break;
                    case 5:
                        text = '签署失败';
                        break;
                    default:
                        text = '';
                        break;
                }
                return text;
            }
        },
        methods: {
            //获取合同列表--组合字段status判断状态
            getContract() {
                let _this = this;
                http.get('/contract/my-contract-list').then(res => {
                    if(res){
                        res.map(item=>{
                            let status ; //0：未签约，1：待支付，2：已完成，3：签署中，4：签署失败
                            if(item.contract_sign_status == 0){
                                status = 0
                            }
                            if(item.contract_sign_status == 1){
                                status = 3
                            }
                            if(item.contract_sign_status == 2 && item.order_pay_status ==1){
                                status = 2
                            }
                            if(item.contract_sign_status == 2 && item.order_pay_status ==2){
                                status = 1
                            }
                            if(item.contract_sign_status == 2 && item.order_pay_status ==0){
                                status = 1
                            }
                            if(item.contract_sign_status == 2 && item.order_pay_status ==3){
                                status = 4
                            }
                            if(item.contract_sign_status == 3){
                                status = 5
                            }
                            item.status = status;
                        })
                        _this.list = res;
                    }
                })
            },
            //判断当前合同状态
            contract(item) {
                let _this = this;
                _this.status_status = item.status;
                _this.con_id = item.id;
                _this.pay_type = item.pay_type;
                switch (item.status) {
                    case 0: //未签约
                        _this.goSign(item);
                        break;
                    case 1: //未支付
                        _this.goSign(item);
                        break;
                    case 2: //已完成
                        window.open(item.contract_sign_url,'_blank');
                        break;
                    case 3: //签署中
                        this.isSign = true;
                        break;
                    case 4: //签署失败
                        this.isSign = true;
                        break;
                    default:
                        _this.goSign(item);
                        break;
                }
            },
            //未签约，去签约
            goSign(item){
                let _this = this;
                switch (item.finance_id) {
                    case '59':
                        _this.isDiyA = true;
                        break;
                    case '57':
                        _this.isDiyB = true;
                        break;
                    case '248':
                        _this.isG5 = true;
                        break;
                    case '265':
                        _this.isPs3 = true;
                        break;
                    case '98':
                        _this.isPs1 = true;
                        break;
                    case '100':
                        _this.isgPs = true;
                        break;
                    default:
                        this.$message({
                            message: '此套餐无合同模板，如有疑问请联系您的顾问老师',
                            type: "warning"
                        });
                        break;
                }
            },
            //保存合同之后
            emerge(){
                this.isSign = true;
                this.getContract();
            },
            showDiyA(val) {
                this.isDiyA = false;
                val != 'false'? this.emerge() : '';
            },
            showDiyB(val) {
                this.isDiyB = false;
                val != 'false'? this.emerge() : '';
            },
            showG5(val) {
                this.isG5 = false;
                val != 'false'? this.emerge() : '';
            },
            showPs3(val) {
                this.isPs3 = false;
                val != 'false'? this.emerge() : '';
            },
            showPs1(val) {
                this.isPs1 = false;
                val != 'false'? this.emerge() : '';
            },
            showGps(val) {
                this.isgPs = false;
                val != 'false'? this.emerge() : '';
            },
            //是否填写签章
            showSign(val) {
                this.isSign = false;
                if(val && this.pay_type == '596'){
                    this.isDetetion = true
                }
            },
            //签章检测--成功/失败
            showDetetion(){
                this.isDetetion = false;
                this.isSign = true;
            }
        }
    };
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
</style>
