/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import FieldAwesome from '../components/FieldAwesome.vue'

storiesOf('Button', module)
  .add('field awsome', () => ({
    components: { FieldAwesome },
    template: '<vue-form-generator :schema="schema" :model="model" :options="formOptions">',
    data: () => ({
      schema: {
        fields: [{
          type: 'flat-pickr',
          label: 'Awesome (custom field)',
          model: 'flatPickr'
        }]
      },
      model: {
        flatPickr: 'aaa'
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'user-'
      }
    })
  }))
