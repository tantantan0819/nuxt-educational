<template>
  <div class="cv con">
    <div class="cv_step2">
      <div class="title_box">
        <div class="cv_title">
          <p>材料确认</p>
        </div>
      </div>
      <div class="refactor_table">
        <el-table
          stripe
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width:100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="50"  :selectable='checkboxT'></el-table-column>
          <el-table-column  label="用于申请院校" prop="university_cn"></el-table-column>
          <el-table-column  label="用于申请专业" prop="major_cn"></el-table-column>
          <el-table-column  label="材料类型" prop="materialname_cn"></el-table-column>
          <el-table-column  label="材料名称" prop="material_name"></el-table-column>
          <el-table-column label="文件">
            <template slot-scope="scope">
              <a :href="scope.row.file_url" target="_blank">{{scope.row.origin_name}}</a>
            </template>
          </el-table-column>
          <el-table-column  label="上传时间">
            <template slot-scope="scope">
               <span>{{scope.row.create_time | timeFormat}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="cv_footer" v-if="!isDisabled">
        <div class="confirm_button">
          <span @click="sure()">确认材料</span>
        </div>
        <span class="next">请勾选您需要确认的材料进行确认，对于您尚有疑问的材料请勿勾选<br>若全选材料确认后，该方案将变为已确认，我们将以此材料进行申请</span>
      </div>
    </div>
  </div>
</template>
<script>
    import http from "~/plugins/http";
    import { timeDetail, emptyObj, getStore } from "~/plugins/utils";
    export default {
        data() {
            return {
                confirm: {},
                tableData: [],
                planId: '',
                idArr: [],
                isDisabled: false,
                confirmIndex: null,
                selectArr: []
            };
        },
       async mounted(){
            let _this = this;
            _this.planId = _this.$route.query.id;
            _this.confirmIndex = _this.$route.query.index;
            //获取材料
           let res = await http.get('/customer-material/apply-list',{id:_this.planId});
           if(res){
               _this.confirm = res[_this.confirmIndex];
               if(_this.confirm.list.length>0){
                   _this.confirm.material_status == '未确认' ? _this.isDisabled = false : this.isDisabled = true;
                   _this.confirm.list.map((item,index) => {
                       item.university_cn =_this.confirm.university_cn;
                       item.major_cn = _this.confirm.major_cn;
                       item.status == '已通过' ? _this.selectArr.push(item) : '';
                   })
                   _this.tableData =  _this.confirm.list;
                   //勾选已提交的文件
                   _this.$nextTick(()=>{
                      _this.selectArr.map(item=>{
                          _this.$refs.multipleTable.toggleRowSelection(item);
                      })
                   })
               }
           }
        },
        filters:{
            timeFormat(val){
                return timeDetail(val);
            }
        },
        methods: {
            //设置不可勾选
            checkboxT(row,index){
                if(!this.isDisabled){
                    return 1
                }else {
                    return 0
                }
            },
            //勾选方案--可多选、全选
            handleSelectionChange(val) {
                let _this = this;
                val.map(item=>{
                    _this.idArr.push(item.id)
                })
            },
            //确认材料
            sure(){
                let _this = this;
                if(_this.idArr.length>0){
                    let idStr = _this.idArr.join(',')
                    http.post("/customer-material/sure",{question_id:_this.planId,material_ids:idStr}).then(
                        res => {
                            let successMsg = _this.$message({
                                message: "提交成功！",
                                type: "success"
                            });
                            setTimeout(() => {
                                successMsg.close();
                                _this.$router.push('/writ/confirm');
                            }, 1000);
                        }
                    );
                }else{
                    _this.$message.warning("请先选择您要确认的材料！");
                }
            }
        }
    }
</script>
<style lang="scss">
  @import "~/assets/css/confirm.scss";
</style>
