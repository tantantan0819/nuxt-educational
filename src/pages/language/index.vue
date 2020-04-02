<template>
    <div class="plan con sign">
        <div class="version_title two_title">
            <span>语言成绩</span>
            <span @click="addShow = true">新增证书</span>
        </div>

        <div class="refactor_table">
            <el-table
                stripe
                ref="multipleTable"
                :data="langData"
                tooltip-effect="dark"
                style="width: 100%"
            >
                <el-table-column
                    prop="language_certificate"
                    label="考试类别"
                    width="300"
                    :formatter="typeFormat"
                ></el-table-column>
                <el-table-column prop="cert_date" label="考试日期"></el-table-column>
                <el-table-column prop="score" label="考试成绩"></el-table-column>
                <el-table-column prop="parts_score" label="小分"></el-table-column>
                <el-table-column label="文件" prop="file">
                    <template slot-scope="scope">
                        <a :href="scope.row.file" target="_blank">{{scope.row.file_name}}</a>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="file" label="文件"></el-table-column> -->
                <el-table-column prop="lang_note" label="备注"></el-table-column>
                <el-table-column label="操作" width="140">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="viewUpload(scope.$index, scope.row)"
                            class="table_btn"
                        >上传证书</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 语言成绩分页 -->
        <div class="lang_page">
            <el-pagination
                :hide-on-single-page="isHidden"
                layout="total,prev, pager, next"
                :total="langTotal"
                @current-change="handleCurrentChange"
            ></el-pagination>
        </div>

        <!-- 上传证书 -->
        <div class="add_note">
            <el-dialog :visible.sync="uploadShow" width="717px" center>
                <div class="add_title">上传证书</div>
                <div class="add_con">
                    <el-form :model="uploadForm" ref="uploadForm" :rules="uploadRules">
                        <el-form-item prop="file_name" label="上传证书" class="upload_lang">
                            <span class="unload_tip">仅支持jpg、png、pdf格式文件</span>
                            <el-input v-model="uploadForm.file_name" readonly></el-input>
                            <upload-btn
                                class="unload_btn"
                                :config="configuration"
                                v-on="{uploadFile: changeFile}"
                            ></upload-btn>
                        </el-form-item>
                    </el-form>
                    <div class="add_footer">
                        <span @click="uploadShow = false">取消</span>
                        <span @click="uploadSubmit('uploadForm')">确定</span>
                    </div>
                </div>
            </el-dialog>
        </div>
        <!-- 新增证书 -->
        <div class="add_note">
            <el-dialog :visible.sync="addShow" width="717px" center>
                <div class="add_title">新增证书</div>
                <div class="add_con">
                    <el-form :model="addForm" ref="addForm" :rules="addRules">
                        <el-form-item label="证书" prop="language_certificate">
                            <el-select
                                v-model="addForm.language_certificate"
                                placeholder="请选择您的证书类型"
                                class="widthAll"
                            >
                                <el-option
                                    :label="item.cvalue_cn"
                                    :value="item.id"
                                    v-for="(item,index) in langType"
                                    :key="index"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="考试日期" prop="cert_date">
                            <el-date-picker
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                placeholder="请选择您的考试日期"
                                v-model="addForm.cert_date"
                                class="widthAll"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item prop="score" label="成绩" placeholder="请填写您的证书成绩">
                            <el-input v-model="addForm.score"></el-input>
                        </el-form-item>
                        <el-form-item prop="file_name" label="上传文件" class="upload_lang">
                            <span class="unload_tip">如暂无文件，可后续再行上传。仅支持jpg、png、pdf格式文件</span>
                            <el-input v-model="addForm.file_name" readonly></el-input>
                            <upload-btn
                                class="unload_btn"
                                :config="configuration"
                                v-on="{uploadFile: addFile}"
                            ></upload-btn>
                        </el-form-item>
                        <el-form-item prop="parts_score" label="小分" placeholder="请填写您的小分">
                            <el-input v-model="addForm.parts_score"></el-input>
                        </el-form-item>
                        <el-form-item prop="lang_note" label="备注" placeholder="请填写您的备注">
                            <el-input v-model="addForm.lang_note"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="add_footer">
                        <span @click="cancelAdd('addForm')">取消</span>
                        <span @click="addSubmit('addForm')">确定</span>
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
import { getStore, setStore } from "~/plugins/utils";
import UploadBtn from "~/components/upload";
export default {
    layout: "refactor",
    components: { UploadBtn },
    data() {
        return {
            uploadShow: false, //是否展示上传证书弹框
            addShow: false, //是否展示新增语言证书弹框
            langTotal: 0, //语言成绩展示--数据总数
            page: 1, //语言成绩展示--第几页
            page_size: 10, //语言成绩展示--一页多少条数据
            isHidden: true, //语言成绩展示--只有一页时是否选择隐藏分页
            langData: [], //语言成绩table
            langType: [], //语言成绩类型
            configuration: {
                isShowList: false, //是否展示文件列表
                multiple: false, //是否允许多文件上传
                limit: null, //上传文件的限制数量
                btnText: "上传", //上传按钮显示文字
                errorText: "请上传PNG、JPG、PDF格式的文件!", //上传失败时的提示
                accept: ".jpg, .jpeg, .png, .pdf, .JPG, .JPEG, PNG, .PDF" //上传格式
            },
            uploadForm: {
                id: "",
                file: "",
                file_name: ""
            },
            uploadRules: {
                file_name: [
                    {
                        required: true,
                        message: "请上传证书",
                        trigger: "none"
                    }
                ]
            },
            addForm: {
                language_certificate: "", //证书类型
                score: "", //成绩
                cert_date: "", //考试日期
                parts_score: "", //小分
                lang_note: "", //备注
                file: "", //上传文件路径
                file_name: "" //上传文件名称
            },
            addRules: {
                language_certificate: [
                    {
                        required: true,
                        message: "请选择您的证书类型",
                        trigger: "blur"
                    }
                ],
                score: [
                    {
                        required: true,
                        message: "请填写您的证书成绩",
                        trigger: "blur"
                    }
                ],
                cert_date: [
                    {
                        required: true,
                        message: "请选择您的考试日期",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    mounted() {
        let _this = this;
        //获取语言成绩
        _this.getLang();
        //获取证书类别下拉
        let dictionary = getStore("dictionary");
        if (dictionary) {
            _this.langType = dictionary.LANGUAGE_CERTIFICATE;
        } else {
            http.get("/code-val/group-key-list").then(res => {
                _this.langType = res.LANGUAGE_CERTIFICATE;
                setStore("dictionary", res);
            });
        }
    },

    methods: {
        //语言成绩分页
        handleCurrentChange(val) {
            let _this = this;
            _this.page = val;
            _this.getLang();
        },
        //新增语言成绩--上传
        addFile(val) {
            let _this = this;
            if (val) {
                _this.addForm.file = val[val.length - 1].response.data.url;
                _this.addForm.file_name =
                    val[val.length - 1].response.data.filename;
            }
        },
        //上传语言成绩文件 -- 修改
        changeFile(val) {
            let _this = this;
            if (val) {
                _this.uploadForm.file = val[val.length - 1].response.data.url;
                _this.uploadForm.file_name =
                    val[val.length - 1].response.data.filename;
            }
        },
        //获取语言成绩
        getLang() {
            let _this = this;
            http.get("/customer-language/list", {
                page: _this.page,
                page_size: _this.page_size
            }).then(res => {
                if (res) {
                    _this.langData = res.rows;
                    _this.langTotal = Number(res.count);
                }
            });
        },
        //过滤语言成绩类型
        typeFormat(row, column) {
            let _this = this;
            let type = "";
            this.langType.map((item, index) => {
                if (item.id == Number(row.language_certificate)) {
                    type = item.cvalue_cn;
                }
            });
            return type;
        },
        //取消新增语言证书
        cancelAdd(formName) {
            this.$refs[formName].resetFields();
            this.addShow = false;
        },
        //取消上传证书
        cancelUpload(formName) {
            this.$refs[formName].resetFields();
            this.uploadShow = false;
        },
        //上传语言证书
        viewUpload(index, val) {
            let _this = this;
            _this.uploadForm.id = val.id;
            _this.uploadShow = true;
        },
        //提交上传语言证书
        uploadSubmit(formName) {
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    http.post(
                        "/customer-language/update",
                        _this.uploadForm
                    ).then(res => {
                        let successMsg = _this.$message({
                            message: "提交成功！",
                            type: "success"
                        });
                        setTimeout(() => {
                            successMsg.close();
                            _this.$refs[formName].resetFields();
                            _this.uploadShow = false;
                            _this.getLang();
                        }, 1000);
                    });
                }
            });
        },
        //提交新增语言证书
        addSubmit(formName) {
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    http.post("/customer-language/add", _this.addForm).then(
                        res => {
                            let successMsg = _this.$message({
                                message: "提交成功！",
                                type: "success"
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$refs[formName].resetFields();
                                _this.addShow = false;
                                _this.getLang();
                            }, 1000);
                        }
                    );
                }
            });
        }
    }
};
</script>