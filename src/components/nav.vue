<template>
  <div class="nav">
    <el-menu default-active="$store.getters.active" class="el-menu-vertical-demo nvamenu" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
             :background-color="backgroundColor"
             :text-color="textcolor"
             :active-text-color="activecolor">
      <!--<el-menu-item index="1">处理中心</el-menu-item>-->
      <!--<el-submenu index="2">-->
      <!--  <template slot="title">我的工作台</template>-->
      <!--  <el-menu-item index="2-1">选项1</el-menu-item>-->
      <!--  <el-menu-item index="2-2">选项2</el-menu-item>-->
      <!--  <el-menu-item index="2-3">选项3</el-menu-item>-->
      <!--  <el-submenu index="2-4">-->
      <!--    <template slot="title">选项4</template>-->
      <!--    <el-menu-item index="2-4-1">选项1</el-menu-item>-->
      <!--    <el-menu-item index="2-4-2">选项2</el-menu-item>-->
      <!--    <el-menu-item index="2-4-3">选项3</el-menu-item>-->
      <!--  </el-submenu>-->
      <!--</el-submenu>-->
      <el-submenu :index="item.href" v-for="(item,index) in navList" :key="index">
        <template slot="title">{{item.navItem}}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
      <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
    </el-menu>
  </div>
</template>
<script>
    export default {
        layout: 'system',
        data() {
            return {
                backgroundColor: '#545c64',
                textcolor: '#fff',
                activecolor: '#6d778b',
                isCollapse: false,
                navList: [
                    {
                        href: '/system',
                        navItem: '系统管理',
                        iconName: 'el-icon-setting',
                        child: [
                            {
                                href: '/system/setting',
                                name: '系统配置'
                            },
                            {
                                href: '/system/notice',
                                name: '提醒规则'
                            },
                            // {
                            //     href: '',
                            //     name: '材料设置'
                            // },
                            // {
                            //     href: '',
                            //     name: '电话区号管理'
                            // },
                            // {
                            //     href: '',
                            //     name: '链接二维码'
                            // },
                            // {
                            //     href: '',
                            //     name: '留下市场部配置'
                            // },
                        ]
                    },

                ],
            }
        },
        beforeMount() {

        },
        mounted(){
            console.log(this.$router)
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            changestatus(){
                this.isCollapse = !this.isCollapse;
            }
        }
    }
</script>
<style lang="scss">
  @import "~/assets/css/common.scss";
</style>
