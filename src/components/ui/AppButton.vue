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
.app-button {
  border: none;
  cursor: pointer;
  left: 0;
  border-radius: 10px;
  background: #7BAE73;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 36px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;

  &:hover,
  :focus {
    background: #A0D17A;
  }

  &:active {
    background: #87A96C;
  }

  &:disabled {
    background: #EEEEEE;
    color: #B4B4B4;
    cursor: not-allowed;
  }
}
</style>
