import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "./components/Inicio";
//import Usuario from "./components/usuario/Usuario";
import UsuarioLista from "./components/usuario/UsuarioLista";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
//import UsuarioEditar from "./components/usuario/UsuarioEditar";
import Menu from "./components/Template/Menu";

/*
    Modos de navegação

    Hash(/#/usuario) -> O hash não é enviado p/ o servidor, então passa pelo index.html, pois a requisição é feita
    pela raiz (localhost:8080/).
    history(/usuario) -> Necessita de uma configuração no servidor para passar pelo index.html e
    de fato faz uma requisição para /usuario, por exemplo.

    É necessário passar pelo index.html para que a aplicação funcione tudo corretamente, o vue seja carregado.

 */

/*
    Importando componente só quando necessário para melhorar performance da aplicação.
    webpackChunkName: "Usuario -> Junta pacote em uma única request
 */

const Usuario = () => import(/* webpackChunkName: "Usuario" */'./components/usuario/Usuario')
const UsuarioEditar = () => import(/* webpackChunkName: "Usuario" */'./components/usuario/UsuarioEditar')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) { //navega até o hash passado.
        if (savedPosition) { //se já tem no cache
            return savedPosition
        }
        if (to.hash) {
            return { selector: to.hash }
        }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    //console.log('antes da rota -> usuário detalhe')
                    next()
                }
            },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
        ]
    }, {
        path: '*', //redireciona se o caminho nao existe
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    //console.log('antes das rotas -> global')
    next()
})

export default router