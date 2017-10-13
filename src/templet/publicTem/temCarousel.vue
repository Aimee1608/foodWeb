<template>
  <div class="block" >
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="150px">
      <el-carousel-item v-for="item in imgList" :key="item.index">
        <img class="carouselImg" v-bind:src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                imgList:[
                    {index:0,url:'src/img/0.jpg'},
                    {index:1,url:'src/img/2.jpg'},
                    {index:2,url:'src/img/3.jpg'},
                    {index:3,url:'src/img/4.jpg'}
                ]
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
    .block{
        margin:20px 0;
    }
    .el-carousel__item h3 {
       color: #475669;
       font-size: 14px;
       opacity: 0.75;
       line-height: 150px;
       margin: 0;
     }

     .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
     }

     .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
     }
     .carouselImg{
         width:100%;
         height:auto;
     }
</style>
