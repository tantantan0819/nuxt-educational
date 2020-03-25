<template>
    <div class="writ">
        <div class="writ_nav">
            <span
                v-for="(item,index) in nav"
                :key="index"
                @click="changeNav(item.href,index)"
                :class="{'active':activeIndex == index}"
            >{{item.name}}</span>
        </div>
        <nuxt-child></nuxt-child>
    </div>
</template>
<script >
export default {
    layout: "refactor",
    data() {
        return {
            activeIndex: '',//选中导航index
            active: "", //选中的导航
            nav: [
                { name: "CV", href: "/writ/cv/step1" },
                { name: "PS", href: "/writ/ps" },
                { name: "推荐信", href: "/writ/letter" },
                { name: "材料列表", href: "/writ/material" },
                { name: "修改记录", href: "/writ/modify" }
            ]
        };
    },
    mounted() {
        let path = this.$route.path;
        this.active = path;
        path == "/writ" ? this.$router.push("/writ/cv/step1") : "";
        this.getName();
    },
    methods: {
        changeNav(path, index) {
            if (path) {
                this.$router.push(path);
                this.active = path;
            }
        },
        //导航选中效果
        getName() {
            let _this = this;
            let name = this.$route.name;
            let nowName = name.split("-")[2];
            switch (nowName) {
                case "cv":
                    _this.activeIndex = 0;
                    break;
                case "ps":
                   _this.activeIndex = 1;
                    break;
                case "letter":
                   _this.activeIndex = 2;
                    break;
                case "material":
                    _this.activeIndex = 3;
                    break;
                      case "modify":
                   _this.activeIndex = 4;
                    break;
                default:
                   _this.activeIndex = 0;
                    break;
            }
        }
    },
    watch: {
        $route(to, from) {
             //导航选中效果
             this.getName()
            if (to.path == "/writ") {
                this.$router.push("/writ/cv/step1");
                this.activeIndex = 0;
            } else if (to.path == "/writ/cv") {
                this.$router.push("/writ/cv/step1");
                this.activeIndex = 0;
            }
        }
    }
};
</script>