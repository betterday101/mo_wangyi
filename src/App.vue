<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-show="this.$route.path==='personal'"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/footerGuide'
  export default {
  name: 'App',
    components:{
      FooterGuide
    }
  }
</script>

<style>

</style>
