<template>
  <q-page padding>

    <MForm @on-submit="onFormSubmit" v-if="!loading" :default="formProps.default"
      :inputs="formProps.inputs"/>
      <div v-else>loading</div>




  </q-page>
</template>

<script setup >
import {h, onBeforeMount, reactive, ref} from 'vue';
import { useQuasar } from 'quasar';
import {api} from '../utils/http.js'

const loading = ref(true);

const formProps = reactive({
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
    {
      default: {
        name: 'phone',
        class:'col-6',
        label: 'phone',

      },
      initialValue: 's',
      component: 'QInput',
    },
    {
      default: {
        name: 'checkbox',
        class:'col-6',
        label: 'checkbox',

      },
      initialValue: false,
      component: 'QCheckbox',
    },
    {
      default: {
        name: 'toggle',
        class:'col-6',
        label: 'toggle',

      },
      initialValue: false,
      component: 'QToggle',
    },
    {
      default: {
        name: 'slider',
        class:'col-6',
        label: 'slider',
        min:20,
        max:80,
        step:10,


      },
      initialValue: false,
      component: 'QSlider',
    },
    {
      default: {
        name: 'group',
        class:'col-6',
        // type:'checkbox',
        label: 'group',
        options:[
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ],

      },
      initialValue: null,
      component: 'QOptionGroup',
    },

    {
      default: {
        name: 'city2',
        label: 'city',
        class:'col-6',
        optionLabel: 'name',
        options:[],
        autoComplete: true,

      },
      getData:() => {
        return new Promise((resolve , reject) => {
          api.post('ListUsers', {'email': 'tssdsdestdoe', 'name': '12345'}).then((res) => {
            resolve(res.data.users)
          }).catch((err) => {
            reject(err)
          })
        })
      },
      initialValue: '',
      component: 'QSelect',
    },

    {
      default: {
        name: 'date',
        // closeOnContentClick: false,
        inputProps:{
          name: 'date',
          label: 'date',
          filled: true,
          class:'col-6',

        },
        pickerProps:{
          range:true,

        },
      },
      initialValue: '',
      component: 'MDate',
    },


    {
      default: {
        label: 'Submit',
        class:'col-12 q-my-md',
        type: 'submit',
        color: 'primary',
      },
      component: 'QBtn',
    },
    {
      default: {
        label: 'reset',
        class:'col-12',
        type: 'reset',
        color: 'primary',
      },
      component: 'QBtn',
    },
  ],
});


function onFormSubmit(data) {
  console.log(data);
}
onBeforeMount(() => {
  loading.value = false;
})
</script>
