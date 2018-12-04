<!-- fieldAwesome.vue -->
<template>
  <flat-pickr
    v-model="value"
    :config="config"
    class="form-control"
    placeholder="Select date"
    name="date">
  </flat-pickr>
</template>

<script>
import { abstractField } from 'vue-form-generator'
import VueFlatPickr from 'vue-flatpickr-component'
// import 'flatpickr/dist/flatpickr.css'
import { Japanese } from 'flatpickr/dist/l10n/ja.js'

export default {
  mixins: [ abstractField ],
  components: { 'flat-pickr': VueFlatPickr },
  data () {
    return {
      config: {
        wrap: true,
        altFormat: 'Y-m-d H:i',
        altInput: true,
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: true,
        locale: Japanese
      }
    }
  }
}
</script>
