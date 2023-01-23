import { mount } from '@cypress/vue'
import { h, ref } from 'vue'
// import { vModelAdapter } from '../../../../test/cypress/helpers/v-model-adapter.js'
import MForm from '../MForm.js'
import {reactive} from 'vue'


// function getHostElement (extendedSelector = '') {
//   return cy.get(`.MForm ${ extendedSelector }`)
// }


function mountMForm (options = {}) {
  // if (!options.props?.modelValue) {
  //   options.props = {
  //     modelValue: null,
  //     ...options.props ?? {}
  //   }
  // }

  return mount(MForm, options)
}
describe('MForm.spec.cy.js', () => {
  it('mfrom component renders', () => {
    const data = {
      default: {
        class:'row  justify-center q-pa-md',
      },
      inputs: [
        {
          default: {
            name: 'name',
            class:'col-6',
    
            label: 'name',
    
          },
          initialValue: '',
          component: 'QInput',
        },
      ],
    }
    mountMForm({
      props: data
    })
    // getHostElement()
    //   .get(`div:contains(${ icon })`)
    //   .should('exist')
  
    // expect(cy.get('input[name="name"]')).to.exist
  })
})