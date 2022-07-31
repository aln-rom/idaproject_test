<script>
export default {
  emits: ["update:modelValue"],

  props: {
    error: {
      type: Boolean,
      default: false,
    },

    errorMessage: {
      type: String,
    },

    type: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      default: "",
    },

    placeholder: {
      type: String,
    },

    modelValue: {
      type: String,
    },

    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showPass: false,
    };
  },
};
</script>

<template>
  <div class="app-input">
    <label v-if="label" class="app-input__label">
      {{ label }}
      <div v-if="required" class="app-input__label__required"></div>
    </label>
    <input
        :class="[{ 'app-input__input_error': error }, 'app-input__input']"
        :placeholder="placeholder"
        :value="modelValue"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="error" class="app-input__error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-input {
  align-items: flex-start;
  position: relative;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  ::placeholder {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    color: #B4B4B4;
    font-weight: normal;
  }

  &__label {
    display: block;
    margin-bottom: 4px;
    float: left;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;


    &__required {
      width: 4px;
      height: 4px;
      background: #FF8484;
      border-radius: 4px;
      display: inline-block;
      position: relative;
      top: -4px;
    }
  }

  &__input {
    width: 100%;
    height: 36px;
    color: #3F3F3F;
    background: #FFFEFB;
    border-radius: 4px;
    border: none;
    font-size: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    line-height: 140%;
    padding: 0 16px;

    &:hover {
      background: #FAFAFA;
    }

    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #7BAE73;
    }

    &_error {
      box-shadow: 0 0 0 1px #FF8484 !important;
    }
  }

  &__error {
    color: #FF8484;
  }
}
</style>
