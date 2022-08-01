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
@import '../../assets/styles/variables.scss';
.app-form {
  padding: 24px 0;
  position: relative;
  min-width: 300px;
  background: $background-white;
  border-radius: 4px;
  @include shadow;

  &__wrapper {
    padding: 24px;
  }
}
</style>
