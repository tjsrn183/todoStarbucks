<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
    <todo-panel-vue/>
  </div>
</template>

<script>
import TodoPanelVue from './components/TodoPanel.vue'

export default {
  
  name: 'App',
  components: {
    TodoPanelVue
  }
}
</script>

<style>
html{
  margin:0;
  background-color: var(--main-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo{
width: 230px;
animation: spin 2s linear infinite;
margin-bottom: 55px;
}
@keyframes spin{
  from{
  transform:rotate(0deg);

  }
  to{
    transform: rotate(360deg);
  }
}
</style>
