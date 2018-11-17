<template>
  <keep-alive>
  <div class="" v-if="dataList.length!==0">
    <div class="HeaderNavbar_body wrapper is-header-shown is-bottom-shown" ref="wrapper"  :dataList="dataList">
      <div class="content_12">
        <div >
          <div class="section-floor layout-banner">
            <div class="title-header box-line section-floor">
              <div class="title-wrapper">
                <h2>{{dataList[0].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[0].image.src">
                  </div>
                </a>
              </div>
            </div>
            <div class="short-cut-container section-floor" v-for="(items,index) in dataList[0].name_1" @click="sku(dataList[0].layout.dataList[index])">
              <div class="skus-layout layout-oneone box-line section-floor">
                <a>
                  <img src="https://resource.smartisan.com/resource/06c2253354096f5e9ebf0616f1af2086.png?x-oss-process=image/resize,w_207/format,webp" alt="">
                  <span>{{items}}</span>
                  <div class="promotion-tag green"  :class="{red:index==1 }">
                    <span v-show="index<=1"> 加购 </span>
                  </div>
                  <span class="promotion-tag_R green"> > </span>
                </a>
              </div>
            </div>
          </div>
          <!--  热销产品-->
          <div class="title-header layout-banner clearfix section-floor ">
            <div class=" title-header box-line section-floor">
              <div class="title-wrapper section-floor">
                <h2>{{dataList[1].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[1].image.src">
                  </div>
                </a>
              </div>
              <div class="carousel-image-container_Left">
                <div class="category-onetwo-container">
                  <div class="category-onetwo box-line line-vertical" v-for="(items,index) in dataList[1].name_1" @click="sku(dataList[1].layout.dataList[index])">
                      <div class="skus-layout layout-onetwo">
                        <a>
                          <img src="https://resource.smartisan.com/resource/fed059c1692cf906f60fdb76818e428d.jpg?x-oss-process=image/resize,w_207/format,webp" alt="">
                          <span class="title">{{items}}</span>
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!--  壳套膜-->
          <div class="title-header layout-banner clearfix section-floor ">
            <div class=" title-header box-line section-floor">
              <div class="title-wrapper section-floor">
                <h2>{{dataList[2].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[2].image.src">
                  </div>
                </a>
              </div>
              <div class="carousel-image-container_Left">
                <div class="category-onetwo-container">
                  <div class="category-onetwo box-line line-vertical" v-for="(items,index) in dataList[2].name_1" @click="sku(dataList[2].layout.dataList[index])">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <img src="https://resource.smartisan.com/resource/3f2267a2d47b2a64c7956a049a4264c8.jpg?x-oss-process=image/resize,w_207/format,webp" alt="">
                        <span class="title">{{items}}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!--  充电线材-->
          <div class="title-header layout-banner clearfix section-floor ">
            <div class=" title-header box-line section-floor">
              <div class="title-wrapper section-floor">
                <h2>{{dataList[3].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[3].image.src">
                  </div>
                </a>
              </div>
              <div class="carousel-image-container_Left" >
                <div class="category-onetwo-container_three" v-for="(items,index) in dataList[3].name_1" @click="sku(dataList[3].layout.dataList[index])">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">{{items}}</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
          <!--  耳机-->
          <div class="title-header layout-banner clearfix section-floor ">
            <div class=" title-header box-line section-floor">
              <div class="title-wrapper section-floor">
                <h2>{{dataList[4].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[4].image.src">
                  </div>
                </a>
              </div>
              <div class="carousel-image-container_Left">
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical" v-for="(items,index) in dataList[4].name_1" @click="sku(dataList[4].layout.dataList[index])">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/72e4c31e4e623f5c37c6489f6d91efc6.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">{{items}}</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <!-- 鞋服 -->
          <div class="title-header layout-banner clearfix section-floor ">
            <div class=" title-header box-line section-floor">
              <div class="title-wrapper section-floor">
                <h2>{{dataList[5].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[5].image.src">
                  </div>
                </a>
              </div>
              <div class="carousel-image-container_Left">
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <!-- 文具 -->
          <div class="title-header layout-banner clearfix section-floor ">
            <div class=" title-header box-line section-floor">
              <div class="title-wrapper section-floor">
                <h2>{{dataList[6].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[6].image.src">
                  </div>
                </a>
              </div>
              <div class="carousel-image-container_Left">
                <div class="category-onetwo-container">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <img src="https://resource.smartisan.com/resource/fed059c1692cf906f60fdb76818e428d.jpg?x-oss-process=image/resize,w_207/format,webp" alt="">
                        <span class="title">畅呼吸防护口罩</span>
                      </a>
                    </div>
                  </div>
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <img src="https://resource.smartisan.com/resource/fed059c1692cf906f60fdb76818e428d.jpg?x-oss-process=image/resize,w_207/format,webp" alt="">
                        <span class="title">畅呼吸防护口罩</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <!-- 精选产品-->
          <div class="title-header layout-banner clearfix section-floor ">
            <div class=" title-header box-line section-floor">
              <div class="title-wrapper section-floor">
                <h2>{{dataList[7].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[7].image.src">
                  </div>
                </a>
              </div>
              <div class="carousel-image-container_Left">
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="category-onetwo-container_three">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <div class="category-onethree box-border">
                          <img src="https://resource.smartisan.com/resource/8635cb91f2cdbbc5576e069c52b99412.jpg?x-oss-process=image/resize,w_348/format,webp">
                        </div>
                        <span class="title">坚果 Type-C To Type-C 数据线</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <!-- 图书 -->
          <div class="title-header layout-banner clearfix section-floor ">
            <div class=" title-header box-line section-floor">
              <div class="title-wrapper section-floor">
                <h2>{{dataList[8].name}}</h2>
              </div>
              <div class="section-floor">
                <a>
                  <div class="image-shadow"></div>
                  <div class="box-border box-border_img">
                    <img  :src="dataList[8].image.src">
                  </div>
                </a>
              </div>
              <div class="carousel-image-container_Left">
                <div class="category-onetwo-container">
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <img src="https://resource.smartisan.com/resource/fed059c1692cf906f60fdb76818e428d.jpg?x-oss-process=image/resize,w_207/format,webp" alt="">
                        <span class="title">畅呼吸防护口罩</span>
                      </a>
                    </div>
                  </div>
                  <div class="category-onetwo box-line line-vertical">
                    <div class="skus-layout layout-onetwo">
                      <a>
                        <img src="https://resource.smartisan.com/resource/fed059c1692cf906f60fdb76818e428d.jpg?x-oss-process=image/resize,w_207/format,webp" alt="">
                        <span class="title">畅呼吸防护口罩</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
  </keep-alive>
</template>
<script>
  import BScroll from 'better-scroll'
export default {

  data () {
    return {
      dataList:[],
    }
  },
  created(){
    var _this = this;
    this.$axios.get('https://resource.smartisan.com/marketing/mobile/category_2fd99b67ca246a9901a9d80888fb4938.json')
      .then(response=> {
        _this.dataList=response.data
        console.log(_this.dataList);
        _this.$nextTick(() => {
          _this.scroll = new BScroll(_this.$refs.wrapper, {
            click: true
          })
          _this.scroll.refresh()
        })
        _this.getlist();
        _this.dataList[0].name_1=['坚果 R1','坚果 3','坚果 Pro 2 特别版','坚果 Pro 2']
        _this.dataList[1].name_1=['畅呼吸防护口罩','汽车空调滤清器','除甲醛活性炭滤芯','高效复合滤芯']
        _this.dataList[2].name_1=['《小王子》作者出生','坚果 3 绒布国旗保护套','钢化玻璃保护膜','坚果 Pro 2 软胶保护套']
        _this.dataList[3].name_1=['坚果 Type-C To Type-C 数据线','原装充电器','车载充电器','电池形电池移动电源','坚果 QuickCharge 4+ 快速充电器','Smartisan 坚果自拍杆']
        _this.dataList[4].name_1=['坚果蓝牙小黑耳机','Smartisan 半入耳式耳机','蓝牙运动耳机','S-1001 圈铁耳机','Smartisan 半入耳式耳机','蓝牙运动耳机']
      })
      .catch(function (error) {
        console.log(error);
      });

  },
  props:{

  },
  mounted() {


  },
  methods:{
     getlist(){

             console.log()


    },
    sku(items){
      console.log(items.sku)
      console.log('https://www.smartisan.com/product/spus?ids=1000473)')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="stylus" rel="stylesheet/stylus">
  .green
    color: #8aad37;
    background: #f7fae1;
  .red
    color: #f9497a;
    background: #f7fae1;
  .clearfix:after
    display table
    content " "
    clear both
  .HeaderNavbar_body
    position fixed
    width 100%
    overflow hidden
    margin-top 50px
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
  .banner-container
    height 20%
    width calc(100% - 1.2rem)
    margin .7rem .6rem .9rem
    border-radius .4rem;
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
        width 100%
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
          height 100%
          width 100%
          >img
            height 100%
            width 100%
  .short-cut-container
    position relative
    justify-content center
    flex-wrap nowrap
    text-align center
    margin-top .96667rem .6rem .89167rem
    .short-cut
      width 100%
      >a
        text-align center
        display inline-block
        overflow hidden
        word-break break-word
        line-height .8rem
        font-size .4rem
        color #666
        text-overflow ellipsis
        text-decoration none
        height 100%
        width 100%
        >img
          float left
          height: 1.8rem;
          width: 1.8rem;
          margin: 0 .6rem;
          flex: 0 0 auto
        >p
          float right
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            line-height: 1.2;
            font-size: .6rem;
            font-weight: 700;
            color: #666;
            white-space: nowrap
            font-size .5rem

  .floor-image-container
    width 15rem
    margin-top 1rem
    .selection-l
      float left
      width 7ren
      padding-right .2rem
      margin-left .9rem
      >a
        display block
        line-height 0
        margin-bottom .4rem
        .box-border
          border-color rgba(0,0,0,.1)
          border-radius .3rem
          overflow hidden
          >img
            height 3rem
            width 6rem
    .selection-r
      width 50%
      float right
      margin-right: -0.4rem;
      .selection-r_a
        margin-bottom .4rem
        overflow hidden
        .box-border_1
          >img
            height 15%
            width 80%

  .image-shadow
    position absolute
    left 50%
    top 50%
    -webkit-transform: translate(-50%,-50%)
    transform translate(-50%,-50%)
    opacity .8
  .box-border_img
    margin 0 auto
    width 14rem
    >img
      width 14rem
      height 4rem
      background-size: 0.55rem 0.575rem;
      margin 0 auto
  .title-header
     position: relative;
     .title-wrapper
       position: relative;
       padding: 0 .6rem;
       padding .6rem

  .layout-oneone
     >a
      display: flex;
      align-items: center;
      box-sizing: border-box;
      position: relative;
      height: 3rem;
      >img
        height: 1.8rem;
        width: 1.8rem;
        margin: 0 .6rem;
        flex: 0 0 auto;
      >span
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        line-height: 1.2;
        font-size: .6rem;
        font-weight: 700;
        color: #666;
        white-space: nowrap;
      .promotion-tag
        position: relative;
        display: inline-block;
        padding: .1rem .3rem;
        box-sizing: border-box;
        font-size: .4rem;
        font-weight: 700;
        line-height: 1;
        border-radius: .6rem;
        z-index: 89;
        white-space: nowrap;
        padding: .15rem .45rem;
        -webkit-transform: scale(.66667);
        transform: scale(.66667);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        border-radius: .9rem;
      .promotion-tag_R
         display block
         right -7rem
         position relative
  .category-onetwo-container
      .category-onetwo
        width: 50%;
        display: inline-block;
        box-sizing: border-box;
        float left
        .skus-layout
           >a
            display: flex;
            align-items: center;
            box-sizing: border-box;
            position: relative;
            height: 3rem;
            >img
              flex: 0 0 auto;
              height: 1.8rem;
              width: 1.8rem;
              margin: 0 .6rem;
            .title
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: break-word;
              line-height: 1.2;
              font-size: .4rem;
              font-weight: 700;
              color: #666;
              white-space: nowrap;
              padding-right: 1.2rem;
  .category-onetwo-container_three
    .category-onetwo
      width: calc((100% - .9rem)/3);
      margin-right: .3rem;
      float left
      .skus-layout
         text-align: center;
         >a
           .category-onethree
              width: 100%;
              padding-top: 10%;
              border-radius: .2rem;
              >img
                left: 1rem;
                top: 1rem;
                width: calc(100% - 2rem);
                height: calc(100% - 2rem);
           .title
              width: 120%;
              -webkit-transform: scale(.83333);
              transform: scale(.83333);
              -webkit-transform-origin: 0 50%;
              transform-origin: 0 50%;
              display: block;
              width: 100%;
              margin: .35rem 0 .85rem;
              font-size: .4rem;
              font-weight: 700;
              line-height: 1.2;
              text-align: center;
              color: #666;
              overflow: hidden;
              word-break: break-word;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-left .5rem

</style>
