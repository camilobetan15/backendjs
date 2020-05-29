const bd = require('../database/database')

class Segimiento {
    constructor(){
        this.id
        this.num_id_actividad
        this.desc
        this.porcentaje 
        this.fechaCrea
        this.id_usu
    }

    async save() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'INSERT INTO tbl_seguimiento (num_id_actividad,str_desc,num_porcentaje,num_id_usu) VALUES (?,?,?)', 
            [this.nombre, this.num_id_sector, this.id_usu]
        );

        conn.end()

        return result
    }

    async update() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'UPDATE tbl_seguimiento SET num_id_actividad = ?, str_desc = ?, num_porcentaje = ?, num_id_usu =? WHERE num_id_seguimiento = ?', 
            [this.nombre, this.num_id_sector, this.id_usu, this.id]
        );

        conn.end()
        
        return result
    }

    async delete() {
        let conn = bd.getConnection()
        let result = await conn.query('DELETE FROM tbl_seguimiento WHERE num_id_seguimiento = ?', [this.id]);
        conn.end()
        
        return result
    }

    async getAllSegimientos() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_seguimiento')
        conn.end()

        return result
    }

    async getSegimientoById() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_seguimiento where num_id_seguimiento = ?', [this.id])
        conn.end()

        return result
    }
}

module.exports = new Segimiento();