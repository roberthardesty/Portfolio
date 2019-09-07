import Vue from 'vue'
import Vuetify, { VRow } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: { VRow }
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E25979',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        anchor: '#00000A'
      }
    }
  }
})
