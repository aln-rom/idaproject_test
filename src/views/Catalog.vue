<template>
  <div class="catalog">
    <div class="catalog__title-wrapper">
      <div class="catalog__title-wrapper__ttl">Добавление товара</div>
      <app-select
          class="catalog__title-wrapper__select"
          v-model:selectedOption="selectedOption"
          :options="filterOptions"
      />
    </div>

    <div class="catalog__main-wrapper">
      <app-form class="catalog__main-wrapper__form" @submitForm="addProduct" >

        <app-input
            v-model.trim="product.name"
            label="Наименование товара"
            type="text"
            :required="true"
            :error="inputError"
            placeholder="Введите наименование товара"
        />

        <app-input
            v-model.trim="product.imgUrl"
            label="Ссылка на изображение товара"
            type="text"
            :required="true"
            :error="inputError"
            placeholder="Введите ссылку"
        />

        <app-textarea
            v-model="product.description"
            label="Описание товара"
            placeholder="Введите описание товара"
        />

        <app-input
            v-model.trim="product.price"
            label="Цена товара"
            type="number"
            :required="true"
            :error="inputError"
            placeholder="Введите цену"
            @focus="indicatorChange = true"
            @blur="indicatorChange = false"
        />

        <app-button
            type="submit"
            :disabled="disabled"
        >
          Добавить товар
        </app-button>
      </app-form>
    <div class="catalog__main-wrapper__cards">
      <div v-for="(product, index) in products"
           :key="index"
           class="catalog__main-wrapper__cards__product"
      >
        <product-card
            :product="product"
            @deleteProduct="deleteProduct(index)"
        />
      </div>
        <div v-for="(product, index) in newProducts"
             :key="index"
             class="catalog__main-wrapper__cards__product"
        >
          <product-card
              :product="product"
              @deleteProduct="removeLSProduct(index)"
          />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import AppSelect from "@/components/ui/AppSelect";
import AppForm from "@/components/ui/AppForm";
import AppInput from "@/components/ui/AppInput";
import AppTextarea from "@/components/ui/AppTextarea";
import AppButton from "@/components/ui/AppButton";

