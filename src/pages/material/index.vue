<template>
    <div class="material">
        材料信息
    </div>
</template>

<script>

export default {
    layout: 'utrack',
    data(){
        return{
            materialType: ['护照','英国签证卡','成绩单','学位证毕业证','在读证明','个人陈述','推荐信','授权信','其它材料','材料真实性声明']
        }
    }
}
</script>
<style lang="scss">
  @import "~/assets/css/material.scss";
</style>