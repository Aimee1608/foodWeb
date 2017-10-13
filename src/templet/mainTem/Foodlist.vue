<template>
  <div >
        <wbc-nav></wbc-nav>
        <el-row class="container">
            <el-col :span="24">
                <el-row class="shotBox">
                    <el-col class="shotSelect" :xs="12" :sm="6" :md="6" v-for="(o, index) in 4" :key="o">
                        <h1>热门食材</h1>
                        <el-row>
                            <el-col class="item" :xs="6" :sm="8" :md="6" v-for="(o, index) in selectItem" :key="o">
                                <a href="#">{{o}}</a>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <Foodlist></Foodlist>
                <Pagination
                 :totalCount="totalCount"
                :currentPage="currentPage"
                :pageSize="pageSize"
                @sendNum="sendNum"
                 ></Pagination>
             </el-col>
        </el-row>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
// import home from './Home.vue'
import Header from '../publicTem/Header.vue'
import Footer from '../publicTem/Footer.vue'
import Foodlist from '../publicTem/temCard.vue'
import temPagination from '../publicTem/temPagination.vue'
    export default {
        data() { //选项 / 数据
            return {
                currentPage: 5,
                totalCount:600,
                pageSize:8,
                now:0,
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
        computed:{
            // console.log(1111);
        },
        methods: { //事件处理器
             sendNum(val){
                 console.log('hahah',val);
                 this.currentPage = val;
             }
        },
        components: { //定义组件
            'wbc-nav': Header,//首页
            'Pagination':temPagination,//分页
            'Foodlist':Foodlist,//列表
            'wbc-footer':Footer
        },
        created() { //生命周期函数

        }
    }
</script>

<style>
.shotBox{
    /*padding:30px 0;*/
    margin-bottom: 35px;
    background: #f4f0ec;
}
.shotSelect{
    border-right:1px dotted #e4e4e4;
    margin: 30px 0;
    /*padding:4px 0 0 15px;*/
}
.shotSelect:last-child{
    border-right:1px solid transparent;
}
.shotSelect h1{
    text-align: center;
    line-height: 150%;
    margin-bottom:7px;
}
.shotSelect a{
    padding:4px 3px;
}
.item{
    padding:3px 0;
    /*line-height: 20px;*/
    /*height:20px;*/
}
</style>
