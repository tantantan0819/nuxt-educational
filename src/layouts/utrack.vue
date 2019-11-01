<template>
  <div id="utrack">
    <div class="utrack_left">
      <v-nav></v-nav>
    </div>
    <div class="utrack_right">
      <v-header></v-header>
      <div class="utrack_content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
    import VHeader from '~/components/header';
    import VNav from '~/components/nav';
    import {mapGetters} from 'vuex'
    import {setSession, getSession,getStore} from '~/plugins/utils';

    export default {
        data() {
            return {}
        },
        components:{VHeader,VNav},
        beforeMount() {
            let _this = this;
            //在页面加载时读取sessionStorage里的状态信息
            if (getSession("store")) {
                this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(getSession("store"))))
            }
            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload", () => {
                setSession("store", JSON.stringify(this.$store.state))
            })

        },
        mounted() {
            //未登录跳转到登录页面
            let login = getStore('isLogin');
            if(!login){
                this.$alert('未登录,请前往登录页面登录！', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        window.location.href = "/login";
                    }
                });
            }
        },
    }
</script>
