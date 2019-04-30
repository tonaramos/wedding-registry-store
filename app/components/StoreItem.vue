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
      <Button text='ADD TO CART' @tap="addToCart" :class="status.itemAvailable && status.budgetAvailable ? 'btnActive' : 'btnDisabled'"/>
    </flexboxLayout>
  </flexboxLayout>
</template>

<script >
  import { mapGetters } from 'vuex';

  export default {
    created() {
      this.updateAvailableQuantity();
      this.setItemAvailable();
      this.setBudgetAvailable();
      // console.log('--------', this.$props.budget.budgetRemainder );
    },
    mounted() {
    },
    props: ["itemData", "budget"],
    methods: {
      updateAvailableQuantity() {
        const allitemsQuantityList = this.getItemsQuantity;
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
        this.$emit('updateBudgetInItemList', );
        // console.log('thepassed budget emmiter ==++++++++++++++============>');
        this.setBudgetAvailable();
      },
      setBudgetAvailable() {
        this.$set(this.status, 'budgetAvailable', this.$props.budget.budgetRemainder >= this.$props.itemData.price);
      },
      addToCart() {
        if (this.status.itemAvailable && this.status.budgetAvailable ) {
            this.$store.dispatch('addItemToShoppingCart', this.$props.itemData);
            this.updateAvailableQuantity();
            this.setItemAvailable();
            this.updateBudgetAvailable();
        //add the price to the total price in store
        //subtract/update the item from the item list in store
        //add the item to the shopping cart
        //update the data (itemQuantity and ItemAvailable) of the item component
        // this.$store.dispatch('decreaseItem', this.$props.itemData.id);
        // console.log('add to cart button pressed!');
        // console.log('did my state update???????? ', this.getShoppingCart.length );
        }
        
      }
    },
    data() {
      return {
        status: {
          itemQuantity: 0,
          itemAvailable: false,
          budgetAvailable: false,
          currentBudget: this.$props.budget.budgetRemainder,
        }
      }
    },
    name: "StoreItem",
    computed: {
      ...mapGetters([
      'getItemsQuantity',
      'getBudgetRemainder',
      'getShoppingCart',
      ])
    },
    watch: {
      getBudgetRemainder(newBudget, oldBudget) {
        // console.log('========================== FROM WATCH __ NEW BUDGET => ',newBudget);
        this.$set(this.status, 'currentBudget', newBudget);
        this.setBudgetAvailable();
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
    color:white;
    width: 75%;
    border-radius: 100%;
    font-size: 16px; 
  }
</style>
