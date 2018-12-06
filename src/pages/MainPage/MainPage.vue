<template>
  <div>
    <header class="topSearch">
      <div class="logo"><a href="javascript:void(0)"><img src="./images/toplogo.png" alt=""></a></div>
      <div class="search"><i class="icon"></i><span>搜索商品，共10000款好物品</span></div>
      <div class="loginbtn">登录</div>
    </header>
    <div class="topCategory">
      <div class="wrapallspan">
        <span class="on">居家</span>
        <span>鞋包配饰</span>
        <span>服装</span>
        <span>电器</span>
        <span>洗护</span>
        <span>饮食</span>
        <span>餐厨</span>
        <span>婴童</span>
        <span>文体</span>
        <span>特色区</span>
      </div>
    </div>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./images/banner1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./images/banner2.jpg" alt=""></div>
          <div class="swiper-slide"><img src="./images/banner3.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="indexServicePolicy">
      <ul>
        <li class="item">
          <i class="icon" style="background-image:url(https://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png);"></i>
          <span class="text">网易自营品牌</span>
        </li>
        <li class="item">
          <i class="icon" style="background-image:url(https://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png);"></i>
          <span class="text">30天无忧退货</span>
        </li>
        <li class="item">
          <i class="icon" style="background-image:url(https://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png);"></i>
          <span class="text" data-reactid=".0.2.0.$2.0.1">48小时快速退款</span>
        </li>
      </ul>
    </div>
    <div class="kingKongModule">
      <ul>
        <li><img src="./images/pro1.png" alt=""><p>居家</p></li>
        <li><img src="./images/pro2.png" alt=""><p>鞋包配饰</p></li>
        <li><img src="./images/pro3.png" alt=""><p>服装</p></li>
        <li><img src="./images/pro4.png" alt=""><p>电器</p></li>
        <li><img src="./images/pro5.png" alt=""><p>洗护</p></li>
        <li><img src="./images/pro6.png" alt=""><p>饮食</p></li>
        <li><img src="./images/pro7.png" alt=""><p>餐厨</p></li>
        <li><img src="./images/pro8.png" alt=""><p>婴童</p></li>
        <li><img src="./images/pro9.png" alt=""><p>文体</p></li>
        <li><img src="./images/pro10.png" alt=""><p>超级会员</p></li>
      </ul>
    </div>
    <div class="newPeopleEnjoy">
      <div class="moduleTitle"><span class="txt">新人专享礼</span></div>
      <div class="content">
        <a href="javascript:void(0);" class="left">
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <img class="img" src="./images/xinfeng.png" alt="">
            <div class="animate"></div>
          </div>
        </a>
        <div class="right">
          <div class="module1">
            <a class="m-activityItem"></a>
            <div class="picWrap">
              <div class="pic">
                <img src="https://yanxuan.nosdn.127.net/aa78844ee533b6f389abff1fc143997e.png" style="display: inline;">
              </div>
              <div class="discount" >
                <div class="line1" >¥44</div>
                <div class="line2">¥59</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">福利社</div>
              <div class="subTitle">今日特价</div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  export default {
    name: "main-page",
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
      new BScroll('.topCategory',{
        scrollX:true
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/mixins.styl'
  .topSearch
    display flex
    align-items center
    padding 0.16rem 0.3rem
    .logo img
      width 1.38rem
      height .4rem
      margin-right 0.2rem
    .loginbtn
      width 1.5rem
    .search
      background #EDEDED
      height 0.56rem
      line-height 0.56rem
      flex 1
      color #666
      padding-left 0.2rem
      i.icon
        display inline-block
        background url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
        background-size: 100% 100%;
        width 0.28rem
        height 0.28rem
        vertical-align middle
        margin-right 0.2rem
      span
        font-size 0.25rem
    .loginbtn
      width 0.72rem
      height 0.38rem
      font-size 0.24rem
      border-radius 0.12rem
      line-height 0.38rem
      text-align: center
      color: #b4282d;
      margin-left 0.16rem
      border: 1px solid #b4282d;
  .topCategory
    overflow hidden
    .wrapallspan
      white-space nowrap
      height 0.6rem
      line-height 0.6rem
      span
        font-size 0.28rem
        display: inline-block
        padding 0 0.16rem
        position relative
        &.on::after
          content: ' ';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: .04rem;
          background-color: #b4282d;
  .swiper-container
    img
      width 100%
      vertical-align middle
  .indexServicePolicy
    background: #FFEDDB
    ul
      height 0.72rem
      align-items center
      display flex
      padding 0 0.3rem
      li.item
        flex 1
        .icon
          vertical-align middle
          width 0.32rem
          height 0.32rem
          display inline-block
          background-size 100% 100%
        span
          vertical-align middle
          color #B4282D
          font-size 0.24rem
  .kingKongModule
    background #FFEDDB
    ul
      clearFix()
      padding-bottom 0.52rem
    li
      margin 0.1rem 0 0.1rem
      float left
      width 20%
      text-align center
      img
        width 80%
      p
        font-size 0.24rem
        margin-top 0.1rem
  .newPeopleEnjoy
    background #fff
    .moduleTitle
      box-sizing border-box
      height: 1.2rem;
      width: 100%;
      line-height: 1.2rem;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: .32rem;
      padding: 0 .4rem;
      overflow hidden
      span
        position relative
        display inline-block
        &::before
          left -.53333rem
        &::after
          right -.53333rem
        &::before,&::after
          content: '';
          position: absolute;
          top: .6rem;
          width: .32rem;
          height: .03rem;
          background: #333;
    .content
      box-sizing border-box
      padding:0 .4rem;
      overflow: hidden;
      .left
        display: block;
        width: 49%;
        height: 4.34rem;
        background: #F9E9CF;
        border-radius: .05333rem;
        margin-right: 2%;
        float: left;
        color: #333;
        .name
          font-size: .32rem;
          padding: .4rem 0 0 .4rem;
        .imgWrap
          width: 2.28rem;
          height: 2.28rem
          margin 0.5rem auto
          position relative
          .img
            width 100%
            height 100%
          .animate
            position: absolute;
            width: .3rem;
            height: .2rem;
            bottom: .20rem;
            right: .45rem;
            background: url(https://yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png) no-repeat;
            background-size: 100% 100%;
      .right
        float: left;
        width 49%
        .module1
          background: #FBE2D3;
          height 2.17rem
          border-radius: 4px;
          margin-bottom: .05333rem;
          .cnt
            position: relative;
</style>
