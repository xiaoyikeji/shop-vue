<template>
  <keep-alive>
    <div class="ppp" >
      <scroll class="scroll_div" v-if="dataList.floors"  :data="floors">
      <div v-if="dataList.floors">
        <div class="" v-if="dataList.floors">
          <HeaderNavbar class=" HeaderNavbar_1"></HeaderNavbar>
          <div class="HeaderNavbar_body wrapper is-header-shown is-bottom-shown" ref="wrapper" >
            <div class="content_12" v-if="dataList.floors">
              <div >
                <div class="section-floor layout-banner">
                  <div class="banner-container box-border">
                    <div class="section-floor slider-wrapper">
                      <!--<div  class="item-banner-container ">-->
                      <Slider v-if="dataList" >
                        <div class="item-banner posi" v-for="items in dataList.banner.dataList" >
                          <div href="" class="banner-image">
                            <img :src="items .src" alt="" class="impos">
                          </div>
                        </div>
                      </Slider>
                      <!--</div >-->
                    </div>
                  </div>
                  <div class="short-cut-container">
                    <div class="short-cut">
                      <a>
                        <img src="https://resource.smartisan.com/resource/80c2d2bda675cf269e17f2f812c7c3f1.png" alt="">
                        <p>空气净化</p>
                      </a>
                    </div>
                    <div class="short-cut">
                      <a>
                        <img src="https://resource.smartisan.com/resource/80c2d2bda675cf269e17f2f812c7c3f1.png" alt="">
                        <p>手机</p>
                      </a>
                    </div>
                    <div class="short-cut">
                      <a>
                        <img src="https://resource.smartisan.com/resource/80c2d2bda675cf269e17f2f812c7c3f1.png" alt="">
                        <p>官方配件</p>
                      </a>
                    </div>
                    <div class="short-cut">
                      <a>
                        <img src="https://resource.smartisan.com/resource/80c2d2bda675cf269e17f2f812c7c3f1.png" alt="">
                        <p>品牌周边</p>
                      </a>
                    </div>
                    <div class="short-cut">
                      <a>
                        <img src="https://resource.smartisan.com/resource/80c2d2bda675cf269e17f2f812c7c3f1.png" alt="">
                        <p>好物优选</p>
                      </a>
                    </div>
                  </div>
                </div>
                <!--  热销产品-->
                <div class="section-floor layout-banner clearfix">
                  <div class="title-header box-line show-detail">
                    <div class="title-header_h2">
                      <h2>热销商品</h2>
                    </div>
                    <Scroll >
                      <div class="item-banner with Rexiao" v-for="items in dataList.floors[2].dataList" >
                        <a href="" class="item-img box-border">
                          <img src="https://resource.smartisan.com/resource/2077bb9819a652c36da473f379fe510b.png?x-oss-process=image/resize,w_252/format,webp" alt="">
                        </a>
                        <div class="item-content">
                          <h4>坚果 R1</h4>
                          <P>次世代旗舰手机</P>
                          <p class="price">
                            <i>￥</i>
                            <span>3,9999.00</span>
                            <span class="origin-price">
                                       <i>￥</i>
                                       <del>3,9999.00</del>
                                     </span>
                          </p>
                        </div>
                      </div>
                    </Scroll>
                  </div>
                </div>
                <!-- 图片4-->
                <div class="section-floor floor-image-container layout-image clearfix">
                  <div v-if="dataList.floors" class="selection-l" v-for=" (items,index) in dataList.floors[1].dataList">
                    <a v-show="index<dataList.floors[1].dataList.length-1">
                      <div class="box-border">
                        <img :src="items.src">
                      </div>
                    </a>
                  </div>
                  <div v-if="dataList.floors" class="selection-r"  v-for=" (items,index) in dataList.floors[1].dataList">
                    <a class="selection-r_a" v-show="index==dataList.floors[1].dataList.length-1">
                      <div class="box-border_1">
                        <img src="https://resource.smartisan.com/resource/f27160a2ae08234cefbbb55cf3ee35f6.png?x-oss-process=image/resize,w_901/format,webp ">
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 坚果 R1 及配件-->
                <div class="section-floor layout-banner">
                  <div class="title-header box-line show-detail">
                    <div class="title-header_h2">
                      <h2 class="">坚果 R1 及配件</h2>
                    </div>
                    <div class=" title-header_h3  clearfix">
                      <ul class="vertical  clearfix">
                        <li v-if="dataList.floors" v-for="(items,index) in dataList.floors[2].dataList" @click="ClickShop(items)">
                          <div class="product-box-item">
                            <a class="item-img box-border">
                              <img :src="dataList.floors[2].src[index]" >
                            </a>
                            <div class="floor-container_div">
                              <h4 class="floor-container_div_h4">
                                坚果 R1
                              </h4>
                              <p class="floor-container_div_p">次世代旗舰手机</p>
                              <P class="floor-container_div_p1 ">
                                <i>$</i>
                                <span>3,499.00</span>
                              </P>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--  坚果 R1 “足迹”系列-->
                <div class="section-floor layout-banner clearfix">
                  <div class="title-header box-line show-detail Rexiao">
                    <div class="title-header_h2" v-if="dataList.floors">
                      <h2>{{dataList.floors[3].floorName}}</h2>
                    </div>
                    <Scroll>
                      <div v-if="dataList.floors" class="item-banner with" v-for="items in dataList.floors[3].dataList" >
                        <a href="" class="item-img box-border">
                          <img src="https://resource.smartisan.com/resource/2077bb9819a652c36da473f379fe510b.png?x-oss-process=image/resize,w_252/format,webp" alt="">
                        </a>
                        <div class="item-content">
                          <h4>坚果 R1</h4>
                          <P>次世代旗舰手机</P>
                          <p class="price">
                            <i>￥</i>
                            <span>3,9999.00</span>
                            <span class="origin-price">
                                       <i>￥</i>
                                       <del>3,9999.00</del>
                                     </span>
                          </p>
                        </div>
                      </div>
                    </Scroll>
                  </div>
                </div>
                <!-- 坚果系列手机及配件-->
                <div class="section-floor layout-banner">
                  <div class="title-header box-line show-detail">
                    <div class="title-header_h2">
                      <h2 v-if="dataList.floors" class="">{{dataList.floors[4].floorName}}</h2>
                    </div>
                    <div class=" title-header_h4  clearfix">
                      <ul class="vertical  clearfix">
                        <li v-if="dataList.floors" v-for="(items,index) in dataList.floors[4].dataList" @click="ClickShop(items)">
                          <div class="product-box-item">
                            <a class="item-img box-border">
                              <img :src="dataList.floors[4].src[index]" alt="">
                            </a>
                            <div class="floor-container_div">
                              <h4 class="floor-container_div_h4">
                                坚果 R1
                              </h4>
                              <p class="floor-container_div_p">次世代旗舰手机</p>
                              <P class="floor-container_div_p1 ">
                                <i>$</i>
                                <span>3,499.00</span>
                              </P>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- 官方配件-->
                <div class="section-floor layout-banner">
                  <div class="title-header box-line show-detail">
                    <div class="title-header_h2" v-if="dataList.floors" >
                      <h2 class="">{{dataList.floors[5].floorName}}</h2>
                    </div>
                    <div class=" title-header_h4  clearfix">
                      <ul class="vertical  clearfix">
                        <li v-if="dataList.floors" v-for="(items,index) in dataList.floors[5].dataList" v-show="index<6" @click="ClickShop(items)">
                          <div class="product-box-item">
                            <a class="item-img box-border">
                              <img :src="dataList.floors[5].src[index]" alt="">
                            </a>
                            <div class="floor-container_div">
                              <h4 class="floor-container_div_h4">
                                坚果 R1
                              </h4>
                              <p class="floor-container_div_p">次世代旗舰手机</p>
                              <P class="floor-container_div_p1 ">
                                <i>$</i>
                                <span>3,499.00</span>
                              </P>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--图片-->
                <div class="section-floor layout-banner">
                  <div class="title-header box-line show-detail">
                    <div v-if="dataList.floors" class="title-header_div_img_1" v-for="items in dataList.floors[6].dataList">
                      <img :src="items.src">
                    </div>

                  </div>
                </div>
                <!-- 净化器及配件-->
                <div class="section-floor layout-banner">
                  <div class="title-header box-line show-detail">
                    <div class="title-header_h2" v-if="dataList.floors">
                      <h2 class="">{{dataList.floors[7].floorName}}</h2>
                    </div>
                    <div class=" title-header_h5  clearfix">
                      <div class=" title-header_h5_Img clearfix" >
                        <div class=" title-header_h5_Img_div ">
                          <img src="https://resource.smartisan.com/resource/6ff92d05a3bfab4fad489ca04d3eea5a.png?x-oss-process=image/resize,w_1118/format,webp">
                        </div>
                        <div class=" title-header_h5_Img_p">
                          <p class=" title-header_h5_Img_p1">畅呼吸智能空气净化器</p>
                          <p class=" title-header_h5_Img_p2"> 强力除甲醛，就选畅呼吸 </p>
                          <p class=" title-header_h5_Img_p3">
                            <i>$</i>
                            <span>2,999.00</span>

                          </p>
                          <p class=" title-header_h5_Img_p4">
                            <i>$</i>
                            <span>2,999.00</span>
                          </p>
                        </div>
                      </div>
                      <div class=" title-header_h5_Ul">
                        <ul>
                          <li v-if="dataList.floors" v-for="items in dataList.floors[7].dataList.recommend" @click="ClickShop(items)">
                            <div>
                              <img src="https://resource.smartisan.com/resource/00eee903962f17d75950397843117e6e.jpg?x-oss-process=image/resize,w_199/format,webp">
                              <span>高效复合滤芯</span>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 品牌周边-->
                <div class="section-floor layout-banner">
                  <div class="title-header box-line show-detail">
                    <div class="title-header_h2">
                      <h2 class="">品牌周边</h2>
                    </div>
                    <div class=" title-header_h6  clearfix" v-if="dataList.floors">
                      <ul>
                        <li class="vertical-item box-line" v-for="(items,index) in dataList.floors[8].dataList" v-show="index<5" @click="ClickShop(items)">
                          <div></div>
                          <img :src="dataList.floors[8].src[index]" class="box-item-img">
                          <div class="box-item-content">
                            <h5>萨缪尔·摩尔斯出生</h5>
                            <p>一件内外兼修的舒适T恤</p>
                            <div class="attr-container">
                              <ul class="style-label">
                                <li class="box-border">
                                  <span>男款</span>
                                </li>
                              </ul>
                              <ul class="color-switch">
                                <li>
                                  <div class="outer">
                                    <span></span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p>
                                <i>$</i>
                                <span>999.00</span>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- 图片4-->
                <div class="section-floor floor-image-container layout-image clearfix" v-if="dataList.floors">
                  <div class="selection-l" v-for=" (items,index) in dataList.floors[1].dataList">
                    <a v-show="index<dataList.floors[1].dataList.length-1">
                      <div class="box-border">
                        <img :src="items.src">
                      </div>
                    </a>
                  </div>
                  <div class="selection-r"  v-for=" (items,index) in dataList.floors[1].dataList">
                    <a class="selection-r_a" v-show="index==dataList.floors[1].dataList.length-1">
                      <div class="box-border_1">
                        <img src="https://resource.smartisan.com/resource/f27160a2ae08234cefbbb55cf3ee35f6.png?x-oss-process=image/resize,w_901/format,webp ">
                      </div>
                    </a>
                  </div>
                </div>
                <!--  品牌精选-->
                <div class="section-floor layout-banner" v-if="dataList.floors">
                  <div class="title-header box-line show-detail">
                    <div class="title-header_h2">
                      <h2 class="">{{dataList.floors[9].floorName}}</h2>
                    </div>
                    <div class=" title-header_h3  clearfix">
                      <ul class="vertical  clearfix">
                        <li v-for="(items,index) in dataList.floors[9].dataList" v-show="index<6" @click="ClickShop(items)">
                          <div class="product-box-item">
                            <a class="item-img box-border">
                              <img :src="dataList.floors[9].src[index]" alt="">
                            </a>
                            <div class="floor-container_div">
                              <h4 class="floor-container_div_h4">
                                坚果 R1
                              </h4>
                              <p class="floor-container_div_p">次世代旗舰手机</p>
                              <P class="floor-container_div_p1 ">
                                <i>$</i>
                                <span>3,499.00</span>
                              </P>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="section-floor layout-banner">
                  <div class="floor_bar">
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </scroll>
    </div>

  </keep-alive>
