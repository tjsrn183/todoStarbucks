<template>
<div class="entire">
  <input type="text" @keyup.enter='addTodofunc' v-model="todoInput" placeholder="할 일을 입력하세요" class="common"  :class="{visible:visible}"/>

</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props:['visible'],
    data(){
        return {
            todoInput:""
        }
    },
methods:{
    ...mapActions(['addTodo']),
    addTodofunc(){
        if(this.todoInput){
            this.addTodo(this.todoInput);
            this.todoInput="";
        }
    }
}
}
</script>

<style>
.entire {
    z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.common {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: translateY(100%); 
  opacity: 0;
}

.visible {
  transform: translateY(0);   
  opacity: 1;
}

</style>