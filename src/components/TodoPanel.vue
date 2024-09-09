<template>
  <div class="panel">
    <todo-list-vue></todo-list-vue>
     <input-box-vue :visible='visible'/>
    <plus-button @toggle='visible=!visible'/>
   
  </div>
</template>

<script>
import InputBoxVue from './InputBox.vue'
import PlusButton from './PlusButton.vue'
import TodoListVue from './TodoList.vue'

export default {
    data(){
        return{
            visible:false
        }
    }
    ,

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
    align-items: center;
    border-radius: 5px;
}


</style>