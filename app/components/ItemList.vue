<template>
  <page>
    <FlexboxLayout class="frame">
      <Label textWrap="true" text="At Item List!" class="message" />
      <Button text="To Cart Page" @tap="$navigateTo(cartPage)" />
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
      <Label textWrap="true" text="Bottom of List" class="message" />
    </FlexboxLayout>
  </page>
</template>

<script >
import Cart from "./Cart";
import StoreItem from "./StoreItem";

  export default {
    methods: {
    },
    data() {
      return {
        cartPage: Cart,
      }
    },
    name: "Login",
    components: {
      Cart, StoreItem,
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
    height: 85%;
  }

  .storeItem {
    width: auto;
    background-color: #f8feff;
    border-bottom-width: 3px;
    border-bottom-color: rgb(220, 220, 220);
  }

</style>
