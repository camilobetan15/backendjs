const bd = require('../database/database')

class Entidad {
    constructor(){
        this.id
        this.nombre
        this.id_subsector
        this.desc
        this.alcance
        this.nom_contacto
        this.tel_contacto
        this.correo_contacto
        this.convenio
        this.tip_acuerdo
        this.desc_tip_acuerdo
        this.movilidad
        this.plan_medios
        this.brand_visi
        this.obj_rel
        this.estrategia_int
        this.indicador_ges
        this.id_usu
        this.fechaCrea
    }

    async Save() {
        let conn = bd.getConnection()
        let result = await conn.query(`INSERT INTO tbl_entidad 
        (str_nombre,num_id_subsector,str_dec,str_alcance,str_nom_contacto,num_tel_contacto,
        str_correo_contacto,str_convenio,str_tip_acuerdo,str_desc_tip_acuerdo,str_movilidad,
        str_plan_medios,str_brand_visi,str_obj_rel,str_estrategia_int,str_indicador_ges,
        num_id_usu) VALUES 
        (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
            this.nombre,
            this.id_subsector,
            this.desc,
            this.alcance,
            this.nom_contacto,
            this.tel_contacto,
            this.correo_contacto,
            this.convenio,
            this.tip_acuerdo,
            this.desc_tip_acuerdo,
            this.movilidad,
            this.plan_medios,
            this.brand_visi,
            this.obj_rel,
            this.estrategia_int,
            this.indicador_ges,
            this.id_usu
        ])
        conn.end()

        return result
    }

    async Update() {
        let conn = bd.getConnection()
        let result = await conn.query(`UPDATE tbl_entidad SET
        str_nombre = ?, num_id_subsector = ?, str_dec = ?, str_alcance = ?, str_nom_contacto = ?, num_tel_contacto = ?,
        str_correo_contacto = ?, str_convenio = ?, str_tip_acuerdo = ?, str_desc_tip_acuerdo = ?, str_movilidad = ?,
        str_plan_medios = ?, str_brand_visi = ?, str_obj_rel = ?, str_estrategia_int = ?, str_indicador_ges = ?,
        num_id_usu = ? WHERE num_id_entidad = ?`,
        [
            this.nombre,
            this.id_subsector,
            this.desc,
            this.alcance,
            this.nom_contacto,
            this.tel_contacto,
            this.correo_contacto,
            this.convenio,
            this.tip_acuerdo,
            this.desc_tip_acuerdo,
            this.movilidad,
            this.plan_medios,
            this.brand_visi,
            this.obj_rel,
            this.estrategia_int,
            this.indicador_ges,
            this.id_usu,
            this.id
        ])
        conn.end()

        return result
    }

    async Delete(){
        let conn = bd.getConnection()
        let result = await conn.query('DELETE FROM tbl_entidad WHERE num_id_entidad = ?', [this.id]);
        conn.end()
        
        return result
    }

    async getAllEntidades() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_entidad')
        conn.end()

        return result
    }

    async getEntidadById() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_entidad where num_id_entidad = ?', [this.id])
        conn.end()

        return result
    }
}

module.exports = new Entidad();