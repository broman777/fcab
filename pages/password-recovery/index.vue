<template>
  <div class="page page__password-recovery authorization">
    <p class="heading">
      Восстановление пароля
    </p>
    <password-recovery />
  </div>
</template>
<script>
import PasswordRecovery from '@/components/authorization/PasswordRecovery'
export default {
  name: 'PasswordRecoveryPage',
  layout: 'simple',
  components: {
    PasswordRecovery
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
