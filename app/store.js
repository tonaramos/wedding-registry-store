import Vue from 'vue';
import Vuex from 'vuex';
import data from './../data.json';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registryName: '',
    registryShortName: '',
    itemList: [],
    shoppingCart: [],
    budget: 1000,
    totalPrice: 0,
  },
  mutations: {          // use to commit and track state changes  // mutations update the state directly
    SET_REGISTRYNAME(state, name, shortName) {
      state.registryName = name;
      state.registryShortName = shortName;
    },
    SET_ITEMLIST(state, itemList) {
      state.itemList = itemList;
    },
    UPDATE_ITEM_AVAIL(state, obj) {
      const newList =  state.itemList.map(item => {
        if (item.id === obj.id) {
          const newItem = item;
          newItem.quantityAvailable = newItem.quantityAvailable + obj.quantity;
          return newItem
        } else {
          return item;
        }
      });
      state.itemList = newList;
    },
    UPDATE_SHOPPING_CART(state, itemAdded) {
      console.log('store item added ==++++++++++++++============>', itemAdded.name);
      // console.log('store shopping list Prev==++++++++++++++============>', state.shoppingCart);
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
      // add to price 
      state.totalPrice = state.totalPrice + parseInt(itemAdded.price);
      console.log('-------the new shopping car length -------> ', newShoppingCart.length);
      console.log('-------the new shopping price -------> ', state.totalPrice);

    }
  },
  actions: {      //can update the state    // best practice for actions to call mutations 
                  // use actions for any unsynchronous operations. 
    fetchData(context) {  // context is passed automatically an has the commit method
      context.commit('SET_REGISTRYNAME', data.name, data.shortName);
      context.commit('SET_ITEMLIST', data.items);
    },
    addItemToShoppingCart(context, item) {
      context.commit('UPDATE_SHOPPING_CART', item);
    }

    // decreaseItem(context, id) {
    //   context.commit('UPDATE_ITEMAVAIL', {id, quantity: -1 });
    // },
    // increaseItem(context, id) {
    //   context.commit('UPDATE_ITEMAVAIL', {id, quantity: +1 });
    // }

  },
  getters: {      // can access the store     you can have functions in the getters
    getName: state => state.registryName,
    getShortName: state => state.registryShortName,
    getItemList: state => state.itemList,
    getBudgetRemainder: state => state.budget - state.totalPrice,
    // From StoreItem
    getItemsQuantity: state => state.itemList.map(item => {
      return {
        id: item.id,
        quantityAvailable: item.quantityAvailable
      }
    }),
    getShoppingCart: state => state.shoppingCart,
  }
});
