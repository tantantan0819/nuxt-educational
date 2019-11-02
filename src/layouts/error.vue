<template>
  <div class="errorBox">
    <div class="NotPage">
      <div class="message" @click="goBack"><span>页面丢失,点击返回……</span></div>
      <div class="rail">
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
        <div class="stamp four">4</div>
        <div class="stamp zero">0</div>
      </div>
      <div class="world">
        <div class="forward">
          <div class="box">
            <div class="wall"></div>
            <div class="wall"></div>
            <div class="wall"></div>
            <div class="wall"></div>
            <div class="wall"></div>
            <div class="wall"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~/assets/css/error.scss";
</style>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="scss">

</style>
