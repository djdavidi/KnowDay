import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeComponents: []
  },
  actions: {
    FETCH_ACTIVE_COMPONENTS: ({ commit }) => {
      // have all the localstorage handling in factory
      let componentsList;
      commit("SET_ACTIVE_COMPONENTS", {componentsList})
    },
    ACTIVATE_COMPONENT: (state, {commit}) => {
        commit("ACTIVATE_COMPONENT", { name })
    },
    DEACTIVATE_COMPONENT: (state, {commit}) => {
        commit("DEACTIVATE_COMPONENT", { name})
    },
    SET_COMPONENT_VALUE: (state, {commit}) => {
      commit("SET_COMPONENT_VALUE", {name, value})
    }
  },
  mutations: {
    SET_ACTIVE_COMPONENTS: (state, { componentsList }) => {
      state.activeComponents = componentsList
      // Make call to fetch and attach all here
    },
    ACTIVATE_COMPONENT: (state, {name}) => {
      // Check if the file has been loaded previously
      // i.e deactivate then reactivate. In that case we wouldnt want to fetch again
      state.activeComponents.push(name)
    },
    DEACTIVATE_COMPONENT: (state, {name}) => {
      // find index, slice it out, unmount that component from the DOM
      // as well. Can I put this call in the mixin?
      
    }
  },
  getters: {
    openactiveComponents: state => {
      return state.activeComponents;
    }
  }
})
export default store;