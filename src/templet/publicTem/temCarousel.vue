<template>
  <div class="block" >
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="150px">
      <el-carousel-item v-for="item in temCarouselList" :key="item.id">
          <a class="imgBox" href="#/Itemlist">
               <img :src="item.img" class="image">
          </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {GetFocus} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                temCarouselList:''
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件

        },
        created() { //生命周期函数
            GetFocus((msg)=>{
                this.temCarouselList = msg;
                console.log(this.temCardList);
            })
        }
    }
</script>

<style>
    .block{
        margin-bottom:20px;
        box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
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
