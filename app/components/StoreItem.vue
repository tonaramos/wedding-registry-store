<template>
  <flexboxLayout class="itemFrame">
    <flexboxLayout class="itemSpecsFrame">  
      <Image src="~/assets/images/cabinetIconImage.jpg" stretch="aspectFit" class="imageFrame" />
      <StackLayout class="itemInfoStack">
        <Label textWrap="true" :text="$props.itemData.brand + '          ID:' + $props.itemData.id" class="itemBrand" />
        <Label textWrap="true" :text="$props.itemData.name" class="itemName" />
        <flexboxLayout class="itemPriceFrame">
          <Label textWrap="true" :text="'$' + $props.itemData.price + '   '" class="itemPrice" />
          <Label textWrap="true" :text="'Available: ' +$props.itemData.quantityAvailable" class="itemAvail" />
        </flexboxLayout>
      </StackLayout>
    </flexboxLayout>
    <Label textWrap="true" :text="$props.itemData.description" class="itemDescription" />
    <flexboxLayout class="btnFrame">
      <Button text='ADD TO CART' @tap="buy" :class="itemAvailable ? 'btnActive' : 'btnDisabled'" :isEnabled="itemAvailable"/>
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
        itemAvailable: true,
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
    flex-direction: column;
    max-width: auto;
    margin: 10;
    border: 10px black solid;
  }

  .itemSpecsFrame {
    flex-direction: row;
    justify-content: flex-start;
    flex-basis: content;
    max-width: 100%;
  }
  .itemInfoStack {
    margin-left: 15px;
    width: 70%;
  }

  .imageFrame {
    flex-basis: content;
    width: 30%;
    margin: 15px;
  }
  .itemBrand {
    text-transform: capitalize;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .itemName {
    font: 22;
    font-weight: bold;
    /* text-align: justify; */
    margin-bottom: 15px;
  }

  .itemDescription { 
    font-size: 14;
    /* text-align: justify; */
    margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .itemPriceFrame {
    margin-bottom: 15px;
    font: 16;
    justify-content: space-around;
  }
  .itemPrice {
    text-transform: capitalize;
  }
  
  .itemAvail {
    text-transform: capitalize;
  }

  .btnFrame {
    justify-content: center;
    margin-bottom: 15px;
  }

  .btnActive {
    background-color: #75c8dd;
    color: white;
    width: 75%;
    border-radius: 100%;
    font-size: 16px; 
  }
  .btnDisabled {
    background-color: #dbdbdb;
    width: 75%;
    border-radius: 100%;
    color:white;
  }
</style>
