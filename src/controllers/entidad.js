let obj = require('../models/entidad')

class ControlEntidad {
    async Init(params) {
        let response = {}
        switch(params.case){
            case "getAllEntidades":
                try {
                    let result = await obj.getAllEntidades()
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
            case "getEntidadById":
                if(params.id > 0){
                    try {
                        obj.id = params.id
                        let result = await obj.getEntidadById()
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
                        message: "ID vacío, debe enviar el Id de la entidad",
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
        obj.nombre = params.nombre
        obj.id_subsector = params.id_subsectot
        obj.desc = params.desc
        obj.alcance = params.alcance
        obj.nom_contacto = params.nom_contacto
        obj.tel_contacto = params.tel_contacto
        obj.correo_contacto = params.correo_contacto
        obj.convenio = params.convenio
        obj.tip_acuerdo = params.tip_acuerdo
        obj.desc_tip_acuerdo = params.desc_tip_acuerdo
        obj.movilidad = params.movilidad
        obj.plan_medios = params.plan_medios
        obj.brand_visi = params.brand_visi
        obj.obj_rel = params.obj_rel
        obj.estrategia_int = params.estrategia_int
        obj.indicador_ges = params.indicador_ges
        obj.id_usu = params.id_usu
    }

    validateParams(params) {
        if(params.case == "create"){
            if(params.nombre != "" && params.id_subsector > 0 && params.desc != "" &&
            params.alcance != "" && params.nom_contacto != "" && params.tel_contacto > 0 && 
            params.correo_contacto != "" && params.convenio != "" && params.tip_acuerdo != "" &&
            params.desc_tip_acuerdo != "" && params.movilidad != "" && params.plan_medios != "" &&
            params.brand_visi != "" && params.obj_rel != "" && params.estrategia_int != "" &&
            params.indicador_ges != "" && params.id_usu > 0){
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
            if(params.id > 0 && params.nombre != "" && params.id_subsector > 0 && params.desc != "" &&
            params.alcance != "" && params.nom_contacto != "" && params.tel_contacto > 0 && 
            params.correo_contacto != "" && params.convenio != "" && params.tip_acuerdo != "" &&
            params.desc_tip_acuerdo != "" && params.movilidad != "" && params.plan_medios != "" &&
            params.brand_visi != "" && params.obj_rel != "" && params.estrategia_int != "" &&
            params.indicador_ges != "" && params.id_usu > 0){
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
            if(params.id > 0){
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

module.exports = new ControlEntidad()