new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('clicado')
        },
        setValor(event) {
            this.valor = event.target.value
        }
    }
})