(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{497:function(t,e,n){},540:function(t,e,n){"use strict";var r=n(497);n.n(r).a},578:function(t,e,n){"use strict";n.r(e);var r=n(71),o={layout:"refactor",data:function(){return{bannerList:[],note_con:[],isSart:0,isEnd:7,dynamicHeight:"",swiperOption1:{initialSlide:1,speed:300,loop:!1,autoplay:{disableOnInteraction:!1},autoHeight:!0,direction:"vertical",observer:!0,observeParents:!0,slidesPerView:"auto",notNextTick:!0},swiperOption2:{speed:300,loop:!1,initialSlide:1,autoplay:{disableOnInteraction:!1},autoHeight:!0,direction:"vertical",observer:!0,observeParents:!0,slidesPerView:"auto",notNextTick:!0},swiperOption3:{speed:300,loop:!1,initialSlide:1,autoplay:{disableOnInteraction:!1},autoHeight:!0,direction:"vertical",observer:!0,observeParents:!0,slidesPerView:"auto",notNextTick:!0},swiperOption4:{speed:300,loop:!1,initialSlide:1,autoplay:{disableOnInteraction:!1},autoHeight:!0,observer:!0,observeParents:!0,slidesPerView:"auto",notNextTick:!0},swiperOption5:{speed:300,loop:!0,initialSlide:1,autoplay:{disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},autoHeight:!0,observer:!0,observeParents:!0,slidesPerView:"auto",notNextTick:!0},note_day:"",noteShow:!1,noteActive:0,note:["全部提醒","我的提醒","顾问提醒"],noteArr:[],noteShowArr:[],noteShowArr_all:[],noteShowArr_my:[],noteShowArr_teacher:[],noteShowDay:null,notice:[],aboutUKec:"",first_day:null,lastArr:[],duringNum:null,nextNum:null,calendar_year:"",calendar_month:"",now_date:"",now_day:"",now_month:"",now_year:"",week:["日","一","二","三","四","五","六"],addForm:{begin_date:"",content:""},rules:{begin_date:[{required:!0,message:"请选择提醒日期",trigger:"blur"}],content:[{required:!0,message:"请输入提醒内容",trigger:"blur"}]}}},beforeMount:function(){},created:function(){this.initCalendar(),this.getInit()},mounted:function(){var t=this;t.getBanner(),t.getNotice(),t.getAbout(),t.getWidth(),window.onresize=function(){t.getWidth()},console.log("测试一下啦，记得删除")},methods:{getBanner:function(){var t=this;r.a.get("/utrack-banner/list").then((function(e){e&&(t.bannerList=e)}))},getWidth:function(){var t=this;this.$nextTick((function(){if(t.$refs.dynamic){var e=t.$refs.dynamic.clientWidth;t.dynamicHeight=e/2*.45+"px"}}))},cancel:function(t){this.$refs[t].resetFields(),this.noteShow=!1},getInit:function(){this.showCalendar(this.calendar_year,this.calendar_month),this.getNote(this.now_year+"-"+this.now_month+"-01",this.now_year+"-"+this.now_month+"-"+this.duringNum)},isGrey:function(t){var e=this,n=!1,r=e.dateFormat(t);return e.noteArr.map((function(t){t.begin_date==r&&r<e.now_date&&(n=!0)})),n},isGreen:function(t){var e=this,n=!1,r=e.dateFormat(t);return e.noteArr.map((function(t){t.begin_date==r&&r>e.now_date&&(n=!0)})),n},isRed:function(t){var e=!1;return this.dateFormat(t)==this.now_date&&(e=!0),e},dateFormat:function(t){var e=t<10?"0"+t:t,n=this.calendar_month<10?"0"+this.calendar_month:this.calendar_month;return this.calendar_year+"-"+n+"-"+e},getNotice:function(){var t=this;r.a.get("/utrack-notice/list").then((function(e){e&&(t.notice=e)}))},getNote:function(t,e){var n=this;r.a.get("/utrack-notice-student/list",{begin_date1:t,begin_date2:e}).then((function(t){n.noteArr=t,n.noteShowArr=t,n.classify()}))},getAbout:function(){var t=this;r.a.get("/about-ukec/list").then((function(e){e&&(t.aboutUKec=e.images)}))},changeNote:function(t){this.noteActive=t},classify:function(){var t=this,e=0,n=1,r=1;t.noteShowArr_all=[],t.noteShowArr_my=[],t.noteShowArr_teacher=[],t.noteShowArr.map((function(n){n.begin_date==t.note_day&&(++e,n.all_index=e,t.noteShowArr_all.push(n),!0)})),t.noteShowArr.map((function(e){e.begin_date==t.note_day&&"utrack"==e.type&&(e.my_index=n,n++,t.noteShowArr_my.push(e))})),t.noteShowArr.map((function(e){e.begin_date==t.note_day&&"crm"==e.type&&(e.teacher_index=r,r++,t.noteShowArr_teacher.push(e))}))},changeNoteCon:function(t,e,n){var r=this,o=e;e<10&&(e="0"+e),n<10&&(n="0"+n);var c=t+"-"+e+"-"+n;r.noteShowArr.map((function(t){t.begin_date!=c&&c!=r.now_date||(r.note_day=c,r.now_day=n,r.now_month=o)})),r.classify()},initCalendar:function(){var t=new Date;this.calendar_year=t.getFullYear(),this.calendar_month=t.getUTCMonth()+1,this.now_day=t.getDate()<10?"0"+t.getDate():t.getDate(),this.now_month=this.calendar_month,this.now_year=this.calendar_year,this.now_month>10?this.now_date=this.calendar_year+"-"+this.now_month+"-"+this.now_day:this.now_date=this.calendar_year+"-0"+this.now_month+"-"+this.now_day,this.noteShowDay=this.now_date,this.note_day=this.now_date,this.classify()},showCalendar:function(t,e){if(this.duringNum=new Date(t,e,0).getDate(),this.first_day=new Date(t,e-1,1).getDay(),this.lastNum=new Date(t,e-1,0).getDate(),this.lastArr=[],this.first_day>0)for(var i=0;i<this.first_day;i++)this.lastArr.unshift(this.lastNum-i);this.nextNum=42-this.duringNum-this.first_day},lastMonth:function(){this.calendar_month>1?(this.calendar_month--,this.showCalendar(this.calendar_year,this.calendar_month)):(this.calendar_month=12,this.calendar_year--,this.showCalendar(this.calendar_year,this.calendar_month))},nextMonth:function(){this.calendar_month<12?(this.calendar_month++,this.showCalendar(this.calendar_year,this.calendar_month)):(this.calendar_month=1,this.calendar_year++,this.showCalendar(this.calendar_year,this.calendar_month))},submitForm:function(t){var e=this;e.$refs[t].validate((function(n){n&&r.a.post("/utrack-notice-student/add",e.addForm).then((function(n){var r=e.$message({message:"提交成功！",type:"success"});setTimeout((function(){r.close(),e.$refs[t].resetFields(),e.noteShow=!1,e.getInit()}),1e3)}))}))}}},c=(n(540),n(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"notice"},[n("div",{staticClass:"notice_title"},[t._v("UKEC通知")]),t._v(" "),n("div",{staticClass:"notice_con"},[n("el-carousel",{attrs:{interval:2e3,height:"20px",direction:"vertical"}},t._l(t.notice,(function(e,r){return n("el-carousel-item",{key:r},[n("p",[t._v(t._s(e.content))])])})),1)],1)]),t._v(" "),n("div",{staticClass:"note"},[n("div",{staticClass:"note_box"},[n("div",{staticClass:"note_title"},[t._v("事件日历")]),t._v(" "),n("div",{staticClass:"calendar"},[n("div",{staticClass:"calendar_top"},[n("span",{staticClass:"el-icon-arrow-left",on:{click:t.lastMonth}}),t._v(" "),n("span",[t._v(t._s(t.calendar_year)+"年"+t._s(t.calendar_month)+"月")]),t._v(" "),n("span",{staticClass:"el-icon-arrow-right",on:{click:t.nextMonth}})]),t._v(" "),n("div",{staticClass:"week"},t._l(t.week,(function(e,r){return n("span",{key:r+1},[t._v(t._s(e))])})),0),t._v(" "),n("div",{staticClass:"data"},[t._l(t.lastArr,(function(e,r){return n("div",{key:r+"_lastArr",staticClass:"data_item grey"},[n("span",[t._v(t._s(e))])])})),t._v(" "),t._l(t.duringNum,(function(e,r){return n("div",{key:r+"_duringNum",staticClass:"data_item",class:{greyActive:t.isGrey(e),redActive:t.isRed(e),greenActive:t.isGreen(e)}},[n("span",{on:{click:function(n){return t.changeNoteCon(t.calendar_year,t.calendar_month,e)}}},[t._v(t._s(e))])])})),t._v(" "),t._l(t.nextNum,(function(e,r){return n("div",{key:r+"_nextNum",staticClass:"data_item grey"},[n("span",[t._v(t._s(e))])])}))],2)])]),t._v(" "),n("div",{staticClass:"note_box"},[n("div",{staticClass:"note_day"},[n("span",[t._v(t._s(t.now_day))]),t._v(" "),n("span",[t._v(t._s(t.now_month)+"月")])]),t._v(" "),n("div",{staticClass:"note_add"},[n("i",{on:{click:function(e){t.noteShow=!0}}}),t._v("\n                新增提醒\n            ")]),t._v(" "),n("div",{staticClass:"note_title"},[t._v("待办事项")]),t._v(" "),n("div",{staticClass:"note_con"},t._l(t.note,(function(e,r){return n("span",{key:r,class:{active:r==t.noteActive},on:{click:function(e){return t.changeNote(r)}}},[t._v(t._s(e))])})),0),t._v(" "),n("div",{staticClass:"note_item note_view",class:{note_view_show:0==t.noteActive}},[n("div",{staticClass:"note_swiper"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper1",value:t.swiperOption1,expression:"swiperOption1",arg:"mySwiper1"}],ref:"swiperOption1",staticStyle:{height:"220px"}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.noteShowArr_all,(function(e,r){return n("div",{key:r,staticClass:"swiper-slide note_show"},[n("p",{staticClass:"note_text"},[t._v(t._s(e.all_index)+"、"+t._s(e.content))])])})),0)])])]),t._v(" "),n("div",{staticClass:"note_item note_view",class:{note_view_show:1==t.noteActive}},[n("div",{staticClass:"note_swiper"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper2",value:t.swiperOption2,expression:"swiperOption2",arg:"mySwiper2"}],ref:"swiperOption2",staticStyle:{height:"220px"}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.noteShowArr_my,(function(e,r){return n("div",{key:r+"_my",staticClass:"swiper-slide note_show"},[n("p",{staticClass:"note_text"},[t._v(t._s(e.my_index)+"、"+t._s(e.content))])])})),0)])])]),t._v(" "),n("div",{staticClass:"note_item note_view",class:{note_view_show:2==t.noteActive}},[n("div",{staticClass:"note_swiper"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper3",value:t.swiperOption3,expression:"swiperOption3",arg:"mySwiper3"}],ref:"swiperOption3",staticStyle:{height:"220px"}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.noteShowArr_teacher,(function(e,r){return n("div",{key:r+"_teacher",staticClass:"swiper-slide note_show"},[n("p",{staticClass:"note_text"},[t._v(t._s(e.teacher_index)+"、"+t._s(e.content))])])})),0)])])])])]),t._v(" "),n("div",{ref:"dynamic",staticClass:"bottom_box"},[n("div",{staticClass:"banner about",style:{height:t.dynamicHeight}},[n("div",{staticClass:"about_img"},[n("img",{attrs:{src:t.aboutUKec,alt:""}})])]),t._v(" "),n("div",{staticClass:"banner",style:{height:t.dynamicHeight}},[t.bannerList.length>0?n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper5",value:t.swiperOption5,expression:"swiperOption5",arg:"mySwiper5"}],ref:"swiperOption5",staticStyle:{height:"100%"}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.bannerList,(function(t,e){return n("div",{key:e+"banner",staticClass:"swiper-slide banner_img"},[n("a",{attrs:{href:t.http_url,target:"_blank"}},[n("img",{attrs:{src:t.img_url,alt:t.name}})])])})),0),t._v(" "),t._l(t.bannerList,(function(t,e){return n("div",{key:e+"dot",staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})}))],2):t._e()])]),t._v(" "),n("div",{staticClass:"add_note"},[n("el-dialog",{attrs:{visible:t.noteShow,width:"717px",center:""},on:{"update:visible":function(e){t.noteShow=e}}},[n("div",{staticClass:"add_title"},[t._v("新增提醒")]),t._v(" "),n("div",{staticClass:"add_con"},[n("el-form",{ref:"addForm",attrs:{model:t.addForm,rules:t.rules}},[n("el-form-item",{attrs:{label:"提醒日期",prop:"begin_date"}},[n("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"请选择提醒日期"},model:{value:t.addForm.begin_date,callback:function(e){t.$set(t.addForm,"begin_date",e)},expression:"addForm.begin_date"}})],1),t._v(" "),n("el-form-item",{staticClass:"content",attrs:{prop:"content",label:"提醒内容"}},[n("el-input",{attrs:{type:"textarea",maxLength:50},model:{value:t.addForm.content,callback:function(e){t.$set(t.addForm,"content",e)},expression:"addForm.content"}}),t._v(" "),n("span",[t._v(t._s(t.addForm.content.length)+"字/50字")])],1)],1),t._v(" "),n("div",{staticClass:"add_footer"},[n("span",{on:{click:function(e){return t.cancel("addForm")}}},[t._v("取消")]),t._v(" "),n("span",{on:{click:function(e){return t.submitForm("addForm")}}},[t._v("确定")])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);