const database = require('../database/connection')

class TaskController {
    
    novaTarefa(request, response) {
        const {tarefa, descicao, responsavel} = request.body

        console.log(tarefa, descicao, responsavel)

        database.insert({tarefa, descicao, responsavel}).table("tasks").then(data=>{
            console.log(data)
            response.json({message:"Tarefa criada com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listaTarefas(request, response){
        database.select("*").table("tasks").then(tarefa=>{
            console.log(tarefa)
            response.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmaTarefa(request, response){
        const id = request.params

        database.select('*').table("tasks").where({id:id}).then(tarefa=>{
            response.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarTarefa(request, response){
        const id = request.params
        const {descicao} = request.body

        database.where({id:id}).update({descicao:descicao}).table("tasks").then(data=>{
            response.json({message:"Tarefa atualizada com sucesso"})
        }).catch(error=>{
            response.json(error)
        })
    }

    removerTarefa(resquest, response){
        const id = resquest.params

        database.where({id:id}).del().table("tasks").then(data=>{
            response.json({message: "Tarefa removida com sucesso"})
        }).catch(error=>{
            response.json(error)
        })
    }
}
module.exports = new TaskController()