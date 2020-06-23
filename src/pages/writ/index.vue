<template>
  <div class="writ">
    <div class="writ_nav">
            <span
              v-for="(item,index) in nav"
              :key="index"
              @click="changeNav(item.href,index)"
              :class="{'active':item.selectName == selectName,'comfirmSelect':isConfirm && item.selectName=='confirm'}"
            >{{item.name}}</span>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
    export default {
        layout: "refactor",
        data() {
            return {
                isConfirm: false,//材料确认--是否有未确认的材料
                activeIndex: 0, //选中导航index
                active: "", //选中的导航
                selectName: '',
                nav: [
                    {
                        name: "CV",
                        selectName: 'cv',
                        href: "/writ/cv/step1"
                    },
                    {
                        name: "PS",
                        selectName: 'ps',
                        href: "/writ/ps"
                    },
                    {
                        name: "推荐信",
                        selectName: 'letter',
                        href: "/writ/letter"
                    },
                    {
                        name: "材料确认",
                        selectName: 'confirm',
                        href: "/writ/confirm"
                    },
                    {
                        name: "材料列表",
                        selectName: 'material',
                        href: "/writ/material"
                    },
                    {
                        name: "修改记录",
                        selectName: 'modify',
                        href: "/writ/modify"
                    }
                ]
            };
        },
        mounted() {
            let _this = this;
            let path = _this.$route.path;
            path == "/writ" ? _this.$router.push("/writ/cv/step1") : "";
            this.isConfirm = this.$store.state.isConfirm;
            _this.getName();
        },
        methods: {
            //切换导航
            changeNav(path, index) {
                let _this = this;
                if (path) {
                    _this.$router.push(path);
                    _this.getName();
                }
            },
            //导航选中效果
            getName() {
                let _this = this;
                let name = this.$route.name;
                let nowName = name.split("-")[2] || 'cv';
                _this.selectName = nowName;
                //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
                _this.$nextTick(function () {
                    _this.selectName = nowName;
                });
            }
        },

        watch: {
            $route(to, from) {
                let _this = this;
                //导航选中效果
                _this.getName();
            }
        }
    };
</script>
