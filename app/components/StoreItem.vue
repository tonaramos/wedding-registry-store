<template>
  <flexboxLayout class="itemFrame">
    <Image src="~/assets/images/cabinetIconImage.jpg" stretch="aspectFit" class="imageFrame" />
    <flexboxLayout class="itemSpecsFrame">
      
      <StackLayout>
        
        <Label textWrap="true" :text="$props.itemData.brand" class="itemBrand" />
        <Label textWrap="true" :text="$props.itemData.name" class="itemName" />
        <Label textWrap="true" :text="$props.itemData.description" class="itemDescription" />
        <flexboxLayout class="itemPriceFrame">
          <Label textWrap="true" :text="'$' + $props.itemData.price + '   '" class="itemPrice" />
          <Label textWrap="true" :text=" $props.itemData.id + ' Items available: ' +$props.itemData.quantityAvailable" class="itemAvail" />
        </flexboxLayout>
      </StackLayout>
      <Button text='ADD TO CART' @tap="buy" class="btn" :isEnabled="itemAvailable"/>
    </flexboxLayout>
  </flexboxLayout>
</template>

<script >
  export default {
     beforeMount() {
    },
    props: ['itemData'],
  
    methods: {
      buy() {
        this.$store.dispatch('decreaseItem', this.$props.itemData.id);
        console.log('add to cart button pressed!');
      }
    },
    data() {
      return {
        itemAvailable: false
      }
    },
    name: "StoreItem",
    computed: {
      getQuantity() {
        return this.$store.getters.itemQuantity;
      }
    }
  };
</script>

<style scoped>
  .itemFrame {
    background-color: #f7e0a3;
  }

  .itemSpecsFrame {
   flex-direction: column;
  }

  .imageFrame {
    height: 200;
    width: 200;
  }
  .itemBrand {

    text-transform: capitalize;
    font-weight: bold;
  }
  /* .itemName {
  } */
  .itemDescriptionv { 
    font-size: 14;
  }
  .itemBrand {
    text-transform: capitalize;
  }
  .itemPriceFrame {
  }
  .itemPrice {
    text-transform: capitalize;
  }
  .itemAvail {
    text-transform: capitalize;
  }

  .btn {
    background-color: #4c8492;
    max-width: 50;
    height: 25;
  }

</style>
