// Functions

import vsNotifications from './vsNotifications/index.js'
import {vsLoading} from './vsLoading/vsLoading.js'
import {vsLoadingClose} from './vsLoading/vsLoading.js'
import vsDialog from './vsDialog/index.js'
//theme
import vsTheme from '../utils/theme.js'

const vsFunctions = {
  vsNotifications,
  vsLoading,
  vsLoadingClose,
  vsTheme,
  vsDialog
}

export default Vue => {
  Vue.prototype.$vs = {}

  Object.values(vsFunctions).forEach((vsFunctions) => {
    if(vsFunctions.hasOwnProperty('subName')){
      Vue.prototype.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction
    } else {
      Vue.prototype.$vs[vsFunctions.name] = vsFunctions.vsfunction
    }
  })

}
