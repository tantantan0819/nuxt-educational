<template>
  <div class="nav">
    <div class="logo"><img src="/images/logo.png" alt=""></div>
    <div class="avatar">
      <div class="avatar_box">
        <img v-if="user.avatar" :src="user.avatar" alt="">
        <img v-else src="/images/avatar.jpg" alt="">
      </div>
    </div>
    <p class="user_name tc">{{user.username}}</p>
    <div class="logout"><span @click="layout">退出</span></div>
    <ul class="nav_list">
      <li v-for="(item,index) in nav" :key="index" @click="link(item.link)" :class="{'active': active == item.link}">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/nav.scss";

</style>
<script>
    import uhttp from "~/plugins/uhttp";
    import {setStore, getStore, emptyObj} from '~/plugins/utils';

    export default {
        data() {
            return {
                count: 0,
                user: {},
                active: '', //激活导航
                nav: [
                    {
                        name: 'CV',
                        link: '/cv'
                    },
                    {
                        name: 'PS',
                        link: '/ps'
                    },
                    {
                        name: '推荐信',
                        link: '/letter'
                    },
                    {
                        name: '文书材料',
                        link: '/material'
                    },
                    {
                        name: '修改记录',
                        link: '/modify'
                    },
                    {
                        name: '个人设置',
                        link: '/person'
                    },

                ]

            }
        },
        mounted() {
            let _this = this;
            //nav选中状态
            let path = _this.$route.path;
            let pathReset = path.substring(0, path.indexOf("/", 2));
            pathReset == '' ? _this.active = path : _this.active = pathReset;
            // 获取用户信息
            uhttp.get('/user/detail').then((res) => {
                _this.$store.commit('user/SET_USER', res);
                _this.user = _this.$store.state.user;
            })
        },
        methods: {
            //跳转
            link(href) {
                this.active = href;
                this.$router.push(href);
            },
            //退出登录
            layout() {
                let _this = this;
                uhttp.get('/login/logout').then((res) => {
                    let layoutMsg = _this.$message({
                        message: '退出成功！',
                        type: 'success'
                    });
                    setTimeout(() => {
                        layoutMsg.close();
                        setStore('isLogin', '0');
                        _this.$store.commit('user/SET_USER', {});
                        _this.$store.commit('SET_RESET', '');
                        _this.$router.push('/login')
                    }, 1500);
                })
            },
        }
    }
</script>
