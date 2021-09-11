new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife === 0 || this.monsterLife === 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(special) {
            this.hurt('monsterLife',5, 10, special, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0) {
                this.hurt('playerLife',7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        hurt(atr, min, max, special, source, target, cls) {
            const plus =  special ? 5 : 0;
            const hurt = this.getRamdom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} atingiu o ${target} com ${hurt}.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.getRamdom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100);
            this.registerLog(`Jogador ganhou força de ${heal}`, 'player')
        },
        getRamdom(min, max) {
            const value = Math.random() * (max - min) + min

            return Math.round(value);
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls})
        }
    },
    watch: {
        hasResult(value) {
            if (value) {
                this.running = false;
            }
        }
    }
})