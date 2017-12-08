<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <el-row class="container aboutBox">
            <el-col :span="24">
                <h1 class='pageTitle'>
                    关于美食美荟
                </h1>
                <h2 >
                    美食美荟，你的美味生活！
                </h2>
                <p>
                    美食美荟收录了来自各地的多道菜谱的做法，基本每篇都按图片、用料、做法、注意事项划分文章结构更加便于使用。同时对菜谱进行个性化分类，更加方便的找到自己想要的菜式做法。
                </p>
                <p>
                    美食美荟吸引了大批美食爱好者，成功帮助非常多的朋友学会了制作美食的方法。
                </p>
                <div class="erwm">
                    <p>美食美荟还有微信公众号，提供了丰富的内容，可关注下方公众号，参与精彩活动！</p>
                    <img src="src/img/erwm.jpg" alt="">
                </div>
                <div class="erwm">
                    <p>美食美荟————微信小程序，先有收藏点赞、发布菜谱等功能。方便使用，便于管理自己的菜谱！</p>
                    <img src="src/img/xiaocx.jpg" alt="">
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
    data (){
        return{

        }
    },
    components: {
          'wbc-nav': Header,//导航
          'wbc-footer':Footer
          // 'wbc-menu': Menu,
      }
}
</script>

<style lang="css">

    .aboutBox h2{
        width:100%;
        font-size: 20px;
        margin-bottom:20px;
        text-indent: 28px;
    }
    .aboutBox p{
        line-height: 180%;
        text-indent: 28px;
        margin-bottom: 20px;
    }
    .aboutBox .erwm img{
        width:150px;
        height:150px;
        padding-left:50px;
        padding-bottom:20px;
    }
</style>
