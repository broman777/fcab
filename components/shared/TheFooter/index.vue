<template>
  <footer>
    <div class="box">
      <nav v-if="!isSimple" class="footer-nav">
        <nuxt-link to="/rules">
          Правила и условия
        </nuxt-link>
        <nuxt-link to="/policy">
          Политика конфиденциальности
        </nuxt-link>
        <nuxt-link to="/processing">
          Правила обработки данных
        </nuxt-link>
        <nuxt-link to="/cookies">
          Политика cookies
        </nuxt-link>
      </nav>
      <div class="footer-bottom">
        <p class="copyright">
          Finme 2019. Все права защищены
        </p>
        <SSocial v-if="!isSimple" />
      </div>
    </div>
  </footer>
</template>

<script>
import SSocial from '~/components/shared/SSocial/index.vue'
export default {
  components: {
    SSocial
  }
}
</script>

<style lang="scss">
  .footer {
    &-nav {
      height: 42px;
      a {
        margin-right: 36px;
        text-decoration: none;
        color: #000000;
      }
    }
    &-bottom {
      display: flex;
      height: 73px;
      border-top: 1px solid #ffffff;

      align-items: center;
      justify-content: space-between;
    }
  }

  .copyright {
    color: #cad3df;
  }
  @media screen and (max-width: 840px) {
    footer {
      font-size: 10px;
    }
    .footer-nav {
      display: none;
    }
    .footer-bottom  {
      border-top: 0;
      height: 74px;
    }
  }
</style>

<script>
import SSocial from '~/components/shared/SSocial/index.vue'
export default {
  components: {
    SSocial
  },
  props: {
    'isSimple': Boolean
  }
}
</script>
