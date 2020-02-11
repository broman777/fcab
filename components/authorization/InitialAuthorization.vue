<template>
  <div class="authorization-form">
    <s-input
      v-model.trim="phone"
      :label="'Номер телефона'"
      type="tel"
      mask-type="tel"
    />
    <s-input
      v-model.trim="password"
      :label="'Пароль'"
      type="password"
      :show-hide-ico="true"
    />
    <s-button
      theme="red"
      type="button"
      gap-y="19px"
    >
      Войти
    </s-button>
    <nuxt-link
      to="/password-recovery"
      class="link"
    >
      Забыли пароль?
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'InitialAuthorization',
  data() {
    return {
      name: '',
      phone: '',
      password: ''
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>

</style>
