new Vue({
    el: '#desafio',
    data: {
        nome: 'João Paulo',
        idade: '25',
        imgLink: 'https://cdn.pixabay.com/photo/2021/07/07/14/40/dog-6394502_960_720.jpg'
    },
    methods: {
        gerarNumeroEntreZeroEUm() {
            return Math.random().toFixed(2)
        }
    }
})