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
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query(
                'INSERT INTO tbl_subsector (str_nombre,num_id_sector,num_id_usu) VALUES (?,?,?)', 
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
                'UPDATE tbl_subsector SET str_nombre = ?, num_id_sector = ?, num_id_usu = ? WHERE num_id_subsector = ?', 
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
            conn.query('DELETE FROM tbl_subsector WHERE num_id_subsector = ?', [_this.id], function(error, result){
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

    async getAllSubsectores() {
        let conn = bd.getConnection();
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_subsector', [], function(error, result){
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

    async getSubsectoresById() {
        let conn = bd.getConnection();
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_subsector where num_id_subsector = ?', [_this.id], function(error, result){
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

module.exports = new Subsector();