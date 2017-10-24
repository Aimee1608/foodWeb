<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <el-row class="container adverBox">
            <el-col :span="24">
                <h1 class='pageTitle'>
                    广告合作
                </h1>
                <p>美食美荟目前有微信小程序、微信公众号、web响应式网页版多个平台，内容丰富，功能齐全，用户流量客观，诚挚欢迎广告合作！</p>
                <div class="advImg">
                    <img src="src/img/woshou.png" alt="" class="fitImg">
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

.adverBox p{
    text-indent: 2em;
    margin-bottom: 40px;
}
</style>
