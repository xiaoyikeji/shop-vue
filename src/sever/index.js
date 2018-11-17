/**
 * Created by zc on 2018/8/29.
 */
/**
 * Created by zc on 2018/8/25.
 */
import axios from 'axios'
// import Vue from 'vue'

let respons = axios.create({
  baseURL:'https://www.smartisan.com'
});

/**
 * get /topics 主题首页
 * 接收 get 参数
 page Number 页数
 tab String 主题分类。目前有 ask share job good
 limit Number 每一页的主题数量
 mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
 */
export function getList(params) {
  return respons({
    method:"get",
    url:'/topics',
    // 请求携带的参数
    params:{
      tab:params.tab,
      limit:params.limit,
      page:params.page
    }
  })
}

/**
 * get /topic/:id 主题详情
 * mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
 accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的
 is_collect 以及 replies 列表中的 is_uped 值。
 */
export function getTopicId(params){
  return respons({
    method:"get",
    url:`/topic/${params.id}`,
    params:{
      mdrender:params.mk,
      accesstoken:params.accesstoken,  //用户登陆
    }
  })
}

/*
 * 作者信息数据请求
 * get /user/:loginname 用户详情
 示例：/api/v1/user/alsotang
 * */
export function getLoginNames(params){
  return respons(`/user/${params.name}`)
}

/**
 * post /accesstoken 验证 accessToken 的正确性
 * 返回值示例
 {success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url}
 */

export function getUserInfo(params){
  return respons({
    method:"post",
    url:'/accesstoken',
    data:{
      accesstoken:params.accesstoken,
    }
  })
}

/**
 * 给评论点赞:
 *  post /reply/:reply_id/ups 为评论点赞
 *  接受 post 参数
 accesstoken String
 接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。
 返回值示例
 @params type object
 */
export function getFabulous(params){
  return respons({
    method:"post",
    url:`/reply/${params.id}/ups`,
    data:{
      accesstoken:params.accesstoken,
    }
  })
}


/**
 * 收藏主题和取消收藏主题
 * post /topic_collect/collect 收藏主题
 * post /topic_collect/de_collect 取消主题
 */
// 收藏主题
export function getCollect(params){
  return respons({
    method:"post",
    url:`/topic_collect/${params.collect}`,
    data:{
      accesstoken:params.accesstoken,
      topic_id :params.id,
    }
  })
}

/**
 * replies 点击回复(评论)
 * post /topic/:topic_id/replies 新建评论
 * accesstoken String 用户的 accessToken
 content String 评论的主体
 @ params {id,accesstoken,content}

 对另外一条评论的回复
 @id : 当前数据主题 topic/ (id)
 @reply_id 当前评论列表每一个对象的 "id"
 @content : 评论的主题内容
 @accesstoken 当前登陆用户的 accesstoken账号
 */

export function setReplies(params){
  return respons({
    method:"post",
    url:`/topic/${params.id}/replies`,
    data:{
      accesstoken:params.accesstoken,
      content:params.content,
      reply_id:params.reply_id,
    }
  })
}

/**
 * post /topics 新建主题
 * @ accesstoken
 * @ title 标题
 * @ tab 分类
 * @ content
 */
export function createpPlate(params) {
  console.log(params)
  return respons({
    method:"post",
    url:'/topics ',
    data:{
      accesstoken:params.accesstoken,
      title:params.title,
      tab:params.tab,
      content:params.content
    }
  })
}

/**
 * 编辑主题
 *  比新建主题多一个参数
 *  @ topic_id String 主题id
 */
export function getUpdate(params){
  return respons({
    method:"post",
    url:"/topics/update",
    data:{
      accesstoken :params.accesstoken,
      title :params.title,
      tab :params.tab,
      content :params.content,
      topic_id :params.topic_id
    }
  })
}


export default {
  install(Vue){
    Vue.prototype.http = {
      getList,
      getTopicId,
      getLoginNames,
      getUserInfo,
      getFabulous,
      getCollect,
      setReplies,
      createpPlate,
      getUpdate
    }
  }
}
