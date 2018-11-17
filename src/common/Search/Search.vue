<template>
  <div class="search">
        <div class="search-form">
             <div class="module-form-row-m">
                 <div class="form-item">
                   <span class="cancel_1" @click="back">
                      <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-chufangchujukitchen-dianfanbaodianfanguoel"></use>
                      </svg>
                   </span>
                  <form class="search_form" @submit.prevent="serach" >
                    <input class="input-box ng-pristine ng-valid ng-touched" placeholder="请输入要搜索的内容"
                           maxlength="30" type="text" name="searchValue" v-model="keyword" />
                    <input type="submit" class="search_submit"/>
                  </form>
                    <span class="cancel">返回</span>
                 </div>
             </div>
        </div>
        <div class="matching-list" >
           <ul>
              <li class="" v-for="items in resultidItems.list" @click="ClickShop(items.sku_info[0].sku_id)">
                <div class="matching-list_div">
                  <div class="matching-list_div1">
                    <img :src="`http`+items.sku_info[0].ali_image.substring(5)">
                  </div>
                    <div class="matching-list_div2">
                       <p>{{items.name}}</p>
                       <p>{{items.price}}￥</p>
                    </div>

                </div>
              </li>

           </ul>
        </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from  'vuex'
   //  https://shopapi.smartisan.com/v1/search/result?keyword=%E6%89%8B%E6%9C%BA%E5%A3%B3&page=1&size=20&sort=0
   //https://www.smartisan.com/product/spus?ids=1000266
//  axios.defaults.withCredentials = true
//  axios.defaults.baseURL='https://shopapi.smartisan.com'
  export default {

    data () {
      return {
          idList:[],
          shopList:[],
          keyword:''

      }
    },
    computed:{
      ...mapState([
        'searchShop',
        'resultidItems'
      ]),
    },

    methods:{
      serach(){
          const  keyword = this.keyword.trim()
          if(keyword){
             this.$store.dispatch('searchshops',keyword)
             console.log(keyword)
          }else{
              this.searchShop = []
          }
      },
      back(){
          this.$router.go(-1)
      },
      ClickShop:function (index) {
        console.log(index)
        this.$router.push({name: 'Product',query:{index:index}})
        console.log(index)
      }
    },
    created(){


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .search
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 0.6rem;
    font-weight: normal;
    vertical-align: baseline;
  .cancel_1
    padding .3rem
    width .5rem
    height .5rem
    border .02rem solid #d4d4d4
    margin-left .15rem
    border-radius 50%
    position relative
    top .5rem
    .icon
      width .6rem
      height .6rem
  .search-form
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.4rem;
    padding: .46rem .3rem;
    z-index: 205;
    background-color: #f5f5f5;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.1)
    .module-form-row-m
      display: flex;
      margin: 0 auto;
      position: relative;
      height: 100%;
      .form-item
        height: 1.5rem;
        border-radius: .8rem;
        overflow: hidden;
        box-flex: 1;
        flex: 1;
        -moz-flex: 1;
        -webkit-flex: 1;
        position: relative;
        height: 2.15rem;
        background: #fff;
        border-radius: .25rem;
        box-shadow: inset 0 0.05rem 5px rgba(0,0,0,.02), inset 0 2px 8px rgba(0,0,0,.15), inset 0 0 0 0.05rem rgba(0,0,0,.1), 0 0.05rem 0.05rem 0 hsla(0,0%,100%,.1);
        color: #333;
        .search_form
          width 100%
          height 2rem
          .input-box
            font-size: .7rem;
            height: 100%;
            padding-left: 1.5rem;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-appearance: none;
            height: 100%;
            /*padding: 0 .65rem;*/
            background-color: transparent;
            border: none;
            border-radius: .25rem;
            font-size: .7rem;
            float left
            margin-top -.6rem
            margin-left 2rem
          .search_submit
            position relative
            right 0
            width 2rem
            height 1rem
            background-color #cacaca
            border-radius .4rem
            top 0
        .cancel
            position: relative;
            font-size: .7rem;
            font-weight: 700;
            width: 3rem;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            margin-left: .6rem;
            color: #626262;

  .matching-list
    position: fixed;
    top: 2.6rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f8f8;
    z-index: 203;
    overflow: scroll;
    >ul
      >li
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .85rem;
        height: 3.5rem;
        line-height: 2rem;
        padding: 0 .9rem;
        color: #333
        display: list-item;
        text-align: -webkit-match-parent;
        border-bottom .02rem solid #d4d4d4
        .matching-list_div
           .matching-list_div1
              width 25%
              height 2.5rem
              float left
              >img
                width 2.2rem
                height 2.2rem
           .matching-list_div2
              height 2.5rem
              width 72%



</style>
