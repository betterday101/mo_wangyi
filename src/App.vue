<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-show="this.$route.path!=='/personal'||(this.$route.path==='/personal'&&user._id)"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import FooterGuide from './components/FooterGuide/footerGuide'
  export default {
  name: 'App',
    components:{
      FooterGuide
    },
    computed:{
      ...mapState(["user"])//等同下面
      // user() {
      //   return this.$store.state.user
      // },
    }
  }
</script>

<style>

</style>
