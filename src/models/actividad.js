const bd = require('../database/database')

class Actividad {
    constructor(){
        this.id
        this.id_entidad
        this.desc
        this.id_usu 
        this.fechaCrea
    }

    async save() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'INSERT INTO tbl_actividad (num_id_entidad,str_desc,num_id_usu) VALUES (?,?,?)', 
            [this.id_entidad, this.desc, this.id_usu]
        );

        conn.end()

        return result
    }

    async update() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'UPDATE tbl_actividad SET num_id_entidad = ?, str_desc = ?, num_id_usu = ? WHERE num_id_actividad = ?', 
            [this.id_entidad, this.desc, this.id_usu, this.id]
        );

        conn.end()
        
        return result
    }

    async delete() {
        let conn = bd.getConnection()
        let result = await conn.query('DELETE FROM tbl_actividad WHERE num_id_actividad = ?', [this.id]);
        conn.end()
        
        return result
    }

    async getAllActividades() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_actividad')
        conn.end()

        return result
    }

    async getActividadById() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_actividad where num_id_actividad = ?', [this.id])
        conn.end()

        return result
    }
}

module.exports = new Actividad();