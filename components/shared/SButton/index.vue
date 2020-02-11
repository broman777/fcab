<template>
  <div
    :style="styleList"
    :class="classList"
  >
    <!-- if button -->
    <button
      v-if="isButton"
      :disabled="isDisabled"
      @click="onButtonClick"
    >
      <span
        class="button__text"
      >
        <slot />
      </span>
    </button>
    <!-- if button -->
    <!-- if nuxt link -->
    <nuxt-link
      v-if="isNuxtLink"
      :to="to"
      :params="params"
    >
      <span
        class="button__text"
      >
        <slot />
      </span>
    </nuxt-link>
    <!-- if nuxt link -->
  </div>
</template>

<script>
export default {
  name: 'SButton',
  props: {
    type: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    params: {
      type: Object,
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'radical'
    },
    fontWeight: {
      type: Number,
      default: 700
    },
    fontSize: {
      type: Number,
      default: 14
    },
    size: {
      type: String,
      default: 'medium'
    },
    width: {
      type: String,
      default: 'auto'
    },
    block: {
      type: Boolean,
      default: false
    },
    gapX: {
      type: String,
      default: null
    },
    gapY: {
      type: String,
      default: '0px'
    }
  },
  computed: {
    styleList() {
      return [
        { 'margin-bottom': this.gapY ? this.gapY : 'auto' },
        { 'margin-right': this.gapX ? this.gapX : 'auto' },
        { 'width': this.width },
        { 'min-width': this.block ? '100%' : 0 }
      ]
    },
    classList() {
      return [
        's-button',
        `s-button_${this.theme}`,
        { 's-button_disabled': this.isDisabled },
        { 's-button_gap-x': this.gapX },
        { 's-button_gap-y': this.gapY }
      ]
    },
    isButton() {
      return this.type !== null
    },
    isNuxtLink() {
      return this.to !== null
    }
  },
  methods: {
    onButtonClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
button, a {
  display: flex;
  width: 100%;
  height: 45px;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  border: 0;
  border-radius: 7px;
  outline: none;
  transition: all .3s;

  align-items: center;
  justify-content: center;
}
.s-button {
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  border: 0;
  border-radius: 7px;
  outline: none;
  transition: all .3s;

  align-items: center;
  justify-content: center;
  &_red {
    button, a {
      background-color: $radical;
      &:hover {background-color: $radical-h;
      }
    }
  }
  &_transparent {
    button, a {
      color: $radical;
      border: 1px solid $radical;
      background-color: transparent;
      &:hover {
        color: $radical-h;
        border-color: $radical-h;
      }
    }
  }
}

</style>
