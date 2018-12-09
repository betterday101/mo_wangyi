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
  <div class="wrapScroll">
   <div class="main-content" v-if="swtuijian10.length">
     <div v-for="(tj10Item,index) in swtuijian10">
        <div class="m-tpls m-tpls-banner"   v-if="tj10Item.ad!==null">
          <a href="javascript:void(0);" >
            <div class="u-pic">
              <img :src="tj10Item.ad.picUrl" alt="" width="100%" height="100%">
            </div>
          </a>
        </div>
        <div class="m-tpls m-tpls-picker" v-for="(Item,index) in tj10Item.topics" v-if="Item.type==1||Item.type==2">
          <a href="javascript:void(0)" class="u-flexbox">
            <div class="info">
              <div class="u-name">
                <span class="ava">
                  <img :src="Item.avatar" alt="" width="100%" height="100%">
                </span>
                <span>{{Item.nickname}}</span>
              </div>
              <div class="title">{{Item.title}}</div>
              <div class="desc">{{Item.subTitle}}</div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>{{Item.readCount}}人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img :src="Item.picUrl" alt="" width="100%" height="100%">
            </div>
          </a>
        </div>
        <div class="m-tpls m-tpls-rec"  v-for="(Item,index) in tj10Item.topics" v-if="Item.type===0">
          <a href="javascript:void(0);" class="u-flexbox">
              <div class="u-name">
                <span class="ava">
                  <img :src="Item.avatar" alt="" width="100%" height="100%">
                </span>
                <span>{{Item.name}}</span>
              </div>
              <div class="title">{{Item.title}}</div>
            <div class="u-pic">
              <img :src="Item.picUrl" alt="" width="100%" height="100%">
            </div>
            <div class="u-rcount">
              <i class="ico">
              </i><span>{{Item.readCount}}人看过</span>
            </div>
          </a>
        </div>
        <!--<div class="m-tpls m-tpls-look">-->
       <!--<a href="/topic/v1/pub/2u3FVHn300.html" class="wrapper">-->
         <!--<div class="u-name">-->
              <!--<span class="ava">-->
                <!--<img src="./images/touxiang1.png" alt="" width="100%" height="100%">-->
              <!--</span>-->
              <!--<span>叶****a</span>-->
         <!--</div>-->
         <!--<div class="title">颜值担当，大爱！</div>-->
         <!--<div class="m-looksingle">-->
             <!--<div class="u-pic">-->
               <!--<img src="./images/probig.jpg" alt="" width="100%">-->
                 <!--<a href="javascript:void(0)" target="_blank">-->
                   <!--<div class="m-mark-detail">-->
                     <!--<p class="u-name">复古半自动意式咖啡机</p>-->
                     <!--<p class="u-price">¥599.00</p>-->
                   <!--</div>-->
                 <!--</a>-->
             <!--</div>-->
             <!--<div class="u-rcount"><i class="ico"></i><span>123人看过</span></div>-->
         <!--</div>-->
       <!--</a>-->
     <!--</div>-->
        <!--<div class="m-tpls m-tpls-look">-->
       <!--<a href="/topic/v1/pub/2u3FVHn300.html" class="wrapper">-->
         <!--<div class="u-name">-->
              <!--<span class="ava">-->
                <!--<img src="./images/touxiang1.png" alt="" width="100%" height="100%">-->
              <!--</span>-->
           <!--<span>叶****a</span>-->
         <!--</div>-->
         <!--<div class="title">颜值担当，大爱！</div>-->
         <!--<div class="m-looksingle">-->
           <!--<div class="u-pic">-->
             <!--<img src="./images/bigpic2.jpg" alt="" width="100%">-->
             <!--<a href="javascript:void(0)" target="_blank">-->
               <!--<div class="m-mark-detail">-->
                 <!--<p class="u-name">银耳雪燕窝</p>-->
                 <!--<p class="u-price">¥1599.00</p>-->
               <!--</div>-->
             <!--</a>-->
           <!--</div>-->
           <!--<div class="u-rcount"><i class="ico"></i><span>123人看过</span></div>-->
         <!--</div>-->
       <!--</a>-->
     <!--</div>-->
        <!--<div class="m-tpls m-tpls-new">-->
       <!--<div class="title">11月16日新品放映室</div>-->
       <!--<div class="content">温和舒缓肌肤的补水面膜，给你的美肌来场及时雨，喝一口就元气满满的胶原蛋白液，真正由内而外滋养你的肌肤。</div>-->
       <!--<ul class="m-gplist">-->
         <!--<li>-->
           <!--<img src="./images/smallpic1.png" alt="">-->
         <!--</li>-->
         <!--<li>-->
           <!--<img src="./images/smallpic2.png" alt="">-->
         <!--</li>-->
         <!--<li>-->
           <!--<img src="./images/smallpic3.png" alt="">-->
         <!--</li>-->
         <!--<li>-->
           <!--<img src="./images/smallpic4.png" alt="">-->
         <!--</li>-->
         <!--<li>-->
           <!--<img src="./images/smallpic4.png" alt="">-->
         <!--</li>-->
         <!--<li>-->
           <!--<img src="./images/smallpic2.png" alt="">-->
         <!--</li>-->
         <!--<li>-->
           <!--<img src="./images/smallpic2.png" alt="">-->
         <!--</li>-->
         <!--<li>-->
           <!--<img src="./images/smallpic3.png" alt="">-->
         <!--</li>-->
       <!--</ul>-->
     <!--</div>-->
     </div>
     <div v-for="(moreItem,index) in swtuijianmore.result">
       <div class="m-tpls m-tpls-picker" v-for="(item,index) in moreItem.topics" v-if="item.type==1||item.type==2">
         <a href="javascript:void(0)" class="u-flexbox">
           <div class="info">
             <div class="u-name">
                <span class="ava">
                  <img :src="item.avatar" alt="" width="100%" height="100%">
                </span>
               <span>{{item.nickname}}</span>
             </div>
             <div class="title">{{item.title}}</div>
             <div class="desc">{{item.subTitle}}</div>
             <div class="u-rcount">
               <i class="ico"></i>
               <span>{{item.readCount}}人看过</span>
             </div>
           </div>
           <div class="u-pic">
             <img :src="item.picUrl" alt="" width="100%" height="100%">
           </div>
         </a>
       </div>
       <div class="m-tpls m-tpls-new" v-for="(item,index) in moreItem.topics" v-if="item.type===7">
           <div class="title">{{item.title}}</div>
           <div class="content">{{item.subTitle}}</div>
           <ul class="m-gplist">
             <li v-for="(liitem,index) in item.itemList" :key="index" v-if="liitem!==null">
                <img  :src="liitem.itemUrl" alt="">
             </li>
           </ul>
       </div>
       <!--lookList不为空的时候是轮播图的样式-->
       <div class="m-tpls m-tpls-rec"  v-for="(item,index) in moreItem.topics" v-if="item.type===0&&item.lookList===null">
         <a href="javascript:void(0);" class="u-flexbox">
           <div class="u-name">
                <span class="ava">
                  <img :src="item.avatar" alt="" width="100%" height="100%">
                </span>
             <span>{{item.name}}</span>
           </div>
           <div class="title">{{item.title}}</div>
           <div class="u-pic">
             <img :src="item.picUrl" alt="" width="100%" height="100%">
           </div>
           <div class="u-rcount">
             <i class="ico">
             </i><span>{{item.readCount}}人看过</span>
           </div>
         </a>
       </div>
     </div>
   </div>
  </div>
