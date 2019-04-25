import Vue from 'vue';
import Vuex from 'vuex';
import data from './../data.json';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registryName: 'THISISATEMPNAME',
    registryShortName: '',
    itemList: [],
  },
  mutations: {          // use to commit and track state changes  // mutations update the state directly

    SET_REGISTRYNAME(state, name, shortName) {
      state.registryName = name;
      state.registryShortName = shortName;
    },
    SET_ITEMLIST(state, itemList) {
      state.itemList = itemList;
    },
  },
  actions: {      //can update the state    // best practice for actions to call mutations 
                  // use actions for any unsynchronous operations. 
      fetchData(context) {  // context is passed automatically an has the commit method
        context.commit('SET_REGISTRYNAME', data.name, data.shortName);
        context.commit('SET_ITEMLIST', data.items);
    }
  },
  getters: {      // can access the store     you can have functions in the getters
    getName: state => state.registryName,
    getShortName: state => state.registryShortName,
    getItemList: state => state.itemList,
  }
});
