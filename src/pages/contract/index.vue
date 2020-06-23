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
      <c-g5 :show="isG5"></c-g5>
    </div>
  </div>
</template>
<script>
    import http from "~/plugins/http";
    import config from "~/plugins/config";
    import CG5 from "~/components/cG5";
    export default {
        layout: "refactor",
        components: { CG5},
        data() {
            return {
                signed: false,//合同签署弹出层
                isG5: true,
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
