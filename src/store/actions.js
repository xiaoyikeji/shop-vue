/**
 * Created by zc on 2018/8/19.
 */

import {
  ADDCART_LIST,
  ADDIS_SEARCHSHOP,
  JIA,
  JIAN,
  DEL,
  JIANDEL,
  ALLGOODS,
  DANITEMS
} from './mutation-types'
import {
  reqSearchshops,
  reqSearchshopSresult,
  reqSearchshopSresultItems
} from '../api'
export default {
  addDatalist({commit},items){
      commit(ADDCART_LIST,items)
      // console.log(items)
  },
  addJia({commit},items){
     commit(JIA,items)
  },
  addJian({commit},items){
     commit(JIAN,items)
  },
  del({commit},id){
    commit(DEL,id)
  },
  adddel({commit},id){
    commit(JIANDEL,id)
  },
  addgoods({commit},id){
    commit(ALLGOODS,id)
  },
  async searchshops({commit},keyword){
       const result = await reqSearchshops(keyword)
       const resultid = await reqSearchshopSresult(keyword)
       const resultidItems = await reqSearchshopSresultItems(resultid.data.spu)
        console.log(result)
         console.log(resultid)
         console.log(resultidItems)
        if(resultidItems.code ===0){
           const searchshops =result.data
           const searchshopsid =resultid.data.spu
           const searchItems = resultidItems.data
          commit(ADDIS_SEARCHSHOP,{searchshops,searchshopsid,searchItems})
        }

  },
  async producrtItems({commit},keyword){
    const result = await reqSearchshopSresultItems(keyword)
    console.log(result)
    commit(DANITEMS,result)

  }
}

