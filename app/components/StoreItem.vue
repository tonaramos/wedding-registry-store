<template>
  <flexboxLayout class="itemFrame">
    <flexboxLayout class="itemSpecsFrame">  
      <Image src="~/assets/images/cabinetIconImage.jpg" stretch="aspectFit" class="imageFrame" />
      <StackLayout class="itemInfoStack">
        <Label textWrap="true" :text="$props.itemData.brand + '          ID:' + $props.itemData.id" class="itemBrand" />
        <Label textWrap="true" :text="$props.itemData.name" class="itemName" />
        <flexboxLayout class="itemPriceFrame">
          <Label textWrap="true" :text="'$' + $props.itemData.price" class="itemPrice" />
          <Label textWrap="true" :text="'Available: ' + status.itemQuantity" class="itemAvail" />
        </flexboxLayout>
      </StackLayout>
    </flexboxLayout>
    <Label textWrap="true" :text="$props.itemData.description" class="itemDescription" />
    <flexboxLayout class="btnFrame">
      <Button text='ADD TO CART' @tap="addToCart" :class="status.itemAvailable && status.budgetAvailable ? 'btnActive' : 'btnDisabled'" :isEnabled="status.itemAvailable && status.budgetAvailable"/>
    </flexboxLayout>
  </flexboxLayout>
</template>

<script >
  export default {
    created() {
      this.updateAvailableQuantity();
      this.setItemAvailable();
      this.updateBudgetAvailable();
    },
    mounted() {
      
    },
    props: ['itemData'],
    methods: {
      updateAvailableQuantity() {
        const allitemsQuantityList = this.$store.getters.getItemsQuantity;
        const currItemQuantity = 0;
        for (let item in allitemsQuantityList) {
          if (allitemsQuantityList[item].id === this.$props.itemData.id) {
            this.$set(this.status, 'itemQuantity', allitemsQuantityList[item].quantityAvailable)
            break;
          }
        } 
      },
      setItemAvailable() {
        this.$set(this.status, 'itemAvailable', this.status.itemQuantity > 0 ? true : false);
      },
      updateBudgetAvailable() {
        const budgetAvailable = this.$store.getters.getBudgetRemainder >= this.$props.itemData.price;
        console.log('the BUDGET from getters ==++++++++++++++============>', this.$store.getters.getBudgetRemainder);
        console.log('item available? ==++++++++++++++============>', this.status.budgetAvailable);
        console.log('the BUDGET LEFT ==++++++++++++++============>', budgetAvailable);
        this.$set(this.status, 'budgetAvailable', budgetAvailable);
      },
      addToCart() {
        
        this.$store.dispatch('addItemToShoppingCart', this.$props.itemData);
        //add the price to the total price in store
        //subtract/update the item from the item list in store
        //add the item to the shopping cart
        //update the data (itemQuantity and ItemAvailable) of the item component
        // this.$store.dispatch('decreaseItem', this.$props.itemData.id);
        console.log('add to cart button pressed!');
        console.log('did my state update???????? ', this.$store.getters.getShoppingCart.length );
      }
    },
    data() {
      return {
        status: {
          itemQuantity: 0,
          itemAvailable: false,
          budgetAvailable: false,
        }
      }
    },
    name: "StoreItem",
    computed: {
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
