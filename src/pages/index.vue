<template>
  <section class="container"></section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

export default {
   data(){
       return{

       }
   },
    beforeMount() {
       this.$router.push('/login')
    }
}
</script>

