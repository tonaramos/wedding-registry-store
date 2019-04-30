<template>
  <Page>
    <GridLayout class="app" rows="*, auto">
      <ContentView row="0">
        <Frame>
          <Login />
        </Frame>
      </ContentView>
    </GridLayout>
  </Page>
</template>

<script >
import Login from "./Login";
import routes from '../routes/index'

  export default {
    beforeMount() {
      this.$store.dispatch('fetchData');
    },
    methods: {
      goTo(name) {
        this.$navigateTo(Login, { clearHistory: true });
      },
    },
    data() {
      return {
        loginPage: Login,
      }
    },
    name: "App",
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
  .app {
    background-color: green;
  }
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
