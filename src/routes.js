const routes =[
    {
      path: '/',
      name:'Home',
      component: resolve => require(['./templet/mainTem/Home.vue'],resolve)
    },//默认首页
    {
      path:'/Foodlist',
      name:'Foodlist',
      component: resolve => require(['./templet/mainTem/Foodlist.vue'],resolve)
    },//菜谱
    {
      path:'/Select',
      name:'Select',
      component: resolve => require(['./templet/mainTem/Select.vue'],resolve)
    },//分类
    {
      path:'/Hotnews',
      name:'Hotnews',
      component: resolve => require(['./templet/mainTem/Hotnews.vue'],resolve)
    },//热门文章
    {
      path:'/Itemlist',
      name:'Itemlist',
      component: resolve => require(['./templet/mainTem/Itemlist.vue'],resolve)
    },//菜谱详情
    {
      path:'/Suggestion',
      name:'Suggestion',
      component: resolve => require(['./templet/mainTem/Suggestion.vue'],resolve)
    },//意见反馈
    {
      path:'/About',
      name:'About',
      component: resolve => require(['./templet/mainTem/About.vue'],resolve)
    },//关于
    {
      path:'/FriendsLink',
      name:'FriendsLink',
      component: resolve => require(['./templet/mainTem/FriendsLink.vue'],resolve)
    },//友情链接
    {
      path:'/Advertising',
      name:'Advertising',
      component: resolve => require(['./templet/mainTem/Advertising.vue'],resolve)
    }//广告合作
]

export default routes
