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
                  <el-submenu index="/Select" >
                    <template slot="title"><a href="#Select">分类</a></template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-submenu>
                  <el-menu-item index="/Hotnews">热门文章</el-menu-item>
                  <el-menu-item index="" class="searchBox">
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
                  </el-menu-item>
                </el-menu>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                restaurants: [],
                state: '',
                isCollapse: true
            }
        },
        methods: { //事件处理器
            handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
    },
            handleSelect(key, keyPath) {
            //    console.log(key, keyPath);
            },
            querySearch(queryString, cb) {
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
                  { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                  { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                  { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                  { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                  { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                  { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                  { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                  { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                  { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                  { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                  { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                  { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                  { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                  { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                  { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                  { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                  { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                  { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                  { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                  { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                  { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" }
                ];
              },
              handlesearchSelect(item) {
                   console.log(item);
               },
               handleIconClick(ev) {
                  console.log(ev);
                }

        },
        mounted() {
          this.restaurants = this.loadAll();
        },
        components: { //定义组件

        },
        created() { //生命周期函数

        }
    }
</script>

<style>
.headBack{
    width:100%;
    background:#eef1f6;
    margin-bottom:30px;
}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.searchBox:hover{
    /*color:#999;*/
    border-bottom: 5px solid transparent;
    cursor:default;
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
