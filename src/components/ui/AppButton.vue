<template>
  <button
      :type="type"
      :disabled="disabled"
      class="app-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },

    disabled: {
      type: Boolean,
    },

    error: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.app-button {
  border: none;
  cursor: pointer;
  left: 0;
  border-radius: 10px;
  background: $main-green;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 36px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: $background-white;

  &:hover,
  :focus {
    background: $light-green;
  }

  &:active {
    background: $dark-green;
  }

  &:disabled {
    background: #EEEEEE;
    color: $gray-500;
    cursor: not-allowed;
  }
}
</style>
