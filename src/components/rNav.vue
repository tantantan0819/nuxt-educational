<template>
  <div class="rnav">
    <div class="rnav_img">
      <img src="/images/refactor/logo.png" alt/>
    </div>
    <ul class="rnav_box">
      <li
        v-for="(item,index) in nav"
        :key="index"
        :class="{'active':item.selectName == activeName}"
        @click="changeNav(item.selectName,item.href)"
      >
        <div class="rnav_navbox">
          <span class="rnav_nav">
            <img :src="item.icon" alt v-if="item.selectName != activeName"/>
            <img :src="item.activeIcon" alt v-else/>
          </span>
        </div>
        <span class="rnav_tex"  :class="{'comfirmActive':isConfirm && item.selectName=='writ'}">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
    import http from "~/plugins/http";
    export default {
        data() {
            return {
                isConfirm: false,//材料确认--是否有未确认的材料
                activeName: '', //选中导航index
                nav: [
                    {
                        name: "首页",
                        href: "/home",
                        selectName: 'home',
                        icon: "/images/refactor/1.png",
                        activeIcon: "/images/refactor/11.png",
                    },
                    // {
                    //   name: "我的方案",
                    //   href: "/plan",
                    //    icon: "/images/refactor/2.png",
                    //   activeIcon:"/images/refactor/22.png",
                    // },
                    {
                        name: "我的合同",
                        href: "/contract",
                        selectName: 'contract',
                        icon: "/images/refactor/3.png",
                        activeIcon: "/images/refactor/33.png",
                    },
                    {
                        name: "我的签约",
                        href: "/sign",
                        selectName: 'sign',
                        icon: "/images/refactor/3.png",
                        activeIcon: "/images/refactor/33.png",
                    },
                    {
                        name: "我的文书材料",
                        href: "/writ/cv/step1",
                        selectName: 'writ',
                        icon: "/images/refactor/4.png",
                        activeIcon: "/images/refactor/44.png",
                    },
                    {
                        name: "语言成绩",
                        href: "/language",
                        selectName: 'language',
                        icon: "/images/refactor/5.png",
                        activeIcon: "/images/refactor/55.png",
                    },
                    {
                        name: "我的申请",
                        href: "/apply",
                        selectName: 'apply',
                        icon: "/images/refactor/6.png",
                        activeIcon: "/images/refactor/66.png",
                    },
                    {
                        name: "我的住宿",
                        href: "/accommodation",
                        selectName: 'accommodation',
                        icon: "/images/refactor/7.png",
                        activeIcon: "/images/refactor/77.png",
                    },
                    {
                        name: "我的签证",
                        href: "/visa",
                        selectName: 'visa',
                        icon: "/images/refactor/8.png",
                        activeIcon: "/images/refactor/88.png",
                    },
                    {
                        name: "我的接机",
                        href: "/pickup",
                        selectName: 'pickup',
                        icon: "/images/refactor/9.png",
                        activeIcon: "/images/refactor/99.png",
                    },
                    {
                        name: "个人设置",
                        href: "/person",
                        selectName: 'person',
                        icon: "/images/refactor/10.png",
                        activeIcon: "/images/refactor/1010.png",
                    }
                ]
            };
        },
        async mounted() {
            let _this = this;
            //导航选中效果
            this.getName();
            //获取材料
            let res = await http.get('/customer-material/apply-list');
            if(res.length>0){
                let flag = false;
                res.map(item=>{
                    if(item.material_status == '未确认'){
                        flag = true;
                    }
                });
                _this.$store.commit('SET_CONFIRM', flag);
            }
            this.isConfirm = this.$store.state.isConfirm;
            //如果我的合同列表有数据则展示我的合同标签，如我的合同列表没有数据则不展示我的合同标签
           let contractList = await http.get('/contract/my-contract-list');
           if(contractList.length == 0){
               this.nav.map((item,index)=>{
                   item.name == '我的合同' ? this.nav.splice(index,1) : '';
               })
           }
        },
        watch: {
            $route(to, from) {
                //导航选中效果
                this.getName()
            }
        },
        methods: {
            changeNav(selectName, href) {
                let _this = this;
                _this.activeName = selectName;
                if (href != '') {
                    _this.$router.push(href);
                }
            },
            //导航选中效果
            getName() {
                let _this = this;
                let name = this.$route.path;
                let nowName = name.split("/")[1];
                _this.activeName = nowName;
            }
        }
    };
</script>
