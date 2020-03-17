<template>
    <div class="cv con">
        <div class="cv_step2">
            <div class="version_title">
                <span>个人设置</span>
            </div>
            <div class="person_content">
                <div class="person_item">
                    <span class="title">头像</span>
                    <span class="con" v-if="person.avatar">
                        <img :src="person.avatar" alt />
                    </span>
                    <span class="con" v-else>
                        <img src="/images/avatar.jpg" alt />
                    </span>
                    <span class="modify">
                        <i>
                            <el-upload
                                class="upload-demo"
                                :action="qiniu_url"
                                :data="postData"
                                :before-upload="beforUpload"
                                :on-success="successUpload"
                                :show-file-list="false"
                                :file-list="fileList"
                            >
                                <span class="avatar_text">修改头像</span>
                            </el-upload>
                        </i>
                    </span>
                </div>
                <div class="person_item">
                    <span class="title">用户名</span>
                    <span class="con">{{person.username || ''}}</span>
                </div>
                <div class="person_item">
                    <span class="title">密码</span>
                    <span class="con">******</span>
                    <span class="modify" @click="visiblePssword=true">
                        <i>修改密码</i>
                    </span>
                </div>
                <div class="person_item">
                    <span class="title">手机号</span>
                    <span class="con">{{person.phone || ''}}</span>
                    <!--          <span class="modify" @click="visiblePhone=true"><i>修改手机号</i></span>-->
                </div>
                <div class="person_item">
                    <span class="title">邮箱</span>
                    <span class="con">{{person.email || ''}}</span>
                    <!--          <span class="modify" @click="visibleEmail=true"><i>修改邮箱</i></span>-->
                </div>
                 <div class="person_item">
                    <span class="title">生日</span>
                    <span class="con">{{person.birth || ''}}</span>
                </div>
            </div>
        </div>
        <!--  修改密码  -->
        <div class="add person_change">
            <el-dialog title :visible.sync="visiblePssword">
                <div class="add_title">修改密码</div>
                <div class="add_content">
                    <el-form
                        :model="passwordForm"
                        :rules="passwordRules"
                        status-icon
                        ref="passwordForm"
                        label-width="0"
                    >
                        <el-form-item prop="new_password">
                            <el-input
                                v-model="passwordForm.new_password"
                                placeholder="请输入新密码"
                                autocomplete="off"
                                type="password"
                                show-password
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="confirm">
                            <el-input
                                v-model="passwordForm.confirm"
                                placeholder="请确认新密码"
                                autocomplete="off"
                                type="password"
                                show-password
                            ></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="footer_button active">
                        <span @click="visiblePssword=false">
                            <i>取消</i>
                        </span>
                        <span @click="submitPassword('passwordForm')">确认</span>
                    </div>
                </div>
            </el-dialog>
        </div>
        <!--  修改手机号  -->
        <div class="add person_change">
            <el-dialog title :visible.sync="visiblePhone">
                <div class="add_title">修改手机号</div>
                <div class="add_content">
                    <el-form
                        :model="phoneForm"
                        status-icon
                        :rules="phoneRules"
                        ref="phoneForm"
                        label-width="0px"
                    >
                        <div id="isPhone">
                            <el-form-item class="isRegion">
                                <el-select
                                    v-model="phoneForm.region"
                                    placeholder="请选择区号"
                                    @change="areaSelect"
                                >
                                    <el-option
                                        v-for="(item,index) in region"
                                        :key="index"
                                        :label="item.region"
                                        :value="item.region"
                                    >{{item.region}}</el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item prop="phone" class="isPhone">
                                <el-input
                                    v-model.number="phoneForm.phone"
                                    placeholder="请输入手机号"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                        </div>
                        <div id="graphic">
                            <el-form-item prop="graphic">
                                <el-input
                                    type="text"
                                    v-model.trim="phoneForm.graphic"
                                    placeholder="请输入图形验证码"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <img :src="codeImg" alt @click="changeGraphic" />
                        </div>
                        <div class="code">
                            <el-form-item prop="code">
                                <el-input
                                    type="text"
                                    v-model.trim="phoneForm.code"
                                    placeholder="请输入短信验证码"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-button
                                type="primary"
                                class="sendCode"
                                @click="sendCode('phone')"
                            >{{isSendEmail?'发送验证码':phoneTime+'秒后可重新发送'}}</el-button>
                        </div>
                    </el-form>
                    <div class="footer_button active">
                        <span @click="visiblePhone=false">
                            <i>取消</i>
                        </span>
                        <span @click="submitPhone">确认</span>
                    </div>
                </div>
            </el-dialog>
        </div>
        <!--  修改邮箱  -->
        <div class="add person_change">
            <el-dialog title :visible.sync="visibleEmail">
                <div class="add_title">修改邮箱</div>
                <div class="add_content">
                    <el-form
                        :model="emailForm"
                        :rules="emailRules"
                        status-icon
                        ref="emailForm"
                        label-width="0"
                    >
                        <el-form-item prop="email">
                            <el-input
                                v-model="emailForm.email"
                                placeholder="请输入新的邮箱"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                        <div class="code">
                            <el-form-item prop="code">
                                <el-input
                                    type="text"
                                    v-model.trim="emailForm.code"
                                    placeholder="请输入邮箱验证码"
                                    autocomplete="off"
                                ></el-input>
                            </el-form-item>
                            <el-button
                                type="primary"
                                class="sendCode"
                                @click="sendCode('email')"
                            >{{isSendEmail?'发送验证码':emailTime+'秒后可重新发送'}}</el-button>
                        </div>
                    </el-form>
                    <div class="footer_button active">
                        <span @click="visibleEmail=false">
                            <i>取消</i>
                        </span>
                        <span @click="submitEmail('emailForm')">确认</span>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<style lang="scss">
