<template>
  <page>
    <FlexboxLayout class="frame">
      <FlexboxLayout class="topMenuBar">
        <Button id="1" text="Sign Out" @tap="goToLogin" class="navButton"/>
        <Label textWrap="true" text="Your Cart" class="title"/>
        <Button id="2" text="Store " @tap="goTo('ItemList')" class="navButton"/>
      </FlexboxLayout>
      <ScrollView class="scrollFrame">
        <StackLayout class="innerFrame">
          <ListView for="item in status.cartList" separatorColor="transparent"  class="innerFrame">
            <v-template>
              <FlexboxLayout class="itemCard">
                <FlexboxLayout class="itemCardName">
                  <Label :text="item.name" class="itemName"/>  
                  <FlexboxLayout class="itemSpecs">
                    <Label :text="'Qty. '+item.numberBuying" />
                    <Label :text="'$'+ item.price + ' ea.'" />
                  </FlexboxLayout>
                </FlexboxLayout>
                <FlexboxLayout class="itemCardTotal">
                  <Label :text="'$' + totalPrice(item.price, item.numberBuying)" />
                </FlexboxLayout>
              </FlexboxLayout>
            </v-template>
          </ListView>
        </StackLayout>
      </ScrollView>
      <FlexboxLayout class="totalFrame">
        <Label :text="'Budget $' + getBudget" />
        <Label :text="'Total $' + getTotal" />
      </FlexboxLayout>
      <FlexboxLayout class="bottomBuyFrame">
        <FlexboxLayout class="bottomMenuBar">
          <Button id="buyButton" text="Buy" @tap="buy" class="buyButton" />
        </FlexboxLayout>
      </FlexboxLayout>
    </FlexboxLayout>
  </page>
</template>

<script >
import routes from "../routes/index";
import Login from './Login';
import App from './App';

  export default {
    created() {
      this.$set(this.status, 'cartList', this.$store.getters.getShoppingCart)
    },
    methods: {
      goTo(name) {
        this.$navigateTo(routes[name], { clearHistory: true });
      },
      goToLogin() {
        this.$store.dispatch('setNewBudget', 1000);
        this.$store.dispatch('resetTotalPrice', 0);
        this.$store.dispatch('clearShoppingCart', []);
        this.$store.dispatch('fetchData');
        this.$navigateTo(App, { clearHistory: true });
      },
      buy() {
        this.$store.dispatch('setNewBudget', this.$store.getters.getBudgetRemainder);
        this.$store.dispatch('resetTotalPrice', 0);
        this.$store.dispatch('clearShoppingCart', []);
        this.$set(this.status, 'cartList', this.$store.getters.getShoppingCart)
      },
      items() {
        return this.status.cartList;
      },
      totalPrice(qty, amount) {
        return qty * amount;
      }
    },
    data() {
      return {
        status: {
          cartList: [],
        }
      }
    },
    name: "Cart",
    components: {
      Login,
    },
    computed: {
      getTotal() {
        return this.$store.getters.getTotalPrice;
      },
      getBudget() {
        return this.$store.getters.getBudget;
      }
    }
  };
</script>

<style scoped>
  .frame {
    flex-direction: column;
    align-items: center;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
  .topMenuBar {
    width: 100%;
    height: 12%;
    justify-content: space-between;
    background-color:rgb(252, 234, 186); 
  }
  .buyFrame {
    background-color:rgb(252, 234, 186); 
  }
  .bottomMenuBar {
    width: 75%;
    height: 10%;
    flex-direction: column;
    justify-content: center;
    background-color:rgb(252, 234, 186); 
  }
  .bottomBuyFrame {
    width: 100%;
    background-color:rgb(252, 234, 186); 
    justify-content: center;
  }
  .totalFrame {
    width: 100%;
    height: 12%;
    color: #43aac4;
    font-weight: 550;
    font-size: 24;
    background-color:rgb(252, 234, 186); 
    text-shadow: 1px 1px 1px balck;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

  }
  .navButton {
    color: #43aac4;
    font-weight: 600;
    font-size: 18;
    height: 24;
    margin: 7;
    margin-left: 15;
    margin-right: 15;
  }
  .title {
    font-weight: 600;
    font-size: 24;
    text-align: center;
    color: #49a780;
    
  }
  .buyButton {
    background-color: #43aac4;
    color: white;
    width: 75%;
    
    border-radius: 100%;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20;
  }
  .scrollFrame {
    background-color: rgb(241, 240, 240);
    width: 100%;
    height: 78%;
  }
  .innerFrame {
    height: 100%;
  }
  .itemCard {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 15px;
    margin-left: 7px;
    margin-right: 7px;
    background-color: rgb(247, 247, 247);
    border-radius: 3px;
  }
  .itemCardName{
    margin:7;
    width: 70%;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 18;
  }
  .itemName {
      word-wrap: wrap;
  }
  .itemSpecs {
    font-size: 14;
    flex-direction: row;
    justify-content: space-around;
  }
  .itemCardTotal{
    width: 27%;
    margin: 7;
    margin-left: 0;
    font-size: 18;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .width75 {
    width: 75%;
  }
  .width33 {
    width: 33%;
  }
</style>
