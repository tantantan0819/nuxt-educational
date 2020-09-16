<template>
  <div class="visa_table materia_table">
    <div class="visa_box" v-if="material">
      <div class="visa_item visa_top">
        <div class="visa_left">类型</div>
        <div class="visa_con">
          <div class="visa_center">
            <span>材料名称</span>
            <span>文件</span>
            <span>上传时间</span>
            <span>上传人</span>
            <span>审核状态</span>
          </div>
        </div>
        <div class="visa_right materia_right">操作</div>
      </div>
      <div class="visa_con">
        <div class="visa_item" v-for="(item,index) in material" :key="index">
          <div class="visa_left">{{item.materialname_cn}}</div>
          <div
            class="visa_con"
            :class="{'active':item.lists.length>1}"
          >
            <div
              class="visa_center"
              v-for="(item2,index2) in item.lists"
              :key="index2"
            > <span>{{item2.material_name}}</span>
              <span> <a :href="item2.file_url" target="_blank">{{item2.origin_name}}</a></span>
              <span>{{item2.create_time |timeFormat}}</span>
              <span>{{item2.创建人}}</span>
              <span :class="{'blue':item2.material_status == 199}" v-if="item2.material_status == 199"><i>审核未通过</i></span>
              <span :class="{'red':item2.material_status == 0}" v-else-if="item2.material_status == 0"><i>审核中</i></span>
              <span :class="{'green':item2.material_status == 200}" v-else><i>审核通过</i></span>
            </div>
          </div>
          <div class="visa_right materia_right">
            <span class="meteria_add" @click="isAdd(item.material_id)" v-if="item.is_multi == 1 || item.lists.length<1">新增</span>
            <span class="meteria_add"  v-else @click="download(item2.file_url,item2.origin_name)">下载</span>
            <div class="material_view" v-if="item.materialname_cn == 'CV'||item.materialname_cn == '个人陈述'||item.materialname_cn == '推荐信'">
                <info-modify :type="item.materialname_cn" ></info-modify>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增材料：单文件-->
    <add-material v-if="single" :id="material_id" v-on="{closeContr: closeSingle}"></add-material>
    <!-- 新增材料：多文件-->
    <mul-material v-if="multiple" :id="material_id" v-on="{closeContr: closeMultiple}"></mul-material>
  </div>
</template>

<script>
    import http from "~/plugins/http";
    import config from "~/plugins/config";
    import {timeDetail} from '~/plugins/utils';
    import InfoModify from "~/components/infoModify";
    import UploadBtn from "~/components/upload";
    import AddMaterial from "~/components/addMaterial";
    import MulMaterial from "~/components/mulMaterial";
    export default {
        name: "new",
        components: { InfoModify,UploadBtn,AddMaterial,MulMaterial},
        data() {
            return {
                material_id: '',//新增材料的id
                single: false,//单文件上传弹框
                multiple: false,//多文件上传弹框
                img_url: "", //文件查看前缀
                cid: '',//用户cid
                material: [],//签证材料
                addShow: false, //添加材料
                addForm: {
                    origin_name: "", //材料原始名称
                    material_name: "", //材料名称
                    file_url: "", //文件路径
                    material_id: "", //材料类型
                    is_private: "1", //是否隐藏
                },
                addRules: {
                    material_name: [
                        {
                            required: true,
                            message: "请填写您的材料名称",
                            trigger: "blur"
                        }
                    ],
                    origin_name: [
                        {
                            required: true,
                            message: "请上传您的材料文件",
                            trigger: "blur"
                        }
                    ],
                },
                configuration: {
                    isShowList: false, //是否展示文件列表
                    multiple: false, //是否允许多文件上传
                    limit: null, //上传文件的限制数量
                    btnText: "上传", //上传按钮显示文字
                    errorText: "", //上传失败时的提示
                    accept: "" //上传格式
                }
            };
        },
        filters: {
            //格式化时间
            timeFormat(val) {
                return timeDetail(val);
            }
        },
       async mounted() {
            let _this = this;
            //文件查看前缀
            _this.img_url = config.view_host;
            //获取用户信息
            let urserInfo = await http.get("/customer/get-info");
            _this.cid = urserInfo.id;
            _this.getMaterial();

        },
        methods: {
            //获取材料列表
            getMaterial(){
                let _this = this;
                http.get("/customer-material/list-by-type", {cid: _this.cid}).then(res => {
                    if (res) {
                        _this.material = res;
                    }
                });
            },
            //新增材料弹框展示
            isAdd(id){
                this.material_id = id;
                this.single = true;
                // this.addShow = true;
            },
            //新增单文件弹框关闭
            closeSingle(val){
                this.single = false;
                if(val=='true'){
                    this.getMaterial();
                }
            },
            //新增多文件弹框关闭
            closeMultiple(){
                this.multiple = false;
                if(val=='true'){
                    this.getMaterial();
                }
            },
            //下载材料
            download(url,name) {
                window.open(config.view_host+url+'?attname='+name,'_self')
            },
        }
    }
</script>

<style lang="scss">
  @import "~/assets/css/accommodation.scss";
  @import "~/assets/css/visa.scss";
  @import "~/assets/css/cv.scss";
</style>
