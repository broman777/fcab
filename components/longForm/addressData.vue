<template>
  <div class="data address-data">
    <p class="heading">
      Адресные данные
    </p>
    <s-input
      class="full"
      label="Поиск места проживания"
    />
    <div class="form-group select">
      <multiselect
        v-model="defaultSelected"
        :options="defaultSelect"
        label="user"
        tack-by="user"
        :searchable="false"
        :show-labels="false"
      />
      <label>Вид документа</label>
      <span class="msg msg_error">Some error text goes here</span>
      <span class="msg msg_success">Some success text goes here</span>
    </div>
    <s-input
      label="Дом"
    />
    <s-input
      label="Квартира"
    />
    <s-input
      label="Индекс"
    />
    <s-input
      label="Домашний телефон"
    />
    <s-input
      type="datepicker"
      placeholder="Дата, с которой проживаете"
    />
    <div class="form-group radiogroup full">
      <p class="radiogroup_title">
        Адрес регистрации отличается от места проживания?
      </p>
      <label>
        <input v-model="isMatch" type="radio" :value="true">
        <span class="txt">Да</span>
      </label>
      <label>
        <input v-model="isMatch" type="radio" :value="false">
        <span class="txt">Нет</span>
      </label>
    </div>
    <div v-if="!isMatch" class="reg_data">
      <s-input
        class="full"
        label="Поиск места проживания"
      />
      <div class="form-group select">
        <multiselect
          v-model="defaultSelected"
          :options="defaultSelect"
          label="user"
          tack-by="user"
          :searchable="false"
          :show-labels="false"
        />
        <label>Область</label>
        <span class="msg msg_error">Some error text goes here</span>
        <span class="msg msg_success">Some success text goes here</span>
      </div>
      <div class="form-group select">
        <multiselect
          v-model="defaultSelected"
          :options="defaultSelect"
          label="user"
          tack-by="user"
          :searchable="false"
          :show-labels="false"
        />
        <label>Район</label>
        <span class="msg msg_error">Some error text goes here</span>
        <span class="msg msg_success">Some success text goes here</span>
      </div>
      <div class="form-group select">
        <multiselect
          v-model="defaultSelected"
          :options="defaultSelect"
          label="user"
          tack-by="user"
          :searchable="false"
          :show-labels="false"
        />
        <label>Город</label>
        <span class="msg msg_error">Some error text goes here</span>
        <span class="msg msg_success">Some success text goes here</span>
      </div>
      <div class="form-group select">
        <multiselect
          v-model="defaultSelected"
          :options="defaultSelect"
          label="user"
          tack-by="user"
          :searchable="false"
          :show-labels="false"
        />
        <label>Улица</label>
        <span class="msg msg_error">Some error text goes here</span>
        <span class="msg msg_success">Some success text goes here</span>
      </div>
      <s-input
        label="Дом"
      />
      <s-input
        label="Квартира"
      />
      <s-input
        label="Индекс"
      />
      <s-input
        type="datepicker"
        placeholder="Дата прописки"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMatch: false,
      defaultSelected: {
        'user': 'Cole Cross',
        'age': 62,
        'email': 'kagegil@zoibejun.co'
      },
      defaultSelect: [
        {
          'user': 'Florence Vasquez',
          'age': 20,
          'email': 'ruziza@vusa.cg'
        },
        {
          'user': 'Cole Cross',
          'age': 62,
          'email': 'kagegil@zoibejun.co'
        },
        {
          'user': 'Marvin Dunn',
          'age': 28,
          'email': 'cuped@pelte.je'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .reg_data {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .radiogroup {
    margin-top: 12px;
  }
</style>
