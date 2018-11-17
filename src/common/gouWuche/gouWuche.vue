<template>
  <div class="header-mobile">
        <div class="header_bar">
           <div class="header_bar_G">
              <h1>购物车</h1>
              <span v-html="">完成</span>
           </div>
        </div>
        <div class="wapper" ref="wapper" v-if="allcartList">
          <div class="page-cart" >
           <div class=" hide-warranty" v-for="(items,index) in allcartList">
               <div class=" item-list have-margin">
                  <div class="checkbox-container">
                     <span class="checkbox-on m-blue-checkbox-new " :class="{active:items.showGoods}" @click.stop="qudiao(items.sku_id)"></span>
                  </div>
                 <div class="checkbox-container">
                   <span class="checkbox-on m-blue-checkbox-new" style="line-height: .55rem;color: #969696" @click.stop="deleteGoos(items.sku_id)">X</span>
                 </div>
                 <div class="item-wrapper">
                    <div class="item-thumb">
                      <img :src="items.ali_image">
                    </div>
                    <div class="item-info-container">
                      <h4>{{items.title}}</h4>
                      <p class="item-attrs">
                        <span v-if="items.spec_json[0]">{{items.spec_json[0].show_name}}</span>
                        <span v-if="items.spec_json[1]">{{items.spec_json[1].show_name}}</span>
                        <span v-if="items.spec_json[1]" style="color: #db99a5">{{items.price}}</span>
                      </p>
                      <div class="item-price-container">
                            <div class="item-price-container_num">
                               <span @click.stop="jiandel(items.sku_id)">-</span>
                               <span>{{items.count}}</span>
                               <span>+</span>
                            </div>
                            <p class="item-price-container_p">

                               <span class="sum smartisan-icon">
                                   <i>$</i>
                                   <span>{{items.price*items.count}}</span>
                               </span>
                            </p>
                      </div>
                    </div>
                  </div>
               </div>
           </div>

        </div>

        </div>
    <div class="bottom-bar">
      <div class="select-info">
                   <span>
                   </span>
        <span>已选 <i>1</i>件 </span>
      </div>
      <div class="sum-info">
        <div class="sum-info_jiesuan">
          <p>
            合计：
            <span>
                           <i>¥</i>
                           <span>1,999.00</span>
                         </span>
          </p>
          <div>
            <P>已享免邮费</P>
          </div>
        </div>
        <div class="sum-info_jie" @click="jiesuan()">现在结算</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'Vuex'
  import BScroll from 'better-scroll'
  export default {

    data () {
      return {
          data:4
      }
    },
    created(){
//         this.cartList()
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wapper, {
          click: true
        })
        this.scroll.refresh()
      })
      console.log(this.allcartList)
    },
    methods:{
      cartListdata(){
          return this.$store.state.cartList
      },
      deleteGoos(id){

        this.$store.dispatch("del",id);
      },
      jiandel(id){
        this.$store.dispatch("adddel",id);
      },
      qudiao(id){

        this.$store.dispatch("addgoods",id);
      },
      jiesuan(){
          var _this =this
          if(this.allcartList.length== 0){
              return
          }else if(this.allcartList){
            this.allcartList.forEach(function (items) {
              if(items.showGoods !== false){
                _this.$router.push('/jiesuanYe')
              }

            })
          }

      }
    },
    computed:{
      ...mapState([
        'cartList',
        'allcartList'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
   .header-mobile
      font-size .4rem
   .wapper
     position fixed
     width 100%
   .active
      background-color #00b3ee
   .header_bar
     background: #1d1d1d;
     background-image: linear-gradient(#1d1d1d,#181818);
     height:2rem;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: 399;
     .header_bar_G
        >h1
           color: #fff;
           font-size: 1rem;
           padding: .6rem 0 0;
           text-align: center;
           position: absolute;
           top: 0;
           left: 60px;
           right: 60px;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
        >span
           color #f8f8f8
           position: absolute;
           top:.6rem;
           right: 1.5rem;
           background: #070707;
           background: linear-gradient(#414141, #1e1e1e);
           color: #fff;
           border-radius: 4px;
           box-sizing: border-box;
           line-height: 0.8rem;
           position: absolute;
           top: 50%;
           -webkit-transform: translateY(-50%);
           transform: translateY(-50%);
           padding .3rem
           right: .3rem;
           border .01rem solid #3d3d3d
           border-radius .3rem
   .page-cart
     margin-top: 2rem;
     .hide-warranty
       width 100%
       .item-list
           width 100%
           margin-bottom: 0;
           margin-bottom: 5px;
           position: relative;
           background: #fff;
           box-shadow: 0 5px 13px rgba(0,0,0,.1);
           .checkbox-container
             width:10%;
             height 4rem
             flex: 0 0 44px;
             text-align: center;
             float left
             line-height: 0;
             .checkbox-on
               position: relative;
               display: inline-block;
               width: .5rem;
               height: .5rem;
               border .05rem solid #989898
               border-radius 50%
               margin-top 1.2rem
           .item-wrapper
                width 100%
                height 4rem
                box-shadow: 0 5px 13px rgba(0,0,0,.1);
                .item-thumb
                   height 4rem
                   width 30%
                   float left
                   >img
                      width 4rem
                      height 4rem
                .item-info-container
                   height 4rem
                   width 100%
                   padding-top .8rem
                   .item-price-container
                        margin-top .5rem
                        .item-price-container_num
                               float left
                               width 5rem
                               >span:nth-child(1)
                                  padding .2rem
                                  width .5rem
                                  height .5rem
                                  border-radius  50%
                                  background-color #eeeaec
                               >span:nth-child(3)
                                 padding .2rem
                                 width .5rem
                                 height .5rem
                                 border-radius  50%
                                 background-color #eeeaec
                        .item-price-container_p
                               margin-left 11.1rem

   .bottom-bar
         bottom 1.3rem
         position: fixed;
         height: 2rem;
         padding: 0 12px;
         left: 0;
         right: 0;
         z-index: 90;
         background: #fafafa;
         box-shadow: 0 -1px 3px rgba(0,0,0,.06);
         font-size: 12px;
         color: #666;
         display: flex;
         align-items: center;
         justify-content: space-between;
         box-sizing: border-box;
         background: linear-gradient(#f9f9f9, #e8e8e8);
         .sum-info
             .sum-info_jiesuan
                  float left
                  margin-right 4rem
             .sum-info_jie
                     float right
                     height: 1.2rem;
                     line-height: 1.1rem;
                     box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
                     font-size: .5rem;
                     display: block;
                     background: #5e8bdd;
                     background: linear-gradient(#6f94e8,#5178df);
                     border-radius: 6px;
                     text-align: center;
                     text-shadow: 0 -1px 0 rgba(0,0,0,.15);
                     color: #fff;
                     position: absolute;
                     width: 3rem;
                     right: 11px;
                     top: 50%;
                     -webkit-transform: translateY(-50%);
                     transform: translateY(-50%);
                     font-weight: 700;
</style>
