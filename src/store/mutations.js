/**
 * Created by zc on 2018/9/12.
 */
/**
 * Created by zc on 2018/7/19.
 */
import Vue from 'vue'
import {
  ADDCART_LIST,
  ADDIS_SHOW,
  ITEMS,
  ADDIS_SEARCHSHOP,
  JIA,
  JIAN,
  DEL,
  JIANDEL,
  ALLGOODS,
  DANITEMS
} from './mutation-types'
import 'vue'
export default{
  [ADDCART_LIST](state,data){
    let off=true
    state.allcartList.forEach((goods)=>{
      if(goods.sku_id === data.info.sku_id){
        goods.count+=data.count
        console.log(data.count)
        off = false
      }
    })
    if(off){
      let goodsData = data
      Vue.set(data.info,'count',data.count)
      Vue.set(data.info,'showGoods',true)
      state.allcartList.push(goodsData.info)

    }
    console.log(state.allcartList)
  },
  [JIA](state,data){
      let off=true
      if(data.count){
        console.log("1")
        data.count++
        off = false
      }
      if(!data.count){
        console.log("2")
        let goodsData = data
        Vue.set(goodsData,'count',1)
        // state.cartList.push(goodsData)
    }
    console.log(state.cartList)
  },
  [DEL](state,id){
    state.allcartList.forEach((goods,index)=>{
           if(goods.sku_id===id){
             state.allcartList.splice(index,1)
             return
           }
    })
  },
  [JIANDEL](state,id){
    state.allcartList.forEach((goods,index)=>{
      if(goods.sku_id===id){
          goods.count--
          if(goods.count<0){
            goods.count=0
          }
          return
      }
    })
  },
  [ADDIS_SHOW](state,data){
     state.addIsShow = data
  },
  [ITEMS](state,data){
    state.items = data
  },
  [ALLGOODS](state,id){
    state.allcartList.forEach((goods,index)=>{
      if(goods.sku_id===id){
         goods.showGoods =!goods.showGoods
      }
      return
    })
  },
  //搜所商品
  [ADDIS_SEARCHSHOP](state,{searchshops,searchshopsid,searchItems}){
    state.searchShop = searchshops
    state.searchShopid = searchshopsid
    state.resultidItems= searchItems
  },
 //  单品显示
  [DANITEMS](state,result){
    state.ProductItems = result.data
    console.log(state.ProductItems)
  }

}

