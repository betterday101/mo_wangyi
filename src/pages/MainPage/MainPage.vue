<script src="../../store/actions.js"></script>
<template>
  <div style="background-color: #f4f4f4;margin-bottom:50px">
    <header class="topSearch">
      <div class="logo"><a href="javascript:void(0)"><img src="./images/toplogo.png" alt=""></a></div>
      <div class="search"><i class="icon"></i><span>搜索商品，共10000款好物品</span></div>
      <div class="loginbtn">登录</div>
    </header>
    <div class="topCategory">
      <div class="wrapallspan">
        <span @click="changCateList(index)" :class="{on:index===0}" v-for="(cate,index) in mainPage.cateList" :key="index">{{cate.name}}</span>
      </div>
    </div>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(onefocus,index) in mainPage.focusList" :key="index"><img :src="onefocus.picUrl" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="indexServicePolicy">
      <ul>
        <li class="item"  v-for="(policy,index) in mainPage.policyDescList" :key="index">
          <i class="icon" :style="`background-image:url(${policy.icon});`"></i>
          <span class="text">{{policy.desc}}</span>
        </li>
      </ul>
    </div>
    <div class="kingKongModule">
      <ul v-if="mainPage.kingKongModule" >
        <li v-for="(item,index) in mainPage.kingKongModule.kingKongList"><img :src="item.picUrl" alt=""><p>{{item.text}}</p></li>
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
            <a class="m-activityItem"  v-if="mainPage.indexActivityModule">
              <div class="picWrap">
                <div class="pic">
                  <img :src="mainPage.indexActivityModule[0].picUrl" style="display: inline;">
                </div>
                <div class="discount" >
                  <div class="line1">{{mainPage.indexActivityModule[0].activityPrice}}</div>
                  <div class="line2">{{mainPage.indexActivityModule[0].originPrice}}</div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">{{mainPage.indexActivityModule[0].title}}</div>
                <div class="subTitle">{{mainPage.indexActivityModule[0].subTitle}}</div>
                <span></span>
              </div>
            </a>
          </div>
          <div class="module1">
            <a class="m-activityItem"  v-if="mainPage.indexActivityModule">
              <div class="picWrap">
                <div class="pic">
                  <img :src="mainPage.indexActivityModule[1].picUrl" style="display: inline;">
                </div>
                <div class="discount" >
                  <div class="line1">{{mainPage.indexActivityModule[1].activityPrice}}</div>
                  <div class="line2">{{mainPage.indexActivityModule[1].originPrice}}</div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">{{mainPage.indexActivityModule[1].title}}</div>
                <div class="tag">{{mainPage.indexActivityModule[1].tag}}</div>
                <span></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="ManufacturersSupplying">
      <div class="toptitle">
        <span>品牌制造商直供</span>
        <a href="javascript:void(0)">更多</a>
      </div>
      <ul class="allpingpai">
        <li>
          <div class="topdesc">
            <h4 class="title">海外制造商</h4>
            <div>
               <span class="price">
               <span >9.9</span>
               <span>元起</span></span>
              <i class="newIcon">上新</i>
            </div>
          </div>
        </li>
        <li>
          <div class="topdesc">
            <h4 class="title">海外制造商</h4>
            <div>
               <span class="price">
               <span >9.9</span>
               <span>元起</span></span>
            </div>
          </div>
        </li>
        <li>
          <div class="topdesc">
            <h4 class="title">海外制造商</h4>
            <div>
               <span class="price">
               <span >9.9</span>
               <span>元起</span></span>
            </div>
          </div>
        </li>
        <li>
          <div class="topdesc">
            <h4 class="title">海外制造商</h4>
            <div>
               <span class="price">
               <span >9.9</span>
               <span>元起</span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="HotSellModule" v-if="mainPage.categoryHotSellModule">
      <div class="toptitle">
        <span>{{mainPage.categoryHotSellModule.title}}</span>
      </div>
      <div class="topclothes">
        <ul>
          <li  v-for="(hotSell,index) in mainPage.categoryHotSellModule.categoryList" v-if="index<2">
            <div class="typename">
              {{hotSell.categoryName}}
            </div>
            <div class="dimg">
              <a href="javascript:void(0)"><img :src="hotSell.picUrl" alt=""></a>
            </div>
          </li>
        </ul>
      </div>
      <div class="moretopSell">
        <ul>
          <li  v-for="(hotSell,index) in mainPage.categoryHotSellModule.categoryList" v-if="index>=2">
            <a href="javascript:void(0)">
              <div class="proname">
                {{hotSell.categoryName}}
              </div>
              <div class="dimg">
                <img :src="hotSell.picUrl" alt="">
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="popularItemModule" v-if="mainPage.popularItemList">
      <div class="toptitle">
        <span>人气推荐</span>
        <a href="javascript:void(0)">更多</a>
      </div>
      <a href="javascript:void(0)" class="spItem" v-for="(popularItem,index) in mainPage.popularItemList" :key="index" v-if="index===0">
        <div class="wraper">
          <img :src="popularItem.primaryPicUrl" style="display: inline;">
        </div>
        <div>
          <div class="tagWraper" ><span>券</span></div>
          <div class="name">{{popularItem.name}}</div>
          <div class="desc">{{popularItem.simpleDesc}}</div>
          <div class="price" ><span>¥</span><span>{{popularItem.counterPrice}}</span></div>
        </div>
      </a>
      <ul class="moreItem">
        <li v-for="(popularItem,index) in mainPage.popularItemList" v-if="index>0" :key="index">
          <div class="dimg"><img :src="popularItem.primaryPicUrl" alt=""></div>
          <div  class="desc">
            <span>{{popularItem.name}}</span>&nbsp;
            <span class="price">¥{{popularItem.retailPrice}}</span>
          </div>
          <div  class="bottag"><span v-if="popularItem.promTag">{{popularItem.promTag}}</span></div>
        </li>
      </ul>
    </div>
    <div class="flashSaleModule">
      <div class="toptitle">
        <span>限时购</span>
        <a href="javascript:void(0)">更多</a>
      </div>
      <ul class="moreItem">
        <li>
          <a href="javascript:void(0)">
            <div class="dimg"><img src="./images/timepro1.png" alt=""></div>
            <div  class="desc">
              &nbsp;&nbsp;<span class="price">¥1028</span><span class="del">123</span>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="dimg"><img src="./images/timepro2.png" alt=""></div>
            <div class="desc">
              &nbsp;&nbsp;<span class="price">¥76</span><span class="del">123</span>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="dimg"><img src="./images/timepro3.png" alt=""></div>
            <div  class="desc">
              &nbsp;&nbsp;<span class="price">¥1028</span><span class="del">123</span>
            </div>
          </a>
        </li>

        <li>
          <a href="javascript:void(0)">
            <div class="dimg"><img src="./images/timepro4.png" alt=""></div>
            <div  class="desc">
              &nbsp;&nbsp;<span class="price">¥1028</span><span class="del">123</span>
            </div>
          </a>
        </li>

        <li>
          <a href="javascript:void(0)">
            <div class="dimg"><img src="./images/timepro5.jpg" alt=""></div>
            <div class="desc">
              &nbsp;&nbsp;<span class="price">¥76</span><span class="del">123</span>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="dimg"><img src="./images/timepro6.png" alt=""></div>
            <div  class="desc">
              &nbsp;&nbsp;<span class="price">¥1028</span><span class="del">123</span>
            </div>
          </a>

        </li>
      </ul>
    </div>
    <div class="categoryModule" v-if="mainPage.categoryModule">
      <div class="categoryItem" v-for="(categoryItem,index) in mainPage.categoryModule">
        <a :style="`background-image:url(${categoryItem.titlePicUrl});background-size:100% 100%;`" class="bannder"></a>
        <div class="categoryMoreItem">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in categoryItem.itemList" :key="index">
                <div  class="oneItem">
                  <div class="dimg"><img :src="item.primaryPicUrl" alt=""></div>
                  <div  class="desc">
                    <span>{{item.name}}</span>&nbsp;
                  </div>
                  <div class="price">¥{{item.retailPrice}}</div>
                  <div  class="bottag" v-if="item.promTag"><span>{{item.promTag}}</span></div>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ftWrap">
      <div class="copyright">
        <span>网易公司版权所有 © 1997-2018</span><br><span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "main-page",
    data(){
      return{
        //cateList选中状态
        cateList_on: true
      }
    },
    mounted(){
      //获取首页的数据
      this.$store.dispatch("getMainPage");
    },
    watch:{
      mainPage(){
        this.$nextTick(()=>{
          //cateList横向的滑动
          new BScroll('.topCategory',{
            scrollX:true
          })
          //轮播图数据
          new Swiper ('.banner .swiper-container', {
            autoplay:true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          });
          new Swiper ('.categoryMoreItem .swiper-container', {
            slidesPerView: 3.4,
            spaceBetween: 10,
          });

        })
      }
    },
    computed:{
      //...mapState(["mainPage"]),//与下面的等同
      //获取主页面的数据
      mainPage(){
        return this.$store.state.mainPage;
      }
    },
    methods:{
      changCateList(index){
        const wrapallspan=document.querySelectorAll('.wrapallspan span');
        for(let i=0 ;i<wrapallspan.length;i++){
          wrapallspan[i].className='';
        }
        wrapallspan[index].className='on';
      }
    }
  }

