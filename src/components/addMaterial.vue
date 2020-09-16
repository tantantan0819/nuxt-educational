<template>
  <!-- 材料列表新增：单文件上传 -->
  <div class="add_note">
    <el-dialog :visible.sync="addShow" width="717px" center :close-on-click-modal="isClose" :close-on-press-escape="isClose">
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
        </el-form>
        <div class="add_footer">
          <span @click="cancelAdd('addForm')">取消</span>
          <span @click="addSubmit('addForm')">确定</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/accommodation.scss";
  @import "~/assets/css/visa.scss";
  @import "~/assets/css/cv.scss";
</style>
<script>
    import http from "~/plugins/http";
    import UploadBtn from "~/components/upload";
    export  default {
        props: ['single','id'],
        components: { UploadBtn},
        data(){
            return{
                addShow: true,
                isClose: false,//不可点击模态框关闭
                configuration: {
                    isShowList: false, //是否展示文件列表
                    multiple: false, //是否允许多文件上传
                    limit: null, //上传文件的限制数量
                    btnText: "上传", //上传按钮显示文字
                    errorText: "", //上传失败时的提示
                    accept: "" //上传格式
                },
                addForm: {
                    origin_name: "", //材料原始名称
                    material_name: "", //材料名称
                    file_url: "", //文件路径
                    material_id: "", //材料类型
                    is_private: "1", //是否隐藏
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
                },
            }
        },
        methods:{
            //新增语言成绩--上传
            addFile(val) {
                let _this = this;
                if (val) {
                    _this.addForm.file_url = val[val.length - 1].response.data.url;
                    _this.addForm.origin_name = val[val.length - 1].response.data.filename;
                }
            },
            //取消添加材料
            cancelAdd(formName) {
                this.$refs[formName].resetFields();
                this.addShow = false;
                this.$emit("closeContr",'false');
            },
            //提交新增语言证书
            addSubmit(formName) {
                let _this = this;
                _this.$refs[formName].validate(valid => {
                    if (valid) {
                        _this.addForm.material_id = _this.id;
                        http.post("/customer-material/add", _this.addForm).then(res => {
                            let successMsg = _this.$message({
                                message: "提交成功！",
                                type: "success"
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$refs[formName].resetFields();
                                _this.addShow = false;
                                _this.$emit("closeContr",'true');
                            }, 1000);
                        });
                    }
                });
            },
        },
    }
</script>
