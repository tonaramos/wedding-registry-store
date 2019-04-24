<template>
  <Page>
     <StackLayout>
       <Label textWrap="true" :text="msg" class="message" />
        <Button text="To Login Page" @tap="$navigateTo(loginPage)" />
      </StackLayout>
      <!-- <Label textWrap="true" text="Play wit NativeScript!" class="h2 description-label" /> -->
      
      <!-- <Login ref="Login"/>
      <Cart ref="Cart"/> -->
  </Page>
</template>

<script >
import Login from "./Login";

  export default {
    methods: {
     
    },
    data() {
      return {
        loginPage: Login,

        msg: 'Welcome',
        amount: 1000,
        loggedIn: false
      }
    },
    components: {
      Login, 
    },
    computed: {
      title() {
        console.log(this.$store.getters.getRegistryName);
        return this.$store.getters.getRegistryName;
      } 
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
