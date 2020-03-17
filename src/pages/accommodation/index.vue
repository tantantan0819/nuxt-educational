<template>
    <div class="plan con">
        <div class="version_title">
            <span>我的住宿</span>
        </div>
        <div class="accommodation">
            <div class="acc_item">
                <span>安排方式</span>
                <span>{{data.arrange_type}}</span>
            </div>
            <div class="acc_item">
                <span>住宿方式</span>
                <span>{{data.living_type}}</span>
            </div>
            <div class="acc_item">
                <span>入住日期</span>
                <span>{{data.living_date}}</span>
            </div>
            <div class="acc_item">
                <span>申请费</span>
                <span>{{data.apply_fee}}</span>
            </div>
            <div class="acc_item">
                <span>押金</span>
                <span>{{data.deposit}}</span>
            </div>
            <div class="acc_item">
                <span>住宿费</span>
                <span>{{data.living_fee}}</span>
            </div>
            <div class="acc_item">
                <span>申请截止日期</span>
                <span>{{data.apply_end_date}}</span>
            </div>
            <div class="acc_item">
                <span>申请递交日期</span>
                <span>{{data.hand_apply_date}}</span>
            </div>
            <div class="acc_item">
                <span>收到书面确认日期</span>
                <span>{{data.recieve_confirm_date}}</span>
            </div>
            <div class="acc_item">
                <span>住宿付费日期</span>
                <span>{{data.pay_living_date}}</span>
            </div>
            <div class="acc_item">
                <span>收款方式</span>
                <span>{{data.pay_type}}</span>
            </div>
            <div class="acc_item">
                <span>是否接受</span>
                <span>{{data.is_recepet}}</span>
            </div>
            <div class="acc_item">
                <span>确认接受日期</span>
                <span>{{data.confirm_recept_date}}</span>
            </div>
            <div class="acc_item">
                <span>紧急联系人</span>
                <span>{{data.urge_contract_man}}</span>
            </div>
            <div class="acc_item">
                <span>紧急联系电话</span>
                <span>{{data.urge_contract_phone}}</span>
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
        //获取我的住宿
        this.getAccommodation();
    },
    methods: {
        //获取我的住宿
        getAccommodation() {
            let _this = this;
            http.get("/utrack-living/list").then(res => {
                if (res) {
                    _this.data = res[0];
                    console.log(res, "我的住宿");
                }
            });
        }
    }
};
</script>
<style lang="scss">
@import "~/assets/css/accommodation.scss";
</style>