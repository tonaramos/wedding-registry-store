import Vue from 'vue';
import Vuex from 'vuex';
import data from './../data.json';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingStatus: false,
    toDos: [],
    registryName: '',
    registryShortName: '',
    itemList: [],
  },
  mutations: {          // use to commit and track state changes  // mutations update the state directly
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_TOOLS(state, toDos) {
      state.toDos = toDos;
    },
    SET_REGISTRYNAME(state, name, shortName) {
      state.registryName = name;
      state.registryShortName = shortName;
    },
    SET_ITEMLIST(state, itemList) {
      state.itemList = itemList;
    },
  },
  actions: {      //can update the state    // best practice for actions to call mutations 
      fetchData(context) {
        context.commit('SET_LOADING_STATUS', true);
        const registryData = JSON.parse(data);

        context.commit('SET_LOADING_STATUS', false);
        context.commit('SET_REGISTRYNAME', registryData.data.name, registryData.data.shortName);
        context.commit('SET_ITEMLIST', registryData.data.items);
    }
  },
  getters: {      // can access the store
    getName: state => state.registryName,
    getShortName: state => state.registryShortName,
  }
});
