<template>
    <div class="rHeader">
      <input type="hidden" id="uid" v-model="uid">
        <div class="rHeader_left">
            <img v-if="person.avatar" :src="person.avatar" alt />
            <img v-else src="/images/avatar.jpg" alt />
            <div class="rHeader_text">
                <div class="text_item">
                    <p>
                        <span>姓名:</span>
                        {{user.name}}
                    </p>
                    <p>
                        <span>邮箱:</span>
                        {{user.email}}
                    </p>
                    <p>
                        <span>电话:</span>
                        {{user.tel}}
                    </p>
                    <p>
                        <span>毕业院校:</span>
                        {{user.school}}
                    </p>
                    <p>
                        <span>毕业专业:</span>
                        {{user.major}}
                    </p>
                </div>
                <div class="text_item">
                    <p>
                        {{user.center}}
                        <i>/</i>
                    </p>
                     <p>
                        <span>教育顾问:</span>
                        {{user.teacher}}
                        <i>/</i>
                    </p>
                      <p>
                        <span>教育顾问电话:</span>
                        {{user.teacher_tel}}
                        <i>/</i>
                    </p>
                     <p>
                        <span>入学顾问:</span>
                        {{user.entrance}}
                        <i>/</i>
                    </p>
                      <p>
                        <span>入学顾问电话:</span>
                        {{user.entrance_tel}}
                    </p>
                </div>
            </div>
        </div>
        <div class="rHeader_right" @click="layout">
            <i></i>退出
        </div>
    </div>
</template>
<script>
import http from "~/plugins/http";
import uhttp from "~/plugins/uhttp";
import { setStore, emptyObj } from "~/plugins/utils";
export default {
    data() {
        return {
            uid: '',
            person:{},//sso获取到的用户信息
            user: {
                avatar:
                    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2205650502,1425754204&fm=26&gp=0.jpg",
                // avatar: '/images/refactor/adavar.png',
                name: "小明",
                email: "1111111@qq.com",
                tel: "18381001111",
                school: "清华大学",
                major: "计算机科学与技术",
                center: "西安分中心",
                counselor: "张老师", //顾问老师
                apply: "李老师", //申请老师
                writ: "杨老师", //文书老师
                counselor_tel: "18381007777",
                teacher: '',//教育顾问
                teacher_tel: '',//教育顾问电话
                entrance:'',//入学顾问
                entrance_tel:''//入学顾问电话
            }
        };
    },
    mounted() {
        let _this = this;
        //获取用户信息
        _this.getInfo();
        //获取sso的用户信息
        let userInfo = this.$store.state.user;
        if (!emptyObj(userInfo)) {
            _this.person = userInfo;
        } else {
            uhttp.get("/user/detail").then(res => {
                _this.$store.commit("user/SET_USER", res);
                _this.person = _this.$store.state.user;
            });
        }
    },
    methods: {
        //退出登录
        layout() {
            let _this = this;
            uhttp.get("/login/logout").then(res => {
                let layoutMsg = _this.$message({
                    message: "退出成功！",
                    type: "success"
                });
                localStorage.clear();
                setTimeout(() => {
                    layoutMsg.close();
                    setStore("isLogin", "0");
                    _this.$store.commit("user/SET_USER", {});
                    _this.$store.commit("SET_RESET", "");
                    _this.$router.push("/login");
                }, 1500);
            });
        },
        //获取用户信息
        getInfo() {
            let _this = this;
            http.get("/customer/get-info").then(res => {
                _this.uid = res.id;
                _this.user.name = res.customer_name;
                _this.user.email = res.email;
                _this.user.tel = res.phone;
                _this.user.school = res.graduaction_info.school_name;
                _this.user.major = res.graduaction_info.majorname_cn;
                _this.user.center = res.department_info.departname_cn;
                _this.user.writ = res.doc_man_info.truename;
                _this.user.apply = res.apply_man_info.truename;
                _this.user.counselor = res.online_man_info.truename;
                _this.user.counselor_tel = res.online_man_info.phone;
                _this.user.entrance =res.入学顾问.truename;
                _this.user.entrance_tel =res.入学顾问.phone;
                _this.user.teacher =res.教育顾问.truename;
                _this.user.teacher_tel =res.教育顾问.phone;
            });
        },
    }
};
</script>
