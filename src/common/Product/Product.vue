<template>

      <div class="hello " v-if="ProductItems" >
        <div class="hello_1">
          <span @click.stop="back"><</span>
        </div>
        <div class="fix-header">
          <div class="fix-header-tabbox box-line">
            <ul class="box-border">
              <li class="box-line line-vertical active">
                <span>商品</span>
              </li>
              <li class="box-line line-vertical ">
                <span>详情</span>
              </li>
              <li class="box-line line-vertical ">
                <span>参数</span>
              </li>
              <li class="box-line line-vertical ">
                <span>推荐</span>
              </li>
            </ul>
          </div>
        </div>
        <scroll :data='ProductItems.list' class="pr">
          <div>
            <div class="gou_body">
                <div class="ng-tns-c7-3 ">
                  <ul class="item-banner-container section-floor">
                    <li class="item-banner">
                      <img :src="ProductItems.list[0].sku_info[0].ali_image" alt="">
                    </li>
                  </ul>
                  <div class="title-header box-line section-floor">
                    <div class="title-wrapper">
                      <h2>商品信息</h2>
                    </div>
                    <div class="title-content">
                      <h4>{{ProductItems.list[0].shop_info.spu_mobile_title}}</h4>
                      <P>{{ProductItems.list[0].shop_info.highlights}}</P>
                      <div class="title-content">
                        <div class="price">
                          <i>¥</i>
                          <span>{{ProductItems.list[0].price}}</span>
                        </div>
                        <div class="disc-price">
                          <i>¥</i>
                          <del>{{ProductItems.list[0].price}}</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="activities box-line section-floor">
                    <span class="activities-title">优惠信息</span>
                    <div class="activities-list">
                      <div class="activities-item">
                        <span class="tag tag-red">直降</span>
                        <font class="special-num-words">坚果 R1 最高直降 700 元</font>
                      </div>
                      <div class="activities-item">
                        <span class="tag tag-red">直降</span>
                        <font class="special-num-words">坚果 R1 最高直降 700 元</font>
                      </div>
                    </div>
                  </div>
                  <div class="section-floor item-content section-floor">
                    <div class="item-box-column box-line specs">
                      <h6>已选版本</h6>
                      <div class="item-box section-floor">
                        <p>
                          <span class="attr-name">{{ProductItems.list[0].shop_info.spec_v2[0].spec_name}}：</span>
                          <span class="attr-value">{{ProductItems.list[0].shop_info.spec_v2[0].spec_values[0].show_name}} </span>
                        </p>

                        <p>
                          <span class="attr-name">数量：</span>
                          <span class="attr-value">{{ProductItems.list[0].shop_info.spec_v2[0].spec_values[0].spec_id}} </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section-floor detail">
                  <div class="title-header box-line">
                    <div class="title-wrapper ">
                      <h2>商品详情</h2>
                    </div>
                    <!--<img src="https://resource.smartisan.com/resource/164cc4bee45e8cf71026eca829f45ad1.jpg?x-oss-process=image/resize,w_1242/indexcrop,y_1440,i_0/format,webp">-->
                    <!--<img src="https://resource.smartisan.com/resource/164cc4bee45e8cf71026eca829f45ad1.jpg?x-oss-process=image/resize,w_1242/indexcrop,y_1440,i_17/format,webp">-->
                  </div>
                </div>
                <div class="section-floor detail">
                  <div class="title-header box-line">
                    <div class="title-wrapper ">
                      <h2>参数</h2>
                    </div>
                    <!--<img src="https://resource.smartisan.com/resource/164cc4bee45e8cf71026eca829f45ad1.jpg?x-oss-process=image/resize,w_1242/indexcrop,y_1440,i_0/format,webp">-->
                    <!--<img src="https://resource.smartisan.com/resource/164cc4bee45e8cf71026eca829f45ad1.jpg?x-oss-process=image/resize,w_1242/indexcrop,y_1440,i_17/format,webp">-->
                  </div>
                </div>
                <div class="section-floor detail">
                  <div class="title-header box-line">
                    <div class="title-wrapper ">
                      <h2>相关推荐</h2>
                    </div>
                    <!--//  <img src="https://resource.smartisan.com/resource/164cc4bee45e8cf71026eca829f45ad1.jpg?x-oss-process=image/resize,w_1242/indexcrop,y_1440,i_0/format,webp">-->
                    <img :src="ProductItems.list[0].shop_info.tpl_content.base.images.ali_mobile.url[0]">
                  </div>
                </div>
              </div>
          </div>
        </scroll>
        <div class="fix-botton ">
          <div class="fix-botton_div">
            <ul class="fix-botton_div_ul">
              <li class="cart-entry">
                <div class="tag">
                  <span>1</span>
                </div>
                <i class="icon"></i>
              </li>
              <li class="highlight ">
                <span class="box-border" @click.stop="dainji">加入购物车</span>
              </li>
              <li class=" xain-border">
                <span class="box-border">现在购买</span>
              </li>
              <li class="xain-border_pos" v-show="addIsShow"  @click.stop="queding()">
                <span class="box-border">确定</span>
              </li>
            </ul>
          </div>
        </div>
        <gouwuShop v-show="true" :sku_info="dataList.list[0].sku_info" class="gouwuShop" ref="child"></gouwuShop>
      </div>

