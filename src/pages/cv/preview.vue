<template>
  <div class="preview">
    <div class="title_box">
      <div class="cv_title">
        <p>我的CV</p>
      </div>
    </div>
    <div class="content">
      <!-- 基本信息 -->
      <div class="info">
        <div class="infoBox">
          <div class="info_name">{{crmUser.customer_name || '--'}}</div>
          <div class="info_other"><span>{{crmUser.phone | phoneFormat}}</span><span>{{crmUser.email || ''}}</span></div>
          <div class="info_other">
            <span>生日:{{crmUser.birthday}}</span>
            <!--crm规则：0:未知 男：4 女：5-->
            <span v-if="crmUser.sex == '0'">未知</span>
            <span v-else-if="crmUser.sex == '4'">男</span>
            <span v-else-if="crmUser.sex == '5'">女</span>
            <span v-else></span>
          </div>
        </div>
        <div class="avatarBox">
          <span class="info_avatar" v-if="user.avatar"><img :src="user.avatar" alt=""/></span>
          <span class="info_avatar" v-else><img src="/images/avatar.jpg" alt=""/></span>
        </div>
      </div>
      <!-- 教育背景 -->
      <div class="cv_item" v-if="preview.education!=''">
        <div class="title_box1">
          <div class="cv_title">
            <p>教育背景</p>
          </div>
        </div>
        <div class="cv_box" v-for="(item,index) in preview.education" :key="index">
          <p>于{{item.admission_date | timeFormat}}到{{item.graduaction_date | timeFormat}}在{{item.school_name ||
            '--'}}就读于{{item.majorname_cn || '--'}}专业，{{item.qualification_name}}学历，在校期间平均成绩为{{item.average_result ||
            '--'}}分</p>
        </div>
      </div>
      <!-- 学术经历 -->
      <div class="cv_item" v-if="preview.academic!=''">
        <div class="title_box1">
          <div class="cv_title">
            <p>学术经历</p>
          </div>
        </div>
        <div class="cv_box" v-for="(item,index) in preview.academic" :key="index">
          <p>于{{item.start_time | timeFormat}}到{{item.end_time | timeFormat}}，{{item.exp}}</p>
        </div>
      </div>
      <!-- 工作/实习经历 -->
      <div class="cv_item" v-if="preview.work!=''">
        <div class="title_box1 job_title">
          <div class="cv_title">
            <p>工作/实习经历</p>
          </div>
        </div>
        <div class="cv_box" v-for="(item,index) in preview.work" :key="index">
          <p>于{{item.start_time | timeFormat}}到{{item.end_time | timeFormat}}，{{item.descript}}</p>
        </div>
      </div>
      <!-- 校园活动 -->
      <div class="cv_item" v-if="preview.school!=''">
        <div class="title_box1">
          <div class="cv_title">
            <p>校园活动</p>
          </div>
        </div>
        <div class="cv_box" v-for="(item,index) in preview.school" :key="index">
          <p>于{{item.start_time | timeFormat}}到{{item.end_time | timeFormat}}，{{item.descript}}</p>
        </div>
      </div>
      <!-- 兴趣/语言/技能/证书 -->
      <div class="cv_item" v-if="preview.introduce!=''">
        <div class="title_box1 language_title">
          <div class="cv_title">
            <p>兴趣/语言/技能/证书</p>
          </div>
        </div>
        <div class="cv_box" v-for="(item,index) in preview.introduce" :key="index" v-if="index==0">
          <p><span>我的兴趣：</span>{{item.interest}}</p>
          <p><span>我的语言：</span>{{item.lang}}</p>
          <p><span>我的技能：</span>{{item.skill}}</p>
          <p><span>我的证书：</span>{{item.certificate}}</p>
        </div>
      </div>
    </div>
    <div class="preview_close">
      <span @click="close">关闭</span>
    </div>

  </div>
</template>
<style lang="scss">
  @import "~/assets/css/preview.scss";
</style>
<script>
    import http from "~/plugins/http";
    import uhttp from "~/plugins/uhttp";
    import {dateTime,emptyObj,getStore} from '~/plugins/utils';
    export default {
        layout: 'utrack',
        data() {
            return {
                preview: {},//cv预览
                user: {},//用户信息--sso
                crmUser: {}//用户信息--crm
            }
        },
        mounted() {
            let _this = this;
            // 获取用户信息--sso
            let userInfo = this.$store.state.user;
            if (!emptyObj(userInfo)) {
                _this.user = userInfo;
            } else {
                uhttp.get('/user/detail').then((res) => {
                    _this.$store.commit('user/SET_USER', res);
                    _this.user = _this.$store.state.user;
                })
            }
            //获取用户信息--crm
            http.get('/customer/get-info').then((res) => {
                if(res){
                    _this.crmUser = res;
                }
            })
            //获取cv预览
            _this.getPreview();
        },
        methods: {
            //获取cv预览
            getPreview() {
                http.get('/customer-pre-see/list').then((res) => {
                    this.preview = res;
                })
            },
            //关闭cv预览
            close() {
                window.close();
            }
        },
        filters: {
            //时间格式转换：xxxx-xx-xx转为xxxx年xx月xx日
            timeFormat(time) {
                let newTime = '';
                if (time) {
                    newTime = dateTime(time);
                }
                return newTime;
            },
            //时间格式转换：xxxxxxxxxxx转为xxx-xxxx-xxxx
            phoneFormat(phone) {
                let phoneArr = []
                let phoneStr = phone+'';
                if (phone) {
                    phoneArr.push(phoneStr.slice(0,3));
                    phoneArr.push(phoneStr.slice(3,7));
                    phoneArr.push(phoneStr.slice(7,11));
                    return phoneArr.join('-')
                }
                return '';
            }
        }
    }
</script>
