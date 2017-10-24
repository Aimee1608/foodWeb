<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <el-row class="container suggestionBox">
            <el-col :span="24">
                <h1 class="pageTitle">意见反馈</h1>
                <p>
                    您有什么问题或建议想对我们说？
                </p>
                <div class="inputBox">
                    <span>Email:</span>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <span>意见:</span>
                    <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
                    <div class="">
                        <el-button type="primary">发送</el-button>
                    </div>

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
            input:'',
            textarea:""
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
    .suggestionBox p{
        text-indent: 28px;
        margin-bottom: 20px;
    }
    .suggestionBox>div{
        /*text-indent: 28px;*/
    }
    .suggestionBox .inputBox{
        /*text-indent: 28px;*/
        margin-left: 30px;
        position: relative;
        margin-bottom: 30px;
    }
    .suggestionBox .inputBox .el-input,.suggestionBox .inputBox .el-textarea{
        padding-left: 50px;
        width:80%;
        box-sizing: border-box;
    }
    .suggestionBox .inputBox>span{
        position: absolute;
        left:0;
        top:10px;
    }
    .suggestionBox .inputBox .el-button{
        margin:20px 50px;
        background:#FFCC66;
        border: 1px solid #FFCC66;
        color:#A37011;
        /*padding:10px 20px;*/
        letter-spacing: 4px;
    }


</style>
