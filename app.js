const vm = new Vue ({
    el: "#app",
    data: {
        nome: '',
        telefone: '',
        datas: [],
        painel: false,
    },
    methods: {
        abrirModal() {
            this.painel = true
        },
        fecharModal({ target, currentTarget}) {
            if (target === currentTarget) this.painel = false
        },
        criarUsuario() {
            const [nome, telefone] = [this.nome, this.telefone]
            if (telefone || nome === !null) {
                this.datas.push({nome, telefone})
                if(localStorage.clientes) {
                    this.datas = JSON.parse(localStorage.getItem('clientes'))
                }
                let cliente = this.datas
                this.datas.push(cliente)
                localStorage.clientes = JSON.stringify(this.datas)
                this.nome = ''
                this.telefone = ''
                this.painel = false

            } else {
                console.log('preencha o campo')
            }
        },

        // LocalStorage
        // const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
        // const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))


        // const deleteClient = (index) => {
        // const dbClient = readClient()
        // dbClient.splice(index, 1)
        // setLocalStorage(dbClient)
        // }

        // const updateClient = (index, client) => {
        // const dbClient = readClient()
        // dbClient[index] = client
        // setLocalStorage(dbClient)
        // }



        // LocalStorage 2
        // armazenarDados() {
        //     const localStorage = JSON.parse(localStorage
        //         .getItem('clientes'))
        //     let clientes = localStorage
        //         .getItem('clientes') !== null ? localStorage : []
        // }

        // const dados = {
        //     nome: this.nome,
        //     telefone: this.telefone
        // }
        // if (dados.nome && dados.telefone !== null) {
        //     this.datas.push(dados)
        //     console.log(dados)
        //     this.painel = false
        //     this.data = ''
        //     console.log(this.datas)

        // } else {
        //     console.log('preencha o campo')

        // }
            
        // verificarCriacao() {
            
        // }
    }

})