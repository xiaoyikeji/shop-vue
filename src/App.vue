<template>
  <div id="app">
    <BottomNavbar class="ngcontent-c0"></BottomNavbar>
    <router-view/>
  </div>
</template>

<script>
   import BottomNavbar from './components/bottomNavbar/bottomMavbar.vue'
export default {
  components:{
    BottomNavbar:BottomNavbar,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .ngcontent-c0
      position fixed
      bottom 0
      z-index 999
</style>
