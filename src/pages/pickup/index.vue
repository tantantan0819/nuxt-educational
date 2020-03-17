<template>
    <div class="plan con">
        <div class="version_title">
            <span>我的接机</span>
        </div>
        <div class="accommodation">
            <div class="acc_item">
                <span>安排方式</span>
                <span>{{data.arrange_type}}</span>
            </div>
            <div class="acc_item">
                <span>接机费用</span>
                <span>{{data.reception_fee}}</span>
            </div>
            <div class="acc_item">
                <span>收款方式</span>
                <span>{{data.pay_type}}</span>
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
export default {
    layout: "refactor",
    data() {
        return {
            data: {}
        };
    },
    mounted() {
        //获取我的接机
        this.getPickUp();
    },
    methods: {
        //获取我的接机
        getPickUp() {
            let _this = this;
            http.get("/utrack-reception/list").then(res => {
                if (res) {
                    _this.data = res[0];
                    console.log(res, "我的接机");
                }
            });
        }
    }
};
</script>
<style lang="scss">
@import "~/assets/css/accommodation.scss";
</style>