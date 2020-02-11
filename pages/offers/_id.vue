<template>
  <section class="page__offers">
    <div class="box">
      <p class="heading">
        Выбранное предложение
      </p>
      <div class="offer">
        <p class="offer_partner">
          Партнер
          <img src="~assets/img/tmp/offer4.png" alt="">
        </p>
        <ul class="offer_params">
          <li>Сумма <span>2000 грн</span></li>
          <li>Срок <span>7 дней</span></li>
        </ul>
        <form class="offer_login">
          <label>логин <input type="text" placeholder="userlogin"></label>
          <label>пароль <input type="password" placeholder="userpass"></label>
        </form>
      </div>
      <nuxt-link to="/" class="offer_accept">
        Принять
      </nuxt-link>
      <nuxt-link to="/offers" class="offer_discard">
        Вернуться к списку предложений
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .page__offers {
    text-align: center;
    .heading {
      margin-bottom: 40px;
    }
  }
  .offer {
    color: $bali;
    display: block;
    width: 100%;
    max-width: 462px;
    margin: 0 auto;
    @include shadow(#fff);
    text-align: left;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 40px;
    &_partner {
      color: $space;
      height: 73px;
      font-size: 14px;
      border-bottom: 1px solid $mystic;
      padding: 6px 28px;
      @include flex(space-between, center);
      margin-bottom: 20px;
      img {
        display: block;
        max-width: 50%;
        max-height: 100%;
      }
    }
    &_params {
      padding: 0 28px 28px;
      li {
        @include flex(space-between, center);
        font-size: 11px;
        border-bottom: 1px solid $selago;
        height: 44px;
        padding-top: 4px;
      }
      span {
        text-transform: none;
        display: inline-block;
        font-size: 13px;
        color: $space;
        font-weight: normal;
      }
    }
    &_login {
      display: block;
      width: 100%;
      background-color: $zumor;
      padding: 10px 28px 40px;
      label {
        font-size: 11px;
        @include flex(space-between, inherit);
        border-bottom: 1px solid #fff;
        padding-top: 7px;
        line-height: 36px;
      }
      input {
        max-width: 50%;
        border: none;
        outline: none;
        background: transparent!important;
        text-align: right;
        padding: 0;
        color: $space;
        &::placeholder {
          color: $space;
        }
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        box-shadow: 0 0 0 30px $zumor inset !important;
        -webkit-box-shadow: 0 0 0 30px $zumor inset !important;
      }
    }
    &_accept {
      @include btn(43px, 8px, $radical, $radical-h);
      display: block;
      max-width: 300px;
      margin: 0 auto;
      color: #fff;
    }
    &_discard {
      color: $radical;
      display: block;
      max-width: 300px;
      margin: 20px auto 0;
      text-align: center;
      font-weight: 600;
      font-size: 14px;
      &:hover {
        color: $radical-h;
      }
    }
  }
</style>
