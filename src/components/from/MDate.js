import {QBtn, QDate, QIcon, QInput, QPopupProxy } from 'quasar';
import {h, onBeforeMount, reactive, ref} from 'vue';

import {createComponent} from '../../utils/create.js';

export default createComponent({
  name: 'MDate',

  props: {
    modelValue: String,
    inputProps: Object,
    pickerProps: Object,
    transition: {
      type: String,
      default: 'scale',
    },
    closeOnContentClick: {
      type: Boolean,
      default: true,
    },
    isIcon: {
      type: Boolean,
      default: false,
    }

  },
  setup(props, {slots, emit}) {
    const menu = ref(false);
    const rangeRef = ref(null);
    return () => h(
               QInput, {
                 ...props.inputProps,
                 modelValue: props.pickerProps.range ? rangeRef : props.modelValue,
                 readonly: props.pickerProps.range,
                 'onUpdate:modelValue': (value) => {
                  if(!props.pickerProps.range) emit('update:modelValue', value)
                   // console.log(...props.pickerProps)
                 }
               },
               {
                 append: () => h(
                     QIcon, {name: 'event', class: 'cursor-pointer'},
                     [h(QPopupProxy, {
                       cover: true,
                       modelValue: menu.value,
                       'onUpdate:modelValue': (value) => {menu.value = value},
                       transitionShow: props.transition,
                       transitionHide: props.transition
                     },
                        [h(QDate, {
                          // range: props.pickerProps.range,
                          modelValue: props.modelValue,
                          ...props.pickerProps,
                          'onUpdate:modelValue': (value) => {
                            emit('update:modelValue', value)

                            if(props.pickerProps.range) rangeRef.value = `${value.from} : ${value.to}` 
                            if(props.closeOnContentClick) menu.value = false
                          }
                        },
                           [!props.closeOnContentClick ?
                                h('div', {
                                  class: 'row items-center justify-end q-gutter-sm'
                                },
                                  [
                                    h(
                                        QBtn,
                                        {
                                          label: 'Close',
                                          flat: true,
                                          onClick: () => menu.value = false
                                        },
                                        ),
                                  ]) :
                                void 0])])])
               })
  },
});
