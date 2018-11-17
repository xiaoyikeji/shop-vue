<template>
  <div class="divdiv">
    <div class="title-bar">

    </div>
      <div ref="wrapper" class="wrapper">
        <div class="wrapper_1">
          <div class="main-wrapper is-header-shown is-bottom-shown">
            <div class="wrapper page-for-center">
              <div class="common-box arrow-right-icon box-userinfo">
                <div class="avatar">
                  <img src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png">

                </div>
                登录/注册
              </div>
              <ul class="common-box menu-list-parallel box-order">
                <li class="icon iconfont icon-chufangchujukitchen-niunaipingshuipingpingzib">
                  <a href="">全部订单</a>
                </li>
                <li class="icon iconfont icon-chufangchujukitchen-chushitusimianbaopiant">
                  <a href="">代付款</a>
                </li>
                <li class="icon iconfont icon-chufangchujukitchen-gaowenguopan_p">
                  <a href="">待收货</a>
                </li>
                <li class="icon iconfont icon-chufangchujukitchen-chengzhongqi">
                  <a href="">售后</a>
                </li>

              </ul>
              <ul class="common-box menu-list-vertical">
                <li class="arrow-right-icon">
                  <a href="">地址管理</a>
                </li>
                <li class="arrow-right-icon">
                  <a href="">我的优惠券</a>
                </li>
                <li class="arrow-right-icon">
                  <a href="">优先购买码</a>
                </li>
                <li class="arrow-right-icon">
                  <a href="">提货兑换卡</a>
                </li>
              </ul>
              <ul class="common-box menu-list-vertical">
                <li class="arrow-right-icon">
                  <a href="">常见问题</a>
                </li>
                <li class="arrow-right-icon">
                  <a href="">服务支持</a>
                </li>
              </ul>
              <ul class="common-box menu-list-vertical">
                <li class="arrow-right-icon">
                  <a href="">以旧换新</a>
                </li>
                <li class="arrow-right-icon">
                  <a href="">意外碎屏幕保修服务</a>
                </li>
                <li class="arrow-right-icon">
                  <a href="">延长保修服务</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>


  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {

  data () {
    return {

    }
  },
  created(){
    this.$nextTick(() => {
      this._initScroll()
    })

  },
  methods:{
    _initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true // 点击事件许可  让子元素可以点击
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="stylus" rel="stylesheet/stylus">
  .divdiv
    position fixed
  .wrapper_1
    position relative
    height 30rem
  .title-bar
    background #1d1d1d
    height 1.2rem
    position fixed
    top 0rem
    left 0
    right 0
    z-index 399
  .wrapper
    position fixed
    height 100%
    width 100%
    background #e5e5e5
    background url('http://static.smartisanos.cn/mobile/assets/images/bg-layout@2x.5611bddf255be8472b81b7a740665a5d.png') repeat
    background-size 5rem
    box-sizing border-box
    min-height 100vh
  .page-for-center
    padding .7rem .6rem 0
  .common-box
    position relative
    overflow hidden
    border-radius .4rem
    background #fff
    margin-bottom .9rem;
    box-shadow 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03)
  .is-bottom-shown
     margin-top 50px
    .box-userinfo
      position relative
      height 5.15rem
      line-height 4.15rem
      padding-left 4.35rem
      margin-bottom 0
      border-bottom 0
      border-radius .4rem .4rem 0 0
      font-size .85rem
      color #656565
      box-shadow none
      .avatar
        position: absolute;
        left: .9rem;
        top: 50%;
        width: 2.66rem;
        height: 2.66rem;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        >img
          width 2.66rem
          height 2.66rem
          border-radius 50%
  .box-order
    border-radius 0 0 .4rem .4rem
    >li
     font-size: 1.2rem
     float left
     width 25%
     height 2rem
     text-align center
     >a
       font-size .5rem
       -webkit-transform: scale(.83333);
       transform: scale(.83333);
       -webkit-transform-origin: 50% 50%;
       transform-origin: 50% 50%;
  .menu-list-vertical
    .arrow-right-icon
      height 2rem
      line-height 2rem
      position relative
      font-size .85rem
      box-sizing border-box
      >a
        padding-left 0
        text-indent .93rem
        display block
        text-decoration none
        color #545454
        font-size .7rem
</style>
