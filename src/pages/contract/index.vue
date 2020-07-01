<template>
  <div class="con">
    <div class="version_title">
      <span>我的合同</span>
    </div>
    <div class="contract">
      <div class="item" @click="contract(0)">
        <img src="/images/contract.png" alt="">
        <span>DIY A套餐-待签约</span>
      </div>
      <div class="item"  @click="contract(1)">
        <img src="/images/contract.png" alt="">
        <span>DIY A套餐-待签约</span>
      </div>
    </div>
    <!-- 合同签署 -->
    <div class="signed">
      <diy-a :show="isDiyA"></diy-a>
<!--      <diy-b :show="isDiyB"></diy-b>-->
<!--      <c-g5 :show="isG5"></c-g5>-->
<!--      <c-ps3 :show="isPs3"></c-ps3>-->
<!--      <c-ps1 :show="isPs1"></c-ps1>-->
<!--      <g-ps :show="isgPs"></g-ps>-->
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
    import GPs from "~/components/gPs3";
    export default {
        layout: "refactor",
        components: {DiyA,DiyB,CG5,CPs3,CPs1,GPs},
        data() {
            return {
                signed: false,//合同签署弹出层
                isDiyA: false,//签约类型选择为“DIY A套餐”时调用【协议1000】2020
                isDiyB: false,//（new）签约类型选择为“DIY B套餐”时调用【协议2000】2020
                isG5: true,//（new）签约类型选择为“DIY B套餐”时调用【协议2000】2020
                isPs3: true,//签约类型选择为“VIP套餐(3个PS)”时调用【协议12000】2020
                isPs1: true,//签约类型选择为“标准全套套餐（1个PS）”时调用【协议10000】2020
                isgPs: true,//签约类型选择为“豪华G5套餐(3个PS)”时调用【协议18000】2020
                signForm: {
                    name: ''
                }
            };
        },
        mounted() {

        },
        methods: {
            contract(val){
                let _this = this;
                if(val == 0){
                    _this.isG5 = true;
                }else{

                }
            }
        }
    };
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
</style>
