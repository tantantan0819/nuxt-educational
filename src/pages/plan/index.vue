<template>
    <div class="plan con">
        <div class="version_title two_title">
            <span>我的方案</span>
            <span>下载方案</span>
        </div>
        <div class="refactor_table">
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column type="index" label="序号" width="60"></el-table-column>
                <el-table-column prop="name" label="学生姓名" width="90"></el-table-column>
                <el-table-column prop="year" label="入学年份" width="90"></el-table-column>
                <el-table-column prop="score" label="平均分" width="70"></el-table-column>
                <el-table-column label="推荐院校">
                    <template slot-scope="scope">
                        <p>{{scope.row.school_en}}</p>
                        <p>{{scope.row.school}}</p>
                    </template>
                </el-table-column>
                <el-table-column label="专业名称">
                    <template slot-scope="scope">
                        <p>{{scope.row.major_en}}</p>
                        <p>{{scope.row.major}}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="location" label="地理位置" width="100"></el-table-column>
                <el-table-column prop="rank" label="英国排名" width="90"></el-table-column>
                <el-table-column prop="rank_world" label="世界排名" width="90"></el-table-column>
                <el-table-column prop="apply" label="申请费" width="70"></el-table-column>
                <el-table-column prop="free" label="学费" width="60"></el-table-column>
                <el-table-column prop="require" label="入学要求" width="90"></el-table-column>
                <el-table-column prop="score_require" label="平均分要求" width="100"></el-table-column>
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
                        <div class="plan_wrap">
                            <div class="plan_box">
                                <span>姓名</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>目前学历</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>毕业/就读院校</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>是否211</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>学校排名</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>毕业/就读专业学科</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>平均分(%)</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>就读年份</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>目标地区</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>目标城市</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>教育官员</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>联系方式</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>选择此专业的动机</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="plan_item">
                        <div class="plan_title">择校方案</div>
                        <div class="plan_wrap">
                            <div class="plan_box">
                                <span>目标学科</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>学校名</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>地理位置</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>英国排名</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>世界排名</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请专业</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>申请费</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>学费</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>教育顾问备注(推荐理由)</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>平均分要求</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>专业连接</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>入学要求</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span>核心课程</span>
                                <span></span>
                            </div>
                            <div class="plan_box">
                                <span></span>
                                <span></span>
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
export default {
    layout: "refactor",
    data() {
        return {
            planShow: false, //是否展示查看我的方案
            tableData: [
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    year: "2020",
                    score: "9.6",
                    school: "清华大学",
                    school_en: "qinghua",
                    major: "考古专业",
                    major_en: "kaogu",
                    location: "成都分中心",
                    rank: 10,
                    rank_world: 19,
                    apply: 2000,
                    free: 2000,
                    require: "要很努力",
                    score_require: "9"
                },
                 {
                    date: "2016-05-03",
                    name: "王小虎",
                    year: "2020",
                    score: "9.6",
                    school: "清华大学",
                    school_en: "qinghua",
                    major: "考古专业",
                    major_en: "kaogu",
                    location: "成都分中心",
                    rank: 10,
                    rank_world: 19,
                    apply: 2000,
                    free: 2000,
                    require: "要很努力",
                    score_require: "9"
                }
            ],
            multipleSelection: []
        };
    },

    methods: {
        //查看详情
        handleEdit(index, val) {
            console.log(val, "查看详情");
            this.planShow = true;
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
};
</script>