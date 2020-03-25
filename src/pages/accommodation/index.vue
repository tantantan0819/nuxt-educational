<template>
    <div class="plan con">
        <div class="version_title">
            <span>我的住宿</span>
        </div>
        <div class="accommodation">
            <div class="acc_item">
                <span>安排方式</span>
                <span>{{data.arrange_type | arrangeFilters}}</span>
            </div>
            <div class="acc_item">
                <span>住宿方式</span>
                <span>{{data.living_type | livingFilters}}</span>
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
                <span>{{data.pay_type | payFilters}}</span>
            </div>
            <div class="acc_item">
                <span>是否接受</span>
                <span>{{data.is_recepet | yesFilters}}</span>
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
import { getStore, setStore } from "~/plugins/utils";
let that;
export default {
    layout: "refactor",
    data() {
        return {
            data: {}, //住宿
            living_type: [], //住宿方式
            arrange_type: [], //安排方式
            pay_type: [], //付款方式
            yes_type: [] //是否接受
        };
    },
    beforeCreate() {
        that = this;
    },
    mounted() {
        //获取我的住宿
        this.getAccommodation();
        //获取字典
        this.getType();
    },
    filters: {
        arrangeFilters(val) {
            let type = "";
            that.arrange_type.map((item, index) => {
                if (item.id == val) {
                    type = item.cvalue_cn;
                }
            });
            return type;
        },
        livingFilters(val){
               let type = "";
            that.living_type.map((item, index) => {
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
        yesFilters(val){
                 let type = "";
            that.yes_type.map((item, index) => {
                if (item.id == val) {
                    type = item.cvalue_cn;
                }
            });
            return type;
        }
    },
    methods: {
        //获取字典
        getType() {
            let _this = this;
            let dictionary = getStore("dictionary");
            if (dictionary) {
                _this.living_type = dictionary.LIVING_TYPE;
                _this.arrange_type = dictionary.ARRANGE_TYPE;
                _this.pay_type = dictionary.PAY_TYPE;
                _this.yes_type = dictionary.YES_OR_NO;
            } else {
                http.get("/code-val/group-key-list").then(res => {
                    _this.living_type = res.LIVING_TYPE;
                    _this.arrange_type = res.ARRANGE_TYPE;
                    _this.pay_type = res.PAY_TYPE;
                    _this.yes_type = res.YES_OR_NO;
                    setStore("dictionary", res);
                });
            }
        },
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