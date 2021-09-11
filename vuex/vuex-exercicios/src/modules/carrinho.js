export default {
    namespaced: true, //definindo namespace para nao dar conflito de nomes
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state, getters, rootState) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: { //setters
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
       /* adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }*/
        adicionarProduto: { //setando action global
            root: true,
            handler({ commit }, payload) {
                setTimeout(() => {
                    commit('adicionarProduto', payload)
                }, 1000)
            }

        }
    }
}