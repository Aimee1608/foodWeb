<template>
  <div>
    <temHeader></temHeader> 
    <transition name="move" mode="out-in">
      <router-view></router-view>
    </transition>
    <temFooter></temFooter>
  </div>
</template>

<script>
import temHeader from './Header.vue'
import temFooter from './Footer.vue'
export default {
  data () {
    return {

    }
  },
  components: { // 组件
    temHeader,
    temFooter
  },
  computed: { // 计算

  },
  methods: { // 方法事件

  },
  mounted () { // 加载完成

  },
  created () { // 创建

  }
}
</script>

<style>

</style>
