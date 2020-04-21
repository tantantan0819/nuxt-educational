<template>
    <div class="cv_step2">
        <div class="title_box">
            <div class="cv_title">
                <p>教育背景</p>
                <span>请认真填写您空缺的资料，保存后不能修改，如需修改请联系您的顾问老师进行修改</span>
            </div>
            <div class="modify_wrap">
                <info-modify :type="modifyType"></info-modify>
                <span class="cv_button" @click="outerVisible=true">新增教育背景</span>
            </div>
        </div>
        <div class="cv_content cv2 centerTable">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column type="index" label="序号" width="74"></el-table-column>
                <el-table-column prop="admission_date" label="入学时间" width="150"></el-table-column>
                <el-table-column prop="graduaction_date" label="毕业时间" width="150"></el-table-column>
                <el-table-column prop="school_name" label="毕业/就读院校"></el-table-column>
                <el-table-column prop="majorname_cn" label="毕业/就读专业"></el-table-column>
                <el-table-column prop="qualification_name" label="学历" width="160"></el-table-column>
                <el-table-column prop="average_result" label="平均成绩" width="130"></el-table-column>
            </el-table>
        </div>
        <div class="cv_footer">
            <div class="footer_button">
                <span @click="prev">
                    <i>上一步</i>
                </span>
                <span @click="next">下一步</span>
            </div>
            <span class="next">请在退出前点击“下一步”按钮，您当前填写的信息可以被保存。</span>
        </div>
        <!--  新增教育背景  -->
        <div class="add add_note">
            <el-dialog title :visible.sync="outerVisible" class="school_dialog add">
                <div class="add_title">添加教育背景</div>
                <div class="add_content">
                    <el-form
                        :model="cvForm2"
                        status-icon
                        :rules="rules"
                        ref="cvForm2"
                        label-width="300px"
                        label-position="top"
                    >
                        <el-form-item label="入学时间" prop="admission_date">
                            <el-date-picker
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                placeholder="请输入您的入学时间"
                                v-model="cvForm2.admission_date"
                                class="widthAll"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item label="毕业时间" prop="graduaction_date">
                            <el-date-picker
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                placeholder="请输入您的毕业时间"
                                v-model="cvForm2.graduaction_date"
                                class="widthAll"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item label="毕业/就读院校" prop="school_name">
                            <el-input
                                v-model="cvForm2.school_name"
                                placeholder="请选择您的毕业/就读院校"
                                autocomplete="off"
                                readonly
                                @focus="innerVisible=true"
                            ></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="毕业/就读专业" prop="major_id">
                            <el-select
                                v-model="cvForm2.major_id"
                                class="widthAll"
                                placeholder="请选择您的毕业/就读专业"
                            >
                                <el-option
                                    v-for="(item,index) in select.major"
                                    :key="index"
                                    :label="item.major_name_cn"
                                    :value="item.id"
                                ></el-option>
                            </el-select>
                        </el-form-item>-->
                        <el-form-item label="毕业/就读专业" prop="majorname_cn">
                            <el-input
                                v-model="cvForm2.majorname_cn"
                                placeholder="请输入您的毕业/就读专业"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="学历" prop="qualification">
                            <el-select
                                v-model="cvForm2.qualification"
                                class="widthAll"
                                placeholder="请选择您的学历"
                            >
                                <el-option
                                    v-for="(item,index) in select.record"
                                    :key="index"
                                    :label="item.cvalue_cn"
                                    :value="item.id"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="平均成绩" prop="average_result">
                            <el-input
                                v-model="cvForm2.average_result"
                                placeholder="请输入您的平均成绩"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="footer_button">
                        <span @click="cancel('cvForm2')">
                            <i>取消</i>
                        </span>
                        <span @click="submitForm('cvForm2')">保存</span>
                    </div>
                </div>
                <div class="add_note">
                    <el-dialog
                        width="650px"
                        title
                        :visible.sync="innerVisible"
                        class="add_note"
                        append-to-body
                    >
                        <div class="add_title">学校列表</div>
                        <div class="add_content school_content">
                            <el-input
                                class="input-with-select"
                                placeholder="请输入搜索的学校名称"
                                v-model="search"
                                @keyup.enter.native="searchSchool"
                            >
                                <el-select
                                    v-model="state"
                                    slot="prepend"
                                    placeholder="请选择"
                                    @change="changeState"
                                >
                                    <el-option label="全部" value></el-option>
                                    <el-option
                                        v-for="(item,index) in select.state"
                                        :key="index"
                                        :label="item.country"
                                        :value="item.country"
                                    ></el-option>
                                </el-select>
                                <el-button
                                    slot="append"
                                    icon="el-icon-search"
                                    @click="searchSchool"
                                ></el-button>
                            </el-input>
                            <div class="school_table">
                                <el-table :data="schoolTable" stripe style="width: 100%">
                                    <el-table-column prop label="选择" width="70">
                                        <template slot-scope="scope">
                                            <el-radio
                                                v-model="selectSchool"
                                                :label="schoolTable[scope.$index].id"
                                                @change="handleEdit(scope.$index)"
                                                class="schoolRadio"
                                            ></el-radio>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="school_name" label="学校名称"></el-table-column>
                                    <el-table-column prop="country" label="所在地" width="150"></el-table-column>
                                </el-table>
                                <el-pagination
                                    :hide-on-single-page="isHidden"
                                    layout="total,prev, pager, next"
                                    :total="schoolTotal"
                                    @current-change="handleCurrentChange"
                                ></el-pagination>
                            </div>
                            <div class="footer_button">
                                <span @click="closeSchool">确定</span>
                            </div>
                        </div>
                    </el-dialog>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<style lang="scss">
