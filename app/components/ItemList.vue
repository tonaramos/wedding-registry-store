<template>
  <page>
    <FlexboxLayout class="frame">
      <FlexboxLayout class="infoBar">
        <Label textWrap="true" text="A and D" class="message" />
        <Button text="Cart" @tap="goTo('Cart')" />
      </FlexboxLayout>
      <ScrollView class="scrollViewFrame">
        <StackLayout>
          <StoreItem :itemData="status.items[0]" class="storeItem"/>
          <StoreItem :itemData="status.items[1]" class="storeItem"/>
          <StoreItem :itemData="status.items[2]" class="storeItem"/>
          <StoreItem :itemData="status.items[3]" class="storeItem"/>
          <StoreItem :itemData="status.items[4]" class="storeItem"/>
          <StoreItem :itemData="status.items[5]" class="storeItem"/>
          <StoreItem :itemData="status.items[6]" class="storeItem"/>
          <StoreItem :itemData="status.items[7]" class="storeItem"/>
          <StoreItem :itemData="status.items[8]" class="storeItem"/>
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
        this.$set(this.status, 'items', this.$store.getters.getItemList);
      },
      setBudgetRemainder() {
        this.$set(this.status, 'budgetRemainder', this.$store.getters.getBudgetRemainder);
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
