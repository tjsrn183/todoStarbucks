<template>
  <div class="item">{{todoItem}}
<button @click="removeTodo(index)" class="removeButton">x</button>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
props:['todoItem','index'],
methods:{
    ...mapActions(['removeTodo'])
}
}
</script>

<style>
.item {
    margin:10px;
    border-radius: 5px;
    padding: 5px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    font-size: 24px;
    font-weight: 600;
    color: rgb(171, 171, 171);
}
.removeButton{
    margin: 0px 10px ;
    font-size: 30px;
    border-radius: 100%;
    background-color: var(--green-color);
    border:none;
    color:white
}
</style>