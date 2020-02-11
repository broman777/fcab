<template>
  <div class="page__offers application-base">
    <div class="box">
      <h1 class="heading">
        Новая заявка
      </h1>
      <div class="app">
        <ul class="app_details">
          <li><span>Срок кредитования</span> 18 дней</li>
          <li><span>Сумма кредита</span> 18 000 грн</li>
          <li><span>Дата погашения</span> 12.03.2019</li>
        </ul>
        <div class="app_user">
          <h2 class="sub-heading">
            Подтверждение данных
          </h2>
          <p>Уважаемый Иванов Иван Иванович, подтвердите пожалуйста, актуальность данных</p>
          <ul class="app_user-list">
            <li><span>Паспорт</span>АА347898</li>
            <li><span>Адрес</span>г. Киев, пр-т Бажана 13, кв. 289</li>
            <li><span>Социальный статус</span>работаю официльно</li>
            <li>
              <nuxt-link class="link" to="/application">
                Изменить данные
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="app_btns">
          <nuxt-link class="btn-trans" to="/">
            Отменить подачу заявки
          </nuxt-link>
          <nuxt-link class="btn-fill" to="/">
            Все данные актуальны, отправить заявку
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .app {
    &_details {
      width: 100%;
      background: $zumor;
      height: 70px;
      margin-bottom: 32px;
      @include flex (flex-start, center);
      li {
        padding-left: 30px;
        span {
          margin-right: 6px;
          color: $bali;
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 600;
        }
      }
    }
    .sub-heading {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    &_user-list {
      padding-top: 28px;
      margin-bottom: 48px;
      span {
        display: inline-block;
        vertical-align: top;
        min-width: 160px;
        padding-right: 10px;
        font-size: 10px;
        line-height: 16px;
        text-transform: uppercase;
        color: $bali;
        font-weight: 600;
      }
      li {
        margin-bottom: 12px;
      }
      .link {
        display: inline-block;
        vertical-align: top;
        font-size: 10px;
        line-height: 16px;
        font-weight: 600;
        text-transform: uppercase;
        color: $radical-h;
        opacity: 0.9;
        &:after {
          content:'';
          display: inline-block;
          vertical-align: top;
          margin-left: 6px;
          @include sprite('edit');
        }
        &:hover {
          opacity: 1;
        }
      }
    }
    &_btns {
      @include flex (space-between, center);
      .btn-fill {
        color: #fff;
        width: 50%;
        width: calc(50% - 15px);
        @include btn (43px, 8px, $radical, $radical-h);
      }
      .btn-trans {
        width: 50%;
        width: calc(50% - 15px);
        @include btn-trans (43px, 8px, $radical, $radical-h);
      }
    }
  }
</style>
