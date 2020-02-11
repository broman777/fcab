<template>
  <div class="page page__initial-authorization authorization">
    <p class="heading">
      Вход в кабинет
    </p>
    <initial-authorization />
  </div>
</template>
<script>
import InitialAuthorization from '@/components/authorization/InitialAuthorization'
export default {
  name: 'Authorization',
  layout: 'simple',
  components: {
    InitialAuthorization
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
