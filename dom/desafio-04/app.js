new Vue({
	el: '#desafio',
	data: {
		setarDestaque: false,
		setarEncolher: true,
		classe: '',
		style: '',
		classeBool: false,
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.setarDestaque = this.setarEncolher
				this.setarEncolher = !this.setarDestaque
			}, 2000)
		},
		iniciarProgresso() {
			let valor = 0;

			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`

				if (valor === 100) {
					clearInterval(temporizador)
				}
			}, 500)

		}
	}
})
