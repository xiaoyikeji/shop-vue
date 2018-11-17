/**
 * Created by zc on 2018/10/26.
 */

import  ajax from './ajax'
const BASE_URL = '/api'
const SEARCH_URL = '/search'

//1 根据经纬度获取位置详情 /search/v1/search/suggest?keyword=坚果  https://shopapi.smartisan.com/v1/search/result?keyword=s&page=1&size=20&sort=0
export const reqSearchshops = (keyword)=>ajax(`/search/v1/search/suggest?keyword=${keyword}`)
export const reqSearchshopSresult = (keyword)=>ajax(`/search/v1/search/result?keyword=${keyword}&page=1&size=20&sort=0`)
export const reqSearchshopSresultItems = (keyword)=>ajax(`/api/product/spus?ids=${keyword}`)
// 2 获取食品列表
// export const reqFoodTypes = ()=>ajax(`${BASE_URL}/index_category`)
// // 3 根据为精度获取商铺列表
// export const reqShops = (longitude,latitude)=>ajax(BASE_URL+'/shops',{longitude,latitude})
// 4 //根据为精度获取商铺列表关键字搜索商铺列表
// export const reqSearchShop = (geohash,keyword)=>ajax(BASE_URL+'/search_shops',{geohash,keyword})
// // 5 用户密码登录
// // export const reqPwdLogin = (name,pwd,captcha)=>ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},"POST")
// export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
// // 6 发短信登录
// export const reqSendcode = (phone)=>ajax(BASE_URL+'/sendcode',{phone})
// // 7 手机号验证登录
// export const reqSmsLogin = (phone,code)=>ajax(BASE_URL+'/login_sms',{phone,code},"POST")
// // 8 获取用户信息
// export const reqUSerInfo = ()=>ajax(BASE_URL+'/userinfo')
// // 9 用户登出
// export const reqLogout = ()=>ajax(BASE_URL+'/logout')



