<template>
  <div class="panel">
    <todo-list-vue></todo-list-vue>
    <plus-button/>
    <input-box-vue/>
  </div>
</template>

<script>
import InputBoxVue from './InputBox.vue'
import PlusButton from './PlusButton.vue'
import TodoListVue from './TodoList.vue'

export default {

components:{
    PlusButton,
    InputBoxVue,
    TodoListVue
}
}
</script>

<style>
.panel{
    height: 60%;
    width: 40%;
    background-color: white;
    display: flex;
    flex-direction: column;
}


</style>