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
    <div class="showLoginInfo" v-show="isShowLoginInfo">
      <div class="logoWrap">
        <img src="./images/yanxuanpic.png" alt="">
      </div>
      <p class="loginuserInfo" v-if="!user.phone">
        用户名：{{user.name}}</p>
      <p>
      <p class="loginuserInfo"  v-if="!user.name">
        <span>手机号：{{user.phone}}</span>
      </p>

      <section class="logoutbtn" v-if="user._id">
        <input type="button"   @click="logOut" value="退出登录">
        <!--<mt-button @click="logOut" type="danger" style="width:100%">退出登录</mt-button>-->
      </section>
    </div>
    <div class="login-type" v-show="isShowloginType&&!isShowLoginInfo">
      <div class="logoWrap">
        <img src="./images/yanxuanpic.png" alt="">
      </div>
      <div class="btnWrap">
        <div class="loginbyphone" @click="isSmsLogin=true;isShowloginType=false">手机号码登录</div>
        <div class="loginbyAcount" @click="isSmsLogin=false;isShowloginType=false">账号密码登录</div>
      </div>
    </div>
    <section class="loginContainer" v-show="!isShowloginType&&!isShowLoginInfo">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">网易严选</h2>
        </div>
        <div class="login_content">
          <form>
            <div :class="{on:isSmsLogin}">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                <button @click.prevent="getCode" :disabled="!isRight||this.endingTime>0" :class="`get_verification ${isRight&&!this.endingTime>0?'right_phone_number':''}`">
                  {{endingTime===0?'获取验证码':`已发送(${this.endingTime})`}}
                </button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on:!isSmsLogin}">
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11"  placeholder="手机/邮箱/用户名"  v-model="name">
                </section>
                <section class="login_verification">
                  <input :type="isPwdShow?'text':'password'" maxlength="8" placeholder="密码"  v-model="pwd">
                  <div :class="`switch_button ${isPwdShow?'on':'off'}`" @click="isPwdShow=!isPwdShow">
                    <div class="switch_circle" :style="isPwdShow?'transform:translateX(27px)':''"></div>
                    <span class="switch_text">{{isPwdShow?'abc':'...'}}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码"  v-model="captcha">
                  <img ref="yzmImg" class="get_verification" @click="changImg" src="http://localhost:5000/captcha" alt="captcha">
                </section>
              </section>
            </div>
            <button class="login_submit" @click.prevent="login">登录</button>
          </form>
          <a href="javascript:;" class="about_us" @click="isShowloginType=true">其他方式登录</a>
        </div>
        <a href="" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqSendCode,reqLoginPwd,reqLoginSms} from "../../api";
  import {MessageBox,Toast} from 'mint-ui';
  export default {
    name: "personal",
    data(){
      return {
        isShowloginType:true, //这个是默认显示选择登录类型
        isSmsLogin:true, //true表示是短信的方式登录，false表示是密码的方式登录
        phone:"",   //手机号
        code:"",    //短信验证码
        name:"",    //用户名
        pwd:"",     //密码
        captcha:"", //图形验证码
        endingTime:0, //倒计时
        isPwdShow:false, //初始的时候是否用密码的格式显示
      }
    },
    computed:{
      isShowLoginInfo(){
        if(Boolean(this.user.name)||Boolean(this.user.phone))
          return true
        else
          return false;
      },
      ...mapState(["user"]),
      isRight(){
        const regexp=/^1\d{10}$/;
        return regexp.test(this.phone);
      }
    },
    methods:{
      logOut(){
        this.$store.dispatch("getlogOut");
        this.isShowloginType=true;
        // MessageBox.confirm('Are you sure?').then(
        //   ()=> {this.$store.dispatch("getlogOut");},
        //   ()=> {console.log("bbb")}//这个表示取消
        // );
      },
      //请求发送验证码
      async getCode(){
        //倒计时
        this.endingTime=30;
        const IntervalId=setInterval(()=>{
          this.endingTime--
          if(this.endingTime<=0){
            this.endingTime=0;
            clearInterval(IntervalId);
          }
        },1000)
        //发送请求
        const result= await reqSendCode(this.phone);
        if(result.code===0){
          // 显示提示框
          MessageBox('短信发送成功');
        }else{
          this.endingTime=0;
          MessageBox('短信发送失败');
        }
      },

      async login(){
        const {phone,code,name,pwd,captcha}=this;
        //这个表示是短信登录
        let result
        if(this.isSmsLogin){
          if(!phone){
            return MessageBox.alert('请输入手机号码');
          }
          else if (!/^\d{6}$/.test(code)) {
            return MessageBox.alert('验证码必须是6位数字')
          }
          result=await reqLoginSms(phone,code);
          if(result.code!=0){
            this.endingTime=0;
          }
        }else{//这个是密码的登录方式
          if(!name){
            return  MessageBox.alert('请输入用户名');
          }
          if(!pwd){
            return  MessageBox.alert('请输入密码');
          }
          if(captcha.length!=4){
            return  MessageBox.alert('请输入4位数验证码');
          }
          result=await reqLoginPwd({name,pwd,captcha});
          if(result.code!=0){
            this.changImg();
          }
        }
        console.log(result);
        if(result.code===0){
          this.$store.dispatch("getUserInfo",result.data);

        }else{
          return MessageBox.alert('登录失败！请检查登录信息是否正确！');
        }
      },
      //图形验证码
      changImg(){
        this.$refs.yzmImg.src='http://localhost:5000/captcha?'+Date.now()
      }
    },

  }
</script>

<style scoped lang="stylus">
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
    background:#F2F5F4
    height: 100%;
    box-sizing border-box
    padding-top 1rem
    .logoWrap
      text-align: center;
      padding-top: 1.6rem;
      padding-bottom: 1.6rem;
      img
        width: 2rem;
  .btnWrap
    padding 0 0.5rem;
    text-align: center
    font-size 0.28rem
    .loginbyphone
      background #b4282d
      height 1rem
      line-height:1rem
      color:#fff;
    .loginbyAcount
      box-sizing border-box
      margin-top 0.25rem
      border 1px solid #b4282d
      height 1rem
      line-height:1rem
      color #b4282d
  .loginContainer
    padding-top 1rem
    box-sizing border-box
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #b4282d
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #b4282d
              font-weight 700
              border-bottom 2px solid #b4282d
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone_number
                  color:#000
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #b4282d
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #b4282d
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 10px;
          border-radius: 4px;
          box-sizing border-box
          border:1px solid #b4282d;
          color: #b4282d;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
  .showLoginInfo
    padding 1rem 0.5rem 0;
    box-sizing border-box
    height 100%
    background #F2F5F4
    font-size 16px
    .loginuserInfo
      text-align center
      margin-bottom 0.5rem;
    .logoWrap
      text-align: center;
      padding-top: 1.6rem;
      padding-bottom: 1.6rem;
      img
        width: 2rem;
    .logoutbtn
        input
          width:100%
          background #b4282d
          height 1rem
          color #fff
          line-height:1rem

</style>
