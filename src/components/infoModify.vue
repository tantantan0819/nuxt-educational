<template>
  <div class="modify">
    <span class="cv_button modify_button" @click="dialogVisible=true">修改</span>
    <div class="add">
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
            <el-form-item label="类别:" prop="type">
              <el-select v-model="modify.type" class="widthAll" placeholder="类别">
                <el-option
                  v-for="(item,index) in select.noteType"
                  :key="index"
                  :label="item.cvalue_cn"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="备注:" prop="content" class="cvTextareaBox modifyText">
              <el-input
                type="textarea"
                v-model="modify.content"
                class="noteTextarea"
                autocomplete="off"
                :maxlength="titleMaxLength"
              ></el-input>
              <span class="textareaTip">还可输入{{titleMaxLength - modify.content.length}}字</span>
            </el-form-item>
            <el-form-item label="附件:" prop="files">
              <el-upload
                class="upload-demo"
                :action="qiniu_url"
                :data="postData"
                :before-upload="beforUpload"
                :on-success="successUpload"
                :on-remove="handleRemove"
                :show-file-list="true"
                :file-list="fileList"
                :limit="5"
                :on-exceed="handleExceed"
                :on-error="modifyError"
                accept=".jpg,.jpeg,.png,.pdf,.excel,.docx,.JPG,.JPEG,PNG,.PDF,.EXCEL,.DOCX"
              >
                <el-button slot="trigger" size="medium" type="primary">上传</el-button>
              </el-upload>
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
import uhttp from "~/plugins/uhttp";
import { getStore, setStore } from "~/plugins/utils";
export default {
props:['type'],
  data() {
    return {
      postUrl: '',//提交地址
      titleMaxLength: 500, //文本域最大字数
      dialogVisible: false, //是否弹框
      qiniu_url: "http://upload.qiniup.com", //上传地址
      unloadType: ["image/png", "image/jpeg"], //上传格式
      flieBox: [],
      postData: {
        token: "",
        name: "",
        key: ""
      },
      tokenParams: {
        //请求token的参数
        bucket: "user",
        path: "upload/user",
        ext: ""
      },
      fileList: [],
      select: {
        noteType: []
      },
      modify: {
        type: 1,
        content: "",
        files: []
      },
      rules: {
        type: [
          {
            required: true,
            message: "请选择你的修改类别",
            trigger: "blur"
          }
        ],
        content: [
          {
            required: true,
            message: "请填写你的备注",
            trigger: "blur"
          }
        ],
        files: [
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
    if(_this.type == 'cv'){
      _this.postUrl = '/customer-note-cv/add'
    }else if(_this.type == 'ps'){
      _this.postUrl = '/customer-note-ps/add'
    }else if(_this.type == 'letter'){
      _this.postUrl = '/customer-note-recomment/add'
    }else{
      _this.postUrl = '/customer-note-cv/add'
    }
    //获取类别下拉
    let noteType = getStore("noteType");
    if (noteType) {
      _this.select.noteType = noteType.NOTE_TYPE_CV;
      _this.modify.type = noteType.NOTE_TYPE_CV[0].id;
    } else {
      http.get("/code-val/group-key-list").then(res => {
        _this.select.noteType = res.NOTE_TYPE_CV;
        _this.modify.type = res.NOTE_TYPE_CV[0].id;
        setStore("noteType", res);
      });
    }
  },
  methods: {
    //头像上传之前
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
    //限制文件
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 5 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    //移除文件
    handleRemove(file, fileList) {
      let _this = this;
      _this.flieBox = fileList;
    },
    //成功上传
    successUpload(res, file, fileList) {
      let _this = this;
      _this.flieBox = fileList;
    },
      //上传失败
      modifyError() {
        this.$message.error('请上传PNG、JPG、PDF、WORD、EXCEL格式的文件!');
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
        _this.modify.files = [];
      } else {
        _this.flieBox.map(item => {
          _this.modify.files.push({
            name: item.response.data.filename,
            url: item.response.data.url,
          })
        });
      
      }
      _this.$refs[formName].validate(valid => {
        if (valid) {
          http.post(_this.postUrl, _this.modify).then(res => {
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