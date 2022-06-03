<template>
  <section :class="$style.root">
    <dropdown
      :class="$style.dropdown"
      :selected="selected"
      :options="options"
      @select='optionSelect'
    />
    <ul 
    :class="$style.list">
  <transition-group name="user-list">
      <Product 
v-for="product in products"
:key="product.id"
:product = 'product'
@remove="$emit('remove',product)"
/>
</transition-group>


    </ul>
  </section>
</template>

<script>
import Dropdown from './Dropdown.vue';
import Product from './Product.vue';
export default {
  name: 'Catalog',
  components: { Product, Dropdown},
  props:{
        products: {
            type: Array,
            required: true
        },
        options:{
          type: Array,
          default:() =>[]
        },
         selected: {
      type: Object,
      default:() => {},
    },
    },

  methods: {
     optionSelect(option) {
        this.$emit('select',option)
          }
  },
};

</script>

<style lang="scss" module>
@import '@/UI/Scss/variables.scss';
.root {
  @media (min-width: $tablet-width) {
    flex-grow: 1;
  }
}
.list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(246px, 1fr));
}
.dropdown {
  margin-bottom: 16px;
  margin-left: auto;
}
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}


</style>