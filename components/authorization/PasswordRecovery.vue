<template>
  <div class="authorization-form">
    <s-input
      v-model.trim="phone"
      :label="'Номер телефона'"
      type="tel"
      mask-type="tel"
    />
    <s-button
      to="/phone-confirm"
      theme="red"
      gap-y="19px"
    >
      Дальше
    </s-button>
    <nuxt-link
      to="/authorization"
      class="link"
    >
      Вернутся к форме входа
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'PasswordRecovery',
  data() {
    return {
      phone: ''
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>

</style>
