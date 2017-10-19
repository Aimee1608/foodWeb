import Home from './templet/mainTem/Home.vue'
import Foodlist from './templet/mainTem/Foodlist.vue'
import Select from './templet/mainTem/Select.vue'
import Hotnews from './templet/mainTem/Hotnews.vue'
import Itemlist from './templet/mainTem/Itemlist.vue'
import Suggestion from './templet/mainTem/Suggestion.vue'
import About from './templet/mainTem/About.vue'
import FriendsLink from './templet/mainTem/FriendsLink.vue'
import Advertising from './templet/mainTem/Advertising.vue'

const routes =[
    {path: '/',component: Home},//默认首页
    {path:'/Home',component:Home},//首页
    {path:'/Foodlist',component:Foodlist},//菜谱
    {path:'/Select',component:Select},//分类
    {path:'/Hotnews',component:Hotnews},//热门文章
    {path:'/Itemlist',component:Itemlist},//菜谱详情
    {path:'/Suggestion',component:Suggestion},//意见反馈
    {path:'/About',component:About},//关于
    {path:'/FriendsLink',component:FriendsLink},//友情链接
    {path:'/Advertising',component:Advertising}//广告合作
]

export default routes
