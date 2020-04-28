<template>
  <div class="cv">
    <div class="cv_header">
      <ul class="cv_nav">
        <li v-for="(item,index) in cvArr" :key="index" :class="{'active':item == active}" @click="cvChange(item)">0{{index+1}}</li>
      </ul>
      <span class="cv_button" @click="preview">预览我的CV</span>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/cv.scss";
</style>
<script>
    export default {
        layout: 'refactor',
        data() {
            return {
                active: '',//选中cv
                cvArr: [
                    '/writ/cv/step1',
                    '/writ/cv/step2',
                    '/writ/cv/step3',
                    '/writ/cv/step4',
                    '/writ/cv/step5',
                    '/writ/cv/step6',
                ]
            }
        },
        mounted() {
            let path = this.$route.path;
            this.active = path;
            path == '/writ/cv' ? this.$router.push('/writ/cv/step1') : '';
        },
        methods: {
            //切换cv
            cvChange(path) {
                this.active = path;
                this.$router.push(path);
            },
            //预览cv
            preview() {
                window.open('/writ/cv/preview');
            }
        },
        watch:{
            $route(to,from){
                if(to.path == '/writ/cv'){
                    this.$router.push('/writ/cv/step1');
                    this.active = '/writ/cv/step1'
                }else{
                    this.active = to.path;
                }
            }
        },
    }
</script>
