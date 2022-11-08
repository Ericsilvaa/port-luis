const vm = new Vue ({
    el: "#app",
    vuetify: new Vuetify(),
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
        // popUpdone: false,
        spTelefone: false
    },
    // Telefone(11)
    // computed: {
    //     stateClass() {
    //         return {
    //             this.telefone = d.telefone
    //             if() {
    //                 sp: this.spTelefone          
    //             }
    //     }
    // },
    methods: {
        abrirModal() {
            this.painel = true
        },
        fecharModal({ target, currentTarget}) {
            if (target === currentTarget) this.cancelarUsuario()
        },
        criarUsuario(n, t) {
            this.editar = false
            this.mensagem = false
            if (n.length > 2 && t.length > 14) {
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
            // const nome = this.datas[this.id].nome.length

            // if(nome > 2 ) {
                localStorage.setItem('datas', JSON.stringify(this.datas));
                let dataDB = JSON.parse(localStorage.getItem('datas'))
                this.datas = dataDB
                this.mensagem = false
                this.limpar()
            // } else {
            //     this.mensagem = true
            // }
        },
        cancelarUsuario() {
            this.editar = false
            this.painel = false
            this.mensagem = false
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

})