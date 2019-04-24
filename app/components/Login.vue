<template>
  <page>
    <FlexboxLayout flexDirection="column" backgroundColor="#ffff">
      <Label textWrap="true" text="At Loggin" class="message" />
      <Button text="To Item List Page" @tap="$navigateTo(itemListPage)" />
    </FlexboxLayout>
  </page>
</template>

<script >
import ItemList from "./ItemList";

  export default {
    methods: {
    },
    data() {
      return {
        itemListPage: ItemList
      }
    },
    name: "Login",
    components: {
      ItemList,
    }
  };
</script>

<style scoped>
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: black;
    }
</style>
