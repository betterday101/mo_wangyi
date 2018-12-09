<template>
  <div style="margin-bottom:50px">
    <header class="topSearch">
      <div class="search"><i class="icon"></i><span>搜索商品，共10000款好物品</span></div>
    </header>
    <div class="cateNavVertWrap">
      <ul id="j-cateNav" class="m-cateNavVert">
        <li class="item" @click="changCurrent(index)" :class="{active:currentIndex===index}" v-for="(cate,index) in category" :key="index"><a class="txt" href="javascript:void(0)">{{cate.name}}</a></li>
      </ul>
    </div>
    <div class="subCateList" v-if="category[currentIndex]">
       <div class="banner">
         <img :src="category[currentIndex].wapBannerUrl" alt="">
       </div>
       <ul class="cateList" v-if="category[currentIndex].type===1">
         <li class="cateItem" v-for="(subCate,index) in category[currentIndex].subCateList">
           <a>
             <div class="cateImgWrapper" >
               <img :src="subCate.wapBannerUrl" alt="" class="cateImg" >
             </div>
             <div class="name">{{subCate.name}}</div>
           </a>
         </li>
       </ul>
       <div class="cateList" v-if="category[currentIndex].type===0" v-for="(subCate,index) in category[currentIndex].subCateList" >
           <div class="hd">{{subCate.name}}</div>
           <ul class="list"  v-for="(item,index) in subCate.categoryList">
             <li class="cateItem">
               <a>
                 <div class="cateImgWrapper">
                 <img :src="item.wapBannerUrl" alt="" class="cateImg">
                </div>
                 <div class="name">{{item.name}}</div>
             </a>
             </li>
           </ul>
       </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "category",
    data(){
      return {
        currentIndex:0
      }
    },
    mounted(){
      //获取首页的数据
      this.$store.dispatch("getCategory");
    },

    watch:{
      category(){
        this.$nextTick(()=>{
          if(!this.leftScroll){
            this.leftScroll=new BScroll(".cateNavVertWrap",{click:true});
          }else{
            this.leftScroll.refresh();
          }
        })
      }
    },

    computed:{
      //...mapState(["category"]),//与下面的等同
      //获取主页面的数据
      category(){
        return this.$store.state.category;
      }
    },
    methods:{
      changCurrent(index){
        this.currentIndex=index;
      }
    }
  }

</script>
<style scoped lang="stylus">
  @import '../../common/mixins.styl'
  .topSearch
    border-1px(#d9d9d9)
    background #fff
    z-index 10000
    position fixed
    top 0
    left 0
    width 100%
    box-sizing border-box
    display flex
    align-items center
    padding 0.16rem 0.3rem
    .search
      background #EDEDED
      height 0.56rem
      line-height 0.56rem
      flex 1
      color #666
      padding-left 0.2rem
      text-align center
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
        font-size 0.28rem


  .cateNavVertWrap
    right-border-1px(#d9d9d9)
    position: fixed;
    top: 0.88rem;
    left: 0;
    bottom: 0;
    z-index: 4;
    width: 1.62rem;
    background-color: #fff;
    overflow: hidden;
    .item
      margin-top 0.4rem
      font-size 0.28rem
      width: 100%;
      height: .66667rem;
      text-align: center;
      border: none;
      a.txt
        color #333
        display block
        position relative
      &.active
        a.txt
          color:#ab2b2b
          &::before
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: .06rem;
            background-color: #ab2b2b;
  .subCateList
    box-sizing border-box
    margin-top 0.88rem
    background #fff
    margin-left 1.62rem
    padding 0.3rem 0.3rem 0.2rem
    min-height 100%
    .banner
      width: 100%;
      height: 1.92rem;
      margin-bottom: .32rem;
      overflow hidden
      border-radius: 4px;
      img
        width 100%
        height 100%
    .cateList
      clearFix()
      margin-bottom: 0.12rem
      .hd
        white-space: nowrap;
        padding-bottom: .08rem;
        margin-bottom: .24rem;
        text-align: left;
        font-size: .27rem;
        font-weight: 700;
        border-bottom: 1px solid #d9d9d9;
      &:last-child
        margin-bottom: 0;
      .cateItem
       text-align center
       width 33.33%
       float left
       .cateImg
         width 80%
         height 100%
       .name
         font-size 0.24rem
         text-align center
         color #333
         height 0.72rem


</style>
