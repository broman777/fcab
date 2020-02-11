<template>
  <div class="page page__inn-identification authorization">
    <div class="box">
      <p class="heading">
        Восстановление пароля
      </p>

      <p class="sub-heading">
        В системе зарегистрированно несколько пользователей с указаным
        номером телефона. Для индетификации, введите свой ИНН
      </p>
      <div class="authorization-form">
        <s-input
          v-model.trim="inn"
          :label="'ИНН'"
          type="text"
          mask-type="inn"
          placeholder-char="x"
        />

        <s-button
          to="/phone-verification"
          theme="red"
          gap-y="19px"
        >
          Далее
        </s-button>

        <nuxt-link
          to="/authorization"
          class="link"
        >
          Вернутся к форме входа
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InnIdentificationPage',
  layout: 'simple',
  data() {
    return {
      inn: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.page__inn-identification {
  .box {
    padding: 0 165px;
  }
}

</style>
