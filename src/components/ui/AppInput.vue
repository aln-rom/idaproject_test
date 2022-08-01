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

  computed: {
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
@import '../../assets/styles/variables.scss';
.app-input {
  align-items: flex-start;
  position: relative;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  ::placeholder {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    color: $gray-500;
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
    color: $label-dark;


    &__required {
      width: 4px;
      height: 4px;
      background: $error;
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
    background: $background-white;
    border-radius: 4px;
    border: none;
    font-size: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    line-height: 140%;
    padding: 0 16px;

    &:hover {
      background: $background-tertiary;
    }

    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px $main-green;
    }

    &_error {
      box-shadow: 0 0 0 1px $error !important;
    }
  }

  &__error {
    color: $error;
  }
}
</style>
