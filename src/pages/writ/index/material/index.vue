<template>
  <div class="material cv con">
    <div class="material_item" v-for="(item,index) in materialType" :key="index">
      <div class="material_title">{{item}}</div>
      <!-- 有数据 -->
      <div class="material_box" v-for="(item2,index2) in material" :key="index2" v-if="item2[0].materialname_cn == item">
        <el-table :data="item2" style="width: 100%" size="medium" stripe>
          <el-table-column prop="material_name" label="材料名称"></el-table-column>
          <el-table-column prop="origin_name" label="文件">
            <template slot-scope="scope">
              <div class="material_file" @click="viewMaterial(scope.$index, scope.row)">
                <span>{{scope.row.origin_name}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="上传时间" :formatter="timeFormat"></el-table-column>
          <el-table-column prop="material_status" label="审核状态">
            <template slot-scope="scope">
              <div
                class="status"
                :class="{'red':scope.row.material_status == 199,'blue':scope.row.material_status == 0,'green':scope.row.material_status == 200}"
              >
                <span v-if="scope.row.dd == 0">审核未通过</span>
                <span v-else-if="scope.row.dd == 1">审核中</span>
                <span v-else>审核通过</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="ee" label="操作">
            <template slot-scope="scope">
              <div class="material_view">
                <span @click="viewMaterial(scope.$index, scope.row)" title="查看"></span>
                <span @click="download(scope.$index, scope.row)" title="下载"></span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 没有数据 -->
        <div class="material_box" v-if="showArr[index]">
        <el-table :data="[]" style="width: 100%" size="medium" stripe>
          <el-table-column prop="material_name" label="材料名称"></el-table-column>
          <el-table-column prop="origin_name" label="文件">
            <template slot-scope="scope">
              <div class="material_file" @click="viewMaterial(scope.$index, scope.row)">
                <span>{{scope.row.origin_name}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="上传时间" :formatter="timeFormat"></el-table-column>
          <el-table-column prop="material_status" label="审核状态">
            <template slot-scope="scope">
              <div
                class="status"
                :class="{'red':scope.row.material_status == 199,'blue':scope.row.material_status == 0,'green':scope.row.material_status == 200}"
              >
                <span v-if="scope.row.dd == 0">审核未通过</span>
                <span v-else-if="scope.row.dd == 1">审核中</span>
                <span v-else>审核通过</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="ee" label="操作">
            <template slot-scope="scope">
              <div class="material_view">
                <span @click="viewMaterial(scope.$index, scope.row)" title="查看"></span>
                <span @click="download(scope.$index, scope.row)" title="下载"></span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>

<script>
import http from "~/plugins/http";
import config from '~/plugins/config';
import {timeDetail} from '~/plugins/utils';
export default {
  layout: "refactor",
  data() {
    return {
      userForm: {}, //用户信息
      cid:'',//用户cid
      material:[],//签证材料
      showArr:[],//是否展示table
       materialType: ["个人陈述","CV","推荐信"],
    };
  },
  mounted() {
    let _this = this;
    //获取用户信息
    http.get("/customer/get-info").then(res => {
      if (res) {
        _this.cid = res.id;
        http.get("/customer-material/list",{cid:_this.cid}).then(res => {
          if (res) {
            _this.material = res;
            for(var i = 0;i<_this.materialType.length;i++){
              let flag = true;
              jump:
              for(let k in res){
                if(res[k][0].materialname_cn == _this.materialType[i]){
                  flag = false;
                  break jump;
                }else{
                  flag = true;
                }
              }
               _this.showArr.push(flag);
            }
          }
        });
      }
    });
  },
  methods: {
    //查看材料
    viewMaterial(index,item) {
      window.open(config.view_host+item.file_url,'_blank')
    },
    //下载材料
    download(index,item) {
      window.open(config.view_host+item.file_url+'?attname='+item.origin_name,'_self')
    },
    //格式化时间
    timeFormat(row,column){
      let time = timeDetail(row.create_time)
      return time;
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/css/material.scss";
</style>
