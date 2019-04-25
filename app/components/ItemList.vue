<template>
  <page>
    <FlexboxLayout flexDirection="column" backgroundColor="#ffff" class="frame">
      <Label textWrap="true" text="At Item List!" class="message" />
      <Button text="To Cart Page" @tap="$navigateTo(cartPage)" />
      <ListView for="item in items" >
        <v-template>
          <StoreItem :itemData="item" />
        </v-template>
      </ListView>
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
   align-items: center;
   vertical-align: center;
  }
  .message {
      vertical-align: center;
      text-align: center;
      font-size: 20;
      color: red;
  }
</style>
