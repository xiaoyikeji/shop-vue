<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>

      </slot>
    </div>
    <div class="dots">

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {

    data () {
      return {

      }
    },
    props:{
      loop:{
        type:Boolean,
        default:true
      },
      autoPlay:{
        type:Boolean,
        default:true
      },
      interval:{
        type:Number,
        default:4000
      }
    },
    mounted(){
      setTimeout(()=>{
        this._setSliderWidth()
        this._initSlider()
      },20)
    },
    methods:{
      _setSliderWidth(){
        this.children = this.$refs.sliderGroup.children
        let width =0
        let sliderWidth = this.$refs.slider.clientWidth
        for(let i=0; i<this.children.length;i++){
          let child = this.children[i]
          child.style.width = sliderWidth/2 + 'px'
          width +=sliderWidth
          console.log(width )
        }
        this.$refs.sliderGroup.style.width = width/2 + 'px'

      },
      _initSlider(){

        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 3,
          snapSpeed: 400
        })

      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slider
    min-height 1px
    overflow hidden
    .slider-group
      position relative
      overflow hidden
      white-space nowrap



</style>
