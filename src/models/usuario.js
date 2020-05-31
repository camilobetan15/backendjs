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
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query(
                'INSERT INTO tbl_usuario (str_usuario,str_password,str_rol,bt_activo) VALUES (?,?,?,?)', 
                [_this.usuario, _this.password, _this.rol, _this.activo], function(error, result){
                if(error){
                    reject()
                } else {
                    resolve(result)
                }
            })
        })

        conn.end()

        return result
    }

    async update() {
        let conn = bd.getConnection()
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query(
                'UPDATE tbl_usuario SET str_usuario = ?, str_password = ?, str_rol = ?, bt_activo = ? WHERE num_id_usu = ?', 
                [_this.usuario, _this.password, _this.rol, _this.activo, _this.id], function(error, result){
                if(error){
                    reject()
                } else {
                    resolve(result)
                }
            })
        })

        conn.end()
        
        return result
    }

    async delete() {
        let conn = bd.getConnection()
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query('DELETE FROM tbl_usuario WHERE num_id_usu = ?', [_this.id], function(error, result){
                if(error){
                    reject()
                } else {
                    resolve(result)
                }
            })
        })
        conn.end()
        
        return result
    }

    async getAllUsers() {
        let conn = bd.getConnection();
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_usuario', [], function(error, result){
                if(error){
                    reject()
                } else {
                    resolve(result)
                }
            })
        })
        conn.end()

        return result
    }

    async getUserById() {
        let conn = bd.getConnection();
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_usuario where num_id_usu = ?', [_this.id], function(error, result){
                if(error){
                    reject()
                } else {
                    resolve(result)
                }
            })
        })
        conn.end()

        return result
    }
}

module.exports = new Usuario();