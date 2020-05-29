const bd = require('../database/database')

class Sector {
    constructor(){
        this.id
        this.nombre
        this.desc
        this.id_usu 
        this.fechaCrea
    }

    async save() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'INSERT INTO tbl_sector (str_nombre,str_desc,num_id_usu) VALUES (?,?,?)', 
            [this.nombre, this.desc, this.id_usu]
        );

        conn.end()

        return result
    }

    async update() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'UPDATE tbl_sector SET str_nombre = ?, str_desc = ?, num_id_usu = ? WHERE num_id_sector = ?', 
            [this.nombre, this.desc, this.id_usu, this.id]
        );

        conn.end()
        
        return result
    }

    async delete() {
        let conn = bd.getConnection()
        let result = await conn.query('DELETE FROM tbl_sector WHERE num_id_sector = ?', [this.id]);
        conn.end()
        
        return result
    }

    async getAllSectores() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_sector')
        conn.end()

        return result
    }

    async getSectorById() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_sector where num_id_sector = ?', [this.id])
        conn.end()

        return result
    }
}

module.exports = new Sector();