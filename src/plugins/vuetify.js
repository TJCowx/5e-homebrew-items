import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#004d00",
        secondary: "#4D0026",
        accent: "#004d00"
      }
    }
  }
}

export default new Vuetify(opts)