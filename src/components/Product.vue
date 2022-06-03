<template>
<li :class="$style.listItem">
  <div :class="$style.root">
    <img
      :class="$style.img"
      :src="require('../UI/img/image.jpg')"
      alt="Изображение товара"
      width="332"
      height="200"
    />
    <div :class="$style.info">
      <h3 :class="$style.title">{{product.name}}</h3>
      <p :class="$style.description">
       {{product.description}}
      </p>
      <span :class="$style.price">{{product.price}}. руб </span>
    </div>
    <button 
    @click="$emit('remove',product)"
    :class="$style.deleteBtn">
     <font-awesome-icon 
     :class="$style.logo"
     icon="trash-can" />
    </button>
  </div>
  </li>
</template>

<script>
export default {
  name: 'Product',
   props: {
        product: {
            type: Object,
            required: true
        }
    },
};
</script>

<style lang="scss" module>
@import '@/UI/Scss/variables.scss';
.root {
  display: flex;
  position: relative;
  flex-direction: column;
  word-break: break-all;
  box-shadow: $shadow-primary;
  &:hover > .deleteBtn {
    display: block;
  }
}
.deleteBtn {
  display: none;
  position: absolute;
  background-repeat: no-repeat;
  background-color: $basic-pink;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: none;
  padding: 0;
  right: -8px;
  top: -8px;
  &:hover {
    background-color: lighten($basic-pink, 5%);
  }
}
.img {
  display: block;
  width: 100%;
  background-color: rgb(212, 15, 15);
}
.info {
  padding: 16px 16px 24px 16px;
 background: $pearl;
}
.title {
  margin: 0;
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 25px;
  font-weight: 600;
}
.description {
  margin: 0;
  margin-bottom: 32px;
}
.price {
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
}
.logo{
  color: $basic-white;
  height: 16px;
  width: 12.99px;
}
</style>