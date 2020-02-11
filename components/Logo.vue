<template>
  <div>
    <div class="form-group">
      <input
        v-model="txtInput"
        type="text"
        :class="{'has-content': hasValue(txtInput)}"
      >
      <label>First Name</label>
      <span class="focus-border" />
      <span class="msg msg_error">Some error text goes here</span>
      <span class="msg msg_success">Some success text goes here</span>
    </div>
    <div class="form-group checkbox">
      <label>
        <input type="checkbox">
        <span class="txt">I agree with<a href="#">rules and conditions</a></span>
        <span class="msg msg_error">Some error text goes here</span>
      </label>
    </div>
    <div class="form-group radio">
      <label>
        <input type="radio" name="auth">
        <span class="txt">Join Finme Cabinet</span>
      </label>
    </div>
    <div class="form-group radio">
      <label>
        <input type="radio" name="auth" checked>
        <span class="txt">I already have an account Finme Cabinet</span>
      </label>
    </div>
    <div
      class="form-group select"
      :class="{'has-content': hasValue(multiselectVal)}"
    >
      <multiselect
        v-model="getUserName"
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
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  data() {
    return {
      txtInput: '',
      multiselectVal: '',
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
  },
  computed: {
    getUserName: {
      get() {
        return this.users.filter(option => this.multiselectVal.includes(option.user))
      },
      set(selectedOption) {
        if (selectedOption !== null) {
          this.multiselectVal = selectedOption.user
        } else {
          this.multiselectVal = ''
        }
      }
    }
  },
  methods: {
    hasValue(inputVal) {
      return inputVal.length > 0
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
