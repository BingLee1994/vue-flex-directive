import Vue from 'vue'
import { flexContainer } from './directives/flex'
import App from './app.vue'

Vue.directive('flex', flexContainer.option)

new Vue({
    render(h) {
        return <App />
    }
}).$mount('#app')
