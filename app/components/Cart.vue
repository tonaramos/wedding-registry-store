<template>
  <page>
    <FlexboxLayout flexDirection="column" backgroundColor="#ffff">
      <Button text="To Login Page" @tap="$navigateTo(loginPage)" />
      <Label textWrap="true" text="At the Cart" class="message" />
      <Label textWrap="true" text="Cart Component!" class="h2 description-label" />
    </FlexboxLayout>
  </page>
</template>

<script >
import Login from "./Login";

  export default {
    methods: {
    },
    data() {
      return {
        loginPage: Login,
      }
    },
    name: "Cart",
    components: {
      Login, 
    },
  };
</script>

<style scoped>
</style>
