<template>
<div>
  <div class="topview">
    <div class="toptitle">购物车 <a href="javascript:void(0)">领券</a></div>
  </div>
    <ul class="m-servicePolicy">
      <li class="item">
        <i class="u-icon"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="item">
        <i class="u-icon"></i>
        <span>48小时快速退款</span>
      </li>
      <li class="item">
        <i class="u-icon"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="defaultPage">
      <div class="container" >
        <div class="img"></div>
        <div class="txt">
          <div class="noCart-login">
            <div class="noCart-title">去添加点什么吧</div>
            <div class="noCart-btn">登录</div>
          </div>
        </div>
      </div>
    </div>

</div>


</template>

<script>
    export default {
        name: "shop-cart"
    }
</script>

<style scoped lang="stylus">
  @import '../../common/mixins.styl'
  .topview
    z-index 200
    top:0px
    position: fixed
    width 100%
   .toptitle
     box-sizing border-box
     height: 1rem;
     padding: 0 .4rem;
     line-height: 1rem;
     text-align: center;
     background-color: #fff;
     font-size 0.36rem
     overflow hidden
     border-1px(#d9d9d9)
     a
      display inline-block
      position absolute
      color #B4282D
      right 0.4rem
      line-height: 1rem;
      font-size 0.3rem
   .m-servicePolicy
     position relative
     z-index 100
     margin-top 1rem
     padding: 0 .4rem;
     display: flex;
     height: .7rem;
     align-items: center;
     justify-content: space-between;
     background #f4f4f4
     .u-icon
        display: inline-block;
        vertical-align: middle;
        background-image: url(./images/smallicon.png);
        background-repeat: no-repeat;
        background-size 100% 100%
        width: .1rem;
        height: .1rem;
     span
        vertical-align: middle;
        font-size: .24rem;
        color: #666;
   .defaultPage
       position: fixed;
       top: 0rem;
       left: 0;
       bottom: 0;
       z-index: 0;
       width: 100%;
       background-color: #f4f4f4;
       text-align: center;
       .container
          position: absolute;
          top: 0rem;
          right: 0;
          bottom: 0;
          left: 0;
          height: 4rem;
          margin: auto;
          .img
            background: url(./images/kongche.png) no-repeat  center center;
            background-size: 100% 100%;
            display: inline-block;
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: .08rem;
          .noCart-title
            margin-bottom: .5rem;
            line-height: 1;
            font-size: .27rem;
            color: #999;
          .noCart-btn
            margin: auto;
            width: 4.8rem;
            height:.92rem;
            font-size: .3rem;
            line-height: .92rem;
            color: #fff;
            background-color: #b4282d;
            border-radius: .03rem;


</style>
