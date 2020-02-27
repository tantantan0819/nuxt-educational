<template>
  <div class="preview cv">
    <div class="title_box">
      <div class="cv_title">
        <p>我的CV</p>
      </div>
    </div>
    <div class="content cv_step2">
      <!-- 基本信息 -->
      <div class="info">
        <div class="infoBox">
          <div class="info_name">{{crmUser.customer_name || '--'}}</div>
          <div class="info_other">
            <span>电话:{{crmUser.phone | phoneFormat}}</span>
            <span>邮箱:{{crmUser.email || ''}}</span>
          </div>
          <div class="info_other">
            <span>生日:{{crmUser.birthday}}</span>
            <!--crm规则：0:未知 男：4 女：5-->
            <span v-if="crmUser.sex == '0'">性别:未知</span>
            <span v-else-if="crmUser.sex == '4'">性别:男</span>
            <span v-else-if="crmUser.sex == '5'">性别:女</span>
            <span v-else></span>
          </div>
          <div class="info_other">
            <span>地址:{{crmUser.now_address}}</span>
          </div>
        </div>
        <div class="avatarBox">
          <span class="info_avatar" v-if="user.avatar">
            <img :src="user.avatar" alt />
          </span>
          <span class="info_avatar" v-else>
            <img src="/images/avatar.jpg" alt />
          </span>
        </div>
      </div>
      <!-- 教育背景 -->
      <div class="cv_item" v-if="preview.education!=''">
        <div class="title_box1">
          <div class="cv_title">
            <p>教育背景</p>
          </div>
        </div>
        <div class="cv_content cv2 centerTable previewTable">
          <el-table :data="education" stripe style="width: 100%">
            <el-table-column type="index" label="序号" width="74"></el-table-column>
            <el-table-column prop="admission_date" label="入学时间" width="120"></el-table-column>
            <el-table-column prop="graduaction_date" label="毕业时间" width="120"></el-table-column>
            <el-table-column prop="school_name" label="毕业/就读院校"></el-table-column>
            <el-table-column prop="majorname_cn" label="毕业/就读专业"></el-table-column>
            <el-table-column prop="qualification_name" label="学历" width="140"></el-table-column>
            <el-table-column prop="average_result" label="平均成绩" width="100"></el-table-column>
          </el-table>
        </div>
      </div>

      <!-- 学术经历 -->
      <div class="cv_item" v-if="preview.academic!=''">
        <div class="title_box1">
          <div class="cv_title">
            <p>学术经历</p>
          </div>
        </div>
        <div class="cv_content centerTable step3Table cv2 previewTable">
          <el-table :data="academic" stripe style="width: 100%">
            <el-table-column type="index" label="序号" width="74"></el-table-column>
            <el-table-column prop="start_time" label="开始时间" width="150"></el-table-column>
            <el-table-column prop="end_time" label="结束时间" width="150"></el-table-column>
            <el-table-column prop="exp" label="经历描述"></el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 工作/实习经历 -->
      <div class="cv_item" v-if="preview.work!=''">
        <div class="title_box1 job_title">
          <div class="cv_title">
            <p>工作/实习经历</p>
          </div>
        </div>
        <div class="cv_content cv2 centerTable step3Table previewTable">
          <el-table :data="work" stripe style="width: 100%">
            <el-table-column type="index" label="序号" width="74"></el-table-column>
            <el-table-column prop="start_time" label="开始时间" width="150"></el-table-column>
            <el-table-column prop="end_time" label="结束时间" width="150"></el-table-column>
            <el-table-column prop="descript" label="经历描述"></el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 校园活动 -->
      <div class="cv_item" v-if="preview.school!=''">
        <div class="title_box1">
          <div class="cv_title">
            <p>校园活动</p>
          </div>
        </div>
        <div class="cv_content cv2 centerTable step3Table previewTable">
          <el-table :data="school" stripe style="width: 100%">
            <el-table-column type="index" label="序号" width="74"></el-table-column>
            <el-table-column prop="start_time" label="开始时间" width="150"></el-table-column>
            <el-table-column prop="end_time" label="结束时间" width="150"></el-table-column>
            <el-table-column prop="descript" label="校园活动"></el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 兴趣/语言/技能/证书 -->
      <div class="cv_item" v-if="preview.introduce!=''">
        <div class="title_box1 language_title">
          <div class="cv_title">
            <p>兴趣/语言/技能/证书</p>
          </div>
        </div>
        <div class="cv_content cv2 previewTable">
          <el-table :data="introduce" stripe style="width: 100%">
            <el-table-column prop="interest" label="兴趣"></el-table-column>
            <el-table-column prop="lang" label="语言"></el-table-column>
            <el-table-column prop="skill" label="技能"></el-table-column>
            <el-table-column prop="certificate" label="证书"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="preview_close">
      <span @click="close">关闭</span>
      <span @click="makeCV" v-if="isMack">提交CV制作素材</span>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/assets/css/preview.scss";
