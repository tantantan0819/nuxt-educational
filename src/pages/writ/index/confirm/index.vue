<template>
  <div class="cv con">
    <div class="cv_step2">
      <div class="title_box">
        <div class="cv_title">
          <p>材料确认</p>
        </div>
      </div>
     <div class="confirm">
          <div class="item" @click="link(item.id,index)" v-for="(item,index) in confirm" :key="index" :class="{'red':item.material_status == '未通过','green':item.material_status == '已通过'}">
            <div class="top" :class="{'active':item.material_status == '未确定'}"><span>方案号：{{item.scheme_no}}</span></div>
            <div class="con">
              <div class="in">
                <p>申请院校</p>
                <p>{{item.university_cn}}</p>
              </div>
              <div class="in">
                <p>申请专业</p>
                <p>{{item.major_cn}}</p>
              </div>
              <div class="in">
                <p>确认状态</p>
                <p>{{item.material_status}}</p>
              </div>
            </div>
          </div>
     </div>
    </div>
  </div>
</template>
<script>
    import http from "~/plugins/http";
    export default {
        data() {
            return {
                confirm:[]
            };
        },
        mounted(){
            let _this = this;
            //获取材料
            http.get('/customer-material/apply-list').then((res) => {
                if(res.length>0){
                    _this.confirm = res;
                    let flag = false;
                    res.map(item=>{
                        if(item.material_status == '未确认'){
                            flag = true;
                        }
                    });
                    _this.$store.commit('SET_CONFIRM', flag);
                }
            })
        },
        methods: {
            link(id,index){
                this.$router.push({path:'/writ/confirm/detail',query:{id:id,index:index}})
            }
        }
    }
</script>
<style lang="scss">
  @import "~/assets/css/confirm.scss";
</style>
