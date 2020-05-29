var mysql = require('mysql');

class Database {
    constructor(){
        this.connection = mysql.createConnection({
            host : 'localhost',
            database : 'bd_capital_relacional',
            user : 'root',
            password : '',
            port: 3306
        });
    }

    getConnection() {
        this.connection.connect(function(err) {
            if (err) {
                console.error('Error de conexion: ' + err.stack);
                return;
            }

            console.log('Database connected');
        });

        return this.connection
    }
}

module.exports = new Database();

