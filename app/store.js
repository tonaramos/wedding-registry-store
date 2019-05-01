import Vue from 'vue';
import Vuex from 'vuex';
import data from './../data.json';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registryName: '',
    registryShortName: 'TEMP',
    itemList: [],
    shoppingCart: [],
    budget: 1000,
    totalPrice: 0,
  },
  mutations: {        
    SET_REGISTRY_NAME(state, payload) {
      state.registryName = payload.name;
      state.registryShortName = payload.shortName;

    },
    SET_ITEM_LIST(state, itemList) {
      state.itemList = itemList;
    },
    UPDATE_ITEM_AVAIL(state, obj) {
      const newList =  state.itemList.map(item => {
        if (item.id === obj.id) {
          const newItem = item;
          newItem.quantityAvailable = newItem.quantityAvailable + obj.quantity;
          return newItem;
        } else {
          return item;
        }
      });
      state.itemList = newList;
    },
    UPDATE_SHOPPING_CART(state, itemAdded) {
      let newEntry = null;
      let newShoppingCart = state.shoppingCart.filter(item => {
        if (item.id === itemAdded.id) {
          newEntry = item;
          return false;
        } else {
          return true;
        }
      });
      if (newEntry === null) {
        newShoppingCart.push({...itemAdded, numberBuying: 1 })
      } else {
        newEntry.numberBuying = newEntry.numberBuying += 1;
        newShoppingCart.push(newEntry);
      }
      state.shoppingCart = newShoppingCart;
      state.totalPrice = state.totalPrice + parseInt(itemAdded.price);
    },
    SET_NEW_BUDGET(state, payload) {
      state.budget = payload;
    },
    RESET_TOTAL_PRICE(state, payload) {
      state.totalPrice = payload;
    },
    RESET_TOTAL_PRICE(state, payload) {
      state.totalPrice = payload;
    },
    RESET_SHOPPING_CART(state, payload) {
      state.shoppingCart = payload;
    },
  },

  actions: {
    fetchData(context) {  
      context.commit('SET_REGISTRY_NAME', {name: data.name, shortName: data.shortName});
      context.commit('SET_ITEM_LIST', data.items);
    },
    addItemToShoppingCart(context, item) {
      context.commit('UPDATE_SHOPPING_CART', item);
    },
    setNewBudget(context, payload) {
      context.commit('SET_NEW_BUDGET', payload);
    },
    resetTotalPrice(context, payload) {
      context.commit('RESET_TOTAL_PRICE', payload);
    },
    clearShoppingCart(context, payload) {
      context.commit('RESET_SHOPPING_CART', payload);
    }
  },
  getters: {   
    getName: state => state.registryName,
    getShortName: state => state.registryShortName,
    getItemList: state => state.itemList,
    getTotalPrice: state => state.totalPrice,
    getBudget: state => state.budget,
    getBudgetRemainder: state => state.budget - state.totalPrice,
    getItemsQuantity: state => state.itemList.map(item => {
      return {
        id: item.id,
        quantityAvailable: item.quantityAvailable
      }
    }),
    getShoppingCart: state => state.shoppingCart,
  }
});
