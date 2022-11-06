const vm = new Vue ({
    el: "#app",
    data: {
        id: 0,
        nome: '',
        telefone: '',
        datas: [],

        editar: false,
        delete: false,
        cancelar: false,

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
            if (target === currentTarget) this.cancelarUsuario() 
        },
        criarUsuario(n, t) {
            this.editar = false
            if (n || t == !null) {
                this.datas.push({
                    nome: this.nome,
                    telefone: this.telefone
                })
                localStorage.setItem('datas', JSON.stringify(this.datas))
                this.limpar()
                this.painel = false
            } else {
                this.mensagem = true
            }
        },
        editarUsuario(d,i) {
            this.editar = true
            this.abrirModal()
            this.nome = d.nome
            this.telefone = d.telefone
            this.id = i
        },
        atualizarUsuario() {
            this.painel = false
            this.editar = false
            let datadb = {
                nome: this.nome,
                telefone: this.telefone
            }
            this.datas[this.id] = datadb
            localStorage.setItem('datas', JSON.stringify(this.datas));
            let dataDB = JSON.parse(localStorage.getItem('datas'))
            this.datas = dataDB
        },
        cancelarUsuario() {
            this.editar = false
            this.painel = false
            this.limpar()
        },
        removerUsuario(i) {
            this.datas.splice(i, 1)
            localStorage.setItem('datas', JSON.stringify(this.datas))
            this.alerta('Cliente Excluído')
            this.limpar()
        },
        alerta(mensagem) {
            this.popUp = mensagem
            this.alertaAtivo = true 
            setTimeout(() => {
                this.alertaAtivo = false
            }, 800);
        },
        limpar() {
            this.nome = ''
            this.telefone = ''
        },         
    },
    created() {
        let dataDB = JSON.parse(localStorage.getItem('datas'))
        if(dataDB == null) {
            this.tasks = []
        } else {
            this.datas = dataDB
        }
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