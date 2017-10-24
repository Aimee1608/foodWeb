<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <el-row class="container">
            <el-col :span="24">
                <h1 class="pageTitle">友情链接</h1>
                <div class="">
                    <a href="#">百度</a>
                    <a href="#">新浪微博</a>
                    <a href="#">技术博客</a>
                    <a href="#">github</a>  
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
</style>
