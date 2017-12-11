<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <el-row class="container suggestionBox">
            <el-col :span="24">
                <h1 class="pageTitle">意见反馈</h1>
                <p>
                    您有什么问题或建议想对我们说？<邮箱>shuigongqian@sina.com
                </p>
                <div class="inputBox">
                    <span>Email:</span>
                    <el-input type="email" v-model="input" placeholder="请输入邮箱"></el-input>
                    <el-alert :class="emailshow?'show':''"
                       title="邮箱格式错误"
                       type="error"
                       show-icon
                        :closable="false"
                       >
                     </el-alert>
                </div>
                <div class="inputBox" >
                    <span>意见:</span>
                    <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
                    <el-alert :class="textshow?'show':''"
                       title="内容不能为空"
                       type="error"
                       show-icon
                        :closable="false"
                       >
                     </el-alert>
                    <div class="">
                        <el-button type="primary"  @click="sendSug">发送</el-button>
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
import {suggestionBack} from '../../pubJS/server.js'
export default {
    data (){
        return{
            input:'',
            textarea:"",
            emailshow: false,
            textshow: false
        }
    },
    methods:{
        //意见反馈提交
        sendSug:function(){
            var that = this;
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
            if(reg.test(that.input)&&that.textarea){
                console.log(that.input,that.textarea);
                that.emailshow = false;
                that.textshow = false;
                 // location="mailto:shuigongqian@sina.com?cc="+that.input+"&subject=意见反馈&body="+that.textarea;
                 suggestionBack(that.input,that.textarea,function(msg){
                     // console.log(msg);
                     that.input = "";
                     that.textarea = "";
                     that.$message({
                         message: '恭喜你，这是一条成功消息',
                         type: 'success'
                      });
                 })


            }else if(!reg.test(that.input)&&that.textarea){
                that.emailshow = true;
                that.textshow = false;
            }else if(reg.test(that.input)&&!that.textarea){
                that.textshow = true;
                that.emailshow = false;
            }else{
                that.emailshow = true;
                that.textshow = true;

            }
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
    .suggestionBox .inputBox .el-input,.suggestionBox .inputBox .el-textarea,.suggestionBox .inputBox .el-alert{
        padding-left: 50px;
        width:80%;
        box-sizing: border-box;
    }
    .suggestionBox .inputBox .el-input input{
        border-radius: 4px;
    }
    .suggestionBox .inputBox .el-alert{
        background: transparent;
        color:#ff4949;
        display: none;
    }
    .suggestionBox .inputBox .el-alert.show{
        display: block;
    }
    .suggestionBox .inputBox .el-alert i{
        color: #ff4949;

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
