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
            <div class="visa_table_box">
                <el-table
                    stripe
                    ref="multipleTable"
                    :data="apply"
                    tooltip-effect="dark"
                    style="width: 100%"
                >
                    <el-table-column prop="签证类型" label="签证类型" width="280"></el-table-column>
                    <el-table-column prop="肺结核检测日期" label="肺结核检查日期"></el-table-column>
                    <el-table-column prop="存款日期" label="存款日期"></el-table-column>
                    <el-table-column prop="递签地点" label="递签地点"></el-table-column>
                    <el-table-column prop="递签日期" label="递签日期"></el-table-column>
                    <el-table-column prop="获签日期" label="获签日期"></el-table-column>
                    <el-table-column prop="submit_voucher_file" label="签证递交凭证">
                        <template slot-scope="scope">
                            <a
                                v-if="scope.row.submit_voucher_file"
                                :href="img_url+scope.row.submit_voucher_file"
                                target="_blank"
                            >{{img_url+scope.row.submit_voucher_file}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="cas_file" label="CAS">
                        <template slot-scope="scope">
                            <a
                                v-if="scope.row.cas_file"
                                :href="img_url+scope.row.cas_file"
                                target="_blank"
                            >{{img_url+scope.row.cas_file}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="备注" label="备注"></el-table-column>
                </el-table>
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
                        <div
                            class="visa_con"
                            :class="{'active':item.material_lists.length>1}"
                            v-else
                        >
                            <div
                                class="visa_center"
                                v-for="(item2,index2) in item.material_lists"
                                :key="index2"
                            >
                                <span>{{item2.material_name}}</span>
                                <span>
                                    <a
                                        :href="img_url+item2.file_url"
                                        target="_blank"
                                    >{{item2.origin_name}}</a>
                                </span>
                                <span>{{item2.create_time}}</span>
                                <span>{{item2.创建人}}</span>
                                <span>{{item2.material_status}}</span>
                                <span>{{item2.check_time}}</span>
                            </div>
                        </div>
                        <div class="visa_right">
                            <span
                                class="visa_btn"
                                style="width:65px"
                                @click="add(item.id)"
                                v-if="item.isMultiple ||item.material_lists.length<1"
                            >新增</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 添加材料 -->
        <div class="add_note">
            <el-dialog :visible.sync="addShow" width="717px" center>
                <div class="add_title">增加</div>
                <div class="add_con">
                    <el-form :model="addForm" ref="addForm" :rules="addRules">
                        <el-form-item prop="material_name" label="材料名称">
                            <el-input v-model="addForm.material_name" placeholder="请填写您的材料名称"></el-input>
                        </el-form-item>
                        <el-form-item prop="origin_name" label="文件" class="upload_lang">
                            <el-input
                                v-model="addForm.origin_name"
                                readonly
                                placeholder="请上传您的材料文件"
                            ></el-input>
                            <upload-btn
                                class="unload_btn"
                                :config="configuration"
                                v-on="{uploadFile: addFile}"
                            ></upload-btn>
                        </el-form-item>
                        <el-form-item label="是否隐藏" prop="is_private">
                            <el-select
                                v-model="addForm.is_private"
                                placeholder="请选择是否隐藏"
                                class="widthAll"
                            >
                                <el-option label="是" value="1"></el-option>
                                <el-option label="否" value="0"></el-option>
                            </el-select>
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
<script>
import http from "~/plugins/http";
import { getStore, setStore, timeDetail2 } from "~/plugins/utils";
import config from "~/plugins/config";
import UploadBtn from "~/components/upload";
let that;
export default {
    layout: "refactor",
    components: { UploadBtn },
    data() {
        return {
            addShow: false, //添加材料
            visa: [], //我的签证
            apply: [], //签证申请
            type: [], //签证类型
            status: [], //审核状态
            img_url: "", //文件查看前缀
            multipleFile: ["身份证", "英国签证卡", "学位证毕业证", "成绩单"], //多文件---不是多文件在已有文件时隐藏新增按钮
            addForm: {
                origin_name: "", //材料原始名称
                material_name: "", //材料名称
                file_url: "", //文件路径
                is_private: "", //是否隐藏
                material_id: "" //材料类型
            },
            addRules: {
                material_name: [
                    {
                        required: true,
                        message: "请填写您的材料名称",
                        trigger: "blur"
                    }
                ],
                origin_name: [
                    {
                        required: true,
                        message: "请上传您的材料文件",
                        trigger: "blur"
                    }
                ],
                is_private: [
                    {
                        required: true,
                        message: "请选择文件是否隐藏",
                        trigger: "blur"
                    }
                ]
            },
            configuration: {
                isShowList: false, //是否展示文件列表
                multiple: false, //是否允许多文件上传
                limit: null, //上传文件的限制数量
                btnText: "上传", //上传按钮显示文字
                errorText: "", //上传失败时的提示
                accept: "" //上传格式
            }
        };
    },
    beforeCreate() {
        that = this;
    },
    mounted() {
        let _this = this;
        //获取签证申请
        _this.getVisaApply();
        //获取我的签证
        _this.getMyVisa();
        //获取签证类型
        _this.getType();
        //文件查看前缀
        _this.img_url = config.view_host;
    },
    methods: {
        //新增语言成绩--上传
        addFile(val) {
            let _this = this;
            if (val) {
                _this.addForm.file_url = val[val.length - 1].response.data.url;
                _this.addForm.origin_name =
                    val[val.length - 1].response.data.filename;
            }
        },
        //取消添加材料
        cancelAdd(formName) {
            this.$refs[formName].resetFields();
            this.addShow = false;
        },
        //获取签证类型
        getType() {
            let _this = this;
            let dictionary = getStore("dictionary");
            if (dictionary) {
                _this.type = dictionary.VISA_TYPE;
                _this.status = dictionary.MATERIAL_STATUS;
            } else {
                http.get("/code-val/group-key-list").then(res => {
                    _this.type = res.VISA_TYPE;
                    _this.status = res.MATERIAL_STATUS;
                    setStore("dictionary", res);
                });
            }
        },
        //过滤签证类型
        typeFormat(row, column) {
            let type = "";
            this.type.map((item, index) => {
                if (item.id == Number(row.visa_type)) {
                    type = item.cvalue_cn;
                }
            });
            return type;
        },
        //获取签证申请
        getVisaApply() {
            let _this = this;
            http.get("/utrack-visa/my-list").then(res => {
                if (res) {
                    _this.apply = res;
                }
            });
        },
        //获取我的签证
        getMyVisa() {
            let _this = this;
            http.get("/customer-material/visa-list?service_id=2").then(res => {
                if (res) {
                    _this.visa = res;
                    _this.visa.map(item => {
                        let isFlg = false;
                        _this.multipleFile.map(item2 => {
                            if (item2 == item.materialname_cn) {
                                isFlg = true;
                            }
                        });
                        item.isMultiple = isFlg;
                    });
                }
            });
        },
        //提交新增语言证书
        addSubmit(formName) {
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    http.post("/customer-material/add", _this.addForm).then(
                        res => {
                            let successMsg = _this.$message({
                                message: "提交成功！",
                                type: "success"
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$refs[formName].resetFields();
                                _this.addShow = false;
                                _this.getMyVisa();
                            }, 1000);
                        }
                    );
                }
            });
        },
        //新增按钮
        add(id) {
            let _this = this;
            _this.addForm.material_id = id;
            _this.addShow = true;
        }
    }
};
</script>
<style lang="scss">
@import "~/assets/css/accommodation.scss";
@import "~/assets/css/visa.scss";
</style>