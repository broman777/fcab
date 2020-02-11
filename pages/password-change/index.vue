<template>
  <section class="page page__password-change">
    <div class="box">
      <p class="heading">
        Смена пароля
      </p>

      <s-input
        v-model.trim="password"
        :label="'Новый пароль'"
        type="password"
        :show-hide-ico="true"
      />

      <s-input
        v-model.trim="repeatedPassword"
        :label="'Новый пароль еще раз'"
        type="password"
        :show-hide-ico="true"
      />

      <s-button
        theme="red"
        type="button"
        width="300px"
      >
        Изменить пароль
      </s-button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'PasswordChangePage',
  data() {
    return {
      password: '',
      repeatedPassword: ''
    }
  }
}
</script>
<style lang="scss">
.page__password-change {
  min-height: calc(100vh - 262px);
  padding: 68px 0;
  color: $space;
  .heading {
    margin-bottom: 34px;
  }
  .form-group {
    display: inline-flex;
    width: 300px;
    margin-right: 26px;
    margin-bottom: 50px;
  }
}

</style>
