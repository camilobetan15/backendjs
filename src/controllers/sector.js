let obj = require('../models/sector')

class ControlSector {
    async Init(params) {
        switch(params.case){
            case "getAllSectores":
                try {
                    let result = await obj.getAllSectores()
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
            case "getSectorById":
                if(params.id > 0){
                    try {
                        obj.id = params.id
                        let result = await obj.getSectorById()
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
                        message: "ID vacío, debe enviar el Id del sector",
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

module.exports = new ControlSector()