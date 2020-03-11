<template>
    <div class="rHeader">
        <div class="rHeader_left">
            <img :src="user.avatar" alt />
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
                        <span>顾问老师:</span>
                        {{user.counselor}}
                        <i>/</i>
                    </p>
                    <p>
                        <span>申请老师:</span>
                        {{user.apply}}
                        <i>/</i>
                    </p>
                    <p>
                        <span>文书老师:</span>
                        {{user.writ}}
                        <i>/</i>
                    </p>
                    <p>
                        <span>顾问老师电话:</span>
                        {{user.counselor_tel}}
                    </p>
                </div>
            </div>
        </div>
        <div class="rHeader_right">
            <i></i>退出
        </div>
    </div>
</template>
<script>
import http from "~/plugins/http";
export default {
    data() {
        return {
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
                counselor_tel: "18381007777"
            }
        };
    },
    mounted() {
        let _this = this;
        //获取用户信息
        _this.getInfo();
    },
    methods: {
        //获取用户信息
        getInfo() {
            let _this = this;
            http.get("/customer/get-info").then(res => {
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
            });
        }
    }
};
</script>