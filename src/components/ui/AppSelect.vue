<script>
import vClickOutside from "click-outside-vue3";

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },

  emits: ["update:selectedOption"],

  props: {
    selectedOption: {
      type: Object,
    },

    options: {
      type: Array,
      required: true,
    },

  },

  data() {
    return {
      open: false,
    };
  },

  computed: {
    radioButtonValue: {
      get() {
        return this.selectedOption;
      },
      set(selectedOption) {
        this.$emit("update:selectedOption", selectedOption);
        this.open = false;
      },
    },
  },

  methods: {
    onClickOutside() {
      this.open = false;
    },

    showSelectorOptions() {
      this.open = !this.open;
    },
  },
};
</script>

<template>
  <div
      class="app-radio-select"
  >

    <div
        class="app-radio-select__item"
        @click="showSelectorOptions"
    >
      <p v-if="selectedOption">{{ selectedOption.name }}</p>
      <div
          :class="[ 'app-radio-select__item__img',
        { 'app-radio-select__item__img_opened': open },
      ]">
        <img src="../../assets/images/open_sign.svg">
      </div>
    </div>

    <div
        v-if="open"
        v-click-outside="onClickOutside"
        class="app-radio-select__popup popup"
    >
      <div v-for="option of options" :key="option" class="popup__item">
        <input
            :id="option.id"
            v-model="radioButtonValue"
            class="popup__radio"
            type="radio"
            :value="option"
        />
        <label :for="option.id">{{ option.name }}</label>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.app-radio-select {
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: auto;

  &__item {
    position: relative;
    padding: 10px 0 10px 16px;
    height: 26px;
    width: 100%;
    transition: background-color 0.2s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: $background-white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: $gray-500;

    > p {
      width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }


    &:hover {
      background: $background-tertiary;
    }

    &__img {
      width: 4.59px;
      height: 4.59px;
      display: inline-block;
      top: -4px;
      left: 0;
      position: relative;

      &_opened {
        transform: rotate(180deg);
        top: 6px;
        left: 3px;
        position: relative;
      }
    }
  }

  &__popup {
    position: absolute;
    top: 58px;
    left: 0;
    z-index: 20;
    max-height: 250px;
    overflow: auto;
    background-color: $background-white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    padding: 16px;
    color: $label-primary;
    width: 100%;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
  }

  .popup {
    &__item {
      label {
        cursor: pointer;
        color: $label-primary;
        display: flex;
        align-items: center;
        margin-bottom: 4px;

        &:hover {
          color: $label-secondary;
        }
      }

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      p {
        color: $label-secondary;
      }
    }

    &__radio {
      position: absolute;
      opacity: 0;
    }
  }
}
</style>
