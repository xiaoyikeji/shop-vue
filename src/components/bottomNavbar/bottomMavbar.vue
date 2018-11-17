<template>
  <div class="bottomMavbar zx">
          <router-link tag="div" class="bottomMavbar_items" to="/" >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ziyuan"></use>
            </svg>
            <h4>首页</h4>
          </router-link>
          <router-link tag="div" class="bottomMavbar_items" to="/FenLei" >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ziyuan1"></use>
            </svg>
            <h4>分类</h4>
          </router-link>
          <router-link tag="div" class="bottomMavbar_items" to="/GouWuche" >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ziyuan2"></use>
            </svg>
            <h4>购物车</h4>
          </router-link>
          <router-link tag="div" class="bottomMavbar_items" to="/GeRenzhongxin" >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ziyuan3"></use>
            </svg>
            <h4>个人中心</h4>
         </router-link>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .icon
    width: 1rem; height: 1rem
    vertical-align: -0.15rem
    fill: currentColor
    overflow: hidden
 .bottomMavbar
     height: 1.3rem
     width 100%
     display: flex
     background: #fff
     box-shadow: 0 -11px 32px rgba(0,0,0,.08)
     position: fixed;
     bottom 0
     z-index 12
     .bottomMavbar_items
       flex:1
       text-align center
       line-height 25px
       >h4
        color: #9a9a9a
        font-size: 27px
        height: 40px
        position: relative
        width: 300%
        left: -100%
        line-height: 40px
        -webkit-transform-origin: 50% 0
        transform-origin: 50% 0
        -webkit-transform: scale(.33333)
        transform: scale(.33333)

</style>
