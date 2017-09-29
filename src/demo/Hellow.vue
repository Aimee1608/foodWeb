<template>
    <div class="">
        <wbc-nav ></wbc-nav>
        <p>Hellow</p>
        <ul >
            <li v-for="item in items">
                {{ item.message }}
            </li>
            <li v-for="n in even(numbers)">{{ n }}</li>
        </ul>
    </div>

    <!-- <p> officia deserunt mollit anim id est laborum.</p> -->
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'hellow',
  data () {
    return {
     items: [
             { message: 'Foo' },
             { message: 'Bar' }
           ],
               numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
    methods: {
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
  },
  components: {
        'wbc-nav': Header,
        // 'wbc-menu': Menu,
    }
}
</script>

<style>

</style>
