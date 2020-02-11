<template>
  <div class="page page__password-recovery authorization">
    <div class="box">
      <p class="heading">
        Восстановление пароля
      </p>
      <p class="sub-heading">
        Подтвердите правильность введенного номера телефона
      </p>
      <p class="phone-number">
        +38 (067) 231-85-77
      </p>
      <div class="s-button-wrap">
        <s-button
          to="/password-recovery"
          theme="transparent"
          width="300px"
          gap-y="19px"
          gap-x="initial"
        >
          Изменить номер
        </s-button>
        <s-button
          to="/inn-identification"
          theme="red"
          width="300px"
          gap-y="19px"
          gap-x="initial"
        >
          Все верно
        </s-button>
      </div>
      <nuxt-link
        to="/authorization"
        class="link"
      >
        Вернутся к форме входа
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhoneConfirmPage',
  layout: 'simple',
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.page__password-recovery {
  .box {
    padding: 0 165px;
  }
  .phone-number {
    margin-bottom: 50px;
    font-size: 30px;
    font-weight: 600;
  }
  .s-button-wrap {
    display: flex;

    justify-content: space-between;
  }
}

</style>
