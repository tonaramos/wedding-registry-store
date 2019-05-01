<template>
  <flexboxLayout class="itemFrame">
    <flexboxLayout class="itemSpecsFrame">
      <Image :src="$props.itemData.imageUrl" stretch="aspectFill" class="imageFrame" />
      <StackLayout class="itemInfoStack">
        <flexboxLayout class="itemBrandIdFrame">
          <Label textWrap="true" :text="$props.itemData.brand" class="itemBrand" />
          <Label textWrap="true" :text="'ID: ' + $props.itemData.id" class="itemId" />
        </flexboxLayout>
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
        this.setBudgetAvailable();
      },
      setBudgetAvailable() {
        this.$set(this.status, 'budgetAvailable', this.$props.budget.budgetRemainder >= this.$props.itemData.price);
      },
      addToCart() {
        if (this.status.itemAvailable && this.status.budgetAvailable ) {
          this.$store.dispatch('addItemToShoppingCart', this.$props.itemData);
          this.$set(this.status, 'itemQuantity', this.status.itemQuantity - 1);
          this.setItemAvailable();
          this.updateBudgetAvailable();
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
      ]),
    },
    watch: {
      getBudgetRemainder(newBudget, oldBudget) {
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
  .itemBrandIdFrame {
    justify-content: space-between;
  }
  .itemBrand {
    text-transform: capitalize;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .itemId {
    margin-right: 20;
    font-size: 14;
  }
  .itemName {
    font: 22;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .itemDescription { 
    font-size: 14;
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
