<template>
  <!-- 材料列表查看多文件 -->
  <div class="modify fileList">
    <div class="add add_note">
      <el-dialog title :visible.sync="addShow" @close='closeDialog'>
        <div class="add_title">文件列表</div>
        <div class="add_content">
          <div class="add_note modify_upload mul_upload">
            <el-table stripe ref="multipleTable" :data="tabel" tooltip-effect="dark" style="width: 100%">
              <el-table-column prop="name" label="文件名称"></el-table-column>
              <el-table-column prop="file_url" label="文件路径">
                <template slot-scope="scope">
                  <a :href="scope.row.file_url" target="_blank">{{scope.row.file_url}}</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>

</template>
<style lang="scss">
  @import "~/assets/css/cv.scss";
</style>
<script>
    export  default {
        props: ['tabel'],
        data(){
            return{
                addShow: true,
            }
        },
        methods:{
            //监听关闭弹框的事件
            closeDialog(){
                this.$emit("closeContr",'false');
            },
        },
    }
</script>
