(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{518:function(t,e,l){},519:function(t,e,l){},561:function(t,e,l){"use strict";var n=l(518);l.n(n).a},562:function(t,e,l){"use strict";var n=l(519);l.n(n).a},575:function(t,e,l){"use strict";l.r(e);l(35);var n=l(5),r=l(71),o=l(4),c={props:["tabel"],data:function(){return{addShow:!0}},methods:{closeDialog:function(){this.$emit("closeContr","false")}}},f=(l(561),l(10)),d={components:{FileList:Object(f.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"modify fileList"},[l("div",{staticClass:"add add_note"},[l("el-dialog",{attrs:{title:"",visible:t.addShow},on:{"update:visible":function(e){t.addShow=e},close:t.closeDialog}},[l("div",{staticClass:"add_title"},[t._v("文件列表")]),t._v(" "),l("div",{staticClass:"add_content"},[l("div",{staticClass:"add_note modify_upload mul_upload"},[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:t.tabel,"tooltip-effect":"dark"}},[l("el-table-column",{attrs:{prop:"name",label:"文件名称"}}),t._v(" "),l("el-table-column",{attrs:{prop:"file_url",label:"文件路径"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("a",{attrs:{href:e.row.file_url,target:"_blank"}},[t._v(t._s(e.row.file_url))])]}}])})],1)],1)])])],1)])}),[],!1,null,null,null).exports},data:function(){return{isList:!1,listData:[],confirm:{},tableData:[],planId:"",idArr:[],isDisabled:!1,confirmIndex:null,selectArr:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=t).planId=l.$route.query.id,l.confirmIndex=l.$route.query.index,e.next=5,r.a.get("/customer-material/apply-list",{id:l.planId});case 5:(n=e.sent)&&(l.confirm=n[l.confirmIndex],l.confirm.list.length>0&&("未确认"==l.confirm.material_status?l.isDisabled=!1:t.isDisabled=!0,l.confirm.list.map((function(t,e){t.university_cn=l.confirm.university_cn,t.major_cn=l.confirm.major_cn,"已通过"==t.status&&l.selectArr.push(t)})),l.tableData=l.confirm.list,l.$nextTick((function(){l.selectArr.map((function(t){l.$refs.multipleTable.toggleRowSelection(t)}))}))));case 7:case"end":return e.stop()}}),e)})))()},filters:{timeFormat:function(t){return Object(o.m)(t)}},methods:{checkboxT:function(t,e){return this.isDisabled?0:1},handleSelectionChange:function(t){var e=this;t.map((function(t){e.idArr.push(t.id)}))},showList:function(data){console.log(data,"---yangguan "),this.listData=data,this.isList=!0},closeList:function(){this.isList=!1},sure:function(){var t=this;if(t.idArr.length>0){var e=t.idArr.join(",");r.a.post("/customer-material/sure",{question_id:t.planId,material_ids:e}).then((function(e){var l=t.$message({message:"提交成功！",type:"success"});setTimeout((function(){l.close(),t.$router.push("/writ/confirm")}),1e3)}))}else t.$message.warning("请先选择您要确认的材料！")}}},_=(l(562),Object(f.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"cv con"},[l("div",{staticClass:"cv_step2"},[t._m(0),t._v(" "),l("div",{staticClass:"refactor_table"},[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"50",selectable:t.checkboxT}}),t._v(" "),l("el-table-column",{attrs:{label:"用于申请院校",prop:"university_cn"}}),t._v(" "),l("el-table-column",{attrs:{label:"用于申请专业",prop:"major_cn"}}),t._v(" "),l("el-table-column",{attrs:{label:"材料类型",prop:"materialname_cn"}}),t._v(" "),l("el-table-column",{attrs:{label:"材料名称",prop:"material_name"}}),t._v(" "),l("el-table-column",{attrs:{label:"文件"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.file_url_data.length<2?l("a",{attrs:{href:e.row.file_url_data[0].file_url,target:"_blank"}},[t._v(t._s(e.row.file_url_data[0].name))]):l("i",{staticClass:"showList",on:{click:function(l){return t.showList(e.row.file_url_data)}}},[t._v("文件列表")])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"上传时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(t._f("timeFormat")(e.row.create_time)))])]}}])})],1)],1),t._v(" "),t.isDisabled?t._e():l("div",{staticClass:"cv_footer"},[l("div",{staticClass:"confirm_button"},[l("span",{on:{click:function(e){return t.sure()}}},[t._v("确认材料")])]),t._v(" "),t._m(1)])]),t._v(" "),t.isList?l("file-list",t._g({attrs:{tabel:t.listData}},{closeContr:t.closeList})):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_box"},[e("div",{staticClass:"cv_title"},[e("p",[this._v("材料确认")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"next"},[this._v("请勾选您需要确认的材料进行确认，对于您尚有疑问的材料请勿勾选"),e("br"),this._v("若全选材料确认后，该方案将变为已确认，我们将以此材料进行申请")])}],!1,null,null,null));e.default=_.exports}}]);