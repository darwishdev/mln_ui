// import {QBtn, QForm, QInput , QSelect , QRange , QDate , QRadio , QCheckbox , QToggle , QOptionGroup , QSlider} from 'quasar';
// import {h, onBeforeMount, reactive, ref} from 'vue';
// import MDate from './MDate.js';
// import {createComponent} from '../../utils/create.js';
// import {api} from '../../utils/http.js'

// const inputsComponents = {
//   QInput: QInput,
//   QSelect: QSelect,
//   QBtn: QBtn,
//   QRange: QRange,
//   QDate: QDate,
//   QRadio: QRadio,
//   MDate: MDate,
//   QCheckbox: QCheckbox,
//   QOptionGroup: QOptionGroup,
//   QSlider: QSlider,
//   QToggle: QToggle,
// };
// export default createComponent({
//   name: 'MForm',
//   props: {
//     default: Object,
//     inputs: Array,
//     submitCallback: Function,
//     url: String,
//     method: String,
//   },

//   emits: ['update' , 'onSubmit'],

//   setup(props, {slots, emit}) {
//     const state = reactive({});
//     const rootRef = ref(null);
//     const loading = ref(false);

//     // onBeforeMount(() => {
//     //   props.inputs.forEach((input) => {
      
//     //     state[input.default.name] = input.initialValue
       
//     //     if(typeof input.getData == 'function'){
//     //       input.default.loading = true
//     //       input.getData().then((res) => {
//     //          input.default.options = res
//     //          input.default.loading = false
//     //         }).catch((err) => {
//     //           console.log(err)
//     //           input.default.loading = false

//     //       })
        
    
//     //     }
//     //   });
//     // });
   
//      function genereateInputs() {
//       return props.inputs.map( (input) => {
//         // state[input.default.name] = input.initialValue;
//         return h(inputsComponents[input.component], {
//           ...input.default,
//           modelValue: state[input.default.name],
//           'onUpdate:modelValue': (value) => (state[input.default.name] = value),
//         });
//       });
//     }

//     function reset() {
//       props.inputs.forEach((input) => (state[input.default.name] = null));
//     }
//     function submit() {
//       emit('onSubmit', state);
//     }
//     return () => loading.value ?  h(
//       'div',
//        {innerHTML: 'Loading...'})  : h(
//               QForm,
//                {...props.default, class : "MForm" ,ref: rootRef, onreset: reset, submit: submit},
//                genereateInputs());
//   },
// });
