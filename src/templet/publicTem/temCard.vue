<template>
    <div>
        <el-row :gutter="20">
          <el-col class="cardCol" :xs="12" :sm="8" :md="8"  v-for="(o, index) in 10" :key="o" >
            <el-card :body-style="{ padding: '0px' }">
                <div class="imgBox">
                     <img src="src/img/3.jpg" class="image">
                </div>
              <div class="inner" style="padding: 15px;">
                <span class="title">好吃的汉堡</span>
                <div class="bottom clearfix">
                  <span>999收藏 · 9999点赞</span>
                </div>
                <div class="photo">
                    <img src="src/img/cai02.png" alt="">
                    <p>大厨师</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                currentDate: new Date()
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
.cardCol{
    margin-bottom:20px;
}
.time {
font-size: 13px;
color: #999;
}
.inner{
    position: relative;
}
.photo{
    position: absolute;
    right:15px;
    top:-14px;
    text-align: center;
    overflow: hidden;
    font-size: 12px;
    color:#6a6a6a;
    width:82px;
}
.photo img{
    background:#999;
    width:46px;
    height:46px;
    border: 2px solid #fff;
    border-radius: 50%;
    padding:5px;
}

.bottom {
    margin-top: 12px;
    line-height: 12px;
}
.bottom span{
    font-size:12px;
    color:#6a6a6a;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right:10px;
}

.button {
    padding: 0;
    float: right;
}
.imgBox{
    width:100%;
    height:200px;
    cursor: pointer;
    /*display: block;*/
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
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
