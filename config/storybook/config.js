/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import FieldAwesome from '../../src/components/FieldAwesome.vue'
import FieldFlatPickr from '../../src/components/FieldFlatPickr.vue'
import 'vue-form-generator/dist/vfg.css'

Vue.component('fieldAwesome', FieldAwesome)
Vue.component('fieldFlatPickr', FieldFlatPickr)
Vue.use(VueFormGenerator)

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
