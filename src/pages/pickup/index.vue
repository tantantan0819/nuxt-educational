<template>
    <div class="plan con">
        <div class="version_title">
            <span>我的接机</span>
        </div>
        <div class="accommodation">
            <div class="acc_item">
                <span>安排方式</span>
                <span>{{data.arrange_type | arrangeFilters}}</span>
            </div>
            <div class="acc_item">
                <span>接机费用</span>
                <span>{{data.reception_fee}}</span>
            </div>
            <div class="acc_item">
                <span>收款方式</span>
                <span>{{data.pay_type | payFilters}}</span>
            </div>
            <div class="acc_item">
                <span>申请截止日期</span>
                <span>{{data.apply_end_date}}</span>
            </div>
            <div class="acc_item">
                <span>申请递交日期</span>
                <span>{{data.submit_apply_date}}</span>
            </div>
            <div class="acc_item">
                <span>收到书面确认日期</span>
                <span>{{data.recieve_confirm_date}}</span>
            </div>
            <div class="acc_item">
                <span>通知客户日期</span>
                <span>{{data.reform_customer_date}}</span>
            </div>
            <div class="acc_item">
                <span>抵达机场</span>
                <span>{{data.arrive_airport}}</span>
            </div>
            <div class="acc_item">
                <span>航班号</span>
                <span>{{data.airplan_no}}</span>
            </div>
            <div class="acc_item">
                <span>抵达日期</span>
                <span>{{data.arrive_date}}</span>
            </div>
            <div class="acc_item">
                <span>紧急联系人</span>
                <span>{{data.urgent_contract_man}}</span>
            </div>
            <div class="acc_item">
                <span>紧急联系电话</span>
                <span>{{data.urgent_contract_phone}}</span>
            </div>
            <div class="acc_item">
                <span>备注</span>
                <span>{{data.note}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import http from "~/plugins/http";
import { getStore, setStore } from "~/plugins/utils";
let that;
export default {
    layout: "refactor",
    data() {
        return {
            data: {},
             arrange_type: [], //安排方式
             pay_type: [], //付款方式
        };
    },
        beforeCreate() {
        that = this;
    },
    filters:{
          arrangeFilters(val) {
            let type = "";
            that.arrange_type.map((item, index) => {
                if (item.id == val) {
                    type = item.cvalue_cn;
                }
            });
            return type;
        },
            payFilters(val){
                let type = "";
            that.pay_type.map((item, index) => {
                if (item.id == val) {
                    type = item.cvalue_cn;
                }
            });
            return type;
        },
    },
    mounted() {
        //获取我的接机
        this.getPickUp();
         //获取字典
          this.getType();
    },
    methods: {
        //获取我的接机
        getPickUp() {
            let _this = this;
            http.get("/utrack-reception/list").then(res => {
                if (res) {
                    _this.data = res[0];
                }
            });
        },
          //获取字典
        getType() {
            let _this = this;
            let dictionary = getStore("dictionary");
            if (dictionary) {
                _this.arrange_type = dictionary.RECEPTION_ARRANGE_TYPE;
                _this.pay_type = dictionary.PAY_TYPE;
            } else {
                http.get("/code-val/group-key-list").then(res => {
                    _this.arrange_type = res.RECEPTION_ARRANGE_TYPE;
                    _this.pay_type = res.PAY_TYPE;
                    setStore("dictionary", res);
                });
            }
        },
    }
};
</script>
<style lang="scss">
@import "~/assets/css/accommodation.scss";
</style>