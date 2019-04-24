<template>
  <page>
    <FlexboxLayout flexDirection="column" backgroundColor="#ffff">
      <Label textWrap="true" text="At Item List!" class="message" />
      <Button text="To Cart Page" @tap="$navigateTo(cartPage)" />
    </FlexboxLayout>
  </page>
</template>

<script >
import Cart from "./Cart";

  export default {
    methods: {
    },
    data() {
      return {
        cartPage: Cart
      }
    },
    name: "Login",
    components: {
      Cart,
    }
  };
</script>

]<style scoped>
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: red;
    }
</style>
