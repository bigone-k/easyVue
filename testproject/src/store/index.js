import Vue from 'vue'
import Vuex from 'vuex'

import items from "@/assets/items.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: null,
  },
  // 동기 통신을 해야하는 곳
  mutations: {
    getItems(state, payload) {
      state.items = payload;
    },
  },
  // 비 동기 통신을 해야하는 곳
  actions: {
    getItems ({commit}) {
      let payload = items;

      commit("getItems", payload);
    },
  },
  modules: {
  }
})
