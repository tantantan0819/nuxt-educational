<template>
  <div class="rnav">
    <div class="rnav_img">
      <img src="/images/refactor/logo.png" alt />
    </div>
    <ul class="rnav_box">
      <li
        v-for="(item,index) in nav"
        :key="index"
        :class="{'active':index == activeIndex}"
        @click="changeNav(index,item.href)"
      >
        <div class="rnav_navbox">
          <span class="rnav_nav">
            <img :src="item.icon" alt  v-if="index != activeIndex"/>
            <img :src="item.activeIcon" alt v-else/>
          </span>
        </div>
        <span class="rnav_tex">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0, //选中导航index
      nav: [
        {
          name: "首页",
          href: "/home",
          icon: "/images/refactor/1.png",
          activeIcon:"/images/refactor/11.png",
        },
        {
          name: "我的方案",
          href: "/plan",
           icon: "/images/refactor/2.png",
          activeIcon:"/images/refactor/22.png",
        },
        {
          name: "我的签约",
          href: "",
          icon: "/images/refactor/3.png",
          activeIcon:"/images/refactor/33.png",
        },
        {
          name: "我的文书材料",
          href: "",
          icon: "/images/refactor/4.png",
          activeIcon:"/images/refactor/44.png",
        },
        {
          name: "语言成绩",
          href: "",
           icon: "/images/refactor/5.png",
          activeIcon:"/images/refactor/55.png",
        },
        {
          name: "我的申请",
          href: "",
          icon: "/images/refactor/6.png",
          activeIcon:"/images/refactor/66.png",
        },
        {
          name: "我的住宿",
          href: "",
           icon: "/images/refactor/7.png",
          activeIcon:"/images/refactor/77.png",
        },
        {
          name: "我的签证",
          href: "",
           icon: "/images/refactor/8.png",
          activeIcon:"/images/refactor/88.png",
        },
        {
          name: "我的接机",
          href: "",
           icon: "/images/refactor/9.png",
          activeIcon:"/images/refactor/99.png",
        },
        {
          name: "个人设置",
          href: "",
           icon: "/images/refactor/10.png",
          activeIcon:"/images/refactor/10.png",
        }
      ]
    };
  },
  methods:{
      changeNav(index,href){
          let _this = this;
          _this.activeIndex = index;
          if(href!=''){
              _this.$router.push(href);
          }
          
      }
  }
};
</script>