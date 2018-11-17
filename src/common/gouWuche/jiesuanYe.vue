<template>
  <div class="divdiv">
    <div class="title-bar">

    </div>
    <div class="zhifu" v-show="zhi" @click="zhifu()">
             <div class="dd">
                <img src="./11.jpg">
             </div>
             <div class="opop">
                 <div class="opop_z">正在支付
                    <p style="color: #ee5870">{{num}}秒</p>
                 </div>
                 <div class="opop_z1">正在支付前不要关闭窗口</div>
                 <div class="zzz">
                   <div >重新选择支付</div>
                   <div class="active">已完成支付</div>
                 </div>
             </div>
    </div>
    <div ref="wrapper" class="wrapper">
      <div class="wrapper_1">
        <div class="main-wrapper is-header-shown is-bottom-shown">
          <div class="wrapper page-for-center">
            <div class="common-box arrow-right-icon box-userinfo">
              <div class="avatar">
                <div>
                    <p>收货信息</p>

                 </div>
              </div>
            </div>
            <ul class="common-box menu-list-parallel box-order">
              <li class="arrow-right-icon">
                <a href="">zz<span>213781098247</span></a>
              </li>
              <li class="arrow-right-icon">
                <a href=""> 河北省 裕华区 恒大绿洲6号4单元904 </a>
              </li>
            </ul>
            <ul class="common-box menu-list-vertical">
              <li class="arrow-right-icon">
                <a href="javascript:;">支付方式</a>
              </li>
              <li class="arrow-right-icon ff">
                <a href="javascript:;">微信支付</a>
              </li>
              <li class="arrow-right-icon ff">
                <a href="javascript:;">支付宝</a>
              </li>
              <li class="arrow-right-icon ff">
                <a href="javascript:;">京东支付</a>
              </li>
              <li class="arrow-right-icon ff">
                <a href="javascript:;">中国银联</a>
              </li>
              <li class="arrow-right-icon ff">
                <a href="javascript:;">花呗</a>
              </li>
            </ul>
            <ul class="common-box menu-list-vertical">
              <li class="arrow-right-icon">
                <a href="javascript:;">商品信息</a>
              </li>
              <li class="arrow-right-icon ttm" v-for="ites in jiesuanItems">
                <div href="" style="float: left" class="divtt">
                   <img :src="ites.ali_image">
                </div>
                <div class="left_nei">
                   <p>{{ites.sub_title}} </p>
                   <p>
                     <span>{{ites.price}}$</span>
                     <span>{{ites.count}}</span>
                     <span>{{ites.price*ites.count}}</span>
                   </p>
                </div>
              </li>
            </ul>
            <ul class="common-box menu-list-vertical">
              <li class="arrow-right-icon">
                <a href="javascript:;">商品金额</a>
              </li>
              <li class="arrow-right-icon">
                <a href="javascript:;">商品总计----------------222222</a>
              </li>
              <li class="arrow-right-icon">
                <a href="javascript:;">优--------------no</a>
              </li>
              <li class="arrow-right-icon">
                <a href="javascript:;">运费----------------0</a>
              </li>
              <li class="arrow-right-icon">
                <a href="javascript:;">应付金额--------------999</a>
              </li>
            </ul>
            <ul class="common-box menu-list-vertical">
              <li class="arrow-right-icon">
                <a href="javascript:;">商品金额---{{999}}</a>
              </li>
            </ul>
            <ul class="common-box menu-list-vertical">
              <li class="arrow-right-icon">
                <button class="payment-btn" @click="zhifu()">现在支付</button>
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
  import scroll from '../betterScroll/scroll'
  import {mapGetters} from 'Vuex'
  export default {

    data () {
      return {
            zhi:false,
            num:0,
           itemer:null
      }
    },
    watch:{
      num(){
          this.num
      }
    },
    created(){
      this.$nextTick(() => {
        this._initScroll()
      })

    },
    computed: {
      ...mapGetters([
        'jiesuanItems'
      ])

    },
    methods:{
      _initScroll () {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true // 点击事件许可  让子元素可以点击
        })
      },
      zhifu(){
          clearInterval(this.itemer)
          this.zhi=!this.zhi
          this.num=60
          this.shijian()

      },
      shijian(){
            clearInterval(this.itemer)
            var _this=this
            this.num =60
        this.itemer=setInterval(function(){
              _this.num--
              if(_this.num==0){
                _this.num=0
                _this.zhifu()
                clearInterval(_this.itemer)
                return
              }
            }, 1000);

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="stylus" rel="stylesheet/stylus">
  .active
    color #f7f7f7
    font-size .5rem
    font-weight 600
    background-color #00b3ee
  .zzz
    display flex
    >div
      width 50%
      text-align center
      line-height 1rem

  .opop_z
    width 100%
    height 2rem
    text-align center
    line-height 1rem
    background-color #d5d5d5
  .opop_z1
    text-align center
    line-height 1rem
    width 100%
    height 2rem
  .dd
    width 5rem
    height 5rem
    margin 0 auto
    >img
      margin-top 12rem
      width 5rem
      height 5rem
      border-radius .5rem
  .opop
     margin 0 auto
     width 12rem
     height 5rem
     background-color #f7f7f7
     border-radius .5rem
  .zhifu
     width 100%
     height 100%
     position fixed
     background-color rgba(15, 15, 15, 0.56)
     z-index 999

  .divdiv
    position fixed
  .wrapper_1
    position relative
    height 65rem

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
    height 2.15rem
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
      font-size: 1rem
      float left
      width 100%
      height 2rem
      text-align center
      >a
        font-size .4rem
        -webkit-transform: scale(.83333);
        transform: scale(.83333);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
  .menu-list-vertical
    .arrow-right-icon
      line-height 2rem
      position relative
      font-size .55rem
      box-sizing border-box
      >a
        padding-left 0
        text-indent .93rem
        display block
        text-decoration none
        color #545454
        font-size .6rem
  .left_nei
     width 9rem
     line-height 1rem
     float right
     overflow hidden
     margin-top -3rem
     >p
       font-size .5rem
  .ttm
    width 100%
    height 4rem
    >div
       width 70%
       height 3rem
  .order-btns
    position fixed
    bottom 0
    width 100%
    height 2.62rem
    box-sizing border-box
    padding 7px 6px 7px 18px
    background #fff
    border-top 1px solid rgba(0,0,0,.1)
    box-shadow 0 0.2rem 1rem rgba(0,0,0,.1)
    z-index 20
  .payment-btn
    float: right;
    width: 8.33rem;
    height: 2rem;
    font-size: .75rem;
    font-weight: 700;
    border: 0;
    color: #fff;

  .divtt
    width 1rem
    height 4rem
    border-radius .5rem
    >img
       width 3rem
       height 3rem
</style>
