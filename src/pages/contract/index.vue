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
      <div class="item" @click="contract(1)">
        <img src="/images/contract.png" alt="">
        <span>DIY A套餐-待签约</span>
      </div>
    </div>
    <!-- 合同签约 -->
    <div class="signed">
      <diy-a v-if="isDiyA" v-on="{closeContr: showDiyA}"></diy-a>
      <diy-b v-if="isDiyB" v-on="{closeContr: showDiyB}"></diy-b>
      <c-g5 v-if="isG5" v-on="{closeContr: showG5}"></c-g5>
      <c-ps3 v-if="isPs3" v-on="{closeContr: showPs3}"></c-ps3>
      <c-ps1 v-if="isPs1" v-on="{closeContr: showPs1}"></c-ps1>
      <g-ps3 v-if="isgPs" v-on="{closeContr: showGps}"></g-ps3>
      <sign v-if="isSign" v-on="{closeContr: showSign}"></sign>
      <detection></detection>
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
        components: {DiyA, DiyB, CG5, CPs3, CPs1, GPs3, Sign,Detection},
        data() {
            return {
                signed: false,//合同签署弹出层
                isDiyA: false,//签约类型选择为“DIY A套餐”时调用【协议1000】2020
                isDiyB: false,//（new）签约类型选择为“DIY B套餐”时调用【协议2000】2020
                isG5: false,//（new）签约类型选择为“DIY B套餐”时调用【协议2000】2020
                isPs3: false,//签约类型选择为“VIP套餐(3个PS)”时调用【协议12000】2020
                isPs1: false,//签约类型选择为“标准全套套餐（1个PS）”时调用【协议10000】2020
                isgPs: false,//签约类型选择为“豪华G5套餐(3个PS)”时调用【协议18000】2020
                isSign: false,
                signForm: {
                    name: ''
                }
            };
        },
        mounted() {

        },
        methods: {
            contract(val) {
                let _this = this;
                if (val == 0) {
                    _this.isDiyB = true;
                } else {

                }
            },
            showDiyA() {
                this.isDiyA = false;
            },
            showDiyB() {
                this.isDiyB = false;
                this.isSign = true;
            },
            showG5() {
                this.isG5 = false;
            },
            showPs3() {
                this.isPs3 = false;
            },
            showPs1() {
                this.isPs1 = false;
            },
            showGps() {
                this.isgPs = false;
            },
            showSign() {
                this.isSign = false;
            }
        }
    };
</script>
<style lang="scss">
  @import "~/assets/css/contract.scss";
</style>
