<template>
    <div class="con">
        <div class="version_title">
            <span>我的申请</span>
        </div>
        <div class="apply">
            <div class="apply_table" v-for="(item,index) in contract" :key="index">
                <div class="apply_top">
                    <div class="apply_left apply_box">
                        <div class="apply_item">
                            <span>合同编号</span>
                            <span>{{item.contract_no}}</span>
                        </div>
                    </div>
                    <div class="apply_right apply_box">
                        <div class="apply_item">
                            <span>合同类型</span>
                            <span>{{item.course_type}}</span>
                        </div>
                        <div class="apply_item">
                            <span>签约时间</span>
                            <span>{{item.sign_date}}</span>
                        </div>
                        <div class="apply_item">
                            <span>签约人</span>
                            <span>{{item.sign_uid}}</span>
                        </div>
                        <div class="apply_item">
                            <span>入学时间</span>
                            <span>{{item.encrol_date_apply_show}}</span>
                        </div>
                        <div class="apply_item">
                            <span>最大申请方案数</span>
                            <span>{{item.apply_num}}</span>
                        </div>
                    </div>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="item.apply_arr"
                    tooltip-effect="dark"
                    style="width: 100%"
                >
                    <el-table-column prop="university_cn" label="申请院校" width="140"></el-table-column>
                    <el-table-column prop="apply_course_name_cn" label="申请专业" width="110"></el-table-column>
                    <el-table-column prop="apply_major_url" label="专业连接">
                        <template slot-scope="scope">
                            <a
                                :href="scope.row.专业链接"
                                target="_blank"
                            >{{scope.row.专业链接}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="申请专用邮箱" label="申请专用邮箱" width="180"></el-table-column>
                    <el-table-column prop="申请结果" label="申请结果" width="90"></el-table-column>
                    <el-table-column prop="是否接受" label="是否接受" width="90"></el-table-column>
                    <el-table-column prop="申请档案号" label="申请档案号" width="230"></el-table-column>
                    <el-table-column prop="入学状态" label="入学状态" width="90"></el-table-column>
                    <el-table-column prop="定校时间" label="定校时间" width="90"></el-table-column>
                    <el-table-column prop="申请提交日期" label="申请提交日期"></el-table-column>
                    <el-table-column prop="意向院校" label="意向院校"></el-table-column>
                    <el-table-column label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="viewApply(scope.$index, scope.row)"
                                class="table_btn"
                            >详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!-- <upload-btn></upload-btn> -->
        <!-- 查看申请详情 -->
        <div class="add_note">
            <el-dialog :visible.sync="applyShow" width="1024px" center>
                <div class="add_title">申请详情</div>
                <div class="add_con plan_add_plan">
                    <div class="plan_item">
                        <div class="plan_title">主课申请</div>
                        <div class="plan_wrap">
                            <div class="plan_box">
                                <span>方案号</span>
                                <span>{{apply.scheme_no}}</span>
                            </div>
                            <div class="plan_box">
                                <span>课程类型</span>
                                <span>{{apply.apply_course_type}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请院校</span>
                                <span>{{apply.university_cn}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请专业</span>
                                <span>{{apply.major_cn}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请专用邮箱</span>
                                <span>{{apply.apply_special_email}}</span>
                            </div>
                            <div class="plan_box">
                                <span>邮箱密码</span>
                                <span>{{apply.apply_special_password}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请递交日期</span>
                                <span>{{apply.net_submit_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请结果</span>
                                <span>{{apply.result_offer}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请费</span>
                                <span>{{apply.apply_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>入学条件/拒绝理由</span>
                                <span>{{apply.result_con}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请结果日期</span>
                                <span>{{apply.record_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>学费</span>
                                <span>{{apply.tuition_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>开学日期</span>
                                <span>{{apply.school_open_time}}</span>
                            </div>
                            <div class="plan_box">
                                <span>押金截止日期</span>
                                <span>{{apply.deposit_end_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>接受录取结果日期</span>
                                <span>{{apply.accept_result_end_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>押金缴纳时间</span>
                                <span>{{apply.deposit_amount_pay_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>接受录取时间</span>
                                <span>{{apply. school_confirm_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>奖学金</span>
                                <span>{{apply.scholarship}}</span>
                            </div>
                            <div class="plan_box">
                                <span>押金</span>
                                <span>{{apply.deposit_amount}}</span>
                            </div>
                            <div class="plan_box">
                                <span>主课CAS编号</span>
                                <span>{{apply.cas_no}}</span>
                            </div>
                            <div class="plan_box">
                                <span>主课CAS日期</span>
                                <span>{{apply.recept_cas_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>UO</span>
                                <span>
                                    <a :href="img_url+apply.UO图片" target="_blank">
                                        <img :src="img_url+apply.UO图片" alt />
                                    </a>
                                </span>
                            </div>
                            <div class="plan_box">
                                <span>CO</span>
                                <span>
                                    <a :href="img_url+apply.CO图片" target="_blank">
                                        <img :src="img_url+apply.CO图片" alt />
                                    </a>
                                </span>
                            </div>
                            <div class="plan_box">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="plan_item">
                        <div class="plan_title">语言申请</div>
                        <div class="plan_wrap">
                            <div class="plan_box">
                                <span>语言课程</span>
                                <span>{{apply.language_course}}</span>
                            </div>
                            <div class="plan_box">
                                <span>语言课程日期</span>
                                <span>{{apply.language_course_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请递交日期</span>
                                <span>{{apply.apply_submit_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请费</span>
                                <span>{{apply.language_apply_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请结果日期</span>
                                <span>{{apply.apply_result_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请结果</span>
                                <span>{{apply.apply_result}}</span>
                            </div>
                            <div class="plan_box">
                                <span>语言开课日期</span>
                                <span>{{apply.school_satrt_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>语言结课日期</span>
                                <span>{{apply.school_end_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>接受录取截止日期</span>
                                <span>{{apply.accept_save_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>押金截止日期</span>
                                <span>{{apply.foregift_end_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>接受录取时间</span>
                                <span>{{apply.accept_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>押金缴纳时间</span>
                                <span>{{apply.foregift_pay_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>押金</span>
                                <span>{{apply.foregift_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>学费</span>
                                <span>{{apply.school_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>语言CAS日期</span>
                                <span>{{apply.language_cas_date}}</span>
                            </div>
                            <div class="plan_box">
                                <span>语言CAS编号</span>
                                <span>{{apply.language_cas_number}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="add_footer">
                        <span @click="applyShow = false">关闭</span>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import http from "~/plugins/http";
import config from "~/plugins/config";
import { getStore, setStore } from "~/plugins/utils";
import UploadBtn from "~/components/upload";

export default {
    layout: "refactor",
    components: { UploadBtn },
    data() {
        return {
            applyShow: false, //是否展示查看申请详情弹框
            contract: [], //申请列表
            apply: {}, //申请详情
            img_url: "" //文件查看前缀
        };
    },
    mounted() {
        let _this = this;
        //获取申请列表
        _this.getApply();
        //文件查看前缀
        _this.img_url = config.view_host;
    },
    methods: {
        //查看详情
        viewApply(index, val) {
            let _this = this;
            http.get("/utrack-apply-school/detail", {
                id: val.id
            }).then(res => {
                if (res) {
                    _this.apply = res;
                    _this.applyShow = true;
                    console.log(_this.apply,'详情')
                }
            });
        },
        //获取申请列表
        getApply() {
            let _this = this;
            http.get("/utrack-apply-school/list").then(res => {
                if (res) {
                    _this.contract = res;
                }
            });
        }
    }
};
</script>
<style lang="scss">
@import "~/assets/css/apply.scss";
@import "~/assets/css/plan.scss";
</style>