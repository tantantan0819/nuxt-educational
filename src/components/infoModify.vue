<template>
    <div class="modify modify_upload">
        <span class="cv_button modify_button" @click="dialogVisible=true">修改</span>
        <div class="add add_note">
            <el-dialog title :visible.sync="dialogVisible" :before-close="handleClose">
                <div class="add_title">修改</div>
                <div class="add_content">
                    <el-form
                        :model="modify"
                        status-icon
                        :rules="rules"
                        ref="modify"
                        label-width="300px"
                        label-position="top"
                    >
                        <el-form-item label="类别:" prop="note_type">
                            <el-select v-model="modify.note_type" class="widthAll" placeholder="类别">
                                <el-option
                                    v-for="(item,index) in select.noteType"
                                    :key="index"
                                    :label="item.cvalue_cn"
                                    :value="item.id"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="  " v-if="isShow" class="modfityTip">
                            <span>内容修改只可进行1次，修改件的返还时间为72小时</span>
                        </el-form-item>
                        <el-form-item label="备注:" prop="note_body" class="cvTextareaBox modifyText">
                            <el-input
                                type="textarea"
                                v-model="modify.note_body"
                                class="noteTextarea"
                                autocomplete="off"
                            ></el-input>

                        </el-form-item>
                        <el-form-item label="附件:" prop="note_files" class="upload_lang">
                          <upload-btn
                            :config="configuration"
                            v-on="{uploadFile: addFile}"
                          ></upload-btn>
                        </el-form-item>
                    </el-form>
                    <div class="footer_button">
                        <span @click="cancel('modify')">
                            <i>取消</i>
                        </span>
                        <span @click="submitForm('modify')">提交</span>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import http from "~/plugins/http";
import { getStore, setStore } from "~/plugins/utils";
import UploadBtn from "~/components/upload";
export default {
    props: ["type"],
    components: {UploadBtn},
    data() {
        return {
            postUrl: "", //提交地址
            titleMaxLength: 500, //文本域最大字数
            dialogVisible: false, //是否弹框
            configuration: {
                isShowList: true, //是否展示文件列表
                multiple: true, //是否允许多文件上传
                limit: 5, //上传文件的限制数量
                btnText: "上传", //上传按钮显示文字
                errorText: "请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!", //上传失败时的提示
                accept: ".jpg, .jpeg, .png, .pdf,.doc,.xls,.JPG, .JPEG, PNG, .PDF,.DOC,.XLS" //上传格式
            },
            flieBox: [],
            postData: {
                token: "",
                name: "",
                key: ""
            },
            tokenParams: {
                //请求token的参数
                bucket: "ukec",
                path: "upload/user",
                ext: ""
            },
            fileList: [],
            select: {
                noteType: []
            },
            modify: {
                note_type: "",
                note_body: "",
                note_files: [],
                page_type: ""
            },
            rules: {
                note_type: [
                    {
                        required: true,
                        message: "请选择你的修改类别",
                        trigger: "blur"
                    }
                ],
                note_body: [
                    {
                        required: true,
                        message: "请填写你的备注",
                        trigger: "blur"
                    }
                ],
                note_files: [
                    {
                        required: true,
                        message: "请上传你的附件",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    mounted() {
        let _this = this;
        switch (_this.type) {
            case "cv":
                _this.modify.page_type = "cv";
                break;
            case "CV":
                _this.modify.page_type = "cv";
                break;
            case "ps":
                _this.modify.page_type = "ps";
                break;
            case "个人陈述":
                _this.modify.page_type = "ps";
                break;
            case "letter":
                _this.modify.page_type = "res";
                break;
            case "推荐信":
                _this.modify.page_type = "res";
                break;
            default:
                _this.modify.page_type = "cv";
                break;
        }
        //获取类别下拉
        let noteType = getStore("noteType");
        if (noteType) {
            _this.select.noteType = noteType.NOTE_TYPE_CV;
            _this.modify.note_type = noteType.NOTE_TYPE_CV[0].id;
        } else {
            http.get("/code-val/group-key-list").then(res => {
                _this.select.noteType = res.NOTE_TYPE_CV;
                _this.modify.note_type = res.NOTE_TYPE_CV[0].id;
                setStore("noteType", res);
            });
        }
    },
    computed: {
        //当选中修改类型为’内容‘时提示：内容修改只可进行1次，修改件的返还时间为72小时
        isShow() {
            let flag = false;
            let contentId = "";
            this.select.noteType.map(item => {
                if (item.cvalue_cn == "内容") {
                    contentId = item.id;
                }
            });
            if (this.modify.note_type == contentId) {
                flag = !flag;
            }
            return flag;
        }
    },
    methods: {
        //上传文件监听
        addFile(val) {
            this.flieBox = val;
            console.log(val,'文件监听')
        },
        //关闭弹窗
        handleClose(done) {
            this.cancel("modify");
        },
        //取消弹框
        cancel(formName) {
            let _this = this;
            _this.$refs[formName].resetFields();
            _this.dialogVisible = false;
            _this.fileList = [];
            _this.flieBox = [];
        },

        //保存--提交表单
        submitForm(formName) {
            let _this = this;
            if (_this.flieBox.length == 0) {
                _this.modify.note_files = [];
            } else {
                _this.modify.note_files = [];
                _this.flieBox.map(item => {
                    _this.modify.note_files.push({
                        name: item.response.data.filename,
                        url: item.response.data.key
                    });
                });
            }
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    http.post("/customer-note/add", _this.modify).then(res => {
                        let successMsg = _this.$message({
                            message: "提交成功！",
                            type: "success"
                        });
                        setTimeout(() => {
                            successMsg.close();
                            _this.cancel(formName);
                        }, 1000);
                    });
                }
            });
        }
    }
};
</script>
