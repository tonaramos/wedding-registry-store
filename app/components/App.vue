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
    created() {
      this.$store.dispatch('fetchData');
    },
    methods: {
      goTo(name) {
        this.$navigateTo(Login, { clearHistory: true });
      },
    },
    name: "App",
    components: {
      Login, 
    }
  }
</script>

<style scoped>
</style>
