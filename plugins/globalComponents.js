import Vue from 'vue'

import SInput from '~/components/shared/SInput'
import SButton from '~/components/shared/SButton'
import Vuelidate from 'vuelidate'
import MaskedInput from 'vue-text-mask'
import Multiselect from 'vue-multiselect'
import vuejsDatepicker from 'vuejs-datepicker'

Vue.component('s-button', SButton)
Vue.component('s-input', SInput)
Vue.use(Vuelidate)
Vue.component('masked-input', MaskedInput)
Vue.component('multiselect', Multiselect)
Vue.component('vuejs-datepicker', vuejsDatepicker)
