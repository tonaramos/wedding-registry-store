<template>
  <page>
    <FlexboxLayout class="frame">
      <FlexboxLayout class="infoBar">
        <Label textWrap="true" text="A and D" class="message" />
        <Button text="Cart" @tap="goTo('Cart')" />
      </FlexboxLayout>
      <ScrollView class="scrollViewFrame">
        <StackLayout>
          <StoreItem :itemData="items[0]" class="storeItem"/>
          <StoreItem :itemData="items[1]" class="storeItem"/>
          <StoreItem :itemData="items[2]" class="storeItem"/>
          <StoreItem :itemData="items[3]" class="storeItem"/>
          <StoreItem :itemData="items[4]" class="storeItem"/>
          <StoreItem :itemData="items[5]" class="storeItem"/>
          <StoreItem :itemData="items[6]" class="storeItem"/>
          <StoreItem :itemData="items[7]" class="storeItem"/>
          <StoreItem :itemData="items[8]" class="storeItem"/>
        </StackLayout>
      </ScrollView>
      <FlexboxLayout class="infoBar">
        <Label textWrap="true" text="Remaining: " class="message" />
      </FlexboxLayout>
    </FlexboxLayout>
  </page>
</template>

<script >
import routes from "../routes/index";
import StoreItem from "./StoreItem";

  export default {
    methods: {
      goTo(name) {
        this.$navigateTo(routes[name], { clearHistory: true });
      },
    },
    data() {
      return {
      }
    },
    name: "Login",
    components: {
      StoreItem,
    },
    computed: {
      items() {
        return this.$store.state.itemList;
      }
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
