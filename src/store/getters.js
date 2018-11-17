/**
 * Created by zc on 2018/8/19.
 */


// export  const ProductItems = state => state.ProductItems
export default{
  getProductItems:function (state) {
     return state.ProductItems
  },
  // sku_id
  jiesuanItems:function (state) {
            state.jiesuan=[]
            state.allcartList.forEach(function (items) {
                   if(items.showGoods === true){
                     state.jiesuan.push(items)
                   }
            })

            return state.jiesuan
  }
}
