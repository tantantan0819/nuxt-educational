<template>
  <div class="home">
    <div class="notice">
      <div class="notice_title">UKEC通知</div>
      <div class="notice_con">
        <el-carousel :interval="2000" height="20px" direction="vertical">
          <el-carousel-item v-for="(item,index) in notice" :key="index">
            <p>{{ item }}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="note">
      <div class="note_box">
        <div class="note_title">事件日历</div>
        <div class="calendar">
          <div class="calendar_top">
            <span class="el-icon-arrow-left" @click="lastMonth"></span>
            <span>{{calendar_year}}年{{calendar_month}}月</span>
            <span class="el-icon-arrow-right" @click="nextMonth"></span>
          </div>
          <div class="week">
            <span v-for="(item,index) in week" :key="index+1">{{item}}</span>
          </div>
          <div class="data">
            <!-- 上月剩余天数 -->
            <div class="data_item grey" v-for="(item,index) in lastArr" :key="index+2">
              <span>{{item}}</span>
            </div>
            <!-- 当月天数 -->
            <div class="data_item" v-for="(item,index) in duringNum" :key="index+3">
              <span>{{item}}</span>
            </div>
            <!-- 下个月天数 -->
            <div class="data_item grey" v-for="(item,index) in nextNum" :key="index+4">
              <span>{{item}}</span>
            </div>
          </div>
          <!-- <el-calendar>
            <template slot="dateCell" slot-scope="{date, data}">
              <p
                :class="data.isSelected ? 'is-selected' : ''"
              >{{data.day.split('-')[2]}}{{ data.isSelected ? '✔️' : ''}}</p>
            </template>
          </el-calendar>-->
        </div>
      </div>
      <div class="note_box">
        <div class="note_title">待办事项</div>
        <div calss="note_con">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部提醒" name="1">1、全部提醒</el-tab-pane>
            <el-tab-pane label="我的提醒" name="2">1、我的提醒</el-tab-pane>
            <el-tab-pane label="顾问提醒" name="3">1、顾问提醒</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="about_title">关于UKEC</div>
      <div class="about_box">
        <p>UKEC英国教育中心于1999年成立于英国，是英国本土最大的教育机构之一。成立之初便获得英国百所高等院校、英国高等教育招生委员会（UCAS）、英国内政部特许移民专署（OISC）的权威授权。</p>
        <p>经由英国内政部特许移民专署（OISC）的权威认证的签证团队免费为UKEC学子提供签证咨询相关的服务，确保90%以上的申请成功率。</p>
         <p>作为逾百所英国中学及高等院校官方招生机构、英国总领事馆文化教育处长期教育推广会员机构，UKEC英国教育中心每年为牛津大学、剑桥大学、帝国理工大学、伦敦政治经济学院等英国顶尖名校输送大量优秀学子。</p>
         <p>作为逾百所英国中学及高等院校官方招生机构、英国总领事馆文化教育处长期教育推广会员机构，UKEC英国教育中心每年为牛津大学、剑桥大学、帝国理工大学、伦敦政治经济学院等英国顶尖名校输送大量优秀学子</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "refactor",
  data() {
    return {
      notice: [
        "与部分中国211、985高校，如四川大学、电子科技大学、华侨大学、重庆大学、西南大学、西北政法大学、西南财经大学等，共同创立众多中英教育项目，增进中英两国高等院校学术合作，培养多元化国际人才。",
        "UKEC英国教育中心于1999年成立于英国，是英国本土最大的教育机构之一。成立之初便获得英国百所高等院校、英国高等教育招生委员会（UCAS）、英国内政部特许移民专署（OISC）的权威授权。",
        "作为逾百所英国中学及高等院校官方招生机构、英国总领事馆文化教育处长期教育推广会员机构，UKEC英国教育中心每年为牛津大学、剑桥大学、帝国理工大学、伦敦政治经济学院等英国顶尖名校输送大量优秀学子。"
      ],
      first_day: null, //当月第一天星期几（周末为0）
      lastArr: [], //日历上个月的天数
      duringNum: null, //日历当前月天数
      nextNum: null, //日历下个月剩余天数
      calendar_year: "", //日历展示年份
      calendar_month: "", //日历展示月份
      calendar_day: "", //日历展示--当前号数
      week: ["日", "一", "二", "三", "四", "五", "六"],
      activeName: '1'
    };
  },
  beforeMount() {},
  created() {
    let _this = this;
    //获取当前日期
    _this.initCalendar();
    //展示当前日历
    _this.showCalendar(_this.calendar_year, _this.calendar_month);
  },
  mounted() {},
  methods: {
      //切换备注
      handleClick(val){
          console.log(val)
      },
    //获取当前日期
    initCalendar() {
      let _this = this;
      const date = new Date();
      _this.calendar_year = date.getFullYear();
      _this.calendar_month = date.getUTCMonth() + 1;
      _this.calendar_day = date.getDate();
    },
    //展示日历
    showCalendar(year, month) {
      let _this = this;
      //获取当前月份有多少天
      _this.duringNum = new Date(year, month, 0).getDate();
      //当月第一天是星期几--上个月差几天(0是周末)
      _this.first_day = new Date(year, month - 1, 1).getDay();
      //获取上一个月的天数
      _this.lastNum = new Date(year, month - 1, 0).getDate();
      //上个月剩余天数数组
      _this.lastArr = [];
      if (_this.first_day > 0) {
        for (let i = 0; i < _this.first_day; i++) {
          _this.lastArr.unshift(_this.lastNum - i);
        }
      }
      //下个月剩余天数
      _this.nextNum = 42 - _this.duringNum - _this.first_day;
    },
    //日历--上个月
    lastMonth() {
      let _this = this;
      if (_this.calendar_month > 1) {
        _this.calendar_month--;
        _this.showCalendar(_this.calendar_year, _this.calendar_month);
      } else {
        _this.calendar_month = 12;
        _this.calendar_year--;
        _this.showCalendar(_this.calendar_year, _this.calendar_month);
      }
    },
    //日历--上个月
    nextMonth() {
      let _this = this;
      if (_this.calendar_month < 12) {
        _this.calendar_month++;
        _this.showCalendar(_this.calendar_year, _this.calendar_month);
      } else {
        _this.calendar_month = 1;
        _this.calendar_year++;
        _this.showCalendar(_this.calendar_year, _this.calendar_month);
      }
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/css/home.scss";
</style>