<template>
    <div class="longPage">
        <el-row class="container">
            <el-col :span="24">
                <div class="link">
                    <a href="#/About" target="_blank">关于美食美荟</a>
                    <a href="#/Advertising" target="_blank">广告合作</a>
                    <a href="#/Suggestion" target="_blank">意见反馈</a>
                    <a href="#/FriendsLink" target="_blank">友情链接</a>
                </div>
                <div class="Recordnumber">
                    <p>托管于<a href="https://github.com/Aimee1608/foodWeb">GitHub</a> , <a href="https://tongji.baidu.com">百度统计</a> 提供网站统计服务  ©2017 美食美荟 由 <a href="https://cn.vuejs.org/">Vue</a> 搭建,京ICP备17071595号
                    Made by Aimee</p>
                </div>
            </el-col>
        </el-row>
    </div>

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
.longPage{
    background:#f8f8f7;
    margin-top:30px;
    text-align: center;
}
.link{
    margin:15px 0;
}
.Recordnumber{
    margin:20px 0;
}
.link a{
    padding:10px;
}
</style>
