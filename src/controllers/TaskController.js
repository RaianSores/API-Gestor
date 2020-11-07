const database = require('../database/connection')
class TaskController {

    listaClientes(req, res){
        database.select("*").table('clientes').then(cadClientes =>{
            console.log(cadClientes)
            res.json(cadClientes)
        }).catch(error=>{
            console.log(error)
        })
    }

    listaContasPagar(req, res){
            database.select("*").table('contas_pagar').whereBetween('Data_Lancamento', ['2020-06-01 00:00:00', '2020-06-30 23:59:59']).then(contaPagar =>{
            console.log(contaPagar)
            res.json(contaPagar)
        }).catch(error=>{
            console.log(error)
        })
    }

    listaContasReceber(req, res){
            database.select("*").table('contas_receber').whereBetween('Data_Lancamento', ['2020-06-01 00:00:00', '2020-06-30 23:59:59']).then(contaReceber =>{
            console.log(contaReceber)
            res.json(contaReceber)
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new TaskController();