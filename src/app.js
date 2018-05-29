import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import "vue-material-design-icons/styles.css"
import "vue-material-design-icons/ultra-high-definition.vue"

Vue.use(Vuetify)

new Vue({
    el: '#app',
    render: h => h(App)
});

if (module.hot) 
    module.hot.accept()