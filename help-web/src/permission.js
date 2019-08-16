import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // get token from cookie
const whiteList = ['/login'] // 白名单路由
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
  // //是否有token
  // if (getToken()) {
  //   if(to.path === '/login'){
  //     next({path:'/'})
  //   }else{
  //         // 判断当前用户是否已拉取完user_info信息(除登陆外)
  //         if (store.getters.user && store.getters.user.length > 0) {
  //           next()
  //         } else {
  //             try{
  //               //获取userInfo
  //               store.dispatch('user/userInfo').then((response)=>{
  //                 next({...to,replace:true})
  //               })
  //             }catch{(err)=>{
  //               //出错清除token跳转登陆
  //               store.dispatch('removeToken')
  //               //提示错误
  //               // Message.error(error || 'Has Error')
  //               next({path:`/login?redirect=${to.path}`})
  //             }}
  //         }
  //   }
  // } else {
  //     //白名单免登录
  //     if(whiteList.indexOf(to.path) !== -1){
  //       next()
  //     }else{
  //       next({path:`/login?redirect=${to.path}`})
  //     }
  // }
})
