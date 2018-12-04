/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Button', module)
  .add('flat pickr', () => ({
    template: '<vue-form-generator :schema="schema" :model="model" :options="formOptions">',
    data: () => ({
      schema: {
        fields: [{
          type: 'flat-pickr',
          label: 'flatPickr (custom field)',
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
