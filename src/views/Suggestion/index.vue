<template lang="html">
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
</template>

<script>
import FoodApi from '@/networks/api'
export default {
  data () {
    return {
      input: "",
      textarea: "",
      emailshow: false,
      textshow: false
    }
  },
  methods: {
    //意见反馈提交
    async sendSug () {
      try {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (reg.test(this.input) && this.textarea) {
          console.log(this.input, this.textarea)
          this.emailshow = false
          this.textshow = false
          // location="mailto:shuigongqian@sina.com?cc="+this.input+"&subject=意见反馈&body="+this.textarea;
          const response = await FoodApi.suggestionBack({
            email: this.input,
            content: this.textarea
          })
          if (response.data.code == 1001) {
            this.input = ""
            this.textarea = ""
            this.$message({
              message: "发送成功",
              type: "success"
            })
          }
        } else if (!reg.test(this.input) && this.textarea) {
          this.emailshow = true
          this.textshow = false
        } else if (reg.test(this.input) && !this.textarea) {
          this.textshow = true
          this.emailshow = false
        } else {
          this.emailshow = true
          this.textshow = true
        }
      } catch (error) {

      }
    }
  },
  components: {

  }
}
</script>

<style lang="css">
.suggestionBox p {
  text-indent: 28px;
  margin-bottom: 20px;
}
.suggestionBox > div {
  /*text-indent: 28px;*/
}
.suggestionBox .inputBox {
  /*text-indent: 28px;*/
  margin-left: 30px;
  position: relative;
  margin-bottom: 30px;
}
.suggestionBox .inputBox .el-input,
.suggestionBox .inputBox .el-textarea,
.suggestionBox .inputBox .el-alert {
  padding-left: 50px;
  width: 80%;
  box-sizing: border-box;
}
.suggestionBox .inputBox .el-input input {
  border-radius: 4px;
}
.suggestionBox .inputBox .el-alert {
  background: transparent;
  color: #ff4949;
  display: none;
}
.suggestionBox .inputBox .el-alert.show {
  display: block;
}
.suggestionBox .inputBox .el-alert i {
  color: #ff4949;
}
.suggestionBox .inputBox > span {
  position: absolute;
  left: 0;
  top: 10px;
}
.suggestionBox .inputBox .el-button {
  margin: 20px 50px;
  background: #ffcc66;
  border: 1px solid #ffcc66;
  color: #a37011;
  /*padding:10px 20px;*/
  letter-spacing: 4px;
}
</style>
