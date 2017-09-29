<template lang="html">
  <div class="" >
      <wbc-nav ></wbc-nav>
      <ul >
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>
      <ul id="example-2">
          <li v-for="(item, index) in items">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
          </li>
        </ul>
      <ul id="v-for-object" class="demo">
          <li v-for="value in object">
            {{ value }}
          </li>
      </ul>
      <div v-for="(value, key) in object">
          {{ key }}: {{ value }}
      </div>
      <div v-for="(value, key, index) in object">
          {{ index }}. {{ key }}: {{ value }}
      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
    data(){
        return{
            parentMessage:'Parent',
            items:[
                {message:'Foo'},
                {message:'Bar'}
            ],
            object: {
              firstName: 'John',
              lastName: 'Doe',
              age: 30
            }
        }
    },
    created: function () {
       // `this` 指向 vm 实例
       console.log('a is: ' + this.object.age)
       this.object.age = 27;
   },
   components: {
         'wbc-nav': Header,
         // 'wbc-menu': Menu,
     }
}
// demoFo.object = Object.assign({}, demoFo.object, {
//   age: 27,
// })
</script>

<style lang="css">
</style>