@import "~/assets/css/cv.scss";
</style>
<script>
import http from "~/plugins/http";
import { getStore, setStore } from "~/plugins/utils";
import InfoModify from "~/components/infoModify";
export default {
    transition: "",
    layout: "refactor",
    components: { InfoModify },
    data() {
        return {
            modifyType: "cv", //修改类型
            outerVisible: false, //外层
            innerVisible: false, //内层
            state: "", //院校选择国家
            selectSchool: "", //选中的院校选择
            search: "", //院校选择搜索内容
            searchCon: "", //院校选择搜索内容
            schoolTable: [], //院校选择展示
            schoolTotal: 0, //院校选择总数
            nowSchool: 1, //院校选择分页
            pageSize: 10, //院校选择分页条数
            isHidden: true, //院校选择只有一页时是否选择隐藏分页
            select: {
                school: [], //学校下拉
                major: [], //专业下拉
                record: [], //学历下拉
                state: [] //国家下拉
            }, //下拉列表
            tableData: [], //table
            cvForm2: {
                school_name: "",
                admission_date: "",
                graduaction_date: "",
                school_id: "",
                // major_id: "",
                qualification: "",
                average_result: "",
                majorname_cn: ""
            }, //添加教育背景
            rules: {
                admission_date: [
                    {
                        required: true,
                        message: "请输入您的入学时间",
                        trigger: "blur"
                    }
                ],
                graduaction_date: [
                    {
                        required: true,
                        message: "请输入您的毕业时间",
                        trigger: "blur"
                    }
                ],
                school_id: [
                    {
                        required: true,
                        message: "请输入您的毕业/就读院校",
                        trigger: "blur"
                    }
                ],
                school_name: [
                    {
                        required: true,
                        message: "请输入您的毕业/就读院校",
                        trigger: "blur"
                    }
                ],
                majorname_cn: [
                    {
                        required: true,
                        message: "请输入您的毕业/就读专业",
                        trigger: "blur"
                    }
                ],
                qualification: [
                    {
                        required: true,
                        message: "请选择您的学历",
                        trigger: "blur"
                    }
                ],
                average_result: [
                    {
                        required: true,
                        message: "请输入您的平均成绩",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    mounted() {
        let _this = this;
        //获取教育背景列表
        _this.getEdu();
        //获取院校选择
        _this.schoolData();
        //获取毕业院校下拉
        let schoolList = getStore("schoolList");
        if (schoolList) {
            _this.select.school = schoolList;
        } else {
            http.get("/school-local/list").then(res => {
                _this.select.school = res.list;
                setStore("schoolList", res.list);
            });
        }
        //获取学历下拉
        http.get("/code-val/group-key-list").then(res => {
            _this.select.record = res.CURRENT_DEGREE;
        });
        //获取专业下拉
        http.get("/major-local/list").then(res => {
            _this.select.major = res.list;
            setStore("majorList", res.list);
        });
        //获取国家下拉
        let stateList = getStore("stateList");
        if (stateList) {
            _this.select.state = stateList;
        } else {
            http.get("/school-local/country", { showALL: 0 }).then(res => {
                _this.select.state = res;
                setStore("stateList", res);
            });
        }
    },
    methods: {
        //上一步
        prev() {
            this.$router.push("/writ/cv/step1");
        },
        //下一步
        next() {
            this.$router.push("/writ/cv/step3");
        },
        //取消
        cancel(formName) {
            this.$refs[formName].resetFields();
            this.outerVisible = false;
        },
        //取消学院
        closeSchool() {
            this.innerVisible = false;
        },
        //获取教育背景列表
        getEdu() {
            http.get("/customer-education/get-my-list").then(res => {
                this.tableData = res;
            });
        },
        //切换国家
        changeState(val) {
            let _this = this;
            _this.state = val;
            _this.schoolData();
        },
        //请求院校选择
        schoolData() {
            let _this = this;
            http.get(
                "/school-local/list?page=" +
                    _this.nowSchool +
                    "&pageSize=" +
                    _this.pageSize +
                    "&search[country]=" +
                    _this.state +
                    "&search[school_name]=" +
                    _this.search
            ).then(res => {
                if (res) {
                    _this.schoolTotal = Number(res.count);
                    _this.schoolTable = res.list;
                }
            });
        },
        //院校选择分页
        handleCurrentChange(val) {
            this.nowSchool = val;
            this.schoolData();
        },
        //院校选择
        handleEdit(val) {
            this.cvForm2.school_id = this.schoolTable[val].id;
            this.selectSchool = this.schoolTable[val].id;
            this.cvForm2.school_name = this.schoolTable[val].school_name;
            this.$refs["cvForm2"].validateField("school_name");
            this.search = "";
            this.innerVisible = false;
        },
        //搜索院校
        searchSchool() {
            this.nowSchool = 1;
            this.searchCon = this.search;
            this.schoolData();
        },
        //保存--提交表单
        submitForm(formName) {
            let _this = this;
            _this.cvForm2.qualification = _this.cvForm2.qualification + "";
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    http.post("/customer-education/add", _this.cvForm2).then(
                        res => {
                            let successMsg = _this.$message({
                                message: "提交成功！",
                                type: "success"
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$refs[formName].resetFields();
                                _this.outerVisible = false;
                                _this.getEdu();
                            }, 1000);
                        }
                    );
                }
            });
        }
    }
};
</script>