export default {
  name: 'CatalogPage',
  components: {
    ProductCard,
    AppSelect,
    AppForm,
    AppInput,
    AppTextarea,
    AppButton
  },
  data() {
    return {
      selectedOption: {id: 1, name: "По умолчанию"},

      product: {
        name: "",
        imgUrl: "",
        description: "",
        price: "",
      },

      newProducts: [],
      realNumber: 0, // будет содержать актуальное числовое значение
      indicatorChange: false,

      inputError: false,
      disabled: true,

      filterOptions : [
        {id: 1, name: "По умолчанию"},
        {id: 2, name: "По возрастанию цены"},
        {id: 3, name: "По убыванию цены"},
        {id: 4, name: "По наименованию"},
      ],

      products: [

        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgUrl: 'https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1660521600&Signature=EhrntMh6S41ITaYctGwPMALpG5KxuXsmUy~5qKBblHEtbpCybT2-HATX73Kl02jhljT3t5ObPZiBXW8LxAnszv5E0oSHHqBp1bmLlJKtuOEsAmpcHR25nGPLK0IWh-K3tB7h-G2u72IxgSqcg5V2fj6z2W3G-7G0jcq7p5kFOT7xYQjaG3obrAG77KZRHwhd2nVhbDxQDeCLh04rz9~TjjoVFQR4uA3UnJH6O-3X8CZm2VnpmDddqwZZQ2b9ySuzdguK8Vq5XhyLdNLQJM0uHbVmijhneeQ1G5OSGiTaxWIiIcS3WABl-KdC-AHRWNXvq1unSWfF8kdBpFVYp0I5cQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 13000,
          imgUrl: 'https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1660521600&Signature=EhrntMh6S41ITaYctGwPMALpG5KxuXsmUy~5qKBblHEtbpCybT2-HATX73Kl02jhljT3t5ObPZiBXW8LxAnszv5E0oSHHqBp1bmLlJKtuOEsAmpcHR25nGPLK0IWh-K3tB7h-G2u72IxgSqcg5V2fj6z2W3G-7G0jcq7p5kFOT7xYQjaG3obrAG77KZRHwhd2nVhbDxQDeCLh04rz9~TjjoVFQR4uA3UnJH6O-3X8CZm2VnpmDddqwZZQ2b9ySuzdguK8Vq5XhyLdNLQJM0uHbVmijhneeQ1G5OSGiTaxWIiIcS3WABl-KdC-AHRWNXvq1unSWfF8kdBpFVYp0I5cQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 43000,
          imgUrl: 'https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1660521600&Signature=EhrntMh6S41ITaYctGwPMALpG5KxuXsmUy~5qKBblHEtbpCybT2-HATX73Kl02jhljT3t5ObPZiBXW8LxAnszv5E0oSHHqBp1bmLlJKtuOEsAmpcHR25nGPLK0IWh-K3tB7h-G2u72IxgSqcg5V2fj6z2W3G-7G0jcq7p5kFOT7xYQjaG3obrAG77KZRHwhd2nVhbDxQDeCLh04rz9~TjjoVFQR4uA3UnJH6O-3X8CZm2VnpmDddqwZZQ2b9ySuzdguK8Vq5XhyLdNLQJM0uHbVmijhneeQ1G5OSGiTaxWIiIcS3WABl-KdC-AHRWNXvq1unSWfF8kdBpFVYp0I5cQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 6000,
          imgUrl: 'https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1660521600&Signature=EhrntMh6S41ITaYctGwPMALpG5KxuXsmUy~5qKBblHEtbpCybT2-HATX73Kl02jhljT3t5ObPZiBXW8LxAnszv5E0oSHHqBp1bmLlJKtuOEsAmpcHR25nGPLK0IWh-K3tB7h-G2u72IxgSqcg5V2fj6z2W3G-7G0jcq7p5kFOT7xYQjaG3obrAG77KZRHwhd2nVhbDxQDeCLh04rz9~TjjoVFQR4uA3UnJH6O-3X8CZm2VnpmDddqwZZQ2b9ySuzdguK8Vq5XhyLdNLQJM0uHbVmijhneeQ1G5OSGiTaxWIiIcS3WABl-KdC-AHRWNXvq1unSWfF8kdBpFVYp0I5cQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 7000,
          imgUrl: 'https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1660521600&Signature=EhrntMh6S41ITaYctGwPMALpG5KxuXsmUy~5qKBblHEtbpCybT2-HATX73Kl02jhljT3t5ObPZiBXW8LxAnszv5E0oSHHqBp1bmLlJKtuOEsAmpcHR25nGPLK0IWh-K3tB7h-G2u72IxgSqcg5V2fj6z2W3G-7G0jcq7p5kFOT7xYQjaG3obrAG77KZRHwhd2nVhbDxQDeCLh04rz9~TjjoVFQR4uA3UnJH6O-3X8CZm2VnpmDddqwZZQ2b9ySuzdguK8Vq5XhyLdNLQJM0uHbVmijhneeQ1G5OSGiTaxWIiIcS3WABl-KdC-AHRWNXvq1unSWfF8kdBpFVYp0I5cQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 1930,
          imgUrl: 'https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1660521600&Signature=EhrntMh6S41ITaYctGwPMALpG5KxuXsmUy~5qKBblHEtbpCybT2-HATX73Kl02jhljT3t5ObPZiBXW8LxAnszv5E0oSHHqBp1bmLlJKtuOEsAmpcHR25nGPLK0IWh-K3tB7h-G2u72IxgSqcg5V2fj6z2W3G-7G0jcq7p5kFOT7xYQjaG3obrAG77KZRHwhd2nVhbDxQDeCLh04rz9~TjjoVFQR4uA3UnJH6O-3X8CZm2VnpmDddqwZZQ2b9ySuzdguK8Vq5XhyLdNLQJM0uHbVmijhneeQ1G5OSGiTaxWIiIcS3WABl-KdC-AHRWNXvq1unSWfF8kdBpFVYp0I5cQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
      ]
    }
  },

  watch: {
    product : {
      handler() {
        this.product.name.length > 0 && this.product.imgUrl.length > 0 && this.product.price.length > 0 ? this.disabled = false : this.disabled = true;
      },
      deep: true
    },
  },

  mounted() {
    if (localStorage.getItem('newProducts')) {
      try {
        this.newProducts = JSON.parse(localStorage.getItem('newProducts'));
      } catch(e) {
        localStorage.removeItem('newProducts');
      }
    }
  },

  methods: {
    deleteProduct(index) {
      this.products.splice(index, 1);
    },


    addProduct() {
      let newProduct = Object.assign({}, this.product);
      this.newProducts.push(newProduct);
      this.saveProduct();
      this.product.name = ""
      this.product.description = ""
      this.product.price = ""
      this.product.imgUrl = ""
    },

    removeLSProduct(index) {
      this.newProducts.splice(index, 1);
      this.saveProduct();
    },

    saveProduct() {
      const parsed = JSON.stringify(this.newProducts);
      localStorage.setItem('newProducts', parsed);
    }
  }
}
</script>

<style scoped lang="scss">
.catalog {
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
  grid-template-rows: 100px;
  column-gap: 20px;

  &__title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;

    &__ttl {
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
      color: #3F3F3F;
    }

    &__select {
      width: 121px;
    }
  }

  &__main-wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 0 8px;

    @media (max-width: 900px) {
      display: block;
      align-items: center;
    }

    &__form {
      width: 332px;
      max-height: 440px;
      display: inline-block;
      position: sticky;
      top: 24px;

      @media (max-width: 900px) {
        position: relative;
        margin-bottom: 36px;
      }

      @media (max-width: 728px) {
        width: 330px;
      }

      .app-input:not(:first-child){
        margin-top: 16px;
      }

      .app-textarea {
        margin-top: 16px;
      }

      .app-button {
        margin-top: 24px;
        width: 100%;
      }
    }

    &__cards {
      width: 100%;
      gap: 16px 20px;
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, minmax(200px, 332px));

      @media (max-width: 1050px) {
        grid-template-columns: repeat(2, minmax(200px, 332px));
      }

      @media (max-width: 728px) {
        display: block;
        width: 80%;
        min-width: 330px;
      }

      &__product {
        @media (max-width: 728px) {
          margin: 16px 0;
        }
        .product-card {
        }
      }
    }
  }
}
</style>
