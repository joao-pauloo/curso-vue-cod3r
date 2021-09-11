import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* el = elemento
*  binding = argumentos passados | NÃO DEVE SER MODIFICADO
* vnode = nó virtual | NÃO DEVE SER MODIFICADO
* */
Vue.directive('destaque', {
	bind(el, binding) {

		let atraso = 0

		if (binding.modifiers['atrasar']) {
			atraso = 3000
		}

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
