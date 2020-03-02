<template>
  <div class="cv_step3">
    <div class="title_box">
      <div class="cv_title">
        <p>工作/实习经历</p>
        <span>请认真填写您空缺的资料，保存后不能修改，如需修改请联系您的顾问老师进行修改</span>
      </div>
      <div class="modify_wrap">
       <info-modify :type="modifyType"></info-modify>
        <span class="cv_button cv_button2" @click="outerVisible=true">新增工作/实习经历</span>
      </div>
    </div>
    <div class="cv_content cv2 centerTable step3Table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="74"></el-table-column>
        <el-table-column prop="start_time" label="开始时间" width="150"></el-table-column>
        <el-table-column prop="end_time" label="结束时间" width="150"></el-table-column>
        <el-table-column prop="descript" label="经历描述"></el-table-column>
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
    <!--  新增工作/实习经历  -->
    <div class="add">
      <el-dialog title :visible.sync="outerVisible">
        <div class="add_title">添加工作/实习经历</div>
        <div class="add_content">
          <el-form
            :model="cvForm4"
            status-icon
            :rules="rules"
            ref="cvForm4"
            label-width="300px"
            label-position="top"
          >
            <el-form-item label="开始时间" prop="start_time">
              <el-date-picker
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="请选择您的工作/实习经历起始时间"
                v-model="cvForm4.start_time"
                class="widthAll"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" prop="end_time">
              <el-date-picker
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="请选择您的工作/实习经历结束时间"
                v-model="cvForm4.end_time"
                class="widthAll"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="经历描述" prop="descript" class="cvTextareaBox">
              <el-input
                type="textarea"
                v-model="cvForm4.descript"
                placeholder="整体框架遵循【做了什么】【结果是什么】【有什么价值】的逻辑。"
                class="cvTextarea cvTextarea2"
                autocomplete="off"
                :maxlength="titleMaxLength"
              ></el-input>
              <span class="textareaTip">还可输入{{titleMaxLength - cvForm4.descript.length}}字</span>
            </el-form-item>
          </el-form>
          <div class="footer_button">
            <span @click="cancel('cvForm4')">
              <i>取消</i>
            </span>
            <span @click="submitForm('cvForm4')">保存</span>
          </div>
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
import InfoModify from "~/components/infoModify";
export default {
  layout: "utrack",
  components: { InfoModify },
  data() {
    return {
      modifyType: 'cv',//修改类型
      outerVisible: false, //外层
      tableData: [], //table
      titleMaxLength: 100, //文本域最大字数
      cvForm4: {
        start_time: "",
        end_time: "",
        descript: ""
      }, //添加教育背景
      rules: {
        start_time: [
          {
            required: true,
            message: "请选择您的工作/实习经历起始时间",
            trigger: "blur"
          }
        ],
        end_time: [
          {
            required: true,
            message: "请选择您的工作/实习经历结束时间",
            trigger: "blur"
          }
        ],
        descript: [
          {
            required: true,
            message: "请输入您的您的工作/实习经历描述",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    //获取工作/实习经历
    this.getExp();
  },
  methods: {
    //获取工作/实习经历
    getExp() {
      http.get("/customer-work-exp/list").then(res => {
        this.tableData = res;
      });
    },
    //上一步
    prev() {
      this.$router.push("/cv/step3");
    },
    //下一步
    next() {
      this.$router.push("/cv/step5");
    },
    //取消
    cancel(formName) {
      this.$refs[formName].resetFields();
      this.outerVisible = false;
    },
    //保存--提交表单
    submitForm(formName) {
      let _this = this;
      _this.$refs[formName].validate(valid => {
        if (valid) {
          http.post("/customer-work-exp/add", _this.cvForm4).then(res => {
            let successMsg = _this.$message({
              message: "提交成功！",
              type: "success"
            });
            setTimeout(() => {
              successMsg.close();
              _this.getExp();
              _this.$refs[formName].resetFields();
              _this.outerVisible = false;
            }, 1000);
          });
        }
      });
    }
  }
};
</script>
