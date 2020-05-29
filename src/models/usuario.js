const bd = require('../database/database')

class Usuario {
    constructor(){
        this.id
        this.usuario
        this.password
        this.rol 
        this.activo
        this.fechaCrea
    }

    async save() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'INSERT INTO tbl_usuario (str_usuario,str_password,str_rol,bt_activo) VALUES (?,?,?,?)', 
            [this.usuario, this.password, this.rol, this.activo]
        );

        conn.end()

        return result
    }

    async update() {
        let conn = bd.getConnection()

        let result = await conn.query(
            'UPDATE tbl_usuario SET str_usuario = ?, str_password = ?, str_rol = ?, bt_activo = ? WHERE num_id_usu = ?', 
            [this.usuario, this.password, this.rol, this.activo, this.id]
        );

        conn.end()
        
        return result
    }

    async delete() {
        let conn = bd.getConnection()
        let result = await conn.query('DELETE FROM tbl_usuario WHERE num_id_usu = ?', [this.id]);
        conn.end()
        
        return result
    }

    async getAllUsers() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_usuario')
        conn.end()

        return result
    }

    async getUserById() {
        let conn = bd.getConnection();
        let result = await conn.query('SELECT * from tbl_usuario where num_id_usu = ?', [this.id])
        conn.end()

        return result
    }
}

module.exports = new Usuario();