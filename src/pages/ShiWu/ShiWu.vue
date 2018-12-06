<template>
<div>
  <div class="topfix">
   <header class="topheader">
     <a href="javascript:void(0);" class="homeLink"></a>
     <span class="center-text"><a class="item active" href="javascript:void(0)">发现</a><a class="item" href="javascript:void(0)">甄选家</a></span>
     <div class="rightlink">
       <a href="javascript:void(0);" class="search"></a>
       <a href="javascript:void(0);" class="shopcart"></a>
     </div>
   </header>
   <div class="topnav">
     <ul>
       <li>
         <a class="item active" href="javascript:void(0)">推荐</a>
       </li>
       <li>
         <a class="item" href="javascript:void(0)">达人</a>
       </li>
       <li>
         <a class="item" href="javascript:void(0)">晒单</a>
       </li>
       <li>
         <a class="item" href="javascript:void(0)">上新</a>
       </li>
       <li>
         <a class="item" href="javascript:void(0)">HOME</a>
       </li>
     </ul>
   </div>
  </div>
   <div class="main-content">
        <div class="m-tpls m-tpls-banner">
          <a href="javascript:void(0);">
            <div class="u-pic">
              <img src="./images/shiwu1.jpg" alt="" width="100%" height="100%">
            </div>
          </a>
        </div>
        <div class="m-tpls m-tpls-picker">
          <a href="javascript:void(0)" class="u-flexbox">
            <div class="info">
              <div class="u-name">
                <span class="ava">
                  <img src="./images/touxiang1.png" alt="" width="100%" height="100%">
                </span>
                <span>服装组：小服</span>
              </div>
              <div class="title">双11忘买羽绒服？没关系，还有双12！</div>
              <div class="desc">双12时髦保暖羽绒服低至6折</div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>21.5k人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img src="./images/shiwu2.jpg" alt="" width="100%" height="100%">
            </div>
          </a>
        </div>
        <div class="m-tpls m-tpls-rec">
          <a href="javascript:void(0);" class="u-flexbox">
              <div class="u-name">
                <span class="ava">
                  <img src="./images/touxiang1.png" alt="" width="100%" height="100%">
                </span>
                <span>智造组：涛姐</span>
              </div>
              <div class="title">揭秘2018严选商品线隐藏进阶之路，为美好生活品质加分</div>
            <div class="u-pic">
              <img src="./images/shiwu4.jpg" alt="" width="100%" height="100%">
            </div>
            <div class="u-rcount">
              <i class="ico">
              </i><span>49.2k人看过</span>
            </div>
          </a>
        </div>
        <div class="m-tpls m-tpls-look">
       <a href="/topic/v1/pub/2u3FVHn300.html" class="wrapper">
         <div class="u-name">
              <span class="ava">
                <img src="./images/touxiang1.png" alt="" width="100%" height="100%">
              </span>
              <span>叶****a</span>
         </div>
         <div class="title">颜值担当，大爱！</div>
         <div class="m-looksingle">
             <div class="u-pic">
               <img src="./images/probig.jpg" alt="" width="100%">
                 <a href="javascript:void(0)" target="_blank">
                   <div class="m-mark-detail">
                     <p class="u-name">复古半自动意式咖啡机</p>
                     <p class="u-price">¥599.00</p>
                   </div>
                 </a>
             </div>
             <div class="u-rcount"><i class="ico"></i><span>123人看过</span></div>
         </div>
       </a>
     </div>
        <div class="m-tpls m-tpls-look">
       <a href="/topic/v1/pub/2u3FVHn300.html" class="wrapper">
         <div class="u-name">
              <span class="ava">
                <img src="./images/touxiang1.png" alt="" width="100%" height="100%">
              </span>
           <span>叶****a</span>
         </div>
         <div class="title">颜值担当，大爱！</div>
         <div class="m-looksingle">
           <div class="u-pic">
             <img src="./images/bigpic2.jpg" alt="" width="100%">
             <a href="javascript:void(0)" target="_blank">
               <div class="m-mark-detail">
                 <p class="u-name">银耳雪燕窝</p>
                 <p class="u-price">¥1599.00</p>
               </div>
             </a>
           </div>
           <div class="u-rcount"><i class="ico"></i><span>123人看过</span></div>
         </div>
       </a>
     </div>

     <div class="m-tpls m-tpls-new">
       <div class="title">11月16日新品放映室</div>
       <div class="content">温和舒缓肌肤的补水面膜，给你的美肌来场及时雨，喝一口就元气满满的胶原蛋白液，真正由内而外滋养你的肌肤。</div>
       <ul class="m-gplist">
         <li>
           <img src="./images/smallpic1.png" alt="">
         </li>
         <li>
           <img src="./images/smallpic2.png" alt="">
         </li>
         <li>
           <img src="./images/smallpic3.png" alt="">
         </li>
         <li>
           <img src="./images/smallpic4.png" alt="">
         </li>
         <li>
           <img src="./images/smallpic4.png" alt="">
         </li>
         <li>
           <img src="./images/smallpic2.png" alt="">
         </li>
         <li>
           <img src="./images/smallpic2.png" alt="">
         </li>
         <li>
           <img src="./images/smallpic3.png" alt="">
         </li>
       </ul>
     </div>
