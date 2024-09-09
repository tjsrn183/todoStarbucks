import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        todo:[]
    },
    mutations:{
        addTodo(state,item){
            state.todo.push(item)
        },
        removeTodo(state,index){
            state.todo.splice(index,1)
        }
    },
    actions:{
        addTodo({commit},item){
            commit('addTodo',item)
        }
        ,
        removeTodo({commit},index){
            commit('removeTodo',index)
        }
    }
})