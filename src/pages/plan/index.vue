<template>
    <div class="plan con">
        <div class="version_title two_title">
            <span>我的方案</span>
            <span @click="upload">下载方案</span>
        </div>
        <div class="refactor_table">
            <el-table
                ref="multipleTable"
                :data="planData"
                tooltip-effect="dark"
                style="width:100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column type="index" label="序号" width="60"></el-table-column>
                <el-table-column label="学生姓名" width="90" prop="user_info.stu_name"></el-table-column>
                <el-table-column label="入学年份" width="90" prop="user_info.begin_year"></el-table-column>
                <el-table-column label="平均分" width="70" prop="user_info.avg_score"></el-table-column>
                <el-table-column label="推荐院校" prop="大学名称" width="240">
                     <template slot-scope="scope">
                        <p class="school_text">
                            {{scope.row.大学名称}}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column label="专业名称" prop="mj_name" width="240">
                       <template slot-scope="scope">
                        <p class="school_text">
                            {{scope.row.mj_name}}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column prop="大学地址" label="地理位置" width="100"></el-table-column>
                <el-table-column prop="排名" label="英国排名" width="90"></el-table-column>
                <el-table-column prop="QS排名" label="世界排名" width="90"></el-table-column>
                <el-table-column prop="mj_apply" label="申请费" width="70">
                    <template slot-scope="scope">
                        <p class="free">
                            <i v-if="scope.row.mj_apply">￥</i>
                            {{scope.row.mj_apply}}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column prop="mj_fee" label="学费" width="90">
                    <template slot-scope="scope">
                        <p class="free">
                            <i v-if="scope.row.mj_fee">￥</i>
                            {{scope.row.mj_fee}}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column prop="intl" label="入学要求">
                    <template slot-scope="scope">
                        <p class="avg_core">{{scope.row.intl}}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="avg_core" label="平均分要求" width="100"></el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)"
                            class="table_btn"
                        >详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 查看方案详情 -->
        <div class="add_note">
            <el-dialog :visible.sync="planShow" width="1024px" center>
                <div class="add_title">方案详情</div>
                <div class="add_con plan_add_plan">
                    <div class="plan_item">
                        <div class="plan_title">基本信息</div>
                        <div class="plan_wrap plan_wrapper">
                            <div class="plan_box">
                                <span>姓名</span>
                                <span>{{planDetail.user_info.stu_name || ''}}</span>
                            </div>
                            <div class="plan_box">
                                <span>目前学历</span>
                                <span>{{planDetail.user_info.education}}</span>
                            </div>
                            <div class="plan_box">
                                <span>毕业/就读院校</span>
                                <span>{{planDetail.user_info.毕业学校}}</span>
                            </div>
                            <div class="plan_box">
                                <span>是否211</span>
                                <span>{{planDetail.user_info.school_type | isYes}}</span>
                            </div>
                            <div class="plan_box">
                                <span>学校排名</span>
                                <span>{{planDetail.user_info.school_rank}}</span>
                            </div>
                            <div class="plan_box">
                                <span>毕业/就读专业学科</span>
                                <span>{{planDetail.user_info.毕业就读专业}}</span>
                            </div>
                            <div class="plan_box">
                                <span>平均分(%)</span>
                                <span>{{planDetail.user_info.avg_score}}</span>
                            </div>
                            <div class="plan_box">
                                <span>就读年份</span>
                                <span>{{planDetail.user_info.begin_year}}</span>
                            </div>
                            <div class="plan_box">
                                <span>目标地区</span>
                                <span>{{planDetail.user_info.target_area}}</span>
                            </div>
                            <div class="plan_box">
                                <span>目标城市</span>
                                <span>{{planDetail.user_info.target_city}}</span>
                            </div>
                            <div class="plan_box">
                                <span>教育官员</span>
                                <span>{{planDetail.user_info.educrat}}</span>
                            </div>
                            <div class="plan_box">
                                <span>联系方式</span>
                                <span>{{planDetail.user_info.link}}</span>
                            </div>
                            <div class="plan_box width_box">
                                <span>选择此专业的动机</span>
                                <span>{{planDetail.user_info.moto}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="plan_item">
                        <div class="plan_title">择校方案</div>
                        <div class="plan_wrap plan_wrapper">
                            <div class="plan_box">
                                <span>目标学科</span>
                                <span>{{planDetail.user_info.目标学科}}</span>
                            </div>
                            <div class="plan_box">
                                <span>学校名</span>
                                <span>{{planDetail.大学名称}}</span>
                            </div>
                            <div class="plan_box">
                                <span>地理位置</span>
                                <span>{{planDetail.大学地址}}</span>
                            </div>
                            <div class="plan_box">
                                <span>英国排名</span>
                                <span>{{planDetail.排名}}</span>
                            </div>
                            <div class="plan_box">
                                <span>世界排名</span>
                                <span>{{planDetail.QS排名}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请专业</span>
                                <span>{{planDetail.mj_name}}</span>
                            </div>
                            <div class="plan_box">
                                <span>申请费</span>
                                <span>{{planDetail.mj_apply}}</span>
                            </div>
                            <div class="plan_box">
                                <span>学费</span>
                                <span>{{planDetail.mj_fee}}</span>
                            </div>
                            <div class="plan_box">
                                <span>教育顾问备注(推荐理由)</span>
                                <span>{{planDetail.recommend_reason}}</span>
                            </div>
                            <div class="plan_box">
                                <span>平均分要求</span>
                                <span>{{planDetail.avg_core}}</span>
                            </div>
                            <div class="plan_box">
                                <span>专业连接</span>
                                <span>
                                    <a :href="planDetail.url">{{planDetail.url}}</a>
                                </span>
                            </div>
                            <div class="plan_box">
                                <span></span>
                                <span></span>
                            </div>
                            <div class="plan_box width_box">
                                <span>入学要求</span>
                                <span>{{planDetail.intl}}</span>
                            </div>
                            <div class="plan_box width_box">
                                <span>核心课程</span>
                                <span>{{planDetail.mj_core}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="add_footer">
                        <span @click="planShow = false">取消</span>
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
import uhttp from "~/plugins/uhttp";
import { getStore, setStore } from "~/plugins/utils";
export default {
    layout: "refactor",
    data() {
        return {
            planShow: false, //是否展示查看我的方案
            planData: [], //方案信息
            uploadArr: [], //下载方案
            uploadHref: "", //下载路径
            user_id: "", //用户id
            planDetail: {
                user_info: {
                    stu_name: "",
                    education: "",
                    大学名称: ""
                }
            } //方案详情
        };
    },
    mounted() {
        let _this = this;
        //获取方案列表
        _this.getPlan();
        uhttp.get("/user/detail").then(res => {
            if (res) {
                _this.user_id = res.id;
            }
        });
    },
    filters: {
        isYes(val) {
            let result = "";
            if (val) {
                val == "0" ? (result = "否") : (result = "是");
            }
            return result;
        }
    },
    methods: {
        //下载方案
        upload() {
            let _this = this;
            if (_this.uploadArr.length > 0) {
                let idArr = _this.uploadArr.join(",");
                _this.uploadHref = "http://apicn.portal.my/down-file/down?ids="+idArr+'&id='+_this.user_id;
                window.open(_this.uploadHref);
                //尝试处理二进制流文件
                // http.get("/down-file/down", {
                //     id: _this.user_id,
                //     ids: idArr
                // }).then(res => {
                //     if (res) {
                //         var blob = new Blob([res], { type: "text/plain,charset=UTF-8," });
                //         blob = new String(blob.getBytes("iso-885901"),"GBK");
                //         let objectUrl = window.URL.createObjectURL(blob); //
                //         let link = document.createElement('a');
                //         link.style.display = "none";
                //         link.href = objectUrl;
                //         link.setAttribute('download','test.doc');
                //         document.body.appendChild(link);
                //         link.click();
                //         // window.location.href = objectUrl; //
                //         // console.log(blob);
                //     }
                // });
            } else {
                _this.$message.warning("请先选择您要下载的方案！");
            }
        },
        //获取方案列表
        getPlan() {
            let _this = this;
            http.get("/utrack-school-plan/list").then(res => {
                if (res) {
                    _this.planData = res.major;
                }
            });
        },
        //查看详情
        handleEdit(index, val) {
            let id = val.id;
            let _this = this;
            http.get("/utrack-school-plan/detail", { id: id }).then(res => {
                if (res) {
                    _this.planDetail = res.major[0];
                    _this.planShow = true;
                }
            });
        },
        handleSelectionChange(val) {
            let _this = this;
            _this.uploadArr = [];
            if (val.length > 0) {
                val.map(item => {
                    _this.uploadArr.push(item.id);
                });
            }
        }
    }
};
</script>