</script>

<style scoped lang="stylus">
  @import '../../common/mixins.styl'
  .topSearch
    background #fff
    z-index 10000
    position fixed
    top 0
    left 0
    right: 0;
    width 100%
    box-sizing border-box
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
        margin-top -0.12rem
        display inline-block
        background url(./images/searchIcon.png);
        background-size: 100% 100%;
        width 0.28rem
        height 0.28rem
        vertical-align middle
        margin-right 0.2rem
        margin-bottom -0.12rem
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
    background #fff
    margin-top 0.88rem
    overflow hidden
    .wrapallspan
      white-space nowrap
      height 0.6rem
      line-height 0.6rem
      display: inline-block
      span
        font-size 0.28rem
        display: inline-block
        padding 0 0.16rem
        position relative
        line-height 0.6rem
        &.on::after
          content: ' ';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: .04rem;
          background-color: #b4282d;
  .banner
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          img
            width 100%
            vertical-align middle
      .swiper-pagination
        //background: #000
        .swiper-pagination-bullet
          color red
        .swiper-pagination-bullet-active
          color green
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
    margin 0.2rem 0
    background #fff
    padding-bottom 0.3rem
    .moduleTitle
      box-sizing border-box
      height: 1.2rem;
      width: 100%;
      line-height: 1.2rem;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: .32rem;
      padding: 0 .3rem;
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
          top: .2rem;
          width: .32rem;
          height: .03rem;
          background: #333;

    .content
      box-sizing border-box
      padding:0 .3rem;
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
          height 2.15rem
          border-radius: 4px;
          margin-bottom: .04rem;
          .m-activityItem
            display block
            height 2.17rem
            box-sizing border-box
            padding 0.2rem 0 0 0.3rem
            position relative
            color #333
          .picWrap
            bottom: 0rem
            position: absolute;
            right: 0;
            width 2rem
            height 2rem
            .pic
              width: 100%
              height: 100%
              img
                width 100%
          .discount
            box-sizing border-box
            padding-top 0.11rem
            position absolute
            top 0
            right 0.3rem
            position: absolute;
            width: 0.85rem;
            height: 0.85rem;
            opacity: .8;
            background: #F59524;
            border-radius: 50%;
            color: #fff;
            text-align: center;
            font-size 0.24rem
            .line2
              font-size 0.24rem
              text-decoration: line-through;
          .cnt
            .title
              font-size 0.32rem
              line-height 0.48rem
            .subTitle
              font-size 0.24rem
              line-height 0.36rem
              color #7F7F7F
            .tag
              background: #CBB693;
              display inline-block
              border-radius 0.03rem
              font-size 0.2rem
              padding 0.05rem 0.08rem
              color #fff


  .ManufacturersSupplying
    margin 0.2rem 0
    background #fff
    padding: 0 0.3rem .3rem;
    .toptitle
      height 1rem
      line-height 1rem
      font-size 0.32rem
      overflow hidden
      a
        float: right
        line-height:1rem
    .allpingpai
      clearFix()
      li
        float left
        width 49.5%
        margin-right 1%
        height 2.6rem
        margin-bottom 0.05rem
        boder-radius 0.3rem
        &:nth-child(2n)
          margin-right 0px
        &:nth-of-type(1)
          background url("./images/producer1.jpg") no-repeat
          background-size 100% 100%
        &:nth-of-type(2)
          background url("./images/producer2.jpg") no-repeat
          background-size 100% 100%
        &:nth-of-type(3)
          background url("./images/producer3.jpg") no-repeat
          background-size 100% 100%
        &:nth-of-type(4)
          background url("./images/producer4.jpg") no-repeat
          background-size 100% 100%
        .topdesc
          text-align center
          margin-top 0.25rem
        .title
          font-size 0.28rem
          height:0.36rem
        div
          margin-top 0.05rem
        .price
          color #7F7F7F
          font-size 0.24rem
        .newIcon
          font-style: normal
          display: inline-block;
          width: .6rem;
          color: #fff;
          text-align: center;
          background: #CBB693;
          border-radius: .05rem;
          margin-left: .1rem;
          font-size 0.24rem
  .HotSellModule
    margin 0.2rem 0
    background #fff
    padding: 0 0.3rem .3rem;
    .toptitle
      height 1rem
      line-height 1rem
      font-size 0.32rem
    .topclothes
      ul
        clearFix()
        li
          float left
          width 49.5%
          margin-right 1%
          height 2rem
          position relative
          .typename
            margin-top 0.66rem
            padding-left 0.23rem
            display: inline-block
            line-height:0.42rem
            font-size 0.28rem
            position relative
            &::before
              content: '';
              position: absolute;
              left: 0.23;
              bottom: -.2rem;
              width: .6rem;
              height: .038rem;
              background: #333;
          .dimg
            position absolute
            height 2rem
            width 2rem
            right 0
            top 0
            img
              width 100%
              height:100%
          &:nth-of-type(1)
            background #F9F3E4
          &:nth-of-type(2n)
            margin-right 0
            background #EBEFF6

    .moretopSell
      ul
        clearFix()
        li
          float left
          height 1.8rem
          margin-top 0.05rem
          background #F5F5F5
          width 24.25%
          margin-right: 1%
          a
            display block
          &:nth-of-type(4n)
            margin-right: 0
          .proname
            height 0.36rem
            line-height 0.36rem
            text-align center
            font-size 0.24rem
            margin-top 0.1rem
          .dimg
            width 1.2rem
            height 1.2rem
            margin 0 auto
            img
              width 100%
              height auto


  .popularItemModule
    margin 0.2rem 0
    background #fff
    padding: 0 0.3rem .3rem;
    .toptitle
      height 1rem
      line-height 1rem
      font-size 0.32rem
      overflow hidden
      a
        float: right
        line-height:1rem
    .spItem
      background #FEF0DF
      display flex
      align-items center
      color #333
      .wraper
        width 2.8rem
        height 2.8rem
        img
          width 100%
          height auto
      .tagWraper
        height 0.3rem
        margin-bottom 0.12rem
        span
          box-sizing border-box
          height 0.3rem
          line-height 0.3rem
          display: inline-block
          position: relative;
          color:#fff
          font-size: 0.2rem
          padding: 0 .17rem;
          background-image: linear-gradient(-135deg,#EA8989 0,#E57B7B 100%);
          border-radius: .03rem;
          overflow: hidden;
          &::after
            right: -.1rem;
          &::before
            left: -.1rem;
          &::after,&::before
            position: absolute;
            top: 0;
            margin: auto 0;
            width: .14rem;
            height: .14rem;
            background: #fff;
            border-radius: 100%;
            bottom: 0;
            content: '';

      .name
        font-size: .28rem;
        width: 3.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      .desc
        font-size: .24rem;
        color: #7F7F7F;
        width: 3.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      .price
        color #b4282d
        font-size 0.28rem


    .moreItem
      clearFix()
      margin-top 0.2rem
      li
        width 32.33333%
        float left
        margin-right 1.5%
        &:nth-of-type(3n)
          margin-right 0
        .dimg
          background #f5f5f5
          margin-bottom: 0.12rem;
          img
            width 100%
        .desc
          font-size 0.24rem
          .price
            color #b4282d
        .bottag
          span
            background #f48f18
            color #fff
            font-size 0.2rem
            display: inline-block
            padding 0.01rem 0.15rem
            margin-right: 0.1rem


  .flashSaleModule
    background #fff
    padding: 0 0.3rem 0rem;
    .toptitle
      height 1rem
      line-height 1rem
      font-size 0.32rem
      overflow hidden
      a
        float: right
        line-height 1rem
    .moreItem
      clearFix()
      margin-top 0.2rem
      li
        width 32.33333%
        float left
        margin-right 1.5%
        a
          display: block
          padding-bottom: 0.3rem
        &:nth-of-type(3n)
          margin-right 0
        .dimg
          background #f5f5f5
          margin-bottom: 0.12rem;
          img
            width 100%
        .desc
          font-size 0.24rem
          .del
            font-size 0.2rem
            text-decoration line-through
            padding-left 0.1rem
            color #7F7F7F
          .price
            color #b4282d


  .categoryModule
    .categoryItem
      margin-top 0.2rem
      background #fff
      padding-bottom 0.35rem
      .bannder
        display: block;
        width: 100%;
        height: 3.7rem;
        margin-bottom: .1rem
      .categoryMoreItem
        padding 0 0 0 0.3rem
        clearFix()
        margin-top 0.2rem
        .oneItem
          width 2rem
          .dimg
            background #f5f5f5
            margin-bottom: 0.12rem;
            img
              width 100%
          .desc
            font-size 0.24rem
            padding-left: 0;
            font-size: .28rem;
            margin-top: 0;
            line-height: .36rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          .price
            color #b4282d
          .bottag
            span
              background #f48f18
              color #fff
              font-size 0.2rem
              display: inline-block
              padding 0.01rem 0.15rem
              margin-right: 0.1rem


  .ftWrap
    margin-top 0.2rem
    background #414141;
    .copyright
      color #999
      font-size 0.24rem
      text-align center
      padding 0.35rem 0
</style>
