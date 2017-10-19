<template>
    <el-row class="smallselectBox"  :gutter="20">
        <el-col :xs="6" :sm="4" :md="3" v-for="(o, index) in 16" :key="o">
            <a href="#/Select" >
                <img class="fitImg" src="src/img/logo.png" alt="">
                <p>酸菜</p>
            </a>
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
.smallselectBox a{
    display: block;
}
.smallselectBox img{
    background:#fff;
}
.smallselectBox{
    background:#f4f0ec;
    padding:10px;
    box-sizing: border-box;
    /*box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);*/
}
.smallselectBox .el-col{
    margin:10px 0;
}
 .smallselectBox p{
    text-align: center;
}
</style>
