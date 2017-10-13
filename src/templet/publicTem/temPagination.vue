<template>
    <el-row class="block">
        <el-col :xs="24" :sm="24" :md="24" >
            <!-- <span class="demonstration">显示总数</span> -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="pageSize1"
              layout="total, prev, pager, next"
              :total="totalCount1">
            </el-pagination>
        </el-col>
  </el-row>
</template>

<script>
    export default {
        props:['currentPage','pageSize','totalCount'],
        data() { //选项 / 数据
            return {
                currentPage1: this.currentPage,
                totalCount1:this.totalCount,
                pageSize1:this.pageSize
            }
        },
        methods: { //事件处理器
            handleSizeChange(val) {
               console.log(`每页 ${val} 条`);
             },
             handleCurrentChange(val) {
               console.log(`当前页: ${val}`);
               this.$emit('sendNum',val);//子组件向父组件传参
             }
        },
        components: { //定义组件

        },
        created() { //生命周期函数

        }
    }
</script>

<style>
    .block{
        text-align: center;
    }
</style>
