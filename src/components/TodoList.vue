<template>
<div>
<li v-for="(todoItem,index) in todo" :key="index">
<todo-atom-vue :todoItem='todoItem' ></todo-atom-vue>
  </li>
</div>
  
</template>

<script>
import {mapState} from 'vuex';
import TodoAtomVue from './TodoAtom.vue';

export default {
components:{
     TodoAtomVue
},
computed:{
...mapState(['todo'])
}
}
</script>

<style>

</style>