<template>
    <div class="writ">
        <div class="writ_nav">
            <span v-for="(item,index) in nav" :key="index" @click="changeNav(item.href)"
            style="margin-right: 20px;">{{item.name}}</span>
        </div>
       <nuxt-child></nuxt-child>
    </div>
     
</template>
<script >
export default{
    layout: "refactor",
    data(){
        return{
            active: 0,
            nav:[
                {name: 'CV',
                href:'/writ/cv'},
                  {name: 'PS',
                href:'/writ/ps'},
                    {name: '推荐信',
                href:'/writ/letter'},
                  {name: '材料列表',
                href:'/writ/material'},
                   {name: '修改记录',
                href:'/writ/modify'},
            ]
        }
    },
      mounted() {
            let path = this.$route.path;
            this.active = path;
            path == '/writ' ? this.$router.push('/writ/cv/step1') : '';
        },
    methods:{
        changeNav(path){
            if(path){
                this.$router.push(path);
            }
        }
    }
}
</script>