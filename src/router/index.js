import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: resolve => require(['@/components/Main'], resolve),
    children: [
      {
        path: '/',
        name: 'Home',
        component: resolve => require(['@/views/Home/index'], resolve),
        meta: {title: '美食美荟', content: '你的美味生活'}
      }, //  默认首页
      {
        path: '/Foodlist/:classId?/:keywords?',
        name: 'Foodlist',
        component: resolve => require(['@/views/Foodlist/index'], resolve)
      }, //  菜谱
      {
        path: '/Select',
        name: 'Select',
        component: resolve => require(['@/views/Select/index'], resolve)
      }, // 分类
      {
        path: '/Hotnews',
        name: 'Hotnews',
        component: resolve => require(['@/views/Hotnews/index'], resolve)
      }, // 热门文章
      {
        path: '/Itemlist/:foodId?',
        name: 'Itemlist',
        component: resolve => require(['@/views/Itemlist/index'], resolve)
      }, // 菜谱详情
      {
        path: '/Suggestion',
        name: 'Suggestion',
        component: resolve => require(['@/views/Suggestion/index'], resolve)
      }, // 意见反馈
      {
        path: '/About',
        name: 'About',
        component: resolve => require(['@/views/About/index'], resolve)
      }, // 关于
      {
        path: '/FriendsLink',
        name: 'FriendsLink',
        component: resolve => require(['@/views/FriendsLink/index'], resolve)
      }, // 友情链接
      {
        path: '/Advertising',
        name: 'Advertising',
        component: resolve => require(['@/views/Advertising/index'], resolve)
      } // 广告合作
    ]
  }, {
    path: '*',
    redirect: {name: 'Home'}
  }]
})
