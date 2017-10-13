import Home from './templet/mainTem/Home.vue'
import Foodlist from './templet/mainTem/Foodlist.vue'
import Select from './templet/mainTem/Select.vue'
import Hotnews from './templet/mainTem/Hotnews.vue'


const routes =[
    {path: '/',component: Home},
    {path:'/Home',component:Home},
    {path:'/Foodlist',component:Foodlist},
    {path:'/Select',component:Select},
    {path:'/Hotnews',component:Hotnews}
]

export default routes
