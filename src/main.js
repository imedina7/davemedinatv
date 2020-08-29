import Vue from 'vue'
import DaveMedinaTV from './DaveMedinaTV.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faYoutube, faInstagram, faInstagramSquare,
  faTwitter, faTwitterSquare, faFacebook, faMixcloud
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const brandsIcons = {
  faYoutube,
  faInstagram,
  faInstagramSquare,
  faTwitter,
  faTwitterSquare,
  faFacebook,
  faMixcloud
}

library.add(brandsIcons)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(DaveMedinaTV)
}).$mount('#app')
