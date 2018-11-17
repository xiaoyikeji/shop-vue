import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/common/shouYe/shouYe'
import FenLei from '@/common/fenLei/fenLei'
import GeRenzhongxin from '@/common/geRenzhongxin/geRenzhongxin'
import GouWuche from '@/common/gouWuche/gouWuche'
import jiesuanYe from '@/common/gouWuche/jiesuanYe'
import Product from '@/common/product/product'
import Search from '@/common/Search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShouYe',
      component: ShouYe
    },
    {
      path: '/FenLei',
      name: 'FenLei',
      component: FenLei
    },
    {
      path: '/GeRenzhongxin',
      name: 'GeRenzhongxin',
      component: GeRenzhongxin
    },
    {
      path: '/GouWuche',
      name: 'GouWuche',
      component: GouWuche
    },
    {
      path: '/jiesuanYe',
      name: 'jiesuanYe',
      component: jiesuanYe
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
