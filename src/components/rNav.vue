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
        @click="changeNav(index)"
      >
        <div class="rnav_navbox">
          <span class="rnav_nav">
            <img :src="item.img" alt />
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
          href: "",
          img: "/images/refactor/nav1.png"
        },
        {
          name: "我的方案",
          href: "",
          img: "/images/refactor/nav2.png"
        },
        {
          name: "我的签约",
          href: "",
          img: "/images/refactor/nav3.png"
        },
        {
          name: "我的文书材料",
          href: "",
          img: "/images/refactor/nav4.png"
        },
        {
          name: "语言成绩",
          href: "",
          img: "/images/refactor/nav5.png"
        },
        {
          name: "我的申请",
          href: "",
          img: "/images/refactor/nav6.png"
        },
        {
          name: "我的住宿",
          href: "",
          img: "/images/refactor/nav7.png"
        },
        {
          name: "我的签证",
          href: "",
          img: "/images/refactor/nav8.png"
        },
        {
          name: "我的接机",
          href: "",
          img: "/images/refactor/nav9.png"
        },
        {
          name: "个人设置",
          href: "",
          img: "/images/refactor/nav10.png"
        }
      ]
    };
  },
  methods:{
      changeNav(index){
          this.activeIndex = index;
      }
  }
};
</script>