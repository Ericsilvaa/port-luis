const vm = new Vue ({
    el: "#app",
    data: {
        datas: [
            {"id": 1, "nome": "Eric silva", "numero_cliente": "85997124166"},
            {"id": 1, "nome": "Eric silva", "numero_cliente": "85997124166"},
            {"id": 1, "nome": "Eric silva", "numero_cliente": "85997124166"},
        ],
        painel: false,
    },
    methods: {
        criarUsuario() {
            this.painel = true
            console.log(this.painel)
            console.log('Painel Usuario de Criação')
        }
    }

})