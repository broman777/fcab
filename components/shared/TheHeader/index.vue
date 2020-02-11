<template>
  <header>
    <div class="box">
      <nuxt-link to="/" class="logo" />
      <div v-if="!isSimple" class="header_right">
        <ul class="phones-list dt">
          <li>+38 (067) 640 07 23</li>
          <li>+38 (050) 341 79 02</li>
        </ul>
        <SUserMenu />
      </div>
    </div>
  </header>
</template>
<style lang="scss">
  header {
    border-bottom: 1px solid $selago;
    background-color: #ffffff;
    .box {
      display: flex;
      height: 75px;

      align-items: center;
      justify-content: space-between;
    }
  }
  .logo {
    display: block;
    @include sprite("logo");
  }

  .header_right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .phones-list {
      color: $bali;
      margin-right: 50px;
      li {
        display: inline-block;
        vertical-align: top;
        &:before {
          content: "/ ";
        }
        &:first-child:before {
          content: "";
        }
      }
    }
  }

</style>

<script>
import SUserMenu from '~/components/shared/SUserMenu/index.vue'
export default {
  components: {
    SUserMenu
  },
  props: {
    'isSimple': Boolean
  }
}
</script>
