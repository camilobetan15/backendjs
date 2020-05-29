const bd = require('../database/database')

class Subsector {
    constructor(){
        this.id
        this.nombre
        this.num_id_sector
        this.id_usu 
        this.fechaCrea
    }

    async save() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'INSERT INTO tbl_subsector (str_nombre,num_id_sector,num_id_usu) VALUES (?,?,?)', 
            [this.nombre, this.num_id_sector, this.id_usu]
        );

        conn.end()

        return result
    }

    async update() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'UPDATE tbl_subsector SET str_nombre = ?, num_id_sector = ?, num_id_usu = ? WHERE num_id_subsector = ?', 
            [this.nombre, this.num_id_sector, this.id_usu, this.id]
        );

        conn.end()
        
        return result
    }

    async delete() {
        let conn = bd.getConnection()
        let result = await conn.query('DELETE FROM tbl_subsector WHERE num_id_subsector = ?', [this.id]);
        conn.end()
        
        return result
    }

    async getAllSubsectores() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_subsector')
        conn.end()

        return result
    }

    async getSubsectoresById() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_subsector where num_id_subsector = ?', [this.id])
        conn.end()

        return result
    }
}

module.exports = new Subsector();