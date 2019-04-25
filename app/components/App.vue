<template>
  <Page>
     <StackLayout>
       <Label textWrap="true" :text="name" class="message" />
        <Button text="To Login Page" @tap="$navigateTo(loginPage)" />
      </StackLayout>
  </Page>
</template>

<script >
import Login from "./Login";

//////  USe clear history to not have a back buton!!!!
////using HMR does not reload the entire app!!


  export default {
    beforeMount() {
      this.$store.dispatch('fetchData');
    },
    methods: {
    
    },
    data() {
      return {
        loginPage: Login,
      }
    },
    components: {
      Login, 
    },
    computed: {
      name() {
        return this.$store.state.registryName;
      },
    }
  }
</script>

<style scoped>
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
