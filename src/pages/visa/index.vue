<template>
    <div class="plan con">
        <div class="version_title">
            <span>我的签证</span>
        </div>
        <div class="accommodation accommodation_no visa_table">
            <div class="sign_title">
                签证
                <br />申请
            </div>
            <div class="acc_item">
                <span>签证类型</span>
                <span>eeee</span>
            </div>
            <div class="acc_item">
                <span>肺结核检查日期</span>
                <span></span>
            </div>
            <div class="acc_item">
                <span>存款日期</span>
                <span></span>
            </div>
            <div class="acc_item">
                <span>递签地点</span>
                <span></span>
            </div>
            <div class="acc_item">
                <span>递签日期</span>
                <span></span>
            </div>
            <div class="acc_item">
                <span>获签日期</span>
                <span></span>
            </div>
            <div class="acc_item">
                <span>签证递交凭证</span>
                <span></span>
            </div>
            <div class="acc_item">
                <span>CAS</span>
                <span></span>
            </div>
            <div class="acc_item">
                <span>备注</span>
                <span></span>
            </div>
        </div>
        <div class="visa_table">
            <div class="sign_title">
                我的
                <br />签证
            </div>
            <div class="visa_box">
                <div class="visa_item visa_top">
                    <div class="visa_left">类型</div>
                    <div class="visa_con">
                        <div class="visa_center">
                            <span>材料名称</span>
                            <span>文件</span>
                            <span>上传时间</span>
                            <span>上传人</span>
                            <span>审核状态</span>
                            <span>审核时间</span>
                        </div>
                    </div>
                    <div class="visa_right">操作</div>
                </div>
                <div class="visa_con">
                    <div class="visa_item" v-for="(item,index) in visa" :key="index">
                        <div class="visa_left">{{item.materialname_cn}}</div>
                          <div class="visa_con" v-if="item.material_lists.length==0">
                            <div class="visa_center">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="visa_con" :class="{'active':item.material_lists.length>1}" v-for="(item2,index2) in item.material_lists" :key="index2" v-else>
                            <div class="visa_center">
                                <span>{{item2.material_name}}</span>
                                <span>xx文件</span>
                                <span>{{item2.create_time}}</span>
                                <span>ttttttt</span>
                                <span>{{item2.material_status}}</span>
                                <span>2019-03-21</span>
                            </div>
                        </div>
                        
                        <div class="visa_right">
                            <span class="visa_btn" style="width:65px">新增</span>
                        </div>
                    </div>
                    <!-- <div class="visa_item active">
                        <div class="visa_left">护照</div>
                        <div class="visa_con">
                            <div class="visa_center">
                                <span>续签约</span>
                                <span>xx文件</span>
                                <span>2019-03-21</span>
                                <span>ttttttt</span>
                                <span>待审核</span>
                                <span>2019-03-21</span>
                            </div>
                             <div class="visa_center">
                                <span>续签约</span>
                                <span>xx文件</span>
                                <span>2019-03-21</span>
                                <span>ttttttt</span>
                                <span>待审核</span>
                                <span>2019-03-21</span>
                            </div>
                        </div>
                        <div class="visa_right">
                            <span class="visa_btn" style="width:65px">新增</span>
                        </div>
                    </div>
                    <div class="visa_item">
                        <div class="visa_left">护照</div>
                        <div class="visa_con">
                            <div class="visa_center">
                                <span>续签约</span>
                                <span>xx文件</span>
                                <span>2019-03-21</span>
                                <span>ttttttt</span>
                                <span>待审核</span>
                                <span>2019-03-21</span>
                            </div>
                        </div>
                        <div class="visa_right">
                            <span class="visa_btn" style="width:65px">新增</span>
                        </div>
                    </div> -->
                </div>
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
            visa: [] //我的签证
        };
    },
    mounted() {
        let _this = this;
        //获取签证申请
        _this.getVisaApply();
        //获取我的签证
        _this.getMyVisa();
    },
    methods: {
        //获取签证申请
        getVisaApply() {
            let _this = this;
            http.get("/utrack-visa/my-list").then(res => {
                if (res) {
                    console.log(res, "签证申请");
                }
            });
        },
        //获取我的签证
        getMyVisa() {
            let _this = this;
            http.get("/customer-material/visa-list?service_id=2").then(res => {
                if (res) {
                    _this.visa = res;
                    console.log(res, "我的签证");
                }
            });
        },
        //新增
        add(index, val) {}
    }
};
</script>
<style lang="scss">
@import "~/assets/css/accommodation.scss";
@import "~/assets/css/visa.scss";
</style>