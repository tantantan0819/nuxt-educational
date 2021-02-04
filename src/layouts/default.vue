<template>
  <el-container>
    <el-aside width="200px">
      <v-nav></v-nav>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><nuxt/></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
    import VNav from '~/components/nav'
    export default {
        components: { VNav },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
