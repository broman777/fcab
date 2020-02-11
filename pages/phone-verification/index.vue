<template>
  <div class="page page__phone-verification authorization">
    <div class="box">
      <nuxt-link
        to="/phone-confirm"
        class="link link__back"
      >
        <i />
        Назад
      </nuxt-link>
      <p class="heading">
        Верификация номера
      </p>

      <p class="sub-heading">
        Для подтверждения вашего номера телефона, введите временный
        код-пароль, который был отправлен вам на указаный контакт
      </p>
      <div class="authorization-form">
        <s-input
          v-model.trim="code"
          :label="'Код пароль'"
          type="text"
          mask-type="phone-code"
          placeholder-char="x"
        />

        <s-button
          to="/inn-identification"
          theme="red"
          gap-y="19px"
        >
          Отправить
        </s-button>

        <span>Не пришел код?</span>
        <nuxt-link
          to="/authorization"
          class="link"
        >
          Отправить еще раз
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhoneVerificationPage',
  layout: 'simple',
  data() {
    return {
      code: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.page__phone-verification {
  .box {
    position: relative;
    padding: 0 165px;
  }
  .link {
    display: inline-flex;
  }
  .link__back {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    transition: initial;

    align-items: center;
    i {
      margin-right: 8px;

      @include sprite("back-arrow");
    }
    &:hover i {
      @include sprite("back-arrow_hover");
    }
  }
  span {
    font-size: 14px;
    color: $bali;
  }
}

</style>
