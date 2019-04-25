<template>
  <Label textWrap="true" :text="$props.itemData.brand" class="item">
  </Label>
</template>

<script >
  export default {
     beforeMount() {
      console.log('^^^^^^^^^^^^^^^^at soterItem Component, itemData.brand-> ', this.$props.itemData )
    },
    props: ['itemData'],
  
    methods: {
    },
    data() {
      return {
      }
    },
    name: "StoreItem",
  };
</script>

<style scoped>
  .item {
    background-color: orangered;
  }
</style>
