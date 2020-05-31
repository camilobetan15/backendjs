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
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query(
                'INSERT INTO tbl_sector (str_nombre,str_desc,num_id_usu) VALUES (?,?,?)', 
                [_this.nombre, _this.desc, _this.id_usu], function(error, result){
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
                'UPDATE tbl_sector SET str_nombre = ?, str_desc = ?, num_id_usu = ? WHERE num_id_sector = ?', 
                [_this.nombre, _this.desc, _this.id_usu, _this.id], function(error, result){
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
            conn.query('DELETE FROM tbl_sector WHERE num_id_sector = ?', [_this.id], function(error, result){
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

    async getAllSectores() {
        let conn = bd.getConnection();
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_sector', [], function(error, result){
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

    async getSectorById() {
        let conn = bd.getConnection();
        let _this = this
        let result = new Promise(function(resolve, reject){
            conn.query('SELECT * from tbl_sector where num_id_sector = ?', [_this.id], function(error, result){
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

module.exports = new Sector();