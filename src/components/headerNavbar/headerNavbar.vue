<template>
  <div class="headerNavbar">
      <div class="title-bar">
        <div class="bottomMavbar_items">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chufangchujukitchen-weibolumicro"></use>
          </svg>
        </div>
        <div class="bottomMavbar_items_1" @click="Sousuo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chufangchujukitchen-dianfanbaodianfanguoel"></use>
          </svg>
        </div>
        <div class="bottomMavbar_items_2">
          <!--<svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chufangchujukitchen-dianfanbaodianfanguoel"></use>
          </svg>-->
        </div>
      </div>
  </div>
</template>

<script>
export default {

  data () {
    return {}
  },
  methods: {
    Sousuo:function () {
      this.$router.push({name: 'Search'})
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  /* background: #1d1d1d; */
  .headerNavbar
    position relative
    z-index 88
  .icon
    width: 1.2em; height: 1.2em
    vertical-align: -0.15em
    fill: currentColor
    overflow: hidden
    padding .4rem
  .title-bar
    background-image: linear-gradient(#7f7f7f, #7f7f7f)
    height: 1.3rem
    top: 0
    left: 0
    right: 0
    z-index: 399
    .bottomMavbar_items
      background-size: cover
      height: .5rem
      margin: 0 auto
      width: .5rem
    .bottomMavbar_items_1
      background-size: 43% 43%
      background-position: 50% 50%
      float: none
      position: absolute
      right: 12px
      top: 0
    .bottomMavbar_items_2
      background-size: cover
      background-origin: content-box
      float: left
      height: 100%
      padding: 0 5px
      width: 50px
      top 0
      position absolute
      transition: none
</style>
