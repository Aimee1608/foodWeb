<template>
    <el-row :gutter="20">
        <el-col class="cardCol" :xs="12" :sm="6" :md="6"  v-for="item in temTodayList" :key="item.id">
            <el-card :body-style="{ padding: '0px' }">
                <router-link class="imgBox" :to="'#/Itemlist?foodId='+item.id" target="_blank">
                     <img :src="item.img" class="image">
                </router-link>
                <div class="inner" style="padding: 15px;text-align:center">
                  <router-link class="title" :to="'#/Itemlist?foodId='+item.id" target="_blank" >{{item.name}}</router-link>
                </div>
          </el-card>
        </el-col>
    </el-row>
</template>

<script>
// import { Recommend } from '@/networks/api'
import FoodApi from '@/networks/api'
export default {
  data () {
    //选项 / 数据
    return {
      temTodayList: ''
    }
  },
  methods: {
    //事件处理器
  },
  components: {
    //定义组件
  },
  async created () {
    //生命周期函数
    try{
      const response = await FoodApi.Recommend()
      if (response.data.code = 1001) {
        this.temTodayList = response.data.data
      }   
    } catch (error) {
      console.log(error)
    }  
  }
}
</script>

<style>
.cardCol {
  margin-bottom: 20px;
}

.inner {
  position: relative;
  /*text-align: center;*/
}
.imgBox {
  width: 100%;
  height: 200px;
  cursor: pointer;
  display: block;
  border-radius: 4px;
}
.image {
  /*max-width: 100%;*/
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*display: inline-block;*/
  /*display: block;*/
}
.title {
  cursor: pointer;
  font-size: 16px;
  color: #333;
}
</style>
