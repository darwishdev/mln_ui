import MForm from './components/from/MForm'
import MDate from './components/from/MDate'


const version = __UI_VERSION__

function install (app) {
  app.component(MForm.name, MForm)
  app.component(MDate.name, MDate)

}

export {
  version,
  MForm,
  MDate,

  install
}