</div>
</div>
</template>

<script>
    export default {
        name: "shi-wu"
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
          font-size: .28rem;
          margin-left: 1rem
          .item
             vertical-align middle
             padding 0 0.16rem
             &.active
                font-size: .4rem;
                color: #b4282d;
                font-weight: bold;
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
     .topnav
       ul
         display flex
         border-1px(#d9d9d9)
         box-sizing: border-box;
         height: .72rem;
         line-height: .72rem;
         li
          flex-grow  1
          text-align center
          a
            &.item
              display inline-block
              height: .72rem;
              line-height: .72rem;
              font-size: .28rem;
              padding 0 .08rem
              box-sizing: border-box;
            &.active
                color: #B4282D;
                border-bottom: .04rem solid #B4282D;

  .main-content
    padding-top 1.72rem
    background-color: #f4f4f4;
    .m-tpls
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        box-sizing: border-box;
        padding: .36rem .3rem;
        a
          display: block
        .u-name
          font-size: .28rem;
          color: #333;
          line-height: .36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          span
            display inline-block
            vertical-align middle
          .ava
            width 0.54rem
            height 0.54rem
            border-radius 50%
            overflow hidden


        .u-rcount
          font-size: .22rem;
          color: #999;
          line-height: .32rem;
          margin-top: .2rem;
          .ico
            display: inline-block;
            width: .28rem;
            height: .2rem;
            vertical-align: middle;
            background: url(./images/eye.png) no-repeat 0 0;
            background-size 100% 100%
            margin-right: .08rem;
          span
            display: inline-block;
            vertical-align: middle;
    .m-tpls-picker
       position relative
       .u-flexbox
         display: flex;
         justify-content: space-between;
         .info
            width 4rem
         .title
            font-size: .36rem;
            color: #333;
            line-height: .44rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            padding-top: .32rem;
            font-family: PingFangSC-Regular;
         .desc
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .28rem;
            line-height: .4rem;
            padding-top: .08rem;
            color: #7f7f7f;
       .u-rcount
         position: absolute;
         left: .3rem;
         bottom: .26rem;
       .u-pic
          width: 2.72rem;
          height: 2.72rem;
          overflow: hidden;
          border-radius: .08rem;

    .m-tpls-rec
       .title
          font-size: .36rem;
          color: #333;
          line-height: .52rem;
          margin: 0.24rem 0 .16rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
       .u-pic
          height: 3.76rem;
          margin-bottom: .2rem;
          overflow: hidden;
          border-radius: .08rem;
    .m-tpls-look
      .title
        color :#333
        font-size: .32rem;
        line-height: .48rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: .24rem 0 .2rem 0;
      .u-pic
        position: relative;
        border-radius: .08rem;
        overflow: hidden;
        .m-mark-detail
          background #fff
          position absolute
          top: 2.21rem;
          right 0px
          border-radius 0.03rem
          padding: .11rem .22rem .02rem .36rem;
          max-width: 3.12rem;
          &::after
            content: "";
            position: absolute;
            left: 0.1rem;
            top: .22rem;
            width: .16rem;
            height: .16rem;
            border-radius: 50%;
            background: #F48F18;

          .u-price
            font-size: .24rem;
            line-height: .28rem;
            color: #B4282D;
            line-height: .36rem;
            font-weight: bold;
    .m-tpls-new
      .title
        color: #333;
        font-size: .36rem;
        line-height: .54rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      .content
        font-size: .28rem;
        color: #7F7F7F;
        line-height: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        padding-top: .08rem;
      .m-gplist
         clearFix()
         margin .24rem 0
         li
           width 24.25%
           float left
           margin-right 1%
           background #f4f4f4
           margin-top 0.06rem
           img
             width 100%
           &:nth-of-type(4n)
              margin-right 0


</style>
