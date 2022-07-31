<template>
  <div class="app-textarea">
    <div class="app-textarea__label label">
      <label>
        {{ label }}
      </label>
    </div>

    <textarea
        class="app-textarea__textarea"
        :placeholder="placeholder"
        :value="modelValue"
        :required="required"
        :maxlength="maxLength"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],

  props: {
    label: {
      type: String,
      required: true,
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

    error: {
      type: Boolean,
      default: false,
    },

    maxLength: {
      type: Number,
      default: 500,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-textarea {
  width: 100%;

  ::placeholder {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: left;
    color: #B4B4B4;
  }

  &__label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
  }

  .label {
    > label {
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: #49485E;
    }
  }

  &__textarea {
    padding: 10px 16px;
    width: 100%;
    height: 108px;
    color: #3F3F3F;
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    outline: none;
    resize: none;
    overflow: auto;
    margin: 0;

    &:hover {
      background: #FAFAFA;
    }

    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #7BAE73;
    }
  }
}
</style>
