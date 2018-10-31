<template>
    <el-row class="container">
        <el-col :span="24">
            <Carousel></Carousel>
            <div class="todayList">
                <h1 class="listTitle">今日推荐</h1>
                <TodayList></TodayList>
            </div>
            <div class="newList">
                <h1 class="listTitle">最新菜谱<router-link :to="{name: 'Foodlist', params: {classId: 0}}">(更多)</router-link ></h1>
                <FoodlistHome></FoodlistHome>
            </div>
            <el-row  :gutter="50">
                <el-col :xs="24" :sm="16">
                    <div class="hotSelect">
                        <h1 class="listTitle">热门分类<router-link to="/Select">(更多)</router-link></h1>
                        <HotSelect></HotSelect>
                    </div>
                    <div class="hotFood" >
                        <h1 class="listTitle">简单好学</h1>
                        <HotFood></HotFood>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="8" >
                    <div class="otherWeb">
                        <h1 class="listTitle">扫描二维码，获取更多内容</h1>
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <h2>微信公众号</h2>
                                <img src="../../assets/img/erwm.jpg" alt="">
                            </el-col>
                            <el-col  :span="12">
                                <h2>微信小程序</h2>
                                <img src="../../assets/img/xiaocx.jpg" alt="">
                            </el-col>
                        </el-row>
                    </div>
                    <div class="advertising">
                        <h1 class="listTitle">友情合作</h1>
                        <div class="advertisingBox">
                            <img src="../../assets/img/logo.png" alt="">
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import temCarousel from "@/components/temCarousel.vue"
import FoodlistHome from "@/components/temCardHome.vue"
import TodayList from "@/components/temTodayList.vue"
import HotSelect from "@/components/temHotSelect.vue"
import HotFood from "@/components/temHotFood.vue"

export default {
  name: "Home",
  data () {
    //选项 / 数据
    return {
        myTitle: '标题'
    }
  },
  methods: {
    //事件处理器
  },
  components: {
    //自定义组件
    Carousel: temCarousel, //轮播
    TodayList: TodayList, //今日推荐
    FoodlistHome: FoodlistHome, //最新列表
    HotSelect: HotSelect, //热门分类
    HotFood: HotFood, //热门作品
    // 'wbc-menu': Menu,
  },
  created () {
    //生命周期函数
  }
}
</script>

<style>
.newList,
.todayList,
.hotFood,
.otherWeb {
  margin-bottom: 10px;
}
.hotSelect {
  margin-bottom: 30px;
}
.otherWeb h2 {
  margin-bottom: 10px;
}
.otherWeb div.el-col {
  text-align: center;
  /*background:#fff;*/
  margin: 10px 0;
}
.otherWeb img {
  width: 100%;
}
.advertisingBox {
  background: #f4f0ec;
}
</style>