</template>

<script>
  import gouwuShop from '../../components/gouwuShop/gouwuShop'
  import BScroll from 'better-scroll'
  import {mapMutations} from 'Vuex'
  import {mapState,mapGetters} from 'Vuex'
  import scroll from '../betterScroll/scroll'
  export default {

    data () {
      return {
        dataList:[],
        List:[],
        id:this.$route.query.index,
        xianshi: false,
        isxianshi:true
      }
    },
    watch:{
      getProductItems(){
         console.log(this.getProductItems)
      },
      ProductItems(){
          this.dataList=this.ProductItems
        console.log(this.ProductItems)
      }
    },
    methods:{
      back(){
        this.ADDIS_SHOW(false)
        this.$router.back()
      },
      dainji(){
           this.ADDIS_SHOW(true)
           console.log(this.addIsShow)
           this.$refs.child.emitEvent()
      },
      queding(items){
        this.$refs.child.queding_zi()
         alert("1111")

      },
      ...mapMutations([
        'ADDCART_LIST',
        'ADDIS_SHOW'
      ])

    },
    created(){
      console.log(this.$route.query.index);
      var str =this.id
      var Index = str.substring(0,str.length-2)
      var _this = this
      this.$store.dispatch('producrtItems',Index)
      console.log(this.getProductItems)
    },
    components:{
      gouwuShop:gouwuShop,
      scroll
    },
    computed: {
      ...mapState([
        'addIsShow',
        'cartList',
        'ProductItems'
      ]),
      ...mapGetters([
        'getProductItems'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .pr
    position fixed
    width 100%
    height 100%
  .sroll_div
     width 100%
     height 100%
     position fixed
  .gouwuShop
     position fixed
     bottom 0rem
  h4
    display: block;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  p
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  .ss
    position fixed
    width 100%
    height 100%
  .hello
    background #f8f8f8
    overflow hidden
    padding 2.4rem 0 2.5rem
    -webkit-transform-origin center top
    transform-origin center top
    -webkit-user-select none
    user-select none
  .section-floor
    position relative
    box-shadow 0 5px 13px rgba(0,0,0,.1)
    margin-bottom .75rem
    background #fff
  .title-wrapper
    position relative
    padding-left   .6rem
    padding-bottom  .6rem
  .active
    background #bfbfbf
    background-image linear-gradient(#aeaeae,#b3b3b3)
    box-shadow inset 0 1px 3px rgba(0,0,0,.15)
    color #fff
  .hello_1
    height 1.5rem
    width 100%
    background-color #0f0f0f
    position fixed
    top 0
    z-index  98
    >span
      width 2rem
      height 1.5rem
      display block
      color #f7f7fb
      height 100%
      width .9rem
      line-height 1.5rem
      text-align center
  .fix-header-tabbox
    position fixed
    top 1.5rem
    width 100%
    height 1.8rem
    z-index 95
    background #f2f2f2
    -webkit-user-select none
    user-select none
    box-shadow 0 5px 13px rgba(0,0,0,.12)
    .box-border
      height: 1.3rem
      width 80%
      display: flex
      background: #fff
      margin 0 auto
      margin-top .2rem
      .box-line
        flex:1
        text-align center
        line-height 1.2rem
        border .5px solid #0f0f0f
        >span
          line-height 1.2rem
  .gou_body
    margin-top  .3rem
    .ng-tns-c7-3
      .item-banner-container
        width 15rem
        height 13rem
        overflow hidden
        position relative
        -webkit-transform-style preserve-3d
        transform-style preserve-3d
        .item-banner
          list-style: none;
          font-size: 1.5rem;
          left: -100%;
          -webkit-backface-visibility: hidden;
          text-align: center;
          >img
            height: 11rem;
            margin: auto;
      .title-header
        .title-wrapper
          >h2
            height 1.2rem
            line-height 1.2rem
            font-size .75rem
            font-weight 700
            color: #666
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
  .detail
    .title-header
      >img
        display block
        width 100%
  .fix-botton
    position fixed
    left 0
    right 0
    bottom 0
    width 100%
    height 1.8rem
    z-index 1003
    background: linear-gradient(#f7f7fb, #fafafa)
    -webkit-user-select none
    user-select none
    box-shadow: 0 -11px 27px rgba(0,0,0,.08);
    .fix-botton_div
      .fix-botton_div_ul
        .xain-border_pos
          position absolute
          left 3.1rem
          width 11.5rem
          height 1.5rem
          margin-top .15rem
          background: linear-gradient(#6e98f4,#4b77ee)
          border-radius .3rem
          text-align center
          line-height 1.5rem
          color #fafafa
          font-weight 700
        >li
          float left
          display: inline-block;
          text-align: center;
          position: relative;
          .tag
            position: absolute;
            box-sizing: border-box;
            left: 1.45rem;
            top: -.61667rem;
            height: 2.4rem;
            min-width: 2.4rem;
            line-height: 1.6;
            text-align: center;
            padding: 0 .783rem;
            border-radius: 1.2rem;
            background: #d44e45;
            font-size: 1.5rem;
            font-weight: 700;
            color: #fff;
            text-shadow: 0 -2px 0 rgba(0,0,0,.06);
            -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
            -webkit-transform: scale(.33333);
            transform: scale(.33333);
            box-shadow: 0 3px 8px rgba(212,78,69,.4);
            transition: -webkit-transform .3s ease-out;
            transition: transform .3s ease-out;
            transition: transform .3s ease-out,-webkit-transform .3s ease-out;
            z-index 88
            >span
              font-size 1.5rem
          >i
            display: block;
            width 1rem
            height 1.3rem
            border 1px solid #0f0f0f
            position absolute
            margin-left .8rem
            margin-top .3rem
            z-index 85
            border-radius .2rem

    .highlight
      line-height 1.9rem
      width 30%
      height 1.5rem
      color: #fff;
      border-radius .2rem
      background: linear-gradient(#6e98f4,#4b77ee)
      margin-left 4rem
      margin-top .14rem
      .box-border
        width: 98%;
        height: 1.4rem;
        font-size: .75rem;
        font-weight: 700;
        border-radius: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f2f2f6;
    .xain-border
      line-height 1.9rem
      width 35%
      height 1.5rem
      color: #545454;
      border-radius .2rem
      background: linear-gradient(#f2f2f6, #e5e5e5)
      margin-left .5rem
      margin-top .14rem
      .box-border
        width: 98%;
        height: 1.4rem;
        font-size: .75rem;
        font-weight: 700;
        border-radius: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #545454;
  .title-content
    padding-left: .6rem;
    padding-bottom  .6rem
    -webkit-user-select: text;
    user-select: text;
    >h4
      font-size: .6rem;
      margin-bottom: .4rem;
      color: #333;
    >p
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
      font-size .5rem
      color #616161
    .price
      margin-right .2rem
      font-weight 700
      color #d44d44
      font-size .1rem
      display inline-block
      white-space nowrap
      float left
      >i
        font-style normal
        font-size .6rem
      >span
        font-size .8rem
    .disc-price
      >i
        font-style: normal;
        font-size: .4rem;
        >del
          font-size: .2rem;
          color #616161

  .item-box-column
    position: relative;
    >h6
      font-size: .6rem;
      line-height: 1.2;
      padding-left:.6rem ;
      color: #999
    .item-box
      font-size: .675rem;
      padding-left .6rem
      padding-bottom .6rem
      >p
        line-height: 1.8;
        color: #333;
        display: table;
        .attr-name
          display: table-cell;
          font-size: .65rem;
          word-break: keep-all;
        .attr-value
          display: table-cell;
          font-size: .65rem;
          font-weight: bolder;
        .attr-span
          font-weight bolder
          margin-left  6rem

  .activities
    position: relative;
    padding-left: .6rem ;
    .activities-title
      font-size: .6rem;
      line-height: 1.2;
      padding: 0 0 .95rem;
      color: #999;
      display: block;
    .activities-list
      .activities-item
        padding-bottom: .65rem;
        position: relative;
        .tag
          color: #d44d44;
          background: #fce9e8;
          border-color: #f0bab6;
          border-radius: 13px;
          display: inline-block;
          text-align: center;
          padding: 4px 10px 2px;
          font-size:1ren;
          font-weight: 700;
        .special-num-words
          font-size: .45rem;
          word-break: break-all;
          margin-left: 42px;
          line-height: 1.5;
          width: 84%;

  .bottom-dialog
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    flex-direction: column;
    -webkit-user-select: none;
    user-select: none;
    box-shadow: 0 -11px 27px rgba(0,0,0,0.08);
    .dialog-header
      box-shadow: 0 5px 13px rgba(0,0,0,.12);
      background: #f2f2f2;
      background-image: linear-gradient(#ededed,#f6f6f6);
      flex-shrink: 0;
      height: 5.4rem;
      position: relative;
      display: flex;
      .goods-image
        display: inline-block;
        position: relative;
        top: -1.2rem;
        width: 5.3rem;
        height: 5.3rem;
        background: #fff;
        margin: .6rem;
        padding: .5rem;
        flex-shrink: 0;
        border-radius: .2rem;
        box-sizing: border-box;
        >img
          width: 100%;
          height: 100%;
      .goods-info
        box-sizing: border-box;
        margin: .3rem .6rem .8rem .2rem;
        overflow: hidden;
        position: relative;
        flex-grow: 1;
        >p
          font-size: .6rem;
          line-height: .8rem;
          margin-bottom: .2rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          >span
            color: #5d5d5d;
        .price
          left: 0;
          bottom: 4px;
          font-weight: 700;
          .disc-price
            margin-right: .2rem;
            float left
            position absolute
            color red
            >i
              font-style: normal;
              font-size: .6rem;
            >span
              font-size: .8rem;
          .orig-price
            color: #7f7f7f;
            font-size: .2rem;
            position absolute
            left 3rem
            >i
              font-style: normal;
              font-size: .4rem;
            >span
              font-size: .4rem;
  .select-column
    position relative
    .title
      position relative
      height 2rem
      line-height 2rem
      overflow hidden
      margin-left .6rem
      >h2
        font-size .75rem
        float left
        color #666
    .column
      padding-top .94737rem
      padding-bottom .3rem
      >ul
        margin-top -.5rem
        overflow hidden
        .colum-attr
          padding-top 1px
        >li
          text-align center
          box-sizing border-box
          float left
          margin-bottom .6rem
          border-radius .2rem
          width 30.3%
          border 1px solid #646464
          margin-left .35rem
          >span
            display: block;
            width: .5rem;
            height: .5rem;
            margin: .5rem auto .4rem;
            border: 1px solid #e5e5e5;
            border-radius: 50%;
            box-sizing: border-box;
            overflow: hidden;
            >img
              width: 100%;
              height: 100%;
              display: block;
          >p
            color #666
            font-size .4rem
            line-height 1.6
            font-weight bolder
  .column-count
    padding: .6rem;
    font-size: .75rem;
    .disabled
      pointer-events: none;
      background-position: -3rem .1rem;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      background-repeat: no-repeat;
      vertical-align: middle;
      background-size: 4.5rem;
</style>

