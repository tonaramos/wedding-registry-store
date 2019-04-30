<template>
  <page>
    <FlexboxLayout flexDirection="column" backgroundColor="#ffff">
      <Button id="1" text="Sign Out" @tap="goToLogin" />
      <Button id="2" text="To Item List" @tap="goTo('ItemList')" />
      <Label textWrap="true" text="At the Cart" class="message" />
      <Label textWrap="true" text="Cart Component!!" />
    </FlexboxLayout>
  </page>
</template>

<script >
import routes from "../routes/index";
import Login from './Login';
import App from './App';

  export default {
    methods: {
      goTo(name) {
        this.$navigateTo(routes[name], { clearHistory: true });
      },
      goToLogin() {
        this.$navigateTo(App, { clearHistory: true });
      },
    },
    data() {
      return {
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
