import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './app.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faLinkedin, faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'

import { faSignal, faBars, faClock } from '@fortawesome/free-solid-svg-icons'

import { faDesktop, faCircle, faWrench, faCartArrowDown, faMobile} from '@fortawesome/free-solid-svg-icons'

import { faToolbox, faRocket, faThumbsUp, faGear } from '@fortawesome/free-solid-svg-icons'

import { faUsers, faFilm, faPhotoFilm, faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faLinkedin, faInstagram, faFacebook, faTwitter, faBars, faClock, faSignal, faDesktop, faCircle, faWrench, faCartArrowDown, faMobile, faToolbox, faRocket, faThumbsUp, faGear, faUsers, faFilm, faPhotoFilm, faStar, faArrowLeft, faArrowRight)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