@import "~/assets/css/cv.scss";
</style>
<script>
import http from "~/plugins/http";
import uhttp from "~/plugins/uhttp";
import { dateTime, emptyObj, getStore } from "~/plugins/utils";
export default {
  layout: "utrack",
  data() {
    return {
      preview: {}, //cv预览
      user: {}, //用户信息--sso
      crmUser: {}, //用户信息--crm
      education: [], //教育背景
      academic: [], //学术经历
      work: [], //工作经历
      school: [], //校园活动
      introduce: [], //兴趣/语言/技能/证书
      isMackCV: false //是否已经提交过了CV制作素材
    };
  },
  mounted() {
    let _this = this;
    // 获取用户信息--sso
    let userInfo = this.$store.state.user;
    if (!emptyObj(userInfo)) {
      _this.user = userInfo;
    } else {
      uhttp.get("/user/detail").then(res => {
        _this.$store.commit("user/SET_USER", res);
        _this.user = _this.$store.state.user;
      });
    }
    //获取用户信息--crm
    http.get("/customer/get-info").then(res => {
      if (res) {
        _this.crmUser = res;
      }
    });
    //获取cv预览
    _this.getPreview();
    //
  },
  methods: {
    //获取cv预览
    getPreview() {
      http.get("/customer-pre-see/list").then(res => {
        this.preview = res;
        this.education = res.education;
        this.academic = res.academic;
        this.work = res.work;
        this.school = res.school;
        this.introduce = res.introduce;
      });
    },
    //关闭cv预览
    close() {
      window.close();
      this.$router.push("/cv/step1");
    },
    //提交CV制作素材
    makeCV() {
      let _this = this;
      let successMsg = _this.$message({
        message: "提交成功！",
        type: "success"
      });
      setTimeout(() => {
        _this.isMackCV = true;
      }, 500);
    }
  },
  computed: {
    //所有cv填完展示，当其提交过了就隐藏
    isMack() {
      if (
        this.education.length != 0 &&
        this.academic.length != 0 &&
        this.work.length != 0 &&
        this.school.length != 0 &&
        this.introduce.length != 0 &&
        isMackCV == false
      ) {
        return true;
      }
      return false;
    }
  },
  filters: {
    //时间格式转换：xxxx-xx-xx转为xxxx年xx月xx日
    timeFormat(time) {
      let newTime = "";
      if (time) {
        newTime = dateTime(time);
      }
      return newTime;
    },
    //时间格式转换：xxxxxxxxxxx转为xxx-xxxx-xxxx
    phoneFormat(phone) {
      let phoneArr = [];
      let phoneStr = phone + "";
      if (phone) {
        phoneArr.push(phoneStr.slice(0, 3));
        phoneArr.push(phoneStr.slice(3, 7));
        phoneArr.push(phoneStr.slice(7, 11));
        return phoneArr.join("-");
      }
      return "";
    }
  }
};
</script>
