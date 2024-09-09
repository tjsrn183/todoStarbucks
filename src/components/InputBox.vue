<template>
  <input type="text" @keyup.enter='addTodofunc' v-model="todoInput"/>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {
            todoInput:""
        }
    },
methods:{
    ...mapActions(['addTodo']),
    addtodofunc(){
        if(this.todoInput){
            this.addTodo(this.todoInput);
            this.todoInput="";
        }
    }
}
}
</script>

<style>

</style>