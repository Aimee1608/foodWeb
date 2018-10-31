<template>
    <el-row>
        <el-col :span="24"  v-for="(item, index) in temHotFoodList" :key="index">
            <el-row :gutter="10"  class="smallImg">
                <el-col :span="4" >
                    <router-link :to="{name: 'Itemlist', params:{foodId: item.data[0].id}}" target="_blank"><img class="fitImg" :src="item.data[0].img" alt=""></router-link>
                </el-col>
                <el-col :span="8">
                    <p>{{listName[index]}}<router-link :to="{name: 'Foodlist', params: {keywords: listName[index], classId: 0}}" target="_blank">更多>></router-link></p>
                </el-col>
                <el-col :span="4" v-for="(ditem,i) in item.data" :key="ditem.id" v-if="i<=2&&i<item.data.length-1?true:false">
                    <router-link :to="{name: 'Itemlist', params:{foodId: item.data[i+1].id}}" target="_blank"><img class="fitImg" :src="item.data[i+1].img" alt=""></router-link>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
// import { searchShowList } from '@/networks/api/index'
import FoodApi from '@/networks/api'
export default {
  data () {
    // 选项 / 数据
    return {
      listName: ['麻辣香锅', '鱼', '排骨'],
      temHotFoodList: [] // 最新列表
    }
  },
  methods: {
    // 事件处理器
    async getHotFoodList () {
      try {
        if (this.listName.length > 0) {
          for (var i = 0; i < this.listName.length; i++) {
            var fname = this.listName[i]
            const response = await FoodApi.searchShowList({
                pageId: 0, 
                classId: 0, 
                name: this.listName[i]
              })
            if (response.data.code == 1001) {
              this.temHotFoodList = this.temHotFoodList.concat({
                name: fname,
                data: response.data.data
              })
            }
        }
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    //定义组件
  },
  created () {
    //生命周期函数
    this.getHotFoodList()
  }
}
</script>

<style>
.smallImg {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e4e4e4;
}
.smallImg .el-col {
  height: 100px;
}
.smallImg .el-col p a {
  margin-left: 10px;
}
.smallImg .el-col p a:hover {
  text-decoration: underline;
}
</style>
