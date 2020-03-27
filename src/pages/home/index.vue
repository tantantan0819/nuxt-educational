<template>
    <div class="home">
        <div class="notice">
            <div class="notice_title">UKEC通知</div>
            <div class="notice_con">
                <el-carousel :interval="2000" height="20px" direction="vertical">
                    <el-carousel-item v-for="(item,index) in notice" :key="index">
                        <p>{{ item.content }}</p>
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
                        <div
                            class="data_item grey"
                            v-for="(item,index) in lastArr"
                            :key="index+'_lastArr'"
                        >
                            <span>{{item}}</span>
                        </div>
                        <!-- 当月天数 -->
                        <div
                            class="data_item"
                            v-for="(item,index) in duringNum"
                            :key="index+'_duringNum'"
                            :class="{greyActive:isGrey(item),redActive:isRed(item),greenActive:isGreen(item)}"
                        >
                            <span @click="changeNoteCon(calendar_year,calendar_month,item)">{{item}}</span>
                        </div>
                        <!-- 下个月天数 -->
                        <div
                            class="data_item grey"
                            v-for="(item,index) in nextNum"
                            :key="index+'_nextNum'"
                        >
                            <span>{{item}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="note_box">
                <div class="note_day">
                    <span>{{now_day}}</span>
                    <span>{{now_month}}月</span>
                </div>
                <div class="note_add">
                    <i @click="noteShow = true"></i>
                    新增提醒
                </div>
                <div class="note_title">待办事项</div>
                <div class="note_con">
                    <span
                        v-for="(item,index) in note"
                        :key="index"
                        :class="{'active':index == noteActive}"
                        @click="changeNote(index)"
                    >{{item}}</span>
                </div>
                <div class="note_item note_view" :class="{'note_view_show':noteActive == 0}">
                    <div class="note_swiper">
                        <div
                            v-swiper:mySwiper1="swiperOption1"
                            ref="swiperOption1"
                            style="height: 220px;"
                        >
                            <div class="swiper-wrapper">
                                <div
                                    class="swiper-slide note_show"
                                    v-for="(item,index) in noteShowArr_all"
                                    :key="index"
                                >
                                    <p class="note_text">{{item.all_index}}、{{item.content}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="note_item note_view" :class="{'note_view_show':noteActive == 1}">
                    <div class="note_swiper">
                        <div
                            v-swiper:mySwiper2="swiperOption2"
                            ref="swiperOption2"
                            style="height: 220px;"
                        >
                            <div class="swiper-wrapper">
                                <div
                                    class="swiper-slide note_show"
                                    v-for="(item,index) in noteShowArr_my"
                                    :key="index+'_my'"
                                >
                                    <p class="note_text">{{item.my_index}}、{{item.content}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="note_item note_view" :class="{'note_view_show':noteActive == 2}">
                    <div class="note_swiper">
                        <div
                            v-swiper:mySwiper3="swiperOption3"
                            ref="swiperOption3"
                            style="height: 220px;"
                        >
                            <div class="swiper-wrapper">
                                <div
                                    class="swiper-slide note_show"
                                    v-for="(item,index) in noteShowArr_teacher"
                                    :key="index+'_teacher'"
                                >
                                    <p class="note_text">{{item.teacher_index}}、{{item.content}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="about_title">关于UKEC</div>
            <div class="about_box">
                <p>{{aboutUKec}}</p>
            </div>
        </div>
        <!-- 新增代办事项的 -->
        <div class="add_note">
            <el-dialog :visible.sync="noteShow" width="717px" center>
                <div class="add_title">新增提醒</div>
                <div class="add_con">
                    <el-form :model="addForm" ref="addForm" :rules="rules">
                        <el-form-item label="提醒日期" prop="begin_date">
                            <el-date-picker
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                placeholder="请选择提醒日期"
                                v-model="addForm.begin_date"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item prop="content" label="提醒内容" class="content">
                            <el-input type="textarea" v-model="addForm.content" :maxLength="50"></el-input>
                            <span>{{addForm.content.length}}字/50字</span>
                        </el-form-item>
                    </el-form>
                    <div class="add_footer">
                        <span @click="cancel('addForm')">取消</span>
                        <span @click="submitForm('addForm')">确定</span>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import http from "~/plugins/http";
export default {
    layout: "refactor",
    data() {
        return {
            note_con: [],
            isSart: 0,
            isEnd: 7,
            swiperOption1: {
                initialSlide: 1,
                speed: 300,
                loop: false,
                autoplay: {
                    disableOnInteraction: false //手动滑动之后不打断播放
                },
                autoHeight: true, //高度随内容变化
                direction: "vertical", //方向
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                slidesPerView: "auto", //一页显示几个
                notNextTick: true //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            },
            swiperOption2: {
                speed: 300,
                loop: false,
                initialSlide: 1,
                autoplay: {
                    disableOnInteraction: false //手动滑动之后不打断播放
                },
                autoHeight: true, //高度随内容变化
                direction: "vertical", //方向
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                slidesPerView: "auto", //一页显示几个
                notNextTick: true //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            },
            swiperOption3: {
                speed: 300,
                loop: false,
                initialSlide: 1,
                autoplay: {
                    disableOnInteraction: false //手动滑动之后不打断播放
                },
                autoHeight: true, //高度随内容变化
                direction: "vertical", //方向
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                slidesPerView: "auto", //一页显示几个
                notNextTick: true //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            },
            note_day: "",
            noteShow: false, //是否展示新增代办事项
            noteActive: 0, //待办事项选中分类index
            note: ["全部提醒", "我的提醒", "顾问提醒"], //待办事项分类
            noteArr: [], //待办事项内容 -- 日历当月的内容（获取未展示）
            noteShowArr: [], //待办事项内容 -- 展示
            noteShowArr_all: [], //待办事项内容 -- 全部
            noteShowArr_my: [], //待办事项内容 -- 我的提醒
            noteShowArr_teacher: [], //待办事项内容 -- 顾问老师
            noteShowDay: null, //当前展示日期
            notice: [], //ukec通知内容
            aboutUKec: "", //关于ukec内容
            first_day: null, //当月第一天星期几（周末为0）
            lastArr: [], //日历上个月的天数
            duringNum: null, //日历当前月天数
            nextNum: null, //日历下个月剩余天数
            calendar_year: "", //日历展示年份
            calendar_month: "", //日历展示月份
            now_date: "", //今天日期 xxxx-xx-xx
            now_day: "", //提醒展示--当前号数
            now_month: "", //提醒展示--当前月份
            now_year: "", //提醒展示--当前年份
            week: ["日", "一", "二", "三", "四", "五", "六"],
            addForm: {
                begin_date: "",
                content: ""
            },
            rules: {
                begin_date: [
                    {
                        required: true,
                        message: "请选择提醒日期",
                        trigger: "blur"
                    }
                ],
                content: [
                    {
                        required: true,
                        message: "请输入提醒内容",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    beforeMount() {},
    created() {
        let _this = this;
        //获取当前日期
        _this.initCalendar();
        //初始化日历和代办事项
        _this.getInit();
    },
    mounted() {
        let _this = this;
        //获取ukec通知
        _this.getNotice();
        //获取关于ukec
        _this.getAbout();
    },
    methods: {
        //取消新增待办事项
        cancel(formName) {
            this.$refs[formName].resetFields();
            this.noteShow = false;
        },
        //初始化日历和代办事项
        getInit() {
            let _this = this;
            //展示当前日历
            _this.showCalendar(_this.calendar_year, _this.calendar_month);
            //获取当月待办事项
            _this.getNote(
                _this.now_year + "-" + _this.now_month + "-01",
                _this.now_year + "-" + _this.now_month + "-" + "duringNum"
            );
        },
        //是否应该展示灰色日历
        isGrey(day) {
            let _this = this;
            let flag = false;
            let date = _this.dateFormat(day);
            _this.noteArr.map(item => {
                if (item.begin_date == date && date < _this.now_date) {
                    flag = true;
                }
            });
            return flag;
        },
        //是否应该展示绿色日历
        isGreen(day) {
            let _this = this;
            let flag = false;
            let date = _this.dateFormat(day);
            _this.noteArr.map(item => {
                if (item.begin_date == date && date > _this.now_date) {
                    flag = true;
                }
            });
            return flag;
        },
        //是否应该展示红色日历
        isRed(day) {
            let _this = this;
            let flag = false;
            let date = _this.dateFormat(day);
            if (date == _this.now_date) {
                flag = true;
            }
            return flag;
        },
        //日期格式 2020-03-11
        dateFormat(day) {
            let _this = this;
            let now_day = day < 10 ? "0" + day : day;
            let now_month =
                _this.calendar_month < 10
                    ? "0" + _this.calendar_month
                    : _this.calendar_month;
            let date = _this.calendar_year + "-" + now_month + "-" + now_day;
            return date;
        },
        //获取ukec通知
        getNotice() {
            let _this = this;
            http.get("/utrack-notice/list").then(res => {
                if (res) {
                    _this.notice = res;
                }
            });
        },
        //获取代办事项
        getNote(start, end) {
            let _this = this;
            http.get("/utrack-notice-student/list", {
                begin_date1: start,
                begin_date2: end
            }).then(res => {
                _this.noteArr = res;
                _this.noteShowArr = res;
                //将代办事项的内容分类
                _this.classify();
            });
        },
        //获取关于ukec
        getAbout() {
            let _this = this;
            http.get("/about-ukec/list").then(res => {
                if (res) {
                    _this.aboutUKec = res.content;
                }
            });
        },
        //切换代办事项分类
        changeNote(index) {
            this.noteActive = index;
        },
        //将代办事项的内容分类
        classify() {
            let _this = this;
            let all_index = 0;
            let my_index = 1;
            let teacher_index = 1;
            _this.noteShowArr_all = [];
            _this.noteShowArr_my = [];
            _this.noteShowArr_teacher = [];
            _this.noteShowArr.map(item => {
                if (item.begin_date == _this.note_day) {
                    ++all_index;
                    item.all_index = all_index;
                    _this.noteShowArr_all.push(item);
                }
            });
            _this.noteShowArr.map(item => {
                if (
                    item.begin_date == _this.note_day &&
                    item.type == "utrack"
                ) {
                    item.my_index = my_index;
                    my_index++;
                    _this.noteShowArr_my.push(item);
                }
            });
            _this.noteShowArr.map(item => {
                if (item.begin_date == _this.note_day && item.type == "crm") {
                    item.teacher_index = teacher_index;
                    teacher_index++;
                    _this.noteShowArr_teacher.push(item);
                }
            });
        },
        //根据日历切换代办事项内容
        changeNoteCon(year, month, day) {
            let _this = this;
            month < 10 ? (month = "0" + month) : month;
            day < 10 ? (day = "0" + day) : day;
            let now_date = year + "-" + month + "-" + day;
            _this.noteShowArr.map(item => {
                if (item.begin_date == now_date) {
                    _this.note_day = now_date;
                }
            });
            //将代办事项的内容分类
            _this.classify();
        },
        //获取当前日期
        initCalendar() {
            let _this = this;
            const date = new Date();
            _this.calendar_year = date.getFullYear();
            _this.calendar_month = date.getUTCMonth() + 1;
            _this.now_day =
                date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            _this.now_month = _this.calendar_month;
            _this.now_year = _this.calendar_year;
            _this.now_month > 10
                ? (_this.now_date =
                      _this.calendar_year +
                      "-" +
                      _this.now_month +
                      "-" +
                      _this.now_day)
                : (_this.now_date =
                      _this.calendar_year +
                      "-0" +
                      _this.now_month +
                      "-" +
                      _this.now_day);
            _this.noteShowDay = _this.now_date;
            _this.note_day = _this.now_date;
            //将代办事项的内容分类
            _this.classify();
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
        },
        //新增待办事项
        submitForm(formName) {
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    http.post("/utrack-notice-student/add", _this.addForm).then(
                        res => {
                            let successMsg = _this.$message({
                                message: "提交成功！",
                                type: "success"
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$refs[formName].resetFields();
                                _this.noteShow = false;
                                //初始化日历和代办事项
                                _this.getInit();
                            }, 1000);
                        }
                    );
                }
            });
        }
    }
};
</script>
<style lang="scss">
@import "~/assets/css/home.scss";
</style>