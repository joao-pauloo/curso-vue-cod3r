export default {
    computed: {
        nomeComVirgulas() {
            return this.nome.replace(/\s/g, ',')
        },
        nomeComTamanhos() {
            return this.nome.split(' ').map(p => `${p} (${p.length})`).join(' ')
        }
    }
}