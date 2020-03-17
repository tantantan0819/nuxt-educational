<template>
    <div class="con">
        <div class="version_title">
            <span>我的申请</span>
        </div>
        <div class="apply">
            <div class="apply_table">
                <div class="apply_top">
                    <div class="apply_left apply_box">
                        <div class="apply_item">
                            <span>合同编号</span>
                            <span>20190321093849A1U1C10820RTCCH</span>
                        </div>
                    </div>
                    <div class="apply_right apply_box">
                        <div class="apply_item">
                            <span>合同类型</span>
                            <span>续签约</span>
                        </div>
                        <div class="apply_item">
                            <span>签约时间</span>
                            <span>2019-12-21</span>
                        </div>
                        <div class="apply_item">
                            <span>签约人</span>
                            <span>吴惠芳</span>
                        </div>
                        <div class="apply_item">
                            <span>入学时间</span>
                            <span>2020-03-13</span>
                        </div>
                        <div class="apply_item">
                            <span>最大申请方案数</span>
                            <span>5</span>
                        </div>
                    </div>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="tableData1"
                    tooltip-effect="dark"
                    style="width: 100%"
                >
                    <el-table-column prop="contract_no" label="申请院校"></el-table-column>
                    <el-table-column prop="sign_type" label="申请专业"></el-table-column>
                    <el-table-column prop="package_type" label="专业连接"></el-table-column>
                    <el-table-column prop="time1" label="申请专用邮箱"></el-table-column>
                    <el-table-column prop="encrol_date" label="申请结果"></el-table-column>
                    <el-table-column prop="course_type" label="是否接受"></el-table-column>
                    <el-table-column prop="course_type" label="申请档案号"></el-table-column>
                    <el-table-column prop="course_type" label="入学状态"></el-table-column>
                    <el-table-column prop="course_type" label="定校时间"></el-table-column>
                    <el-table-column prop="course_type" label="申请提交日期"></el-table-column>
                    <el-table-column prop="course_type" label="意向院校"></el-table-column>
                    <el-table-column label="操作" width="140">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="viewUpload(scope.$index, scope.row)"
                                class="table_btn"
                            >详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
              <div class="apply_table">
                <div class="apply_top">
                    <div class="apply_left apply_box">
                        <div class="apply_item">
                            <span>合同编号</span>
                            <span>20190321093849A1U1C10820RTCCH</span>
                        </div>
                    </div>
                    <div class="apply_right apply_box">
                        <div class="apply_item">
                            <span>合同类型</span>
                            <span>续签约</span>
                        </div>
                        <div class="apply_item">
                            <span>签约时间</span>
                            <span>2019-12-21</span>
                        </div>
                        <div class="apply_item">
                            <span>签约人</span>
                            <span>吴惠芳</span>
                        </div>
                        <div class="apply_item">
                            <span>入学时间</span>
                            <span>2020-03-13</span>
                        </div>
                        <div class="apply_item">
                            <span>最大申请方案数</span>
                            <span>5</span>
                        </div>
                    </div>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="tableData1"
                    tooltip-effect="dark"
                    style="width: 100%"
                >
                    <el-table-column prop="contract_no" label="申请院校"></el-table-column>
                    <el-table-column prop="sign_type" label="申请专业"></el-table-column>
                    <el-table-column prop="package_type" label="专业连接"></el-table-column>
                    <el-table-column prop="time1" label="申请专用邮箱"></el-table-column>
                    <el-table-column prop="encrol_date" label="申请结果"></el-table-column>
                    <el-table-column prop="course_type" label="是否接受"></el-table-column>
                    <el-table-column prop="course_type" label="申请档案号"></el-table-column>
                    <el-table-column prop="course_type" label="入学状态"></el-table-column>
                    <el-table-column prop="course_type" label="定校时间"></el-table-column>
                    <el-table-column prop="course_type" label="申请提交日期"></el-table-column>
                    <el-table-column prop="course_type" label="意向院校"></el-table-column>
                    <el-table-column label="操作" width="140">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="viewUpload(scope.$index, scope.row)"
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
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>课程类型</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请院校</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请专业</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请专用邮箱</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>邮箱密码</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请递交日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请结果</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请费</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>入学条件/拒绝理由</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请结果日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>学费</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>开学日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>押金截止日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>接受录取结果日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>押金缴纳时间</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>接受录取结果日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>奖学金</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>押金</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>主课CAS编号</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>主课CAS日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>UO</span>
                                <span></span>
                            </div>
                              <div class="plan_box">
                                <span>CO</span>
                                <span></span>
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
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>语言课程日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请递交日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请费</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请结果日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请结果</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>语言开课日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>语言节课日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>接受录取截止是日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>押金截止日期</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>接受录取时间</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>押金缴纳时间</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>押金</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>学费</span>
                                <span></span>
                            </div>
                              <div class="plan_box">
                                <span>语言CAS日期</span>
                                <span></span>
                            </div>
                              <div class="plan_box">
                                <span>语言CAS编号</span>
                                <span></span>
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
import UploadBtn from "~/components/upload";
export default {
    layout: "refactor",
    components: { UploadBtn },
    data() {
        return {
            applyShow: false, //是否展示查看申请详情弹框
            tableData1: [
                {
                    no: "20190321093849A1U1C10820RTCCH",
                    type: "续签约",
                    package: "套餐1",
                    time1: "2019-03-21",
                    time2: "2019-03-22",
                    course: "Pre-master",
                    num: "5"
                }
            ]
        };
    },
    methods: {
        //上传语言证书
        viewUpload(index, val) {
            let _this = this;
            _this.applyShow = true;
        }
    }
};
</script>
<style lang="scss">
@import "~/assets/css/apply.scss";
@import "~/assets/css/plan.scss";
</style>