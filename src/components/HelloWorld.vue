<template>
  <div class="hello">

    <Scroll>
      <div class="section-floor floor-container">
        <ul class="item-banner-container size-l " ref="uls">
          <li class="item-banner item-banner_1 product-box-item" v-for="items in dataList.floors[1]">
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
          </li>
        </ul>
      </div>
    </Scroll>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
