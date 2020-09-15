<template>
    <div class="upload">
        <el-upload
            class="upload-demo"
            :action="qiniu_url"
            :data="postData"
            :before-upload="beforUpload"
            :on-success="successUpload"
            :on-remove="handleRemove"
            :show-file-list="configuration.isShowList"
            :limit="configuration.limit"
            :multiple ="configuration.multiple"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :on-error="uploadError"
            :accept="configuration.accept"
        >{{configuration.btnText}}</el-upload>
    </div>
</template>
<script>
import uhttp from "~/plugins/uhttp";
import configuration from '~/plugins/config'
export default {
    props: ["config"],
    data() {
        return {
            qiniu_url: '', //上传地址
            configuration: {
                isShowList: false, //是否展示文件列表
                multiple: false, //是否允许多文件上传
                limit: null, //上传文件的限制数量
                btnText: "上传", //上传按钮显示文字
                isPrompt:'',//是否需要上传成功的提示,不需要传入'false'
                errorText: "请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!", //上传失败时的提示
                accept:
                    ".jpg, .jpeg, .png, .pdf, .excel, .docx,.psd,.PSD, .JPG, .JPEG, PNG, .PDF, .EXCEL, .DOCX" //上传格式
            },//上传配置
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
            fileList: []
        };
    },
    mounted(){
        this.configuration = this.config;
        this.qiniu_url = configuration.qiniu_url;
    },
    methods: {
        //文件上传之前
        async beforUpload(file) {
            let _this = this;
            const isLt30M = file.size / 1024 / 1024 < 30;
            if (!isLt30M) {
                _this.$message({
                    message: `请上传大小不能超过30MB的文件!`,
                    type: "warning"
                });
            }
            _this.tokenParams.ext = file.name.split(".")[1];
            _this.postData.name = file.name;
            await _this.uploadToken();
        },
        //获取上传token
        async uploadToken() {
            let _this = this;
            await uhttp.get("/qiniu/token", this.tokenParams).then(res => {
                _this.postData.token = res.token;
                _this.postData.key = res.key;
            });
        },
       //移除文件
        handleRemove(file, fileList) {
            let _this = this;
            _this.flieBox = fileList;
            _this.$emit("uploadFile",fileList);
        },
        //限制文件
        handleExceed(files, fileList) {
            let _this = this;
            _this.$message.warning(
                `当前限制选择` +
                    _this.configuration.limit +
                    `个文件，本次选择了 ${
                        files.length
                    } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        //上传失败时给出提示
        uploadError() {
            let _this = this;
            _this.$message.error(_this.configuration.errorText);
        },
        //成功上传
        successUpload(res, file, fileList) {
            let _this = this;
            _this.flieBox = fileList;
            _this.$emit("uploadFile",fileList);
            if(_this.configuration.isPrompt != 'false'){
                _this.$message({
                    message: "上传成功！",
                    type: "success"
                });
            }
        }
    }
};
</script>
<style  lang="scss" scoped>
    .upload-demo{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
