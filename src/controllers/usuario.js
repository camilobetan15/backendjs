let obj = require('../models/usuario')

class ControlUsuario {
    async Init(params) {
        let response = {}
        switch(params.case){
            case "getAllUsers":
                try {
                    let result = await obj.getAllUsers()
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
            case "getUserById":
                if(params.id > 0){
                    try {
                        obj.id = params.id
                        let result = await obj.getUserById()
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
                        message: "ID vacío, debe enviar el Id del usuario",
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
        obj.usuario = params.usuario
        obj.password = params.password
        obj.rol  = params.rol
        obj.activo = params.activo
    }

    validateParams(params) {
        if(params.case == "create"){
            if(params.usuario != "" && params.password != "" && params.rol != "" && (params.activo == 0 || params.activo == 1)) {
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
            if(params.id > 0 && params.usuario != "" && params.password != "" && params.rol != "" && (params.activo == 0 || params.activo == 1)) {
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

module.exports = new ControlUsuario()