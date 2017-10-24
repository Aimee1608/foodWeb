<template>
    <!-- <div> -->
        <el-row :gutter="20" class="temCardHome">
          <el-col class="cardCol" :xs="12" :sm="6" :md="6"  v-for="item in temCardListHome" :key="item.id" >
            <el-card :body-style="{ padding: '0px' }">
                <a class="imgBox" :href="'#/Itemlist?foodId='+item.id" target="_blank">
                     <img :src="item.img" class="image">
                </a>
              <div class="inner" style="padding: 15px;">
                <a class="title" :href="'#/Itemlist?foodId='+item.id" target="_blank" >{{item.name}}</a>
                <div class="bottom clearfix">
                  <span>{{item.collect}}收藏 · {{item.like}}点赞</span>
                </div>
                <div class="photo">
                    <img src="src/img/cai02.png" alt="">
                    <p>{{item.author}}</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
    <!-- </div> -->
</template>

<script>
import {IndexShowList} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                temCardListHome:''
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件

        },
        created() { //生命周期函数
            IndexShowList(0,(msg)=>{
                this.temCardListHome = msg;
                console.log(this.temCardListHome);
            })
        }
    }
</script>

<style>
.temCardHome .cardCol{
    margin-bottom:20px;
}
.temCardHome .time {
font-size: 13px;
color: #999;
}
.temCardHome .inner{
    position: relative;
}
.temCardHome .photo{
    position: absolute;
    right:8px;
    top:-14px;
    text-align: center;
    overflow: hidden;
    font-size: 12px;
    color:#6a6a6a;
    width:82px;
}
.temCardHome .photo img{
    background:#999;
    width:46px;
    height:46px;
    border: 2px solid #fff;
    border-radius: 50%;
    padding:5px;
}

.temCardHome .bottom {
    margin-top: 12px;
    line-height: 12px;
}
.temCardHome .bottom span{
    font-size:12px;
    color:#6a6a6a;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right:10px;
}

.temCardHome .button {
    padding: 0;
    float: right;
}
.temCardHome .imgBox{
    width:100%;
    height:200px;
    cursor: pointer;
    display: block;
    border-radius: 4px;
}
.temCardHome .image {
/*max-width: 100%;*/
    width:100%;
    height:100%;
    object-fit:cover;
/*display: inline-block;*/
/*display: block;*/
}
.temCardHome .title{
    cursor: pointer;
    font-size: 16px;
    color:#333;
}
</style>
