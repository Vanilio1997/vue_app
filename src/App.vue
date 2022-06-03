<template>
  <main>
    <Container :class="$style.container">
      <Form 
      @create="createProduct"
      :class="$style.form" />
      <Catalog
      :selected="selected"
      :options="options" 
      v-model="selectedSort"
      @remove="removeProduct"
      @select="optionSelect"
      :products="products" />
    </Container>
  </main>
</template>

<script>
import Catalog from './components/Catalog.vue';
import Form from './components/Form.vue';
import Container from './components/Container.vue';
export default{
    data() {
        return {
             products: [
                  { id: 1,name: "Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк", price:`10000` },
                  { id: 2, name: "Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк", price:`10000` },
                  { id: 3, name: "Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк", price:`10000` },
            ],
             options: [
        { name: 'По умолчанию', value: 'default' },
        { name: 'По цене min', value: 'minPrice' },
        { name: 'По цене max', value: 'maxPrice' },
        { name: 'По имени', value: 'name' },
      ],
      selected: { name: 'По умолчанию', value: 'default' },
    }},
    methods: {
        createProduct(product) {
            this.products.push(product)
        },
        removeProduct(product){
            this.products = this.products.filter((item)=> item.id !== product.id)
        },
         optionSelect(option) {
      this.selected = option;
          },
          computed: {
    sortedProducts() {
      return [...this.products]}
    },
    },
     components: { Catalog, Form,Container }}
</script>

<style lang="scss" module>
@import '@/UI/Scss/variables.scss';


.container {
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: $tablet-width) {
    flex-direction: row;
  }
}
.form {
  @media (min-width: $tablet-width) {
    min-width: 332px;
    align-self: flex-start;
  }
}
</style>