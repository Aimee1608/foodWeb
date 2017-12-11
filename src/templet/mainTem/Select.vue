<template lang="html">
    <div  class="static" >
        <wbc-nav ></wbc-nav>
        <el-row class="container">
            <el-col :span="24">
                <div class="selectList" v-for="(item, index) in selectList" :key="item.id">
                    <h1>{{item.class_name}}</h1>
                    <el-row >
                        <el-col :xs="6" :sm="3" v-for="(ditem, index) in item.class_names" :key="ditem.id">
                            <img class="fitImg" :src="ditem.image"  onerror="this.onerror=null;this.src='src/img/logo.png'"/>
                            <a :href="'#/Foodlist?classId='+ditem.id">{{ditem.class_name}}</a>
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
import {classList} from '../../pubJS/server.js'
export default {
    name:'Select',
    data () {
        return {
            selectList:''
        }
    },
    components: {
          'wbc-nav': Header,
           'wbc-footer':Footer
          // 'wbc-menu': Menu,
      },
      created() { //生命周期函数
          classList((msg)=>{
              this.selectList = msg;
              console.log(msg);
          })
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
    margin-bottom:8px;
    font-weight: bold;
}
.selectList .el-col{
    padding:10px;
    text-align: center;
    /*background: #fff;*/
}
.selectList .el-col img{
    height:60px;
    margin-bottom: 10px;
    /*max-height: 80px;*/
}
.selectList a{
    padding:3px 5px;
    display: inline-block;
}
.selectList a:hover{
    /*text-decoration:underline;*/
    background:#A37011;
    color:#fff;
}

</style>
