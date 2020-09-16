<template>
  <!-- 材料列表查看多文件 -->
  <div class="modify fileList">
    <div class="add add_note">
      <el-dialog title :visible.sync="addShow">
        <div class="add_title">文件列表</div>
        <div class="add_content">
          <div class="add_note modify_upload mul_upload">
            <el-table stripe ref="multipleTable" :data="aboradTable" tooltip-effect="dark" style="width: 100%">
              <el-table-column prop="contract_no" label="文件名称" width="200px"></el-table-column>
              <el-table-column prop="sign_type" label="文件路径">
                <template slot-scope="scope">
                  <a :href="scope.row.sign_type" target="_blank">{{scope.row.sign_type}}</a>
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
        props: ['single','id'],
        data(){
            return{
                addShow: true,
                aboradTable: [
                    {
                        contract_no: '消息先文件',
                        sign_type: 'https://www.baidu.com/'
                    },
                    {
                        contract_no: '消息先文件',
                        sign_type: 'https://www.baidu.com/'
                    },
                ]
            }
        },
        methods:{

        },
    }
</script>
