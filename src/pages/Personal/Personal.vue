<template>
<div style="height: 100%;">
  <div class="topfix">
    <header class="topheader">
      <a href="javascript:void(0);" class="homeLink"></a>
      <span class="center-text">网易严选</span>
      <div class="rightlink">
        <a href="javascript:void(0);" class="search"></a>
        <a href="javascript:void(0);" class="shopcart"></a>
      </div>
    </header>
  </div>
  <div class="login-type">
      <div class="logoWrap">
        <img src="./images/yanxuanpic.png" alt="">
      </div>
  </div>


</div>
</template>

<script>
    export default {
        name: "personal"
    }
</script>

<style scoped lang="stylus">
  @import '../../common/mixins.styl'
  .topfix
    background #fafafa
    position fixed
    top 0rem
    width 100%
    z-index 10000
    .topheader
      height 1rem
      display flex
      align-items center
      padding: 0 .26rem 0 .24rem;
      position relative
      border-1px(#d9d9d9)
      .homeLink
        height 1rem
        display inline-block
        width .46rem
        background url(./images/shiwutop1.png) no-repeat center center;
        background-size 100%
      .center-text
        flex-grow 1
        text-align: center
        font-size: .38rem;
        margin-left: 1rem
      .rightlink
        .search
          height 1rem
          display inline-block
          width .62rem
          background url(./images/shiwutop2.png) no-repeat center center;
          background-size 80%
          margin-right 0.3rem
        .shopcart
          height 1rem
          display inline-block
          width .49rem
          background url(./images/shiwutop3.png) no-repeat center center;
          background-size 100%
  .login-type
    position: relative;
    height: 100%;
    box-sizing border-box
    padding-top 1rem
    .logoWrap
      text-align: center;
      padding-top: .6rem;
      padding-bottom: .4rem;
      img
        width: 2rem;
        height: 0.6rem
</style>
