<template>
    <el-row :gutter="20">
        <el-col class="cardCol" :xs="12" :sm="6" :md="6"  v-for="item in temTodayList" :key="item.id">
            <el-card :body-style="{ padding: '0px' }">
                <a class="imgBox" :href="'#/Itemlist?foodId='+item.id" target="_blank">
                     <img :src="item.img" class="image">
                </a>
                  <div class="inner" style="padding: 15px;text-align:center">
                    <a class="title" :href="'#/Itemlist?foodId='+item.id" target="_blank" >{{item.name}}</a>
                  </div>
          </el-card>
        </el-col>
    </el-row>
</template>

<script>
import {Recommend} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                temTodayList:''
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件

        },
        created() { //生命周期函数
            Recommend((msg)=>{
                this.temTodayList = msg;
                // console.log(this.temTodayList);
            })
        }
    }
</script>

<style>


.cardCol{
    margin-bottom:20px;
}

.inner{
    position: relative;
    /*text-align: center;*/
}
.imgBox{
    width:100%;
    height:200px;
    cursor: pointer;
    display: block;
    border-radius: 4px;
}
.image {
/*max-width: 100%;*/
    width:100%;
    height:100%;
    object-fit:cover;
/*display: inline-block;*/
/*display: block;*/
}
.title{
    cursor: pointer;
    font-size: 16px;
    color:#333;
}
</style>
