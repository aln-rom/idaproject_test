<script>
export default {
  emits: ["deleteProduct"],
  name: 'ProductCard',
  props: ['product'],
}
</script>

<template>
  <div class="product-card">
    <button class="product-card__delete" @click="$emit('deleteProduct')">
      <img src="@/assets/images/basket.png">
    </button>
    <div class="product-card__img">
      <img :src="product.imgUrl">
    </div>
    <div class="product-card__txt">
      <div class="product-card__txt__ttl">{{product.name}}</div>
      <div class="product-card__txt__description">{{product.description}}</div>
      <div class="product-card__txt__price">{{product.price.toLocaleString('ru')}} руб.</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';

.product-card {
  width: 100%;
  background: $background-white;
  border-radius: 4px;
  color: $label-primary;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  @include shadow;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px) scale(1.01);
  }

  &:hover &__delete {
    display: block;
  }

  &__delete {
    background: $error;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 32px;
    height: 32px;
    position: absolute;
    z-index: 20;
    right: -16px;
    top: -10px;
    float: right;
    display: none;
    cursor: pointer;
    border: none;
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;

    &:hover {
      background: #F57979;
    }

    &:active, &:focus {
      background: #F56767;
    }

    > img {
      width: 16px;
      height: 16px;
    }
  }

  &__img {
    top: 0;
    border-radius: 4px 4px 0 0;

    > img {
      top: 0;
      width: 100%;
      height: 200px;
      position: relative;
    }
  }

  &__txt {
    padding: 16px;

    &__ttl {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      margin: 16px 0;
    }

    &__description {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }

    &__price {
      margin: 32px 0 24px;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
}
</style>
