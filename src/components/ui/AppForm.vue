<script>
export default {
  emits: ["submitForm"],

  methods: {
    submitForm: function (e) {
      this.$emit("submitForm");
      e.preventDefault();
    },
  },
};
</script>

<template>
  <form class="app-form" @submit="submitForm">

    <div class="app-form__wrapper">
      <slot></slot>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.app-form {
  padding: 24px 0;
  position: relative;
  min-width: 300px;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &__wrapper {
    margin: 24px 32px;
    display: grid;
    padding: 0 32px 0 0;
  }
}
</style>
