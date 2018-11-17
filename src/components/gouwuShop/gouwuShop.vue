<template>
  <div class="gouwu" v-if="sku_info" >
    <div class="heise"  @click.stop="heise_back" ref="heiseBack"  :emitEvent="emitEvent">
    </div>
    <div class="bottom-dialog" ref="bottomDialog" >
      <div class="dialog-header box-line">
        <div class="goods-image box-border">
          <img :src="madedata.ali_image">
        </div>
        <div class="goods-info">
          <h4>{{ madedata.title}}</h4>
          <p>
            <span>{{madedata.spec_json[0].show_name}}</span>
            <span v-if="madedata.spec_json[1]">{{madedata.spec_json[1].item_value}}</span>
          </p>
          <div class="price discount">
            <div class="disc-price">
              <i>¥</i>
              <span>{{madedata.price}}</span>
            </div>
            <div class="orig-price">
              <i>¥</i>
              <span>{{madedata.price}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-main" >
        <div ref="wrapper" class="yidong">
          <div class="content">
            <div class="iscroll-content" ref="iscrollcontent">
              <div class="select-column box-line">
                <div class="title box-line">
                  <h2>颜色选择</h2>
                </div>
                <div class="column">
                  <ul class="colum-attr">
                    <li class="box-border color " v-for="(items,index) in arrData" @click.stop="itemsAdd(items,index)"
                        :class="{active:indexId==index}" v-show="index<=4">
                        <span v-if="items.spec_json" >
                          <img :src="items.spec_json[0].image">
                        </span>
                      <P v-if="items.spec_json" >{{items.spec_json[0].show_name}}</P>
                    </li>
                  </ul>
                </div>
                <div >
                  <div class="title box-line" v-show="!rongliang.length == 0">
                    <h2>容量选择</h2>
                  </div>
                  <div class="column" v-show="!rongliang.length == 0">
                    <ul class="colum-attr">
                      <li class="box-border color" v-for="(items,index) in rongliang" @click.stop="itemsAddtow(items,index)"
                          :class="{active:indexIdTwo==index}">
                        <P v-show="true">{{items.spec_json[1].show_name}}</P>
                        <!--<P >{{items.spec_json[2].show_name}}</P>-->
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              <div class="select-column box-line">
                <div class="title box-line" v-show="">
                  <h2>数量选择</h2>
                </div>
                <div class="column-count" >
                  <div class="count-btn down disabled" @click.stop="jia">加</div>
                  <span class="column-count_num">{{count}}</span>
                  <div class="count-btn up disabled">减</div>
                </div>
              </div>
            </div>
              <!--<div class="xain-border_pos" v-show="addIsShow">-->
                <!--<span class="box-border" @click="quding">确定</span>-->
              <!--</div>-->
            <div class="divdiv"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapMutations,mapState,mapActions} from 'Vuex'
  import scroll from '../../common/betterScroll/scroll.vue'

