let obj = require('../models/usuario')

class ControlUsuario {
    async Init(params) {
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
                return {

                }
            case "update":
                return {

                }
            case "delete":
                return {

                }
            default: 
                return {
                    status: "fail",
                    message: "Acción desconocida, no se encontró la acción solicitada",
                    data: null
                }
        }
    }
}

module.exports = new ControlUsuario()