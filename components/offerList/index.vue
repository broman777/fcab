<template>
  <section class="page__offers">
    <div class="box">
      <p class="heading">
        Предложение по вашей заявке <span>Мы продолжаем поиск предложений <i class="circle" /></span>
      </p>
      <div class="warn">
        <p class="warn_title">
          Обратите внимание!
        </p>
        <p>
          Вы можете принять несколько предложений и оформить несколько кредитов одновременно.
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Партнер</th>
            <th>Сумма</th>
            <th>Срок</th>
            <th>Действует до</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="~assets/img/tmp/offer1.png" alt="Dinero"></td>
            <td>3 000 - 10 000 грн</td>
            <td>3-7 дней</td>
            <td>01.11.2019</td>
            <td>
              <span class="offer_gift" />
              <nuxt-link to="/offers/2" class="btn">
                Принять
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td><img src="~assets/img/tmp/offer2.png" alt="AlexCredit"></td>
            <td>3 000 - 10 000 грн</td>
            <td>7-31 дней</td>
            <td>21.11.2019</td>
            <td>
              <span class="offer_gift" />
              <nuxt-link to="/offers/2" class="btn">
                Принять
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td><img src="~assets/img/tmp/offer3.png" alt="EuroGroshi"></td>
            <td>3 000 - 15 000 грн</td>
            <td>1-15 дней</td>
            <td>16.11.2019</td>
            <td>
              <nuxt-link to="/offers/2" class="btn">
                Принять
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td><img src="~assets/img/tmp/offer4.png" alt="EuroGroshi"></td>
            <td>5 000 - 11 000 грн</td>
            <td>1-15 дней</td>
            <td>16.12.2019</td>
            <td>
              <nuxt-link to="/offers/2" class="btn">
                Принять
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<style lang="scss">
  .page__offers {
    .heading {
      span {
        display: block;
        float: right;
        color: $geyser;
        font-size: 13px;
        font-weight: normal;
      }
    }
    .finding {
      display: block;
      width: 50px;
      height: 50px;
    }
    //TODO: svg loader
    .warn {
      color: $bali;
      background: #fff4f8;
      padding: 30px;
      margin-bottom: 23px;
      &_title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
    }
    table {
      text-align: left;
      width: 100%;
      font-size: 14px;
      th {
        padding: 18px 0;
        text-align: left;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 600;
        border-bottom: 1px solid $mystic;
      }
      td {
        color: $space;
        height: 96px;
        vertical-align: middle;
        border-bottom: 1px solid $mystic;
        &:first-child{
          width: 24%;
        }
        &:last-child {
          width: 31%;
          text-align: right;
        }
      }
      .btn {
        padding: 0;
        width: 198px;
        @include btn-trans (43px, 8px, $radical, $radical-h);
        font-size: 14px;
        font-weight: 600;
      }
      .offer_gift {
        padding-top: 13px;
        height: 45px;
        width: 45px;
        border-radius: 8px;
        background: $zumor;
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        cursor: pointer;
        &:before {
          content:'';
          transition: 0.2s ease;
          opacity: 0.9;
          @include sprite('gift');
          display: block;
          margin: 0 auto;
        }
        &:hover:before {
          opacity: 1;
        }
      }
    }
  }
</style>
