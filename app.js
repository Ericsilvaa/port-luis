const vm = new Vue ({
    el: "#app",
    data: {
        usuario: {
            id: null,
            nome: '',
            telefone: '',
        },
        datas: [],
        painel: false,
        mensagem: false,
        popUp: 'Item de Confirmação de Ação',
        alertaAtivo: false,
        popUpdone: false
    },
    
    methods: {
        abrirModal() {
            this.painel = true
        },
        fecharModal({ target, currentTarget}) {
            if (target === currentTarget) this.painel = false
            this.limpar()
        },
        criarUsuario() {
            // id randomico
            if( this.usuario.id === null) {
                this.usuario.id = Math.random().toFixed(2)
            }

            const {nome, telefone, id} = this.usuario

            if (telefone || nome === !null) {
                this.datas.push({nome, telefone, id})
                this.limpar()
                this.alerta('Cliente Cadastrado')
                this.painel = false
            } else {
                this.mensagem = true
            }

            console.log(this.datas)
        },
        removerUsuario(index) {
            this.datas.splice(index, 1)
            this.limpar()
            // this.popUpPending = true
            this.alerta('Cleinte Excluído')
        },
        editarUsuario(index) {
            this.abrirModal()
            this.usuario = { ...index}

            console.log(this.usuario)

        },
        alerta(mensagem) {
            this.popUp = mensagem
            this.alertaAtivo = true
            setTimeout(() => {
                this.alertaAtivo = false
            }, 800);
        },
        limpar() {
            this.usuario.nome = ''
            this.usuario.telefone = ''
            this.usuario.id = null
        },

              
    }


        

        // LocalStorage by me
        // if(localStorage.clientes) {
            // this.datas = JSON.parse(localStorage.getItem('clientes'))
            // }
            // let cliente = this.datas
            // this.datas.push(cliente)
            // localStorage.clientes = JSON.stringify(this.datas)

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




        // ALERTA
        // computed: {
        //     popUpClass() {
        //         return {
        //             popUpPending: this.popUpPending,
                
        //         }
    
        //     }
            // popUpClass() {
            //     let popUp = ['popUp']
            //     if(this.criarUsuario == true ) {
            //         popUp.push('popUp-done')
            //     } else if (this.removerUsuario == true) {
            //         popUp.push('popUp-pending')
            //     }
            //     return popUp
            // }
        // },
        // watch: {
        //     // lookCriar() {
        //     //     if(this.datas == indexOf() + 1){
        //     //         this.criarUsuario = true
        //     //     }
        //     }
        //     // desativarErro() {
        //     //     setTimeout(() => {
        //     //         if(this.mensagem == true) this.mensagem = false               
        //     //     }, 2000);
        //     // }
        // },

})