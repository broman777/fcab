<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '~/components/shared/TheHeader/index.vue'
import TheFooter from '~/components/shared/TheFooter/index.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