</div>
</template>

<script>
  //type:1,type:2都是左右结构而且样式相同(m-tpls-picker)
  //type:7 这个是8张图(m-tpls-new)
  //type:0&&item.lookList===null 这个是上下结构(m-tpls-rec)
  //type:0&&item.lookList===有值的话是轮播图(样式暂时没写)

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "shi-wu",
    mounted(){
      //获取的数据
      this.$store.dispatch("getSWtuijian10");

    },
    data(){
       return{
         itemIndex:0,
         page:1,
       }
    },
    watch:{
      swtuijian10(){
        this.$nextTick(()=>{
          this._initScroll();
        })
      }
    },
    computed:{
      //...mapState(["mainPage"]),//与下面的等同
      //获取主页面的数据
      swtuijian10(){
        return this.$store.state.swtuijian10;
      },
      swtuijianmore(){
        return this.$store.state.swtuijianmore;
      },

    },
    methods:{
         _initScroll(){
            this.mainScroll= new BScroll('.wrapScroll',{
               pullUpLoad: true
            })

           // 绑定滚动的事件监听
           this.mainScroll.on('pullingUp', () => {
              this.$store.dispatch("getSWtuijianMore",{callback:()=>{
                  this.$nextTick(() => {
                    debugger
                    this.mainScroll.finishPullUp();
                    this.mainScroll.refresh();
                  })
                },page:this.page++});
           })
        }

    }
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
.wrapScroll
  position fixed
  top 1.72rem
  bottom 50px
  width 100%
  overflow hidden
  background-color: #f4f4f4;
  .main-content
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
