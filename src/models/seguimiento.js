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
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query(
                'INSERT INTO tbl_seguimiento (num_id_actividad,str_desc,num_porcentaje,num_id_usu) VALUES (?,?,?)', 
                [_this.nombre, _this.num_id_sector, _this.id_usu], function(error, result){
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
                'UPDATE tbl_seguimiento SET num_id_actividad = ?, str_desc = ?, num_porcentaje = ?, num_id_usu =? WHERE num_id_seguimiento = ?', 
                [_this.nombre, _this.num_id_sector, _this.id_usu, _this.id], function(error, result){
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
            conn.query('DELETE FROM tbl_seguimiento WHERE num_id_seguimiento = ?', [_this.id], function(error, result){
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

    async getAllSegimientos() {
        let conn = bd.getConnection();
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_seguimiento', [], function(error, result){
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

    async getSegimientoById() {
        let conn = bd.getConnection();
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_seguimiento where num_id_seguimiento = ?', [_this.id], function(error, result){
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

module.exports = new Segimiento();