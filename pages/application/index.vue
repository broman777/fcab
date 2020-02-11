<template>
  <div class="page__offers application">
    <form class="application_form box">
      <p class="heading-small">
        Новая заявка
      </p>
      <!-- 2 step -->
      <address-data v-if="step == 2" />
      <!-- 1 step -->
      <personal-data v-else />
      <div class="btns">
        <nuxt-link to="/application" class="btn-trans">
          Отменить подачу заявки
        </nuxt-link>
        <span
          class="btn-fill"
        >
          Далее
        </span>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  .application {
    .heading-small {
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    &_form .data{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .heading {width: 100%;}
      .form-group {
        width: calc(33% - 15px);
        margin-bottom: 35px;
        &.full {
          width: 100%;
        }
      }
    }
    .multiselect {
      padding: 0;
    }
    .checkbox {
      margin: -10px 0 50px;
      a {
        color: $radical;
        text-decoration: underline;
        &:hover {
          color: $radical-h;
        }
      }
    }
    .btns {
      width: 100%;
      @include flex (space-between, center);
      .btn-fill {
        width: 300px;
        color: #fff;
        @include btn (43px, 8px, $radical, $radical-h);
      }
      .btn-trans {
        width: 300px;
        @include btn-trans (43px, 8px, $radical, $radical-h);
      }
    }
  }
  @media screen and (max-width: $mobMax) {
    .application {
      &_form .data .form-group {
        width: 100%;
        margin: 0 0 31px;
      }
      .heading {
        margin-bottom: 28px;
      }
      .btns {
        flex-direction: column;
        .btn-trans {
          border: 0;
          order: 5;
          font-size: 1.1em;
          margin-top: 8px;
        }
        .btn-fill,
        .btn-trans {
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>

<script>
import personalData from '@/components/longForm/personalData'
import addressData from '@/components/longForm/addressData'
export default {
  components: {
    personalData,
    addressData
  },
  data() {
    return {
      step: 2,
      multiselectVal: '',
      userName: {
        'user': 'Florence Vasquez',
        'age': 20,
        'email': 'ruziza@vusa.cg'
      },
      userSex: {
        'user': 'Мужской',
        'age': 20,
        'email': 'ruziza@vusa.cg'
      },
      users: [
        {
          'user': 'Florence Vasquez',
          'age': 20,
          'email': 'ruziza@vusa.cg'
        }
      ]
    }
  }
}
</script>
