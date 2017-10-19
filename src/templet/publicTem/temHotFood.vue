<template>
    <el-row>
        <el-col :span="24"  v-for="(o, index) in 4" :key="o">
            <el-row :gutter="10"  class="smallImg">
                <el-col :span="4" >
                    <img class="fitImg" src="src/img/0.jpg" alt="">
                </el-col>
                <el-col :span="8">
                    <p>可乐鸡翅<a href="#/Select">更多>></a></p>
                </el-col>
                <el-col :span="4">
                    <img class="fitImg" src="src/img/0.jpg" alt="">
                </el-col>
                <el-col :span="4">
                    <img class="fitImg" src="src/img/0.jpg" alt="">
                </el-col>
                <el-col :span="4">
                    <img class="fitImg" src="src/img/0.jpg" alt="">
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件

        },
        created() { //生命周期函数

        }
    }
</script>

<style>
.smallImg {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e4e4e4;
}
.smallImg .el-col{
    height:100px;
}

</style>
