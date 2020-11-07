const database = require('../database/connection');

class QueryController {
    //Consulta de Clientes
    listaClientes(req, res){
        database.select("*").table('clientes').then(cadClientes =>{
            res.json(cadClientes)
        }).catch(error=>{
            console.log(error)
        })
    };
    //Consulta de Contas a Pagar
    listaContasPagar(req, res){
            database.select("*").table('contas_pagar').whereBetween('Data_Lancamento', ['2020-06-01 00:00:00', '2020-06-30 23:59:59']).then(contaPagar =>{
            res.json(contaPagar)
        }).catch(error=>{
            console.log(error)
        })
    };
    //Consulta de Contas a Receber
    listaContasReceber(req, res){
            database.select("*").table('contas_receber').whereBetween('Data_Lancamento', ['2020-06-01 00:00:00', '2020-06-30 23:59:59']).then(contaReceber =>{
            res.json(contaReceber)
        }).catch(error=>{
            console.log(error)
        })
    };
};

module.exports = new QueryController();