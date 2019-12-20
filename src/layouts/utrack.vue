<template>
  <div id="utrack">
    <div class="utrack_left">
      <v-nav></v-nav>
    </div>
    <div class="utrack_right">
      <v-header></v-header>
      <div class="utrack_content">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from "~/components/header";
import VNav from "~/components/nav";
import { mapGetters } from "vuex";
import { setSession, getSession, getStore } from "~/plugins/utils";
export default {
  data() {
    return {};
  },
  components: { VHeader, VNav },
  beforeMount() {
    let _this = this;
    //在页面加载时读取sessionStorage里的状态信息
    if (getSession("store")) {
      this.$store.replaceState(
        Object.assign({}, this.$store.state, JSON.parse(getSession("store")))
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      setSession("store", JSON.stringify(this.$store.state));
    });
  },
  mounted() {
    
    //未登录跳转到登录页面
    let login = getStore("isLogin");
    if (!login) {
      this.$alert("未登录,请前往登录页面登录！", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          window.location.href = "/login";
        }
      });
    }

    //backspace火狐返回问题
    function banBackSpace(e) {
      var ev = e || window.event; //获取event对象
      var obj = ev.target || ev.srcElement; //获取事件源
      var t = obj.type || obj.getAttribute("type"); //获取事件源类型

      //获取作为判断条件的事件类型
      var vReadOnly = obj.getAttribute("readonly");
      var vEnabled = obj.getAttribute("enabled");
      //处理null值情况
      vReadOnly = vReadOnly == null ? false : vReadOnly;
      vEnabled = vEnabled == null ? true : vEnabled;

      //当敲Backspace键时，事件源类型为密码或单行、多行文本的，
      //并且readonly属性为true或enabled属性为false的，则退格键失效
      var flag1 =
        ev.keyCode == 8 &&
        (t == "password" || t == "text" || t == "textarea") &&
        (vReadOnly == true || vEnabled != true)
          ? true
          : false;

      //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
      var flag2 =
        ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea"
          ? true
          : false;

      //判断
      if (flag2) {
        return false;
      }
      if (flag1) {
        return false;
      }
    }
    //禁止后退键 作用于Firefox、Opera
    document.onkeypress = banBackSpace;
    //禁止后退键 作用于IE、Chrome
    document.onkeydown = banBackSpace;
  }
};
</script>
