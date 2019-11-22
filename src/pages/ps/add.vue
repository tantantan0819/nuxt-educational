<template>
  <div class="cv ps">
    <div class="cv_step2">
      <div class="title_box">
        <div class="cv_title">
          <p>新增PS</p>
          <span>目前您有{{plan.used_ps_num}}份PS，您的套餐还可新增{{plan.can_use_ps_num}}份PS</span>
        </div>
      </div>
      <div class="cv_content ps_add ps_add2">
        <span class="ps_tip" v-if="isNext">请选择您要新增PS的申请方案</span>
        <span class="ps_tip" v-else>该合同下暂无可申请的PS方案哦~ 如有疑问，请联系你的顾问老师！</span>
        <div class="add_box">
          <div class="add_item" v-for="(item,index) in plan.apply" :key="index" :class="{'active': index == addIndex}">
            <div class="add_title">申请方案{{index+1}} <span @click="viewDetail(index,item.id)">查看详情</span></div>
            <div class="add_content" @click="selectApply(index)">
              <div class="detail_item">
                <span>申请院校</span>
                <p>{{item.university_en}} {{item.university_cn}}</p>
              </div>
              <div class="detail_item">
                <span>申请专业</span>
                <p>{{item.major_en}} {{item.major_cn}}</p>
              </div>
              <div class="detail_item">
                <span>所属合同签约日期</span>
                <p>{{plan.created_at}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cv_footer ps_footer">
        <div class="footer_button">
          <span @click="prev"><i>取消</i></span>
          <span @click="next" :class="{'gray':!isNext}">下一步</span>
        </div>
      </div>
    </div>
    <!--  PS详情  -->
    <div class="add ps_detail table_dialog">
      <el-dialog title="" :visible.sync="outerVisible">
        <div class="add_title">方案详情</div>
        <div class="add_content">
          <div class="detail_table">
            <table border="1">
              <tr>
                <td>方案号</td>
                <td>{{detail.scheme_no}}</td>
                <td>课程类型</td>
                <td>{{detail.apply_course_type | courseFormat}}</td>
              </tr>
              <tr>
                <td>申请院校</td>
                <td>{{detail.university_cn}}</td>
                <td>申请专业</td>
                <td>{{detail.apply_course_name_cn}}</td>
              </tr>
              <tr>
                <td>申请专用邮箱</td>
                <td>{{detail.apply_special_email}}</td>
                <td>邮箱密码</td>
                <td>{{detail.apply_special_password}}</td>
              </tr>
              <tr>
                <td>网申提交日期</td>
                <td colspan="3">{{detail.net_submit_date}}</td>
              </tr>
              <tr>
                <td>网申方式</td>
                <td>{{detail.sign_inapply_type | signFormat}}</td>
                <td>网申账号</td>
                <td>{{detail.net_client_id}}</td>
              </tr>
              <tr>
                <td>网申密码</td>
                <td>{{detail.net_password}}</td>
                <td>院校申请档案号</td>
                <td>{{detail.school_apply_no}}</td>
              </tr>
              <tr>
                <td>网申链接</td>
                <td>{{detail.net_url}}</td>
                <td>可查进度日期</td>
                <td>{{detail.state_query_date}}</td>
              </tr>
              <tr>
                <td>申请结果</td>
                <td>{{detail.result_offer | resultFormat}}</td>
                <td>申请结果日期</td>
                <td>{{detail.result_con}}</td>
              </tr>
              <tr>
                <td>入学条件</td>
                <td colspan="3">{{detail.result_con}}</td>
              </tr>
              <tr>
                <td>申请费</td>
                <td>{{detail.apply_fee}}</td>
                <td>押金条件</td>
                <td>{{detail.deposit_requirement}}</td>
              </tr>
              <tr>
                <td>押金类型</td>
                <td colspan="3">{{detail.deposit_type | depositFormat}}</td>
              </tr>
              <tr>
                <td>押金截止日期</td>
                <td>{{detail.deposit_end_date}}</td>
                <td>接受录取结果截止日期</td>
                <td>{{detail.accept_result_end_date}}</td>
              </tr>
              <tr>
                <td>导入学计划</td>
                <td>{{detail.leading_plan}}</td>
                <td>CAS编号</td>
                <td>{{detail.cas_no}}</td>
              </tr>
              <tr>
                <td>学校确认接受日期</td>
                <td>{{detail.school_confirm_date}}</td>
                <td>收到cas日期</td>
                <td>{{detail.recept_cas_date}}</td>
              </tr>
              <tr>
                <td>CO</td>
                <td colspan="3"><a class="reviewBtn" target="_blank" :href="view_href+detail.co_file"
                                   v-if="detail.co_file">查看CO</a></td>
              </tr>
              <tr>
                <td>UO</td>
                <td colspan="3"><a class="reviewBtn" target="_blank" :href="view_href+detail.uo_file"
                                   v-if="detail.uo_file">查看UO</a></td>
              </tr>
              <tr>
                <td>CAS</td>
                <td colspan="3"><a class="reviewBtn" target="_blank" :href="view_href+detail.cas_file"
                                   v-if="detail.cas_file">查看CAS</a></td>
              </tr>
              <tr>
                <td>备注</td>
                <td colspan="3">{{detail.apply_note}}</td>
              </tr>
              <tr>
                <td colspan="4" class="detail_update">实时更新</td>
              </tr>
              <tr v-for="(item,index) in update" :key="index" class="update_text">
                <td>{{item.update_time}}</td>
                <td colspan="3">{{item.update_content}}</td>
              </tr>
            </table>
          </div>
          <div class="footer_button psDetail_button">
            <span @click="outerVisible = false"><i>关闭</i></span>
          </div>
        </div>
      </el-dialog>
    </div>
    <!--  新增PS须知  -->
    <div class="add notice">
      <el-dialog title="" :visible.sync="tipVisible" :closeOnClickModal="false">
        <div class="add_title">新增PS须知</div>
        <div class="add_content notice_content">
          <p>请仔细阅读以下内容，一旦点击“我已了解”，默认为已阅读并同意如下所有内容：</p>
          <p>1）开始前，再次确认目前可新增PS数量；如可新增PS数量为0，代表不能添加PS素材收集表；</p>
          <p>2）请在确认并选择你的主申院校与专业后，开始制作第一份PS素材收集表；</p>
          <p>3）如主申院校与专业不确定，将默认以第一次选择的院校与专业为主申院校；</p>
          <p>4）PS撰写时，将以主申院校与专业对PS的要求为基础，提取PS素材收集表内容撰写通用版PS；</p>
          <p>5）非主申院校与专业的PS只在通用版PS上进行修改，修改占比约5%，不单独撰写PS；</p>
          <p>6）PS素材收集表内问题均带有填写提示，请仔细阅读后再填写；</p>
          <p>7）如需额外撰写非主申院校与专业的PS，请联系您的销售顾问，额外采购“加写PS服务”。</p>
          <div class="footer_button footer_button_156 footer_tip active">
            <span @click="tip">我已了解！</span>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/cv.scss";
  @import "~/assets/css/ps.scss";
</style>
<script>
    import http from "~/plugins/http";
    import config from '~/plugins/config';
    import {getStore, setStore} from '~/plugins/utils';

    let that;
    export default {
        layout: 'utrack',
        data() {
            return {
                isNext: false,//是否可以下一步
                plan: {},//申请方案列表
                detail: {},//查看详情
                addIndex: 0,// 选中的ps方案
                outerVisible: false,// 外层弹出框
                tipVisible: false,// 外层弹出框
                view_href: '', //查看href
                id: '',//合同id
                apply_id: '',//ps-id
                deposit: [],//押金类型
                resultArr: [],//申请结果
                update: [],//院校实时更新
                signList:[],//网申方式
                course:[],//课程类型
            }
        },
        beforeCreate: function () {
            that = this;
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                //因为当钩子执行前，组件实例还没被创建
                // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
                //是否展示新增PS须知
                if (from.path == '/ps') {
                    vm.tipVisible = true;
                    return;
                }
            });
        },
        mounted() {
            let _this = this;
            _this.id = _this.$route.query.id;
            //查看href
            this.view_href = config.view_host;
            //获取可以申请方案列表
            http.get('/customer-apply-question/get-my-ps?search[id]=' + _this.id).then((res) => {
                if (res.length != 0) {
                    _this.plan = res[0]
                    if(res[0].apply.length != 0 ){
                        this.apply_id = res[0].apply[0].id;
                        this.isNext = true;
                    }
                } else {
                    _this.isNext = false;
                    _this.plan = {}
                }
            });
            //获取申请结果、押金类型、申请结果、课程类型
            let dictionary = getStore('dictionary');
            if (dictionary) {
                _this.resultArr = dictionary.RESULT_OFFER;
                _this.deposit = dictionary.DEPOSIT_TYPE;
                _this.signList = dictionary.APPLY_TYPE;
                _this.course = dictionary.COURSE_TYPE;

            } else {
                http.get('/code-val/group-key-list').then((res) => {
                    _this.resultArr = res.RESULT_OFFER;
                    _this.deposit = res.DEPOSIT_TYPE;
                    _this.signList = res.APPLY_TYPE;
                    _this.course = res.COURSE_TYPE;
                    setStore('dictionary', res)
                })
            }
        },
        methods: {
            //上一步
            prev() {
                this.$router.push('/ps')
            },
            //tip下一步
            tip(){
                this.tipVisible = false;
            },
            //下一步
            next() {
                if(this.isNext){
                    this.$router.push({
                        path: '/ps/edit',
                        query: {id: this.id, type: this.addIndex, apply_id: this.apply_id}
                    });
                }else{
                    this.$message({
                        message: '该合同下暂无可申请的PS方案哦~ 如有疑问，请联系你的顾问老师！',
                        type: 'warning'
                    });
                }
            },
            //查看详情
            viewDetail(index, id) {
                //获取院校实时更新
                http.get('/customer-apply-update/list', {'apply_id': id}).then((res) => {
                    this.update = res;
                })
                this.detail = this.plan.apply[index];
                this.outerVisible = true;
            },
            //选择方案
            selectApply(index) {
                this.addIndex = index;
                this.apply_id = this.plan.apply[index].id;
            }

        },
        filters: {
            //匹配申请结果
            resultFormat: function (result) {
                let result_cn = '';
                that.resultArr.map((item) => {
                    if (item.id == result) {
                        return result_cn = item.cvalue_cn;
                    }
                });
                return result_cn;
            },
            //匹配网申方式
            signFormat(result) {
                let result_cn = '';
                that.signList.map((item) => {
                    if (item.id == result) {
                        return result_cn = item.cvalue_cn;
                    }
                });
                return result_cn;
            },
            //匹配押金类型
            depositFormat(result) {
                let result_cn = '';
                that.deposit.map((item) => {
                    if (item.id == result) {
                        return result_cn = item.cvalue_cn;
                    }
                });
                return result_cn;
            },
            //匹配课程类型
            courseFormat(result) {
                let result_cn = '';
                that.course.map((item) => {
                    if (item.id == result) {
                        return result_cn = item.cvalue_cn;
                    }
                });
                return result_cn;
            },
        }
    }
</script>