export default {
  props:{
    sku_info: {
      type: Array,
      default: true
    }
  },
  components:{

    scroll
  },
  data () {
    return {
          arrData :[],
          rongliang:[],
          duixiang:[],
          chima_X:[],
          quwang:[],
          indexId:99,
          indexIdTwo:99,
          isAdd:false,
          items:[],
          name:'',
          madedata:this.sku_info[0],
          zhenjia:false,
          count:1
    }
  },
  computed: {
    ...mapState([
      'addIsShow'
    ]),
      ...mapActions(['addDatalist'])
  },
  created(){
      this.quchong()
      this.yanse()
//      this.chima()
    var This = this
      This.$nextTick(() => {
            this._initScroll()
          })
    },
  methods: {
    _initScroll () {         // 2 函数声明
      this.menuScroll = new BScroll(this.$refs.wrapper, {
         click:true
      })            //注意此处是 this.$refs.xxx
    },
    itemsAdd(items,index){
      this.zhenjia =true
      if(this.rongliang){
          this.rongliang=[]
          this.name=items.spec_json[0].item_value
        }
      this.indexIdTwo=99
      this.quwang=items
      this.madedata=items
      console.log(this.quwang)
      this.indexId = index
      this.items = items
      if(items.spec_json.length == 1){
        if(!this.name){
          this.yanse()
        }
      }else{
        if(this.name){
          this.yanse()
        }
      }
    },
    itemsAddtow(items,index){
      this.zhenjia = true
      if(this.duixiang){
        this.duixiang=[]
      }
      this.quwang = []
      this.quwang=items
      this.madedata=items
      console.log(this.quwang)
      this.indexIdTwo = index

    },
    quding(){

        jia(items)


    },
    quchong(){
      var n = [];
      if(this.sku_info.length <= 2){
        this.arrData= this.sku_info
        return
      }
       for(var i= 0; i<this.sku_info.length-1;i++){
         this.sku_info[i].index = i
           if(this.sku_info[i].spec_json[0].show_name !== this.sku_info[i+1].spec_json[0].show_name){
               console.log(this.sku_info[i].spec_json[0].show_name)
               this.arrData.push(this.sku_info[i])
               }
         }
      this.name=this.sku_info[0].spec_json[0].show_name
      console.log(this.name)
      this.arrData.splice(this.arrData.length-1,1)
      console.log(this.arrData)
      return this.arrData

    },
    rongLi(){
       if(!this.sku_info[1].spec_json[1]){
           return false
       }
      if(this.sku_info.length <= 1){
        this.rongliang= this.sku_info
        return
      }
      console.log(this.name)
      console.log(this.rongliang)
      for(var i= 0; i<this.sku_info.length-1;i++){
        this.sku_info[i].index = i
        if(this.sku_info[i].spec_json[1].item_value !== this.sku_info[i+1].spec_json[1].item_value){
          console.log(this.sku_info[i].spec_json[1].item_value)
          console.log(this.sku_info[i+1].spec_json[1].item_value)
          this.rongliang.push(this.sku_info[i])
        }
        console.log(this.sku_info[this.sku_info.length-1].spec_json[1].item_value)
      }
      this.rongliang.push(this.sku_info[this.sku_info.length-1])
      return this.rongliang
    },
    heise_back(){
        this.ADDIS_SHOW(false)
        this.$refs.heiseBack.style.top=30+"rem"
        this.$refs.bottomDialog.style.top=30+"rem"
    },
    yanse(){
      if(this.name){
        for(var i= 0; i<this.sku_info.length-1;i++){
          this.sku_info[i].index = i
          if(this.name == this.sku_info[i].spec_json[0].show_name){
            this.rongliang.push(this.sku_info[i])
          }
        }
        console.log(this.rongliang)
      }
      return this.rongliang
    },
    chima(){
      if(!this.sku_info[2].spec_json[2]){
        return false
      }
      if(this.sku_info.length <= 1){
        this.chima_X= this.sku_info
        return
      }
      console.log(this.name)
//      console.log(this.chima)
      for(var i= 0; i<this.sku_info.length-1;i++){
        this.sku_info[i].index = i
        if(this.sku_info[i].spec_json[1].item_value !== this.sku_info[i+1].spec_json[1].item_value){
          console.log(this.sku_info[i].spec_json[1].item_value)
          console.log(this.sku_info[i+1].spec_json[1].item_value)
          this.chima_X.push(this.sku_info[i])
        }
        console.log(this.sku_info[this.sku_info.length-1].spec_json[1].item_value)
      }
      this.chima_X.push(this.sku_info[this.sku_info.length-1])
      return this.chima_X
    },
    emitEvent(){
      this.$refs.heiseBack.style.top=1.5+"rem"
      this.$refs.bottomDialog.style.top=10+"rem"
    },
    jia(){
         if(this.zhenjia == true){
            this.count++
//           var items = this.quwang
//           this.ITEMS(items)
//           this.$store.dispatch('addJia',items)
//           console.log(items)
         }

    },
    queding_zi(){
      if(this.zhenjia == true){
        var items = {info:this.quwang,count:this.count}
        this.$store.dispatch('addDatalist',items)
        console.log(this.count)
        console.log(items)
      }

    },

    ...mapMutations([
      'ADDCART_LIST',
      'ADDIS_SHOW',
      'ITEMS'
    ])

  },
  mounted() {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .actives
    background-color #fbfbfb
  .active
    background-color #dbdbdb
  .heise
    position fixed
    left 0
    top 30rem
    background-color rgba(15, 15, 15, 0.57)
    width 100%
    height 100%
    z-index 98
  .dialog-main
     width 100%
     height 10rem
     position relative
     overflow hidden
  .yidong
     position fixed
     width 100%
     overflow hidden
     height 9.8rem

  .iscroll-content
     height 20rem
  .bottom-dialog
    position: fixed
    display: flex
    left: 0
    right: 0
    bottom: 0
    top: 30rem
    width: 100%
    background: #fff
    flex-direction: column
    -webkit-user-select: none
    user-select: none
    box-shadow: 0 -11px 27px rgba(0,0,0,0.08);
    z-index 99
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
            left 4rem
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
          box-shadow: 0.5px 1px 0.5px 1px #888888;

          margin-left .35rem
          >span
            display: block;
            width: 1rem;
            height: 1rem;
            margin: .5rem auto .4rem;
            border: 2px solid #3d3d3d;
            border-radius: 50%;
            box-sizing: border-box;
            overflow: hidden;
            >img
              width 100%
              height 100%
              display block
          >p
            color #666
            font-size .4rem
            line-height 2.6
            font-weight bolder
  .column-count
    padding: .6rem;
    font-size: .75rem;
    .disabled

      background-position: -3rem .1rem;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      background-repeat: no-repeat;
      vertical-align: middle;
      background-size: 4.5rem;
  .divdiv
    height 3rem
    width 100%
  .down
    border 1px solid #3d3d3d
    text-align center
    line-height 1.5rem
    font-size .5rem
    color #b2b2b2
    border-radius 50%
    margin-left 1rem
  .up
    border 1px solid #3d3d3d
    text-align center
    line-height 1.5rem
    font-size .5rem
    color #b2b2b2
    border-radius 50%
  .column-count_num
    padding 1rem
  .xain-border_pos
    position absolute
    left 3.1rem
    top:0rem
    width 11.5rem
    height 1.5rem
    margin-top 35rem
    background: linear-gradient(#6e98f4,#4b77ee)
    border-radius .3rem
    text-align center
    line-height 1.5rem
    color #fafafa
    font-weight 700
    z-index 1005

</style>
