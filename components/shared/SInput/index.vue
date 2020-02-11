<template>
  <div class="form-group" :class="{disabled}">
    <masked-input
      v-if="type != 'datepicker'"
      v-model="inputValue"
      :mask="mask"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="fieldType"
      :class="inputClasses"
      placeholder-char="x"
    />
    <vuejs-datepicker
      v-else
      v-model="inputValue"
      :class="inputClasses"
      minimum-view="minimumView"
      maximum-view="maximumView"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <span class="focus-border" />
    <label v-if="label">
      {{ label }}
    </label>
    <i
      v-if="showHideIco"
      class="show-hide-ico"
      :class="{ 'active': isPasswordVisible }"
      @click="togglePasswordVisibility"
    />
    <div class="msg msg_error">
      errorMessage
    </div>
    <div class="msg msg_success">
      successMessage
    </div>
  </div>
</template>

<script>
export default {
  name: 'SInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    showHideIco: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    maskType: {
      type: String,
      default: '',
      validator(value) {
        return ['tel', 'inn', 'phone-code', 'pesel', 'date', ''].includes(value)
      }
    },
    isFullWidth: {
      type: Boolean,
      default: false
    },
    hasForgotPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    }
  },
  data() {
    return {
      datepickerDate: '',
      datepickerValue: '',
      inputValue: '',
      isFocused: false,
      isPasswordVisible: false,
      fieldType: this.type
    }
  },
  computed: {
    inputClasses() {
      return [
        { 'has-content': this.hasValue }
      ]
    },

    inputStyles() {
      return {
        height: this.textareaHeight ? `${this.textareaHeight}px` : null
      }
    },

    hasValue() {
      return this.inputValue.length > 0
    },

    isHintVisible() {
      return this.isFocused && this.hint && !this.hasError
    },

    isErrorMessageVisible() {
      return Boolean(this.hasError && this.errorMessage.length)
    },

    isPhoneType() {
      return this.fieldType === 'tel'
    },

    isPasswordType() {
      return this.type === 'password'
    },

    mask() {
      switch (this.maskType) {
        case 'tel':
          return ['+', '3', '8', '0', ' ', '(', /[3-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
        case 'inn':
          return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
        case 'phone-code':
          return [/\d/, /\d/, /\d/, /\d/]
        case 'pesel':
          return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
        case 'date':
          return [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
        default:
          return false
      }
    }
  },
  methods: {
    togglePasswordVisibility() {
      if (this.isPasswordVisible) {
        this.fieldType = 'password'
      } else {
        this.fieldType = 'text'
      }
      this.isPasswordVisible = !this.isPasswordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  .show-hide-ico {
    position: absolute;
    right: 0;
    bottom: 10px;
    z-index: 15;
    cursor: pointer;
    @include sprite ("show-hide-ico");
    &.active {
      @include sprite ("show-hide-ico_active");
    }
  }
  .vdp-datepicker {
    width: 100%;
    &:after {
      content:"";
      position: absolute;
      right: 0;
      top: 4px;
      @include sprite('date');
    }
  }
}

</style>
