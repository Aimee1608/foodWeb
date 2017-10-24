<template>
    <div>
    <el-row :gutter="20" class="temCard">
      <el-col class="cardCol" :xs="12" :sm="8" :md="8"  v-for="item in temCardList" :key="item.id" >
        <el-card :body-style="{ padding: '0px' }">
            <a class="imgBox" :href="'#/Itemlist?foodId='+item.id" >
                 <img :src="item.img" class="image">
            </a>
          <div class="inner" style="padding: 15px;">
            <a class="title" :href="'#/Itemlist?foodId='+item.id" >{{item.name}}</a>
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
    <div v-show="hasMore"  class="addMore" @click="addMoreFun">
        <p>点击加载更多</p>
    </div>
    <div v-show="!hasMore" class="noMore" >
        没有更多数据
    </div>
    </div>
</template>

<script>
import {IndexShowList} from '../../pubJS/server.js'
    export default {
        data() { //选项 / 数据
            return {
                temCardList:'',
                pageId:0,
                hasMore:true
            }
        },
        methods: { //事件处理器
            addMoreFun:function(){
                // console.log(555);
                IndexShowList(this.pageId,(msg)=>{
                    var arr = this.temCardList;
                    arr = arr.concat(msg);
                    this.temCardList=this.temCardList.concat(msg);
                    // console.log(msg);
                    if(msg.length>0&&msg.length<8){
                        this.hasMore = false
                    }else{
                        this.hasMore = true;
                    }
                    this.pageId = msg[msg.length-1].id;
                    // console.log(this.temCardList);
                })
            }
        },
        components: { //定义组件

        },
        created() { //生命周期函数
            IndexShowList(this.pageId,(msg)=>{
                this.temCardList = msg;
                // console.log(msg);
                if(msg.length>0&&msg.length<8){
                    this.hasMore = false
                }else{
                    this.hasMore = true;
                }
                this.pageId = msg[msg.length-1].id;
                // console.log(this.temCardList);
            })
        }
    }
</script>

<style>
.temCard .cardCol{
    margin-bottom:20px;
}
.temCard .time {
font-size: 13px;
color: #999;
}
.temCard .inner{
    position: relative;
}
.temCard .photo{
    position: absolute;
    right:15px;
    top:-14px;
    text-align: center;
    overflow: hidden;
    font-size: 12px;
    color:#6a6a6a;
    width:82px;
}
.temCard .photo img{
    background:#999;
    width:46px;
    height:46px;
    border: 2px solid #fff;
    border-radius: 50%;
    padding:5px;
}

.temCard .bottom {
    margin-top: 12px;
    line-height: 12px;
}
.temCard .bottom span{
    font-size:12px;
    color:#6a6a6a;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right:10px;
}

.temCard .button {
    padding: 0;
    float: right;
}
.temCard .imgBox{
    width:100%;
    height:200px;
    cursor: pointer;
    display: block;
    border-radius: 4px;
}
.temCard .image {
/*max-width: 100%;*/
    width:100%;
    height:100%;
    object-fit:cover;
/*display: inline-block;*/
/*display: block;*/
}
.temCard .title{
    cursor: pointer;
    font-size: 16px;
    color:#333;
}
.addMore{
    text-align: center;
    height:50px;
    background:#FFCC66;
    border-radius: 3PX;
    box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
}
.addMore p{
    line-height: 50px;
    color:#A37011;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 16px;
    cursor: pointer;
}
.noMore {
    text-align: center;
    height:50px;
    line-height: 50px;
}
</style>
