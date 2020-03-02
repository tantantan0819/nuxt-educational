<template>
  <div class="cv">
    <div class="cv_step2">
      <div class="title_box">
        <div class="cv_title">
          <p>修改记录</p>
        </div>
      </div>
      <div class="cv_content cv2 centerTable">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="type" label="材料类型"></el-table-column>
          <el-table-column prop="modify" label="修改类别" :formatter="sexFormat"></el-table-column>
          <el-table-column prop="note" label="备注"></el-table-column>
          <el-table-column prop="time" label="提交时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                class="viewBtn"
              >查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--  PS详情  -->
      <div class="add modify">
        <el-dialog title :visible.sync="psDetail" width="1377">
          <div class="add_title">修改详情</div>
          <div class="add_content">
          <el-form
            :model="modify"
            status-icon
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
             <el-form-item label="  " v-if="isShow" class="modfityTip">
                <span>内容修改只可进行1次，修改件的返还时间为72小时</span>
            </el-form-item>
            <el-form-item label="备注:" prop="content" class="cvTextareaBox modifyText">
              <el-input
                type="textarea"
                v-model="modify.content"
                class="noteTextarea"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="附件:" prop="files">
                <div class="note_item">
                  <span><i class="el-icon-document"></i>语言课程.docx</span>
                  <span class="note_view"></span>
                </div>
                  <div class="note_item">
                  <span><i class="el-icon-document"></i>语言课程.docx</span>
                  <span class="note_view"></span>
                </div>
            </el-form-item>
          </el-form>
          <div class="footer_button">
            <span @click="cancel('modify')">
              <i>关闭</i>
            </span>
          </div>
        </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/assets/css/cv.scss";
</style>
<script>
import http from "~/plugins/http";
import { getStore, setStore } from "~/plugins/utils";
export default {
  layout: "utrack",
  data() {
    return {
      psDetail: false,
      tableData: [
        {
          type: "材料类别1",
          modify: "修改内容类别2",
          time: "2010-29",
          note: "aaa"
        }
      ], //table
      psDetailForm: {
        content1: "",
        content2: "",
        content3: "",
        content4: "",
        content5: "",
        content6: ""
      },
        select: {
        noteType: []
      },
       modify: {
        type: '',
        content: "",
        files: [],
        time:''
      },
    };
  },
  mounted() {
    let _this = this;
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
   computed: {
    //当选中修改类型为’内容‘时提示：内容修改只可进行1次，修改件的返还时间为72小时
    isShow() {
      let flag = false;
      let contentId = '';
      this.select.noteType.map(item=>{
        if(item.cvalue_cn == '内容'){
          contentId = item.id;
        }
      })
      if (this.modify.type == contentId) {
        flag = !flag;
      }
      return flag;
    }
  },
  methods: {
    //过滤性别
    sexFormat(row, column) {
      let sex = "未知";
      //   this.sexList.map((item, index) => {
      //     if (item.id == Number(row.sex)) {
      //       sex = item.cvalue_cn;
      //     }
      //   });
      return sex;
    },
    //过滤关系
    relashipFormat(row, column) {
      let relaship = "";
      //   this.relaship.map((item, index) => {
      //     if (item.id == Number(row.relation)) {
      //       relaship = item.cvalue_cn;
      //     }
      //   });
      return relaship;
    },
   //取消查看详情
    cancel(formName) {
      let _this = this;
      _this.psDetail = false;
    },
    //查看详情
    handleEdit(index) {
      let _this = this;
      //   _this.viewDetail = [];
      //   _this.viewDetail.push(_this.tableData[index]);
      //   _this.psDetailForm = _this.viewDetail[0];
        _this.psDetail = true;
      console.log("查看详情-----");
    },
    // 关闭查看详情
    close() {
      this.psDetail = false;
    }
  }
};
</script>
