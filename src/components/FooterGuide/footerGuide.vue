<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on:this.$route.path==='/mainpage'}" @click="handleRoute('/mainpage')">
      <span class="item_icon">
        <i class="iconfont icon-shouye2"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on:this.$route.path==='/category'}" @click="handleRoute('/category')">
      <span class="item_icon">
        <i class="iconfont icon-classify"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shiwu'}" @click="handleRoute('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-iconset0489"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shopcart'}" @click="handleRoute('/shopcart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/personal'}" @click="handleRoute('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-icon_pc"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "footer-guide",
    methods:{
      handleRoute(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/mixins.styl'
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    line-height inherit
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0 5px
      color #999999
      &.on
        color #E43929
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        height 22px

        .iconfont
          font-size 22px
</style>
