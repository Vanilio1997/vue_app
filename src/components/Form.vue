<template>
  <section :class="$style.root">
  <h2 :class="$style.title">Добавление товара</h2> 
   <form 
    :class="$style.form"
    @submit.prevent>    
      <text-field
        v-model="product.name"
        :class="$style.field"
        placeholder="Введите наименование товара"
        required
        >Наименование товара
      </text-field>

      <text-field
        v-model="product.description"
        :class="$style.field"
        placeholder="Введите описание товара"
        textarea
        >Описание товара
      </text-field>

      <text-field
        v-model="product.imgRef"
        :class="$style.field"
        placeholder="Введите ссылку"
        required
        >Ссылка на изображение товара
      </text-field>

      <text-field
        v-model="product.price"
        :class="$style.field"
        placeholder="Введите цену"
        required
        >Цена товара
      </text-field>




 <AppButton v-if="product.name && product.price && product.imgRef"
        :class="$style.button"
        :success = 'true'
        type="button"
        @click="createProduct">Добавить товар</AppButton>
         <app-button
         v-else
        :class="$style.button"
        type="button"
        :disabled="true"
        >Добавить товар</app-button
      >
    </form>
    
  </section>
</template>

<script>
import TextField from './TextField.vue';
import AppButton from './AppButton.vue';
export default {
  name: 'AppForm',
  components: {
    TextField,
    AppButton,
},
  data() {
    return {
      product: {
        name: '',
        description: '',
        imgRef: '',
        price: '',
      },
    };
  },
  methods: {
      createProduct() {
        if(this.product.name){
            this.product.id = Date.now();
            this.$emit("create", this.product);
            this.product = {
                name: '',
                description: '',
                imgRef: '',
                price: '',
            };
        }
        }
  },
};
</script>

<style lang="scss" module>
@import '@/UI/Scss/variables.scss';

.form {
  padding: 24px;
    background-color: $pearl;
  box-shadow: $shadow-primary;
}
.field:not(:last-of-type) {
  margin-bottom: 16px;
}
.button {
  margin-top: 24px;
  width: 100%;
}
.title {
  margin: 0;
  margin-bottom: 16px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 600;
}
</style>