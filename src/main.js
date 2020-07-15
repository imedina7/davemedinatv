import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { solidSvgIcons } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faInstagramSquare, faTwitter, faTwitterSquare, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const brandsIcons = { faYoutube, faInstagram, faInstagramSquare, faTwitter, faTwitterSquare, faFacebook }

// library.add(solidSvgIcons)
library.add(brandsIcons)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