</template>

<script>
  import HeaderNavbar from '../../components/headerNavbar/headerNavbar'
  import BScroll from 'better-scroll'
  import Slider from '../../base/slider/slider'
  import Scroll from '../../base/scroll/scroll'
  import scroll from '../betterScroll/scroll'
export default {

  data () {
    return {
        dataList:null,
        bannerdataList:[],
      floors:[
        {1:"1"},
        {1:"1"}
      ]
    }
  },
  watch:{

  },
  methods:{
    ClickShop:function (index) {
      this.$router.push({name: 'Product',query: { index: index}})
    }
  },
  created(){
    var _this = this
    this.$axios.get('https://resource.smartisan.com/marketing/mobile/index_3376c23102fc331d265f67980c074ec8.json')
    .then(function (response) {
        _this.dataList=response.data
       console.log(_this.dataList);
       if(response.data){
         _this.$nextTick(() => {
           //$refs绑定元素

           if(!_this.scroll){
             _this.scroll = new BScroll(_this.$refs.wrapper, {
               //开启点击事件 默认为false
               click:true
             })
             // console.log(this.scroll)
           }else if(!_this.$refs.wrapper){
             return
           }
           else{
             _this.scroll.refresh()
           }
         })
       }
      _this.dataList.floors[2].src=['https://resource.smartisan.com/resource/06c2253354096f5e9ebf0616f1af2086.png?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/2077bb9819a652c36da473f379fe510b.png?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/d637d704aa2b690327f1d97b63346486.jpg?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/f988f7b388f9c49cfec31d666b38a3ee.jpg?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/7856da4c0a56b3aae999c82514c916d0.jpg?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_567/format,webp'
      ]
      _this.dataList.floors[4].src=[
          'https://resource.smartisan.com/resource/718bcecced0df1cd23bbdb9cc1f70b7d.png?x-oss-process=image/resize,w_567/format,webp',
          'https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_567/format,webp',
         'https://resource.smartisan.com/resource/574abf59d5cfd440d8370eb99118c44a.png?x-oss-process=image/resize,w_567/format,webp',
         'https://resource.smartisan.com/resource/e08bc169f8d4fe5e042490f7227c7c1a.jpg?x-oss-process=image/resize,w_567/format,webp',
         'https://resource.smartisan.com/resource/5a920cb48304bcd377cc61960af18b67.jpg?x-oss-process=image/resize,w_567/format,webp',
         'https://resource.smartisan.com/resource/b68b71f1f97490fa8694a97057abd813.png?x-oss-process=image/resize,w_567/format,webp'
      ]
      _this.dataList.floors[5].src=[
          'https://resource.smartisan.com/resource/bbc2c52428d1b7748739dba830719cd1.jpg?x-oss-process=image/resize,w_567/format,webp',
          'https://resource.smartisan.com/resource/83fe55569c2fcd49bac9a0ef0985be0a.jpg?x-oss-process=image/resize,w_567/format,webp',
          'https://resource.smartisan.com/resource/0540778097a009364f2dcbb8c5286451.jpg?x-oss-process=image/resize,w_567/format,webp',
           'https://resource.smartisan.com/resource/b9e61c6d93464454fa2e382632e34cee.jpg?x-oss-process=image/resize,w_567/format,webp',
          'https://resource.smartisan.com/resource/d4480234a2f24b0ff5acd98288fd902d.jpg?x-oss-process=image/resize,w_567/format,webp',
          'https://resource.smartisan.com/resource/30ac0a1ab02999667f1362c501447e58.jpg?x-oss-process=image/resize,w_567/format,webp'
      ]
      _this.dataList.floors[9].src=[
          'https://resource.smartisan.com/resource/139f021cbcc0df8f77f2ebc9f342c7d6.jpg?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/b3000a0d15cdf6e1566d8435148f6428.jpg?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/406eddef8808fa5a9be9594d07ef8643.jpg?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/d244cb5e5229a2fec931c21b6182f7a9.jpg?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/853a52a17cce492737ac53707600a205.jpg?x-oss-process=image/resize,w_567/format,webp',
        'https://resource.smartisan.com/resource/7ac3af5a92ad791c2b38bfe1e38ee334.jpg?x-oss-process=image/resize,w_567/format,webp'
      ]
      _this.dataList.floors[8].src=[
          'https://resource.smartisan.com/resource/7eba994285e3eb7254722eae11adb388.jpg?x-oss-process=image/resize,w_447/format,webp',
        'https://resource.smartisan.com/resource/00e1fedc106d85a04a7e7707bb29c008.jpg?x-oss-process=image/resize,w_447/format,webp',
        'https://resource.smartisan.com/resource/61edf7de73ba6d41941f325fe09c8061.png?x-oss-process=image/resize,w_447/format,webp',
        'https://resource.smartisan.com/resource/a26929ee3b5928d9d91efa03006a07e0.jpg?x-oss-process=image/resize,w_447/format,webp',
        'https://resource.smartisan.com/resource/ec1b30b9e3890471b9d9188e497e3873.jpg?x-oss-process=image/resize,w_447/format,webp'
      ]
    }).catch(function (error) {
      console.log(error);
    });
  },

  mounted() {

  },
  components:{
    HeaderNavbar:HeaderNavbar,
    Slider:Slider,
    Scroll:Scroll,
    scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import url("//unpkg.com/element-ui/lib/theme-chalk/index.css");
  .ppp
    width 100%
    height 100%
    position fixed
  .scroll_div
    width 100%
    height 100%
    position fixed
  h4
    display: block;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  p
    margin-top: .3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .5rem;
    line-height: 1.2;
    color: #7f7f7f;
    min-height: .6rem
  .floor_bar
    height 3rem
  .impos
    width 13.7rem
  .with
     width 500px
     float left
  .posi
    float left
  p
    margin-top: .3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .5rem;
    line-height: 1.2;
    color: #7f7f7f;
    min-height: .6rem;
  .qq_qq
    width 100%
    height .8rem
  .clearfix:after
    display table
    content " "
    clear both
  .title-header_h2
     >h2
       margin-top .5rem
       height 1.2rem
       line-height 1.5rem
       margin-left .9rem
       font-weight bolder
       color #6a6462
  .HeaderNavbar_body
    position fixed
    width 100%
    overflow hidden
    height 100%
    .content_12
       position fixed
       transform: translate(0px, 50px) scale(1) translateZ(0px);
       background-color #f2f2f6
       width 100%
       z-index 1
  .headerNavbar_1
    width 100%
    height 0.9rem
    position fixed
    bottom 0
    z-index 99
  .section-floor
    position: relative;
    box-shadow: 0 5px 13px rgba(0,0,0,.1);
    margin-bottom: .25rem;

    background: #fff;
    .layout-banner
      overflow hidden
      /*热销产品*/
  .floor-container
    padding-left: 0
    padding-right: 0
    padding-bottom: 0
    width 100%
    .item-banner-container
      width 30rem
      display: flex;
      align-content: center;
      justify-content: space-between;
      border 3rem solid #f3eeef
      >li
        width: 36%;
        flex-shrink: 0;
        padding-right: .4rem;
        float left
      .item-banner_1
       width: 36%;
       flex-shrink: 0;
       padding-right: .4rem;
       .item-img
          display: block;
          position: relative;
          padding-top: 100%;
          border-radius: .2rem;
          >img
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: .2rem;
       .item-content
           margin: 0 auto;
           padding: .4rem .6rem .9rem;
           text-align center
           >h4
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0;
            font-size: .6rem;
            color: #333;
           >p
            margin-top: .3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .3rem;
            line-height: 1.2;
            color: #7f7f7f;
            min-height: .6rem;
           .price
              color: #d44d44;
              display: inline-block;
              white-space: nowrap;
              font-weight bolder
              margin-bottom .6rem
              >i
                display: inline-block;
                -webkit-transform: scale(0.83333);
                transform: scale(0.83333);
                -webkit-transform-origin: bottom right;
                transform-origin: bottom right;
              >span
                font-weight bolder
                font-size: .5rem;
              .origin-price
                display: inline-block;
                -webkit-transform: scale(.83333);
                transform: scale(.83333);
                -webkit-transform-origin: bottom left;
                transform-origin: bottom left;
                >i
                  color: #7f7f7f;
                  font-size: .5rem;
                >del
                  color: #7f7f7f;
                  font-size: .4rem;
  .Rexiao
     bottom .5rem
     .item-img
          margin 0 auto
          width 100%
          >img
            margin-left 2rem
     .item-content
         text-align center
         padding .3rem
         .origin-price
             padding .3rem
             flood-opacity .4
             color #ff818f
//                热销产品css
  .banner-container
    height 20%
    width calc(100% - 1rem)
    margin .7rem .6rem .9rem
    border-radius .4rem;
    margin-top 1.6rem
    .item-banner-container
      width 100%
      height 100%
      background #fff
      overflow hidden
      position relative
      white-space nowrap
      padding 0
      margin 0
      font-size 0
      -webkit-transform-style preserve-3d
      transform-style preserve-3d
      border-radius .4rem
      z-index 2
      margin-top 1.6rem
      .item-banner
        width 12rem
        height 100%
        display inline-block
        list-style none
        position relative
        font-size 14px
        left -100%
        -webkit-backface-visibility hidden
        -webkit-transform-style preserve-3d
        transform-style preserve-3d
        .banner-image
          height 3rem
          width 14rem
          >img
            height 3rem
            width 14rem

  .short-cut-container
    display flex
    justify-content center
    flex-wrap nowrap
    text-align center
    margin-top -.6rem
    padding-bottom .9rem
    .short-cut
      width 15%
      >a
        text-align: center;
        display: inline-block;
        overflow: hidden;
        word-break: break-word;
        line-height: .5rem;
        font-size: .3rem;
        color: #666;
        text-overflow: ellipsis;
        text-decoration: none;
        >img
          height: 1rem;
          width: 1.2rem;
          margin: .15rem;
        >p
          margin-top: .05rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: .4rem;

  .title-header_div_img_1
      >img
       width 15rem
       margin-top .2rem


  .floor-image-container
    height 11rem
    padding-top .3rem

  .selection-l
    width 45%
    padding-right: .5rem;
    margin-left .6rem
    margin-top .5rem
    >a
      display: block;
      line-height: 0;
      margin-bottom: .4rem;
      .box-border
         >img
           width 6rem
           height 3rem

  .selection-r
    float: right;
    padding-left: .2rem;
    margin-right  .6rem
    position relative
    top -10.5rem
    .selection-r_a
       .box-border_1
            >img
             padding .2rem
             width 5.5rem
             height 10rem


  /*坚果 R1 及配件*/
  .title-header_h3
     width 100%
     height 33rem
     .vertical
        width 15rem
        display flex
        align-content center
        justify-content space-between
        flex-wrap wrap
        position relative
        top -7rem
        >li
          width calc(50% - .2rem)
          flex-shrink 0
          position relative
          margin-right .1rem
          margin-top .3rem
          .product-box-item
             .item-img
                >img
                  width 8rem
                  height 7rem
             .floor-container_div
                 text-align center
                 .floor-container_div_h4
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    margin 0
                    font-size .6rem
                    color #333
                 .floor-container_div_p
                    width: 120%;
                    -webkit-transform: scale(.83333);
                    transform: scale(.83333);
                    -webkit-transform-origin: 0 50%;
                    transform-origin: 0 50%;
                 .floor-container_div_p1
                    position: relative;
                    top: -.15rem;
                    color: #d44d44;
                    display: inline-block;
                    white-space: nowrap;
                    font-weight: 700;
                    >i
                      display: inline-block;
                      -webkit-transform: scale(.83333);
                      transform: scale(.83333);
                      -webkit-transform-origin: bottom right;
                      transform-origin: bottom right;


  .title-header_h4
    width 100%
    .vertical
      width 15rem
      display flex
      align-content center
      justify-content space-between
      flex-wrap wrap
      position relative
      >li
        width calc(50% - .2rem)
        flex-shrink 0
        position relative
        margin-right .1rem
        margin-top .3rem
        .product-box-item
          .item-img
            >img
              width 8rem
              height 7rem
          .floor-container_div
            text-align center
            .floor-container_div_h4
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              margin 0
              font-size .6rem
              color #333
            .floor-container_div_p
              width: 120%;
              -webkit-transform: scale(.83333);
              transform: scale(.83333);
              -webkit-transform-origin: 0 50%;
              transform-origin: 0 50%;
            .floor-container_div_p1
              position: relative;
              top: -.15rem;
              color: #d44d44;
              display: inline-block;
              white-space: nowrap;
              font-weight: 700;
              >i
                display: inline-block;
                -webkit-transform: scale(.83333);
                transform: scale(.83333);
                -webkit-transform-origin: bottom right;
                transform-origin: bottom right;


  .title-header_h5
      position relative
      .title-header_h5_Img
         width 100%
         .title-header_h5_Img_div
             width 60%
             margin 0 auto
             >img
                width 100%
                height 9rem
          .title-header_h5_Img_p
            text-align center
            margin: 0 auto;
            padding-top: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 80%;
            word-break: break-word;
            line-height: 1;
            font-size: .6rem;
            color: #333;
            white-space: nowrap;
            .title-header_h5_Img_p3
              float left
              margin-left 2.5rem
      .title-header_h5_Ul
           >ul
             >li
               width 50%
               float left
               text-align center
               >div
                  >img
                     width 2rem
                     height 2rem
                     margin: 0 .6rem;
                  >span
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 50%;
                    word-break: break-word;
                    line-height: 1.2rem;
                    font-size: .5rem;
                    font-weight: 700;
                    color: #333;
                    white-space: nowrap;



  .title-header_h6
      >ul
        >li
          display: flex;
          padding: .6rem;
          position: relative;
          align-items: center;
          .box-item-img
            width: 6.05rem;
            height: 6.05rem;
            box-sizing: border-box;
            flex-shrink: 0;
            margin-right: 1.55rem;
          .box-item-content
            position: relative;
            overflow: hidden;
            .attr-container
               .style-label
                  display: flex;
                  flex-flow: row wrap;
                  margin: -.05rem -.1rem;
                  .box-border
                    background: #e5efff;
                    border-radius: .1rem;
                    padding: 2px .3rem;
                    margin: .05rem .1rem;
                    color: #3965cc;
                    font-size: .4rem;
                    font-weight: 700;
                    line-height: 1;
                    >span
                        position: relative;
                        display: block;
                        line-height: 1;
                        white-space: nowrap;
                        height: 100%;
                        -webkit-transform: scale(.66667);
                        transform: scale(.66667);
                  .color-switch
                    font-size: 0;
                    margin-top: .4rem;
                    >li
                      display: inline-block;
                      margin-right: .3rem;
                      .outer
                        width: 10px;
                        height: 10px;
                        border: 1px solid #ccc;
                        border-radius: 50%;
                        display: inline-block;
                        position: relative;
                        box-sizing: border-box;
                        vertical-align: middle;
                        text-align: center;
                        >span
                          width: 10px;
                          height: 10px;
                          border: 1px solid #cc002b;
                          border-radius: 50%;
                          display: inline-block;
                          position: relative;
                          box-sizing: border-box;
                          vertical-align: middle;
                          text-align: center;
  .el-carousel__item h3
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  .title-header_2_li_div
     width 13rem
     height 3rem
     margin 0 auto
     padding .06rem
     >img
       width 13rem
       height 3rem
       margin 0 auto

  .el-carousel__item:nth-child(2n)
    background-color: #99a9bf;
  .el-carousel__item:nth-child(2n+1)
    background-color: #d3dce6;
  </style>
