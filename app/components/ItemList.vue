<template>
  <page>
    <FlexboxLayout class="frame">
      <FlexboxLayout class="infoBar">
        <Label textWrap="true" :text="getShortName" class="message" />
        <Button text="Cart" @tap="goTo('Cart')" />
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
        <Label textWrap="true" :text="'Remaining: $' + status.budgetRemainder" class="message" />
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
        // update state with minus 
        // console.log('store Budget remainder--=-=-=-=-=-=-==-=-=-> ', this.getBudgetRemainder);
        this.$set(this.status, 'budgetRemainder', this.getBudgetRemainder);
        // console.log('data Budget remainder--=-=-=-=-=-=-==-=-=-> ', this.status.budgetRemainder);
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
    vertical-align: top;
    width: 100%;
    height: 100%;
    background-color: #fcf9f7;
  }
  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20px;
    color: red;
  }
  .scrollViewFrame {
    background-color: whitesmoke;
    height: 86%;
  }

  .storeItem {
    width: auto;
    background-color: #f8feff;
    border-bottom-width: 3px;
    border-bottom-color: rgb(220, 220, 220);
  }
  .infoBar {
    width: 100%;
    height: 7%;
    justify-content: space-between;
    background-color: darkgoldenrod;
  }

</style>
