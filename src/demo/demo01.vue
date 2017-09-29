<template lang="html">
    <div  class="static" >
        <wbc-nav ></wbc-nav>
        <p v-bind:class="{ active: isActive, 'text-danger': hasError }">hellow vue Class</p>
        <p v-bind:class="[activeClass, errorClass]">hahahha</p>
        <div v-bind:style="styleObject">sstyleObject</div>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name:'demo01',
    data () {
        return {
            isActive:true,
            hasError:false,
            activeClass: 'active',
            errorClass: 'text-danger',
            styleObject: {
                color: 'red',
                fontSize: '13px'
             }
        }
    },
    components: {
          'wbc-nav': Header,
          // 'wbc-menu': Menu,
      }
}
</script>

<style lang="css">
.active{
    color:#f00;
}
.text-danger{
    background: #666;
}
</style>
