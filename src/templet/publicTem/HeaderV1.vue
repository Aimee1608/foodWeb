<template>
    <div class="headBack">
        <el-row class="container">
            <el-col :span="24">
                <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                    <el-menu-item index="" class="searchBox">
                        <el-row>
                            <el-col>
                                <img class="logoImg" src="src/img/logo.png" alt="">
                            </el-col>
                        </el-row>
                    </el-menu-item>
                  <el-menu-item index="/Home" >首页</el-menu-item>
                   <el-menu-item index="/Foodlist">菜谱</el-menu-item>
                   <!-- <el-menu-item index="/Select">分类</el-menu-item>
                   <div class="selectBoxShow">
                       <el-row  class="selectBox" :gutter="10" v-for="(item, index) in headclassList" :key="item.id" v-if="index<=3?true:false" >
                           <el-col :span="6" class="smalltitle" >
                               {{item.class_name}}
                           </el-col>
                           <el-col :span="18">
                               <el-row :gutter="10">
                                   <el-col :span="8" v-for="(ditem, index) in item.class_names" :key="ditem.id">
                                       <el-menu-item :index="'/Foodlist?classId='+ditem.id">{{ditem.class_name}}</el-menu-item>
                                   </el-col>
                               </el-row>
                           </el-col>
                       </el-row>
                       <div class="selectMore">
                           <a href="#/Select">查看更多</a>
                       </div>
                   </div> -->
                  <el-submenu index="/Select" >
                        <template slot="title" index="/Select"><a href="#/Select">分类</a></template>
                        <el-row  class="selectBox" :gutter="10" v-for="(item, index) in headclassList" :key="item.id" v-if="index<=3?true:false" >
                            <el-col :span="6" class="smalltitle" >
                                {{item.class_name}}
                            </el-col>
                            <el-col :span="18">
                                <el-row :gutter="10">
                                    <el-col :span="8" v-for="(ditem, index) in item.class_names" :key="ditem.id">
                                        <el-menu-item :index="'/Foodlist?classId='+ditem.id">{{ditem.class_name}}</el-menu-item>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <div class="selectMore">
                            <a href="#/Select">查看更多</a>
                        </div>
                  </el-submenu>
                  <el-menu-item index="/Hotnews">热门文章</el-menu-item>
                  <div class="searchBox el-menu-item">
                      <el-row class="demo-autocomplete">
                          <el-col >
                            <el-autocomplete
                              class="inline-input"
                              v-model="state"
                              :fetch-suggestions="querySearch"
                              placeholder="请输入内容"
                              @select="handlesearchSelect"
                              icon="search"
                              :on-icon-click="handleIconClick"
                            ></el-autocomplete>
                          </el-col>
                        </el-row>
                  </div>
                </el-menu>
            </el-col>

        </el-row>
    </div>
</template>

<script>
import {classList} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                headclassList:'',//分类列表
                restaurants: [],
                state: '',
                isCollapse: true
            }
        },
        methods: { //事件处理器
            handleSelect(key, keyPath) {//导航栏选择
               console.log(key, keyPath);
            },
            querySearch(queryString, cb) {//快速选择
                console.log(queryString,cb,this.$router.query);
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
              },
              createFilter(queryString) {
                return (restaurant) => {
                  return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
                };
              },
              loadAll() {
                return [
                  { "value": '可乐鸡翅' },
                  { "value": "红烧肉" },
                  { "value": "冬瓜丸子汤" },
                  { "value": "鱼香肉丝" },
                  { "value": "麻辣香锅" },
                  { "value": "酸辣土豆丝" },
                  { "value": "排骨" },
                  { "value": "鱼" },
                  { "value": "面包" },
                  { "value": "凉菜" }
                ];
              },
              handlesearchSelect(item) {
                //    console.log(item.value);
                   if(this.state!=""&&this.state!=undefined&&this.state!=null){
                         this.$router.push({path:'/Foodlist?keywords='+this.state});
                   }
               },
               handleIconClick(ev) {
                //   console.log(this.state);
                  if(this.state!=""&&this.state!=undefined&&this.state!=null){
                        this.$router.push({path:'/Foodlist?keywords='+this.state});
                  }
                }

        },
        mounted() {
          this.restaurants = this.loadAll();
        },
        components: { //定义组件

        },
        created() { //生命周期函数
            classList((msg)=>{
                this.headclassList = msg;
                // console.log(msg);
            })
        }
    }
</script>

<style>
.headBack{
    width:100%;
    background:#eef1f6;
    margin-bottom:30px;
    box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
}
.el-menu-demo a{
    color:#48576a;
}
.el-submenu.is-active .el-submenu__title>a,.el-submenu.is-active .el-submenu__title i,.el-menu-item.is-active{
    color:#A37011;
}
.el-submenu.is-active{
    color:#48576a;
}
.el-menu--horizontal.el-menu--dark .el-submenu__title.is-active, .el-menu-item.is-active{
    /*border-bottom: 5px solid #A37011;*/
}
ul.el-menu-demo .el-menu-item:hover ,ul.el-menu-demo>.el-submenu:hover .el-submenu__title,.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom: 5px solid #A37011;
}
ul.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, div.el-menu-item.searchBox:hover,li.el-menu-item.searchBox:hover,.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom: 5px solid transparent;
    cursor:default;
}
ul.el-menu-demo>.el-submenu .el-menu-item:hover{
    /*border-bottom: 5px solid transparent;*/
    border-bottom: none;
    background:#A37011;
    color:#fff;
}
ul.el-menu-demo>.el-submenu .el-col li,ul.el-menu-demo>.el-submenu  .selectMore a{
    color:#A37011;
}

.el-submenu .el-menu{
    width:370px;
}
.el-menu--horizontal .el-submenu .el-menu-item{
    min-width: 10px;
}
.el-menu--horizontal .el-submenu .selectBox{
    border-bottom: 1px solid #f1f1f1;
    display: block;
    width:370px;
    min-height:70px;
    line-height: 150%;
    padding:10px;
    cursor: default;
}
.el-submenu .smalltitle{
    height:36px;
    line-height: 36px;
}
.el-menu--horizontal .el-submenu .selectBox>.el-row{
    /*border-bottom: 1px solid #f1f1f1;*/
    /*margin-bottom: 10px;*/
}
.el-menu--horizontal .el-submenu  .el-menu{
    border-radius: 0;
    padding:0;
}
.el-menu--horizontal .el-submenu .selectMore{
    text-align: center;
    padding:10px 0;
    background:#f1f1f1;

}

.el-menu-item .el-input{
    /*line-height:60px;*/
    vertical-align:top;
}
.el-menu-item input{
    /*vertical-align:middle;*/
}
.logoImg{
    width:100%;
    height:60px;
}

</style>
