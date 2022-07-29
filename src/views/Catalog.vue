<template>
  <div class="catalog">
    <product-card class="catalog__card"></product-card>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: 'CatalogPage',
  components: {
    ProductCard
  }
}
</script>

<style scoped lang="scss">
.catalog {
  margin: 0;
  &__card {
    width: 25%;
  }
}
</style>
