let obj = require('../models/seguimiento')

class ControlSeguimiento {
    async Init(params) {
        let response = {}
        switch(params.case){
            case "getAllSegimientos":
                try {
                    let result = await obj.getAllSegimientos()
                    return {
                        status: "done",
                        message: "Consulta realizada con éxito",
                        data: result
                    }
                }catch (error){
                    console.error(error)
                    return {
                        status: "fail",
                        message: "Ocurrio un error, vuelve a intentarlo",
                        data: null
                    }
                }
            case "getSegimientoById":
                if(params.id > 0){
                    try {
                        obj.id = params.id
                        let result = await obj.getSegimientoById()
                        return {
                            status: "done",
                            message: "Consulta realizada con éxito",
                            data: result
                        }
                    }catch (error){
                        console.error(error)
                        return {
                            status: "fail",
                            message: "Ocurrio un error, vuelve a intentarlo",
                            data: null
                        }
                    }
                } else {
                    return {
                        status: "fail",
                        message: "ID vacío, debe enviar el Id del seguimiento",
                        data: null
                    }
                }
            case "create":
                response = this.validateParams(params)
                if(response.status == "done"){
                    this.assingData(params)
                    return await obj.save()
                } else {
                    return response
                }
            case "update":
                response = this.validateParams(params)
                if(response.status == "done"){
                    this.assingData(params)
                    return await obj.update()
                } else {
                    return response
                }
            case "delete":
                response = this.validateParams(params)
                if(response.status == "done"){
                    this.assingData(params)
                    return await obj.delete()
                } else {
                    return response
                }
            default: 
                return {
                    status: "fail",
                    message: "Acción desconocida, no se encontró la acción solicitada",
                    data: null
                }
        }
    }

    assingData(params){
        obj.id = params.id
        obj.num_id_actividad = params.num_id_actividad
        obj.desc = params.desc
        obj.porcentaje  = params.porcentaje
        obj.id_usu = params.id_usu
    }

    validateParams(params) {
        if(params.case == "create"){
            if(params.num_id_actividad > 0 && params.desc != "" && params.porcentaje > 0 && params.id_usu > 0) {
                return {
                    status: "done"
                }
            } else {
                return {
                    status: "fail",
                    message: "Datos vacios, faltan datos",
                    data: null
                }
            }
        } else if (params.case == "update") {
            if(params.id > 0 && params.num_id_actividad > 0 && params.desc != "" && params.porcentaje > 0 && params.id_usu > 0) {
                return {
                    status: "done"
                }
            } else {
                return {
                    status: "fail",
                    message: "Datos vacios, faltan datos",
                    data: null
                }
            }
        } else if (params.case == "delete") {
            if(params.id > 0) {
                return {
                    status: "done"
                }
            } else {
                return {
                    status: "fail",
                    message: "Datos vacios, faltan datos",
                    data: null
                }
            }
        }
    }
}

module.exports = new ControlSeguimiento()