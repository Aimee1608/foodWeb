<template lang="html">
    <div  class="">
        <wbc-nav ></wbc-nav>
        <h1 v-if="ok">yes</h1>
        <h1 v-else>no</h1>
        <div v-if="Math.random() > 0.5">
          Now you see me
        </div>
        <div v-else>
          Now you don't
        </div>
        <div v-if="type === 'A'">
          A
        </div>
        <div v-else-if="type === 'B'">
          B
        </div>
        <div v-else-if="type === 'C'">
          C
        </div>
        <div v-else>
          Not A/B/C
        </div>
        <template v-if="loginType === 'username'">
          <label>Username</label>
          <input placeholder="Enter your username" key="username-input">
        </template>
        <template v-else>
          <label>Email</label>
          <input placeholder="Enter your email address" key="email-input">
        </template>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name:'demo02',
    data (){
        return{
            ok:true,
            type:'A',
            loginType:'username'
        }
    },
    components: {
          'wbc-nav': Header,
          // 'wbc-menu': Menu,
      }
}
</script>

<style lang="css">
</style>
