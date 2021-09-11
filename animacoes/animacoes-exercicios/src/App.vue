<!--
Transições com CSS

classes

colocando elemento

*-enter: Antes de entrar no processo de animação.
*-active: Durante o processo.
*-enter-to: Para onde vai.
*-leave: Quando tiver finalizado o processo.

removendo elemento.

*-leave: Estado inicial.
*-leave-active: Todo período de transição.
*-leave-to: Estado final do componente.

type: Quem manda no prazo de duração da animação.
appear: A transição será feita já no carregamento.
key: chave para transição funcionar dentro do v-if
out-in: primeiro o elemento sai, depois o outro entra.

Transições com JS

entrada

*-before-enter: Antes de entrar no processo de animação.
*-enter: Entrar na animação
*-after-enter: Depois de entrar.
*-enter-cancelled: Quando a animação for cancelada.

Saída

before-leave: Antes de sair do processo de animação.
after-leave: depois de sair da animação
leave: Saída da animação.
leave-cancelled: Quando a saída da animação for cancelada.

:css=false: Desabilita CSS na animação
tag=div: Troca a tag span por uma div no transition group


-->

<template>
	<div id="app" class="container-fluid ">
		<h1>Animações</h1>
    <hr>
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
    <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <!-- Usando classe de animação fora do padrão do vue. ex (animate CSS) -->
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <!-- Animação com v-model -->
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <!-- Animação com v-if -->
    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
    </transition>

    <hr>
    <b-button variant="success" class="mb-4" @click="exibir2 = !exibir2">Alternar</b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <hr>
    <div class="mb-4">
      <b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
      <b-button variant="primary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
    </div>

    <!-- animação em componente dinâmico-->
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"/>
    </transition>

    <hr>

    <!-- animação em grupos-->
    <b-button variant="success" class="mb-4" @click="adicionarAluno()">Adicionar Aluno</b-button>
      <transition-group name="slide" tag="div">
        <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
          <b-list-group-item @click="removerAluno(i)">
            {{ aluno }}
          </b-list-group-item>
        </b-list-group>
      </transition-group>

  </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia";
import AlertaInfo from "./AlertaInfo";

export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
      msg: 'Uma mensagem de informação para o usuário.',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade',
      larguraBase: 0,
      componenteSelecionado: 'alertaInfo'
    }
  },
  methods: {
    adicionarAluno() {
      const aluno = Math.random().toString(36).substring(2)
      this.alunos.push(aluno)
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1)
    },
    animar(el, done, negativo) {
      let rodada = 1
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : rodada * 10)
        el.style.width = `${novaLargura}px`
        rodada++
        if (rodada > 30) {
          clearInterval(temporizador)
          done()
        }
      }, 20)

    },
    beforeEnter(el) {
      this.larguraBase = 0
      el.style.width = `${this.larguraBase}px`
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    afterEnter(el) {

    },
    enterCancelled() {

    },
    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done) {
      this.animar(el, done, true)
    },
    afterLeave(el) {

    },
    leaveCancelled() {

    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

/*
 Não precisa pois o padrão é 1
.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}*/

@keyframes slide-in {
  from { transform: translateY(40px); }
  to { transform: translateY(0); }
}

@keyframes slide-out {
  from { transform: translateY(0); }
  to { transform: translateY(40px); }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}

.slide-move {   /* classe usada para que os elementos do grupo também sofram animação ao serem ajustados */
  transition: transform 1s;
}

</style>
