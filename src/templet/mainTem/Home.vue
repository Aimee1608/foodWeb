<template>
    <div >
        <wbc-nav ></wbc-nav>
        <div class="container">
            <Carousel></Carousel>
            <div class="todayList">
                <h1>今日推荐</h1>
            </div>
            <div class="newList">
                <h1>最新菜谱<a href="#/Foodlist">更多<i class="el-icon-d-arrow-right"></i></a></h1>
            </div>
            <div class="hotSelect">
                <h1>热门分类<a href="#/Select">更多<i class="el-icon-d-arrow-right"></i></a></h1>
            </div>
            <div class="hotFood">
                <h1>热门作品</h1>
            </div>
            <div class="otherWeb">
                <h1>扫描二维码，使用微信小程序</h1>
            </div>
            <div class="advertising">
                <h1>广告</h1>
            </div>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import Header from '../publicTem/Header.vue'
import Footer from '../publicTem/Footer.vue'
import temCarousel from '../publicTem/temCarousel.vue'
    export default {
        name: 'Home',
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: {//自定义组件
              'wbc-nav': Header,
              'Carousel':temCarousel,
              'wbc-footer':Footer
              // 'wbc-menu': Menu,
          },
        created() { //生命周期函数

        }
    }
</script>

<style>

</style>
