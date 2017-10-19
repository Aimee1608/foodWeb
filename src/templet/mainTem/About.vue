<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <el-row class="container">
            <el-col :span="24">
                关于
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
