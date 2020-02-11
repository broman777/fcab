<template>
  <section class="page page__dashboard">
    <section class="offers">
      <div class="content">
        <p class="heading">
          Предложение по вашей заявке
        </p>
      </div>
    </section>
    <section class="calculator">
      <div class="content">
        <p class="heading">
          Подать заявку на кредит
        </p>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">
.page__dashboard {
  section {
    padding: 0 160px;
    margin-bottom: 10px;
    background-color: #ffffff;
  }
  .content {
    padding: 67px 0;
  }
}

</style>
