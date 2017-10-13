<template lang="html">
    <div  class="static" >
        <wbc-nav ></wbc-nav>
        <el-row class="container">
            <el-col :span="24">
                <div class="selectList" v-for="(o, index) in selectItem" :key="o">
                    <h1>热门食材</h1>
                    <el-row >
                        <el-col :xs="6" :sm="3" v-for="(o, index) in selectItem" :key="o">
                            <a href="#">{{o}}</a>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import Header from '../publicTem/Header.vue'
import Footer from '../publicTem/Footer.vue'
export default {
    name:'Select',
    data () {
        return {
            selectItem:[
                "美食",
                "美食",
                "美食",
                "美食",
                "美食",
                "美食",
                "美食",
                "美食",
                "美食"
            ]
        }
    },
    components: {
          'wbc-nav': Header,
           'wbc-footer':Footer
          // 'wbc-menu': Menu,
      }
}
</script>

<style lang="css">
.selectList{
    border-bottom: 1px dotted #e5e5e5;
    margin-bottom: 20px;
    padding-bottom:20px;
}
.selectList h1{
    width:300px;
    padding:17px 0 8px 0;
    font-size: 16px;
    margin:0;
    font-weight: bold;
}
    .selectList ul li{


    }
</style>
