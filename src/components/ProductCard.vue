<template>
  <div class="product-card">
    <div class="product-card__img"></div>
    <div class="product-card__txt">
      <div class="product-card__txt__ttl">Наименование товара</div>
      <div class="product-card__txt__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
      <div class="product-card__txt__price">10 000 руб.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.product-card {
  width: 100%;
  background: $background-white;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  color: $label-primary;

  &__img {
    background-image: url("../assets/images/polaroid.jpeg");
    background-size: cover;
    background-position: bottom;
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 200px;
    position: relative;
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
