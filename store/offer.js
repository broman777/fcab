export const state = () => ({
  appStep: 1,
  formData: {}
})

export const getters = {
  getFormData: state => state.formData,
  getStep: state => state.appStep
}

export const actions = {

}

export const mutations = {
  SET_FORM_DATA(state, payload) {
    state.formData = payload
  },
  SET_APP_STEP(state, payload) {
    state.appStep = payload
  }
}
