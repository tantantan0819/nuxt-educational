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
          <el-table-column prop="page_type" label="材料类型" :formatter="noteFormat"></el-table-column>
          <el-table-column prop="note_type" label="修改类别" :formatter="typeFormat"></el-table-column>
          <el-table-column prop="note_body" label="备注"></el-table-column>
          <el-table-column prop="create_time" label="提交时间" :formatter="timeFormat"></el-table-column>
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
        <el-dialog title :visible.sync="isDetail" width="1377">
          <div class="add_title">修改详情</div>
          <div class="add_content">
            <el-form
              :model="modify"
              status-icon
              ref="modify"
              label-width="320px"
              label-position="top"
            >
              <el-form-item label="类别:" prop="type">
                <el-select v-model="modify.note_type" class="widthAll" placeholder="类别">
                  <el-option
                    v-for="(item,index) in select.noteType"
                    :key="index"
                    :label="item.cvalue_cn"
                    :value="item.id"
                    v-bind:disabled="item.id | typeFormat2"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="  " v-if="isShow" class="modfityTip">
                <span>内容修改只可进行1次，修改件的返还时间为72小时</span>
              </el-form-item>
              <el-form-item label="备注:" prop="note_body" class="cvTextareaBox modifyText">
                <el-input
                  type="textarea"
                  v-model="modify.note_body"
                  class="noteTextarea"
                  autocomplete="off"
                  readonly
                ></el-input>
              </el-form-item>
              <el-form-item label="附件:" prop="files">
                <div class="note_item" v-for="(item,index) in modify.note_files" :key="index">
                  <span>
                    <i class="el-icon-document"></i>
                    {{item.name}}
                  </span>
                  <span class="note_view el-icon-view" @click="view(item.url)"></span>
                </div>
              </el-form-item>
              <el-form-item label="提交时间:" class="modify_itme">
                <span>{{modify.create_time | timeFormat2}}</span>
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
import config from "~/plugins/config";
import { getStore, setStore, timeDetail } from "~/plugins/utils";
let that;
export default {
  layout: "utrack",
  data() {
    return {
      isDetail: false,
      tableData: [], //table
      select: {
        noteType: []
      },
      modify: {
        note_type: "",
        note_body: "",
        files: [],
        time: ""
      }
    };
  },
  beforeCreate() {
    that = this;
  },
  mounted() {
    let _this = this;
    //获取类别下拉
    _this.getType();
  },
  computed: {
    //当选中修改类型为’内容‘时提示：内容修改只可进行1次，修改件的返还时间为72小时
    isShow() {
      let flag = false;
      let contentId = "";
      this.select.noteType.map(item => {
        if (item.cvalue_cn == "内容") {
          contentId = item.id;
        }
      });
      if (this.modify.note_type == contentId) {
        flag = !flag;
      }
      return flag;
    }
  },
  filters: {
    //显示修改类型
    typeFormat2(type) {
      let flag = true;
      that.modify.note_type == type ? (flag = false) : (flag = true);
      return flag;
    },
    //显示提交时间
    //过滤关系
    timeFormat2(val) {
      let time = timeDetail(val);
      return time;
    }
  },
  methods: {
    //获取类别下拉
    getType() {
      let _this = this;
      let noteType = getStore("noteType");
      if (noteType) {
        _this.select.noteType = noteType.NOTE_TYPE_CV;
        _this.modify.type = noteType.NOTE_TYPE_CV[0].id;
        //获取修改信息
        http.post("/customer-note/list").then(res => {
          _this.tableData = res.rows;
        });
      } else {
        http.get("/code-val/group-key-list").then(res => {
          _this.select.noteType = res.NOTE_TYPE_CV;
          _this.modify.type = res.NOTE_TYPE_CV[0].id;
          //获取修改信息
          http.post("/customer-note/list").then(res => {
            _this.tableData = res.rows;
          });
          setStore("noteType", res);
        });
      }
    },

    //过滤性别
    typeFormat(row, column) {
      let type = "";
      if (this.select.noteType.length > 0) {
        this.select.noteType.map(item => {
          item.id == row.note_type ? (type = item.cvalue_cn) : "";
        });
      }
      return type;
    },
    //过滤材料类型
    noteFormat(row) {
      let relust = "cv";
      switch (row.page_type) {
        case "cv":
          relust = "CV";
          break;
        case "ps":
          relust = "PS";
          break;
        case "res":
          relust = "推荐信";
          break;
        default:
          relust = "CV";
          break;
      }
      return relust;
    },
    //过滤关系
    timeFormat(row, column) {
      let time = timeDetail(row.create_time);
      return time;
    },
    //取消查看详情
    cancel(formName) {
      let _this = this;
      _this.isDetail = false;
    },
    //查看详情
    handleEdit(index, row) {
      let _this = this;
      _this.modify = row;
      _this.isDetail = true;
      _this.modify.note_files = JSON.parse(_this.modify.note_files);
    },
    // 关闭查看详情
    close() {
      this.psDetail = false;
    },
    //查看附件
    view(url) {
      window.open(config.view_host + url, "_blank");
    }
  }
};
</script>
