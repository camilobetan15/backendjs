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
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query(
                'INSERT INTO tbl_actividad (num_id_entidad,str_desc,num_id_usu) VALUES (?,?,?)', 
                [_this.id_entidad, _this.desc, _this.id_usu], function(error, result){
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
                'UPDATE tbl_actividad SET num_id_entidad = ?, str_desc = ?, num_id_usu = ? WHERE num_id_actividad = ?', 
                [_this.id_entidad, _this.desc, _this.id_usu, _this.id], function(error, result){
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
            conn.query('DELETE FROM tbl_actividad WHERE num_id_actividad = ?', [_this.id], function(error, result){
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

    async getAllActividades() {
        let conn = bd.getConnection();
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_actividad', [], function(error, result){
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

    async getActividadById() {
        let conn = bd.getConnection();
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_actividad where num_id_actividad = ?', [_this.id], function(error, result){
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

module.exports = new Actividad();