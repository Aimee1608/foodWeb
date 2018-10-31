<template lang="html">
    <div  class="static" >
      <el-row class="container">
          <el-col :span="24">
              <div class="selectList" v-for="(item, index) in selectList" :key="item.id">
                  <h1>{{item.class_name}}</h1>
                  <el-row >
                      <el-col :xs="6" :sm="3" v-for="(ditem, index) in item.class_names" :key="ditem.id">
                          <router-link :to="{name: 'Foodlist', params: {classId: ditem.id}}">
                              <img class="fitImg" :src="ditem.image"  onerror="this.onerror=null;this.src='../../assets/img/logo.png'"/>
                              <i >{{ditem.class_name}}</i>
                          </router-link>
                      </el-col>
                  </el-row>
              </div>
          </el-col>
      </el-row>
    </div>
</template>

<script>
import FoodApi from '@/networks/api'
export default {
  name: "Select",
  data () {
    return {
      selectList: ""
    }
  },
  metaInfo: {
    title: '分类'
  },
  components: {

  },
  async created () {
    //生命周期函数
    try {
      const response = await FoodApi.classList()
      if (response.data.code == 1001) {
        this.selectList = response.data.data
      } 
    } catch (error) {

    }
  }
}
</script>

<style lang="css">
.selectList {
  border-bottom: 1px dotted #e5e5e5;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.selectList h1 {
  width: 300px;
  padding: 17px 0 8px 0;
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}
.selectList .el-col {
  padding: 10px 10px 0 10px;
  text-align: center;
  min-height: 140px;
  /*background: #fff;*/
}
.selectList .el-col img {
  height: 60px;
  margin-bottom: 10px;
  /*max-height: 80px;*/
}
.selectList i {
  padding: 3px 5px;
  display: inline-block;
}
.selectList i:hover {
  /*text-decoration:underline;*/
  background: #a37011;
  color: #fff;
}
</style>
