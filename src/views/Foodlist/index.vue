<template>
  <el-row class="container">
    <el-col :span="24">
        <el-row class="shotBox" >
            <el-col class="shotSelect" :xs="12" :sm="6" :md="6" v-for="(item,index) in classList" :key="item.id" v-if="index<=3?true:false">
                <h1>{{item.class_name}}</h1>
                <ul >
                    <li v-for="ditem in item.class_names" :key="ditem.id"><router-link :to="{name: 'Foodlist', params: {classId: ditem.id}}" :class="classId==ditem.id?'chosed':''" >{{ditem.class_name}}</router-link></li>
                </ul>
            </el-col>
        </el-row>
      </el-col>
      <el-col :span="24">
          <el-row :gutter="20" class="temCard">
            <el-col class="cardCol el-col-xxs-24" :xs="12" :sm="8" :md="8"  v-for="item in temCardList" :key="item.id" v-if="temCardList.length>0?true:false" >
              <el-card :body-style="{ padding: '0px' }">
                  <router-link class="imgBox" :to="{name: 'Itemlist', params: {foodId: item.id}}" target="_blank">
                      <img :src="item.img" class="image">
                  </router-link>
                <div class="inner" style="padding: 15px;">
                  <router-link class="title" :to="{name: 'Itemlist', params: {foodId: item.id}}" target="_blank">{{item.name}}</router-link>
                  <div class="bottom clearfix">
                    <span>{{item.collect}}收藏 · {{item.like}}点赞</span>
                  </div>
                  <div class="photo">
                      <img :src="item.headimgurl"  onerror="this.onerror=null;this.src='../../assets/img/tou.png'">
                      <p>{{item.author}}</p>
                  </div>
                </div>
              </el-card>
            </el-col>

          </el-row>
          <div v-show="hasMore"  class="addMore" @click="addMoreFun">
              <p>点击加载更多</p>
          </div>
          <div v-show="!hasMore" class="noMore" >
              没有更多数据
          </div>
      </el-col>
  </el-row>
</template>

<script>
import FoodApi from '@/networks/api'
// console.log(classList) classList, IndexShowList, searchShowList 
export default {
  data () {
    // 选项 / 数据
    return {
      classList: '', // 分类
      temCardList: [], // 最新列表
      pageId: 0, // 当前ID号
      classId: 0, // 分类id
      keywords: '', // 关键词
      hasMore: false // 是否还有更多
    }
  },
   metaInfo: {
    title: '美食列表'
  },
  computed: {
    // console.log(1111);
  },
  methods: {
    // 事件处理器
    async showSearchShowList (initpage) {
      try {
         // 展示数据
        this.classId = this.$route.params.classId ? parseInt(this.$route.params.classId) : ''; // 获取传参的classId
        this.keywords = this.$route.params.keywords ? this.$route.params.keywords : '' // 获取传参的keywords
        // console.log(this.$route.query,this.classId,this.keywords,this.pageId,initpage);
        if (initpage) {
          this.pageId = 0
          this.temCardList = []
        }
        const response = await FoodApi.searchShowList({
          pageId: this.pageId,
          classId: this.classId,
          name: this.keywords,
        })
        if (response.data.code == 1001) {
          var msg = response.data.data
          // console.log(result.data);
          if (msg.length > 0 && msg.length < 8) {
            this.hasMore = false
          } else {
            this.hasMore = true
          }
          if (initpage == 0) {
            this.temCardList = this.temCardList.concat(msg)
          } else {
            this.temCardList = msg
          }
          this.pageId = msg[msg.length - 1].id
          // console.log(this.temCardList);
        } else if (response.data.code == 1003) {
          this.hasMore = false
        }
      } catch (error) {
        console.log(error)
      }
    },
    addMoreFun: function() {
      //查看更多
      this.showSearchShowList(false)
    },
    routeChange: function(ifif) {
      this.showSearchShowList(true)
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'routeChange'
  },
  components: {
  },
  async created() {
    try {
      const response = await FoodApi.classList()
      if (response.data.code == 1001) {
        this.classList = response.data.data
      }
      this.showSearchShowList(true)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>
/**********快捷分类列表***********/
.shotBox {
  /*padding:30px 0;*/
  margin-bottom: 35px;
  background: #f4f0ec;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.shotSelect {
  border-right: 1px dotted #e4e4e4;
  margin: 30px 0;
  min-height: 120px;
  /*padding:0 10px;*/
  /*padding:4px 0 0 15px;*/
}
.shotSelect:last-child {
  border-right: 1px solid transparent;
}
.shotSelect h1 {
  text-align: center;
  line-height: 150%;
  margin-bottom: 7px;
}
.shotSelect ul li:hover a,
.shotSelect ul li a.chosed {
  background: #a37011;
  color: #fff;
}

.item {
  padding: 3px 0;
  /*line-height: 20px;*/
  /*height:20px;*/
}

.shotSelect ul {
  /*min-height: 120px;*/
  text-align: center;
}
.shotSelect ul li {
  display: inline-block;
}
.shotSelect ul li a {
  display: inline-block;
  padding: 4px 8px;
  margin: 2px;
  /*line-height: 28px;*/
  text-align: center;
}
/**********菜谱列表**************/
.temCard .cardCol {
  margin-bottom: 20px;
}
.temCard .time {
  font-size: 13px;
  color: #999;
}
.temCard .inner {
  position: relative;
}
.temCard .photo {
  position: absolute;
  right: 15px;
  top: -14px;
  text-align: center;
  overflow: hidden;
  font-size: 12px;
  color: #6a6a6a;
  width: 82px;
}
.temCard .photo img {
  background: #fff;
  width: 46px;
  height: 46px;
  border: 2px solid #fff;
  border-radius: 50%;
  /*padding:5px;*/
}

.temCard .bottom {
  margin-top: 12px;
  line-height: 12px;
}
.temCard .bottom span {
  font-size: 12px;
  color: #6a6a6a;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 10px;
}

.temCard .button {
  padding: 0;
  float: right;
}
.temCard .imgBox {
  width: 100%;
  height: 200px;
  cursor: pointer;
  display: block;
  border-radius: 4px;
}
.temCard .image {
  /*max-width: 100%;*/
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*display: inline-block;*/
  /*display: block;*/
}
.temCard .title {
  cursor: pointer;
  font-size: 16px;
  color: #333;
}
.addMore {
  text-align: center;
  height: 50px;
  background: #ffcc66;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.addMore p {
  line-height: 50px;
  color: #a37011;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 16px;
  cursor: pointer;
}
.noMore {
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>
