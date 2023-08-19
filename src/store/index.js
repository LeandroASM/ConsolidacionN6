import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nameGame: '',
    nameUser:''
  },
  getters: {
  },
  mutations: {
    SET_NAME_GAME:(state, nameGame)=>{
      console.log(nameGame);
      state.nameGame= nameGame
    },
    SET_NAME_USER:(state, nameUser)=>{
      state.nameUser= nameUser
    },

  },
  actions: {
    setNameGame({commit}, nameGame){
      
      
      commit('SET_NAME_GAME', nameGame)
    },
    setNameUser({commit}, nameUser){
      commit('SET_NAME_USER', nameUser)
    }
  },
  modules: {
  }
})
