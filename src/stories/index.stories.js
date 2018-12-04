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
          type: 'awesome',
          label: 'Awesome (custom field)',
          model: 'userName'
        }]
      },
      model: {
        userName: 'aaa'
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'user-'
      }
    })
  }))
