<template>
    <div class="plan con sign">
        <div class="version_title">
            <span>我的签约</span>
        </div>
        <div class="refactor_table">
            <div class="sign_title">
                留学
                <br />合同
            </div>
            <el-table
                ref="multipleTable"
                :data="aboradTable"
                tooltip-effect="dark"
                style="width: 100%"
            >
                <el-table-column prop="contract_no" label="合同编号" width="300"></el-table-column>
                <el-table-column prop="sign_type" label="合同类型"></el-table-column>
                <el-table-column prop="package_type" label="套餐类型"></el-table-column>
                <el-table-column prop="created_at" label="签约时间"></el-table-column>
                <el-table-column prop="encrol_date_show_text" label="入学时间"></el-table-column>
                <el-table-column prop="course_type" label="课程类型"></el-table-column>
                <el-table-column prop="apply_num" label="院校申请方案数"></el-table-column>
                <el-table-column label="操作" width="140">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="viewAborad(scope.$index, scope.row)"
                            class="table_btn"
                        >详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="refactor_table">
            <div class="sign_title">
                签证
                <br />合同
            </div>
            <el-table
                ref="multipleTable"
                :data="visaTable"
                tooltip-effect="dark"
                style="width: 100%"
            >
                <el-table-column prop="contract_no" label="合同编号" width="300"></el-table-column>
                <el-table-column prop="sign_type" label="合同类型"></el-table-column>
                <el-table-column prop="invoice_number" label="InvoiceNumber"></el-table-column>
                <el-table-column prop="created_at" label="签约时间"></el-table-column>
                <el-table-column prop="sign_end_date" label="预计最迟递签时间"></el-table-column>
                <el-table-column prop="due_fee" label="应收服务费">
                    <template slot-scope="scope">
                        <p class="free">
                            <i v-if="scope.row.due_fee">￥</i>
                            {{scope.row.due_fee}}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column prop="sum_fee" label="实收服务费">
                    <template slot-scope="scope">
                        <p class="free">
                            <i v-if="scope.row.sum_fee">￥</i>
                            {{scope.row.sum_fee}}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="140">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="viewSign(scope.$index, scope.row)"
                            class="table_btn"
                        >详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 查看签证合同详情 -->
        <div class="add_note">
            <el-dialog :visible.sync="signShow" width="1024px" center>
                <div class="add_title">签证合同详情</div>
                <div class="add_con plan_add_plan sign_add_con aborad">
                    <div class="plan_item">
                        <div class="plan_wrap">
                            <div class="plan_box">
                                <span>合同编号</span>
                                <span>{{visaDetail.contract_no}}</span>
                            </div>
                            <div class="plan_box">
                                <span>所属部门</span>
                                <span>{{visaDetail.depart_name}}</span>
                            </div>
                            <div class="plan_box">
                                <span>收款方式</span>
                                <span>{{visaDetail.pay_type}}</span>
                            </div>
                            <div class="plan_box">
                                <span>合同类型</span>
                                <span>{{visaDetail.sign_type}}</span>
                            </div>
                            <div class="plan_box">
                                <span>签约类型</span>
                                <span>{{visaDetail.finance_id_project_cn}}</span>
                            </div>
                            <div class="plan_box">
                                <span>预计最迟递签日期</span>
                                <span>{{visaDetail.sign_end_date}}</span>
                            </div>

                            <div class="plan_box">
                                <span>应收服务费</span>
                                <span>{{visaDetail.due_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>实收服务费</span>
                                <span>{{visaDetail.sum_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>发票/收据号</span>
                                <span>{{visaDetail.contract_finance_no}}</span>
                               
                            </div>
                            <div class="plan_box">
                                <span>付款证明</span>
                                 <span><a :href="img_url+visaDetail.fee_file" target="_blank" v-if="visaDetail.fee_file">{{img_url+visaDetail.fee_file}}</a></span>
                            </div>
                            <div class="plan_box">
                                <span>备注</span>
                                <span>{{visaDetail.special_note}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="add_footer">
                        <span @click="signShow = false">取消</span>
                    </div>
                </div>
            </el-dialog>
        </div>
        <!-- 查看留学合同详情 -->
        <div class="add_note">
            <el-dialog :visible.sync="aboradShow" width="1024px" center>
                <div class="add_title">留学合同详情</div>
                <div class="add_con plan_add_plan aborad">
                    <div class="plan_item">
                        <div class="plan_wrap">
                            <div class="plan_box">
                                <span>客户姓名</span>
                                <span>{{aboradDetail.customer_name}}</span>
                            </div>
                            <div class="plan_box">
                                <span>所属部门</span>
                                <span>{{aboradDetail.depart_name}}</span>
                            </div>
                            <div class="plan_box">
                                <span>合同编号</span>
                                <span>{{aboradDetail.contract_no}}</span>
                            </div>
                            <div class="plan_box">
                                <span>合同类型</span>
                                <span>{{aboradDetail.sign_type}}</span>
                            </div>
                            <div class="plan_box">
                                <span>收款方式</span>
                                <span>{{aboradDetail.pay_type}}</span>
                            </div>
                            <div class="plan_box">
                                <span>课程类型</span>
                                <span>{{aboradDetail.course_type}}</span>
                            </div>

                            <div class="plan_box">
                                <span>申请方案数</span>
                                <span>{{aboradDetail.apply_num}}</span>
                            </div>
                            <div class="plan_box">
                                <span>DIY A套餐应收金额</span>
                                <span>{{aboradDetail.finance_id_due_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>DIY A套餐实收金额</span>
                                <span>{{aboradDetail.finance_id_sum_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>PS总数</span>
                                <span>{{aboradDetail.ps_number}}</span>
                            </div>
                            <div class="plan_box">
                                <span>应收总金额</span>
                                <span>{{aboradDetail.due_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>实收总金额</span>
                                <span>{{aboradDetail.sum_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>发票/收据号</span>
                                <span>{{aboradDetail.contract_finance_no}}</span>
                            </div>
                            <div class="plan_box">
                                <span>入学时间</span>
                                <span>{{aboradDetail.encrol_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>付款证明</span>
                                 <span><a :href="img_url+aboradDetail.fee_file" target="_blank" v-if="aboradDetail.fee_file">{{img_url+aboradDetail.fee_file}}</a></span>
                            </div>

                            <div class="plan_box">
                                <span>费用备注</span>
                                <span>{{aboradDetail.fee_note}}</span>
                            </div>
                            <div class="plan_box">
                                <span>特殊备注</span>
                                <span>{{aboradDetail.special_note}}</span>
                            </div>
                            <div class="plan_box">
                                <span>签约时间</span>
                                <span>{{aboradDetail.sign_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>折扣备注</span>
                                <span>{{aboradDetail.discount_note}}</span>
                            </div>
                            <div class="plan_box">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="add_footer">
                        <span @click="aboradShow = false">取消</span>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<style lang="scss">
@import "~/assets/css/plan.scss";
</style>
<script>
import http from "~/plugins/http";
import config from "~/plugins/config";
export default {
    layout: "refactor",
    data() {
        return {
            signShow: false, //是否展示签约合同详情
            aboradShow: false, //是否展示留学合同详情
            visaTable: [], //签证合同
            visaDetail: {}, //签证合同详情
            aboradTable: [], //留学合同（后台的签约管理）
            aboradDetail: {}, //留学合同详情
            service_id: 2, //请求
            img_url: "" //文件查看前缀
        };
    },
    mounted() {
        let _this = this;
        //获取留学合同（后台的签约管理）
        _this.getAborad();
        //获取签证合同
        _this.getSign();
          //文件查看前缀
        _this.img_url = config.view_host;
    },

    methods: {
        //获取留学合同（后台的签约管理）
        getAborad() {
            let _this = this;
            http.get("/contract/my-list").then(res => {
                if (res) {
                    _this.aboradTable = res;
                    console.log(res, "留学合同数据");
                }
            });
        },
        //获取签证合同
        getSign() {
            let _this = this;
            http.get("contract/my-list-visa").then(res => {
                if (res) {
                    _this.visaTable = res;
                    console.log(res, "签证合同");
                }
            });
        },
        //查看签约合同详情
        viewSign(index, val) {
            let _this = this;

            http.get("/contract/my-visa-detail", {
                id: val.id,
                service_id: _this.service_id
            }).then(res => {
                if (res) {
                    _this.visaDetail = res;
                    this.signShow = true;
                }
            });
        },
        //查看留学合同详情
        viewAborad(index, val) {
            let _this = this;
            http.get("/contract/my-detail", {
                id: val.id,
                service_id: _this.service_id
            }).then(res => {
                if (res) {
                    _this.aboradDetail = res;
                    _this.aboradShow = true;
                }
            });
        }
    }
};
</script>