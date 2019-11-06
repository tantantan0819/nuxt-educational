<template>
  <div class="cv">
    <div class="cv_step2">
      <div class="title_box">
        <div class="cv_title">
          <p>我的PS</p>
        </div>
      </div>
      <div class="contract_box" v-for="(item,index) in contract" :key="index">
        <div class="contract_title">
          <div class="contract_info">
            <span>合同编号：{{item.contract_no}} </span>
            <span>合同签约时间：{{item.sign_date}}</span>
          </div>
          <div class="contract_add">
            <span>该合同有{{item.used_ps_num}}份PS，您的套餐还可新增{{item.can_use_ps_num}}份PS</span>
            <span @click="add(item.id,item.can_use_ps_num)" :class="{'noPs': item.can_use_ps_num == '0'}">新增PS</span>
          </div>
        </div>
        <div class="cv_content cv2 centerTable ps_table">
          <el-table :data="item.apply" stripe style="width: 100%">
            <el-table-column type="index" label="序号" width="74"></el-table-column>
            <el-table-column prop="university_cn" label="申请院校"></el-table-column>
            <el-table-column prop="major_cn" label="申请专业"></el-table-column>
            <el-table-column prop="sign_date" label="所属合同签约时间" width="170"></el-table-column>
            <el-table-column prop="createtime" label="创建时间" width="200"></el-table-column>
            <el-table-column prop="operation" label="操作" width="130">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(index,scope.$index)" class="viewBtn">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!--  个人陈诉须知  -->
      <div class="add notice">
        <el-dialog title="" :visible.sync="outerVisible">
          <div class="add_title">个人陈诉须知</div>
          <div class="add_content notice_content">
            <p>1）个人陈述是申请文书中非常重要的文件，请务必仔细阅读每个问题，并用中文或英文回答。</p>
            <p>2）总字数不得低于1500字，不得高于3500字。字数过多或者过少，都不利于撰写文书！</p>
            <p>3）成稿的英文PS大多数院校要求500字左右，请注意字数越少越难写！偶尔要求更多字数的，我们会根据要求撰写。</p>
            <p>4）如果英文PS非常地道，没有任何错误，英国招生官一看就知道不是你本人写的，并没有什么实际意义。所以，我们会根据高于你本人雅思水平1分的英语水平来写作；如果您有异议，可以向入学顾问提出。</p>
            <el-checkbox v-model="notice" class="notice_text">我已阅读 “个人陈诉须知” 内容</el-checkbox>
            <div class="footer_button footer_button_156" :class="{'active':notice}">
              <span @click="outerVisible = false"><i>取消制作</i></span>
              <span @click="start()">开始制作PS素材！</span>
            </div>
          </div>
        </el-dialog>
      </div>
      <!--  PS详情  -->
      <div class="add ps_detail">
        <el-dialog title="" :visible.sync="psDatil" width="1377">
          <div class="add_title">PS详情</div>
          <div class="add_content">
            <div class="detail_table">
              <el-table :data="viewDetail" stripe style="width: 100%" class="psDetail_talbe">
                <el-table-column prop="university_cn" label="申请院校"></el-table-column>
                <el-table-column prop="major_cn" label="申请专业"></el-table-column>
                <el-table-column prop="sign_date" label="所属合同签约时间" width="178"></el-table-column>
                <el-table-column prop="createtime" label="创建时间" width="178"></el-table-column>
              </el-table>
            </div>
            <el-form :model="psDetailForm" status-icon ref="psDetailForm" label-width="300px" label-position="top"
                     class="psDetailForm">
              <el-form-item label="1、是否需要写作老师与您本人沟通内容和逻辑？">
                <el-radio-group v-model="psDetailForm.need_teacher">
                  <el-radio label="204" class="need_teacher" :disabled="psDetailForm.need_teacher != '204'">我对内容和逻辑有自己的要求，需要语音沟通</el-radio>
                  <el-radio label="205" class="need_teacher" :disabled="psDetailForm.need_teacher != '205'">不需要，我没有什么想法，请专业老师自行撰写</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="2、你选择这个研究领域有什么职业规划方面的考虑？">
                <el-input type="textarea" v-model="psDetailForm.content1" readonly
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="3、如果你是转专业申请的话，什么原因促使你转到这个领域来学习？">
                <el-input type="textarea" v-model="psDetailForm.content2" readonly
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="4、你为什么选择这个专业而不是其他专业？">
                <el-input type="textarea" v-model="psDetailForm.content3" readonly
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="5、你本科或者上一段学习阶段，在专业课上学习成果如何？">
                <el-input type="textarea" v-model="psDetailForm.content4" readonly
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="6、你为什么觉的自己是一个有竞争力的申请者？">
                <el-input type="textarea" v-model="psDetailForm.content5" readonly
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="7、你是否读过相关书籍跟申请的专业相关？">
                <el-input type="textarea" v-model="psDetailForm.content6" readonly
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="8、其他你特别想放在PS里面的内容。">
                <el-input type="textarea" v-model="psDetailForm.content7" readonly
                          autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div class="footer_button psDetail_button">
              <span @click="psDatil = false"><i>关闭</i></span>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/cv.scss";
  @import "~/assets/css/ps.scss";
</style>
<script>
    import http from "~/plugins/http";

    export default {
        layout: 'utrack',
        data() {
            return {
                contract: [],//ps合同
                AID: '1',
                outerVisible: false, // 外层
                innerVisible: false, // 内层
                notice: '', // 个人陈诉须知
                psDatil: false,// ps查看详情
                tableData: [], //table
                viewDetail: [],//查看当前ps
                psDetailForm: {},// ps详情
            }
        },
        mounted() {
            let _this = this;
            //ps列表
            http.get('/customer-apply-question/get-my-ps1').then((res) => {
                _this.contract = res;
            })
        },
        methods: {
            //新增PS
            add(id, num) {
                if (num > 0) {
                    this.$router.push({path: '/ps/add', query: {id: id}});
                }else{
                    this.$message({
                        message: '该合同下的套餐已不能新增PS，如有疑问，请联系您的顾问老师！',
                        type: 'warning'
                    });
                }
            },
            //开始制作PS素材
            start() {
                if (!this.notice) {
                    this.$message({
                        message: '请先勾选“我已阅读 “个人陈诉须知” 内容”',
                        type: 'warning'
                    });
                } else {
                    this.$router.push('ps/add')
                }
            },
            //查看ps详情
            handleEdit(contract, index) {
                let _this = this;
                _this.viewDetail = [];
                _this.viewDetail.push(_this.contract[contract].apply[index]);
                _this.psDetailForm = this.viewDetail[0];
                _this.psDetailForm.need_teacher += '';
                _this.psDatil = true;
            }
        }
    }
</script>
