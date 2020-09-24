<template>
  <div class="cv_step3">
    <div class="title_box">
      <div class="cv_title cv_title6">
        <p>兴趣/语言/技能/证书</p>
        <span>请认真填写您空缺的资料，保存后不能修改，如需修改请联系您的顾问老师进行修改</span>
      </div>
      <div class="modify_wrap">
<!--        <info-modify :type="modifyType"></info-modify>-->
        <span class="cv_button cv_button3" @click="open">完善兴趣/语言/技能/证书</span>
      </div>
    </div>
    <div class="cv_content cv2">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="interest" label="兴趣"></el-table-column>
        <el-table-column prop="lang" label="语言"></el-table-column>
        <el-table-column prop="skill" label="技能"></el-table-column>
        <el-table-column prop="certificate" label="证书"></el-table-column>
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
    <!--  完善兴趣/语言/技能/证书  -->
    <div class="add add_note">
      <el-dialog title :visible.sync="outerVisible">
        <div class="add_title">兴趣/语言/技能/证书</div>
        <div class="add_content">
          <el-form
            :model="cvForm6"
            status-icon
            ref="cvForm6"
            label-width="300px"
            label-position="top"
          >
            <el-form-item label="兴趣" prop="interest" class="cvTextareaBox">
              <el-input
                type="textarea"
                v-model.trim="cvForm6.interest"
                placeholder="兴趣名称（程度描述），如：篮球（校队队长），小提琴（音乐学院10级），动漫（xx动漫社社长）"
                class="cvTextarea cvTextarea2"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="语言" prop="lang" class="cvTextareaBox">
              <el-input
                type="textarea"
                v-model.trim="cvForm6.lang"
                placeholder="语言名称（程度描述），如：英语（CET-6），日语（N2）"
                class="cvTextarea cvTextarea2"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="技能" prop="skill" class="cvTextareaBox">
              <el-input
                type="textarea"
                v-model.trim="cvForm6.skill"
                placeholder="技能名称（程度描述），如：SPSS，Excel（熟练使用数据透视表），PowerPoint（熟练）"
                class="cvTextarea cvTextarea2"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="证书" prop="certificate" class="cvTextareaBox">
              <el-input
                type="textarea"
                v-model.trim="cvForm6.certificate"
                placeholder="证书名称（程度描述），如：计算机二级"
                class="cvTextarea cvTextarea2"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="footer_button">
            <span @click="cancel('cvForm6')">
              <i>取消</i>
            </span>
            <span @click="submitForm('cvForm6')">保存</span>
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
  layout: "refactor",
  components: { InfoModify },
  data() {
    return {
      modifyType: 'cv',//修改类型
      numAll: 100, //文本域限制字数
      outerVisible: false, //外层
      titleMaxLength: 100, //文本域最大字数
      tableData: [], //table
      cvForm6: {
        interest: "",
        lang: "",
        skill: "",
        certificate: ""
      } //添加教育背景
    };
  },
  mounted() {
    //获取完善兴趣/语言/技能/证书
    this.getIntroduce();
  },
  methods: {
    //获取完善兴趣/语言/技能/证书
    getIntroduce() {
      http.get("/customer-introduce/list").then(res => {
        if (JSON.stringify(res) != "[]") {
          this.tableData = res;
          this.cvForm6 = {...res[0]};
          for (let i in res[0]) {
            for (let m in this.cvForm6) {
              if (i == m && !res[0][i]) {
                this.cvForm6[m] = "";
              }
            }
          }
        }
      });
    },
    //上一步
    prev() {
      this.$router.push("/writ/cv/step5");
    },
    //下一步
    next() {
      this.$router.push("/writ/cv/preview");
    },
    //取消
    cancel(formName) {
      this.$refs[formName].resetFields();
      this.outerVisible = false;
    },
    //打开弹框，同步数据
    open(){
       this.cvForm6 = {...this.tableData[0]};
       this.outerVisible=true;
    },
    //保存--提交表单
    submitForm(formName) {
      let _this = this;
      let valid = false; //是否是可提交状态
      let isEdit = _this.tableData.length;
      for (let i in _this.cvForm6) {
        if (_this.cvForm6[i] != "") {
          valid = true;
        }
      }
      //至少填一项才能提交表单
      if (valid) {
        //新增
        if (!isEdit) {
          http.post("/customer-introduce/add", _this.cvForm6).then(res => {
            if (res) {
              let successMsg = _this.$message({
                message: "提交成功！",
                type: "success"
              });
              setTimeout(() => {
                successMsg.close();
                _this.getIntroduce();
                _this.$refs[formName].resetFields();
                _this.outerVisible = false;
              }, 1000);
            }
          });
          return;
        }
        //编辑
        http.post("/customer-introduce/edit", _this.cvForm6).then(res => {
          if (res) {
            let successMsg = _this.$message({
              message: "提交成功！",
              type: "success"
            });
            setTimeout(() => {
              successMsg.close();
              _this.getIntroduce();
              _this.$refs[formName].resetFields();
              _this.outerVisible = false;
            }, 1000);
          }
        });
      } else {
        _this.$message({
          message: "至少填一项才能提交表单哦~",
          type: "warning"
        });
      }
    }
  }
};
</script>
