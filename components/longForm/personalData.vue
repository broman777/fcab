<template>
  <div class="data personal-data">
    <p class="heading">
      Личные данные
    </p>
    <s-input
      label="Имя"
    />
    <s-input
      label="Фамилия"
    />
    <s-input
      label="Отчество"
    />
    <s-input
      label="Email"
      type="email"
    />
    <s-input
      label="Телефон"
      mask-type="tel"
    />
    <s-input
      label="ИНН"
      mask-type="inn"
    />
    <div class="form-group select">
      <multiselect
        v-model="userSex"
        :options="users"
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
      type="datepicker"
      placeholder="Дата рождения"
    />
    <div class="form-group select">
      <multiselect
        v-model="userName"
        :options="users"
        label="user"
        track-by="user"
        :searchable="false"
        :show-labels="false"
      />
      <label>Вид документа</label>
      <span class="msg msg_error">Some error text goes here</span>
      <span class="msg msg_success">Some success text goes here</span>
    </div>
    <s-input
      label="Серия и номер документа"
    />
    <s-input
      type="datepicker"
      placeholder="Дата выдачи паспорта"
    />
    <s-input
      label="Кем выдан"
    />
    <div class="form-group checkbox">
      <label>
        <input type="checkbox">
        <span class="txt">I agree with<a href="#">rules and conditions</a></span>
        <span class="msg msg_error">Some error text goes here</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      passportDate: new Date(),
      users: [
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
