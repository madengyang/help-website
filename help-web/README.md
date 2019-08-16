项目文件介绍 -----未完
#build
打包配置文件 webpack（打包优化）
svgo 压缩svg

#config
开发 生产 api接口配置文件

#api
api中文件建立模块化，不允许冗余

#assets
assets 静态文件 css img等相对路径引用 （会被webpack打包压缩）
#axios
axios中request是请求拦截器

#components
components中是公用组件

#router
router中是路由

#icons
icons 是svg文件 （<svg-icon icon-class="bug" class-name="bugc" />
bug svg名称  bugc class名字 颜色直接用color改变

#store
store中vux全局状态管理器

#views
views 项目页面

#permission.js
全局路由钩子 路由跳转拦截这里（路由拦截器）

#static
static 第三方类库放在这里如字体库 绝对路径（不会被webpack打包）

#package.js
vue 需要的所有依赖以及版本（勿动）

#启动方式
npm install     --安装依赖
npm run dev     --启动开发环境
npm run build   --打包静态文件 发布正式环境

#框架说明
一、嵌套手机中没有登录页，需要获取到从手机端传过来的参数，将参数返回api获取登录验证返回token或验证信息 保存到cookies
二、路由获取动态路由或者写死路由router中
三、拦截器（请求拦截、路由拦截）
    1、请求拦截是否带有token、验证信息
    2、路由拦截是否带有token、验证信息
四、状态管理器（vux）
    1、将验证信息、用户信息、用户权限保存到vux
    2、如果刷新页面vux 需要经过路由拦截器重新获取
    3、模块化
五、所有图标使用svg文件，图片必须经过压缩后才允许传到项目中
    1，图片必须.png文件
    2，手机中基本不需要考虑兼容问题，尽量使用svg与图标
    3、svg 使用方法icons 是svg文件 （<svg-icon icon-class="bug" class-name="bugc" />bug svg名称  bugc class名字 颜色直接用color改变
六、
