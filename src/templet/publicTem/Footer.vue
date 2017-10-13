<template>
    <div class="longPage">
        <el-row class="container">
            <el-col :span="24">
                <div class="link">
                    <a href="#/About">关于美食美荟</a>
                    <a href="#/Advertising">广告合作</a>
                    <a href="#/Suggestion">意见反馈</a>
                    <a href="#/FriendsLink">友情链接</a>

                </div>
                <div class="Recordnumber">
                    ©2009-2017 北京豆果信息技术有限公司 京ICP证111032号 京公网安备11010102001133号 京网文[2014]0774-174号 食品流通许可证SP1101061510252413
                </div>
                <div class="">

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
</style>
