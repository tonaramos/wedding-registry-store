<template>
  <page>
    <FlexboxLayout class="frame">
      <FlexboxLayout class="infoBar">
        <Label textWrap="true" :text="getShortName" class="pageTitle" />
        <Button text="Cart" @tap="goTo('Cart')" class="navButton" />
      </FlexboxLayout>
      <ScrollView class="scrollViewFrame">
        <StackLayout>
          <StoreItem :itemData="status.items[0]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
          <StoreItem :itemData="status.items[1]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
          <StoreItem :itemData="status.items[2]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
          <StoreItem :itemData="status.items[3]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
          <StoreItem :itemData="status.items[4]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
          <StoreItem :itemData="status.items[5]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
          <StoreItem :itemData="status.items[6]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
          <StoreItem :itemData="status.items[7]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
          <StoreItem :itemData="status.items[8]" :budget="status" class="storeItem" v-on:updateBudgetInItemList="setBudgetRemainder" />
        </StackLayout>
      </ScrollView>
      <FlexboxLayout class="infoBar">
        <Label textWrap="true" :text="'Remaining: $' + status.budgetRemainder" class="remainder" />
      </FlexboxLayout>
    </FlexboxLayout>
  </page>
</template>

<script >
import routes from "../routes/index";
import StoreItem from "./StoreItem";
import { mapGetters } from 'vuex';

  export default {
    created() {
      this.setItems();
      this.setBudgetRemainder();
    },
    methods: {
      goTo(name) {
        this.$navigateTo(routes[name], { clearHistory: true });
      },
      setItems() {
        this.$set(this.status, 'items', this.getItemList);
      },
      setBudgetRemainder() {
        this.$set(this.status, 'budgetRemainder', this.getBudgetRemainder);
      },
    },
    data() {
      return {
        status: {
          budgetRemainder: 0,
          items: [],
        }
      }
    },
    name: "Login",
    components: {
      StoreItem,
    },
    computed: {
      ...mapGetters([
        'getItemList',
        'getBudgetRemainder',
        'getShortName',
      ]),
    }
  };
</script>

]<style scoped>
  .frame {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fcf9f7;
  }
  .infoBar {
    width: 100%;
    height: 7%;
    justify-content: space-between;
    background-color:rgb(252, 234, 186); 
  }
  .navButton {
    color: #2baccc;
    font-weight: 500;
    margin: 7;
    margin-right: 50;
    color: #43aac4;
    font-size: 21;
    height: 26;
  }
  .pageTitle {
    color: #b67c00;
    font-weight: 700;
    margin: 7;
    margin-left: 50;
    font-size: 24;
    height: 26;
  }
  .remainder {
    color: #b67c00;
    font-weight: 400;
    margin: 7;
    margin-right: 20%;
    margin-left: 50;
    font-size: 20;
    align-self: center
  }
  .scrollViewFrame {
    background-color: rgb(241, 240, 240);
    height: 86%;
  }
  .storeItem {
    width: auto;
    background-color: #f8feff;
    border-bottom-width: 3px;
    border-bottom-color: rgb(220, 220, 220);
  }
</style>
