<template>
  <div>
    <header class="topSearch">
      <div class="search"><i class="icon"></i><span>搜索商品，共10000款好物品</span></div>
    </header>
    <div class="cateNavVertWrap">
      <ul id="j-cateNav" class="m-cateNavVert">
        <li class="item"><a class="txt" href="javascript:void(0)">12.12专区</a></li>
        <li class="item active"><a class="txt" href="javascript:void(0)">冬季专区</a></li>
        <li class="item"><a class="txt" href="javascript:void(0)">电器</a></li>
        <li class="item"><a class="txt" href="javascript:void(0)">洗护</a></li>

        <li class="item"><a class="txt" href="javascript:void(0)">饮食</a></li>
        <li class="item"><a class="txt" href="javascript:void(0)">餐厨</a></li>
        <li class="item"><a class="txt" href="javascript:void(0)">婴童</a>
        </li>
        <li class="item"><a class="txt" href="javascript:void(0)">文体</a>
        </li>
        <li class="item" ><a class="txt" href="javascript:void(0)">特色区</a>
        </li>
      </ul>
    </div>
    <div class="subCateList">
       <div class="banner">
         <img src="./images/0012.jpg" alt="">
       </div>
       <ul class="list">
        <li class="cateItem">
          <a>
            <div class="cateImgWrapper" >
              <img src="./images/catpic1.png" alt="" class="cateImg" >
            </div>
            <div class="name">经典服饰</div>
          </a>
        </li>
        <li class="cateItem">
          <a>
            <div class="cateImgWrapper" >
              <img src="./images/catpic2.png" alt="" class="cateImg" >
            </div>
            <div class="name">化妆品</div>
          </a>
        </li>
        <li class="cateItem">
          <a>
            <div class="cateImgWrapper" >
              <img src="./images/catpic3.png" alt="" class="cateImg" >
            </div>
            <div class="name">海外特色</div>
          </a>
        </li>
         <li class="cateItem">
           <a>
             <div class="cateImgWrapper" >
               <img src="./images/catpic1.png" alt="" class="cateImg" >
             </div>
             <div class="name">经典服饰</div>
           </a>
         </li>
         <li class="cateItem">
           <a>
             <div class="cateImgWrapper" >
               <img src="./images/catpic2.png" alt="" class="cateImg" >
             </div>
             <div class="name">化妆品</div>
           </a>
         </li>
         <li class="cateItem">
           <a>
             <div class="cateImgWrapper" >
               <img src="./images/catpic3.png" alt="" class="cateImg" >
             </div>
             <div class="name">海外特色</div>
           </a>
         </li>
         <li class="cateItem">
           <a>
             <div class="cateImgWrapper" >
               <img src="./images/catpic1.png" alt="" class="cateImg" >
             </div>
             <div class="name">经典服饰</div>
           </a>
         </li>
         <li class="cateItem">
           <a>
             <div class="cateImgWrapper" >
               <img src="./images/catpic2.png" alt="" class="cateImg" >
             </div>
             <div class="name">化妆品</div>
           </a>
         </li>
         <li class="cateItem">
           <a>
             <div class="cateImgWrapper" >
               <img src="./images/catpic3.png" alt="" class="cateImg" >
             </div>
             <div class="name">海外特色</div>
           </a>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "category",
    data(){
      return{

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
    .list
      clearFix()
      .cateItem
       width 33.33%
       float left
       .cateImg
         width 100%
         height 100%
       .name
         font-size 0.3rem
         text-align center
         color #333
</style>