@import "~/assets/css/cv.scss";
@import "~/assets/css/personal.scss";
</style>
<script>
import { validEmail, validPhone, valiPassward } from "~/plugins/validate";
import { getStore, setStore, deepClone, emptyObj } from "~/plugins/utils";
import uhttp from "~/plugins/uhttp";

export default {
    layout: "refactor",
    data() {
        var validConfirm = (rule, value, callback) => {
            if (!value) {
                callback(new Error("请再次输入新密码"));
            } else {
                if (value != this.passwordForm.new_password) {
                    callback(new Error("请确认你的新密码"));
                } else {
                    callback();
                }
            }
        };
        return {
            codeImg: "", // 图形验证码
            region: [], //区号下拉
            person: {}, //用户信息--拷贝
            avatar: "", //用户头像
            isSendEmail: true, //是否可发送邮箱验证码
            isSendPhone: true, //是否可发送手机验证码
            emailTime: 60, //60秒后可以发送邮箱验证码
            phoneTime: 60, //60秒后可以发送手机验证码
            visiblePssword: false, //修改密码
            visiblePhone: false, //修改手机号码
            visibleEmail: false, //修改邮箱
            qiniu_url: "http://upload.qiniup.com", //头像上传地址
            postData: {
                token: "",
                name: "",
                key: ""
            },
            tokenParams: {
                //请求token的参数
                bucket: "ukec",
                path: "upload/user",
                ext: ""
            },
            fileList: [],
            passwordForm: {
                new_password: "", // 新密码
                confirm: "", // 确认密码
                password_reset_token: ""
            },
            passwordRules: {
                new_password: [
                    { required: true, validator: valiPassward, trigger: "blur" }
                ],
                confirm: [
                    { required: true, validator: validConfirm, trigger: "blur" }
                ]
            },
            phoneForm: {
                region: "", // 手机区号
                code: "", // 短信验证码
                graphic: "", // 图形验证码
                phone: "",
                type: "1" //1为手机找回，2为邮箱找回
            }, // 手机找回
            phoneRules: {
                phone: [
                    { required: true, validator: validPhone, trigger: "blur" }
                ],
                graphic: [
                    {
                        required: true,
                        message: "请输入图形验证码",
                        trigger: "blur"
                    }
                ],
                code: [
                    {
                        required: true,
                        message: "请输入短信验证码",
                        trigger: "blur"
                    }
                ]
            },
            emailForm: {
                email: "",
                code: ""
            },
            emailRules: {
                email: [
                    { password: true, validator: validEmail, trigger: "blur" }
                ],
                code: [
                    {
                        password: true,
                        message: "请输入邮箱验证码",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    mounted() {
        let _this = this;
        //获取用户信息
        _this.active = location.pathname;
        let userInfo = _this.$store.state.user;
        if (!emptyObj(userInfo)) {
            _this.person = deepClone(userInfo);
        } else {
            uhttp.get("/user/detail").then(res => {
                if (res) {
                    _this.$store.commit("user/SET_USER", res);
                    _this.person = res;
                }
            });
        }
        //获取区号
        let regionList = getStore("regionList");
        if (regionList) {
            _this.region = regionList;
            _this.regex = regionList[0].regex;
        } else {
            uhttp.get("/region/list").then(res => {
                _this.region = res;
                _this.regex = res[0].regex;
                setStore("regionList", res);
            });
        }
        //默认区号下拉
        if (_this.region.length != 0) {
            _this.phoneForm.region = _this.region[0].region;
        }
        //获取图形验证码
        _this.changeGraphic();
    },
    methods: {
        //头像上传之前
        async beforUpload(file) {
            let _this = this;
            const isJPG =
                file.type === "image/png" || file.type === "image/jpeg";
            const isLt30M = file.size / 1024 / 1024 < 30;
            if (!isLt30M || !isJPG) {
                _this.$message({
                    message: `请上传大小不能超过30MB的图片!`,
                    type: "warning"
                });
            }
            _this.tokenParams.ext = file.name.split(".")[1];
            _this.postData.name = file.name;
            await _this.uploadToken();
        },
        //获取上传token
        async uploadToken() {
            let _this = this;
            await uhttp.get("/qiniu/token", this.tokenParams).then(res => {
                _this.postData.token = res.token;
                _this.postData.key = res.key;
            });
        },
        //成功上传图片
        successUpload(res) {
            let _this = this;
            let img_url = res.data.url;
            uhttp.post("user/edit", { avatar: img_url }).then(res => {
                if (res) {
                    _this.$message({
                        message: "头像修改成功！",
                        type: "success"
                    });
                    _this.person.avatar = img_url;
                    _this.$store.commit("user/SET_USER", _this.person);
                }
            });
        },
        //获取图形验证码
        changeGraphic() {
            uhttp.get("/verify/captcha").then(res => {
                this.codeImg = res.base64_images;
            });
        },
        //手机区号下拉框选择事件
        areaSelect(val) {
            let _this = this;
            if (_this.region.length != 0) {
                _this.regex = _this.region.filter(
                    item => item.region == val
                )[0].regex;
            }
        },
        //修改邮箱
        submitEmail(formName) {
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    uhttp
                        .post("/security/bind-email", _this.emailForm)
                        .then(res => {
                            if (res) {
                                _this.$message({
                                    message: "邮箱修改成功！",
                                    type: "success"
                                });
                            }
                        });
                    _this.visibleEmail = false;
                }
            });
        },
        // 修改手机
        submitPhone(formName) {
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    uhttp
                        .post("/security/bind-email", _this.phoneForm)
                        .then(res => {
                            if (res) {
                                _this.$message({
                                    message: "手机修改成功！",
                                    type: "success"
                                });
                            }
                        });
                    _this.visiblePhone = false;
                }
            });
        },
        // 修改密码
        submitPassword(formName, wrap) {
            let _this = this;
            _this.$refs[formName].validate(valid => {
                if (valid) {
                    uhttp
                        .post("/password/set", _this.passwordForm)
                        .then(res => {
                            if (res) {
                                _this.$message({
                                    message: "密码修改成功！",
                                    type: "success"
                                });
                            }
                        });
                    _this.visiblePssword = false;
                }
            });
        },
        //发送验证码
        sendCode(type) {
            let _this = this;
            if (type == "phone" && _this.isSendPhone) {
                _this.$refs["phoneForm"].validateField("phone", res => {
                    if (res == "") {
                        _this.$refs["phoneForm"].validateField(
                            "graphic",
                            response => {
                                if (response == "") {
                                    let parms = {
                                        code: _this.phoneForm.graphic,
                                        phone: _this.phoneForm.phone,
                                        region: _this.phoneForm.region,
                                        type: "1" // 0普通，1找回密码
                                    };
                                    uhttp
                                        .post("/verify/send-phone", parms)
                                        .then(res => {
                                            if (res) {
                                                _this.isSendPhone = false;
                                                _this.$message({
                                                    message:
                                                        "手机证码发送成功！",
                                                    type: "success"
                                                });
                                                let phoneTimer = setInterval(
                                                    () => {
                                                        _this.phoneTime--;
                                                        if (
                                                            _this.phoneTime == 0
                                                        ) {
                                                            _this.isSendPhone = true;
                                                            _this.phoneTime = 60;
                                                            clearInterval(
                                                                phoneTimer
                                                            );
                                                        }
                                                    },
                                                    1000
                                                );
                                            }
                                        })
                                        .catch(err => {
                                            _this.isSendPhone = true;
                                        });
                                } else {
                                    _this.$message({
                                        message: response,
                                        type: "error"
                                    });
                                }
                            }
                        );
                    } else {
                        _this.$message({
                            message: res,
                            type: "error"
                        });
                    }
                });
            }
            //发送邮箱验证码
            if (type == "email" && _this.isSendEmail) {
                _this.$refs["emailForm"].validateField("email", res => {
                    if (res == "") {
                        let parms = {
                            email: _this.emailForm.email,
                            type: "1" // 0普通，1找回密码
                        };
                        uhttp
                            .post("/verify/send-email", parms)
                            .then(res => {
                                _this.isSendEmail = false;
                                if (res) {
                                    _this.$message({
                                        message: "邮箱验证码发送成功！",
                                        type: "success"
                                    });
                                    let emailTimer = setInterval(() => {
                                        _this.emailTime--;
                                        if (_this.emailTime == 0) {
                                            _this.isSendEmail = true;
                                            _this.emailTime = 60;
                                            clearInterval(emailTimer);
                                        }
                                    }, 1000);
                                }
                            })
                            .catch(err => {
                                _this.isSendEmail = true;
                            });
                    } else {
                        _this.$message({
                            message: res,
                            type: "error"
                        });
                    }
                });
            }
        }
    }
};
</script>
