var mysql = require('mysql');
require('dotenv').config()

var db = mysql.createConnection({
    host               : process.env.DB_HOST,
    user               : process.env.DB_USER,
    password           : process.env.DB_PASSWORD,
    database           : process.env.DB_DATABASE,
    multipleStatements : true
});
   
db.connect(err => {
    if(err) {
        console.log('Database not connected! : ' + JSON.stringify(err, undefined,2))
    } else {
        console.log('\
  _____   _____    _____   _   _   _____   _____       ___  ___       ___   __   _   _       ___  \n\
 /  ___| |  _  \\  /  _  \\ | | | | |  _  \\ /  _  \\     /   |/   |     /   | |  \\ | | | |     /   | \n\
 | |     | |_| |  | | | | | | | | | |_| | | | | |    / /|   /| |    / /| | |   \\| | | |    / /| | \n\
 | |  _  |  _  /  | | | | | | | | |  ___/ | | | |   / / |__/ | |   / / | | | |\\   | | |   / / | | \n\
 | |_| | | | \\ \\  | |_| | | |_| | | |     | |_| |  / /       | |  / /  | | | | \\  | | |  / /  | | \n\
 \\_____/ |_|  \\_\\ \\_____/ \\_____/ |_|     \\_____/ /_/        |_| /_/   |_| |_|  \\_| |_| /_/   |_| \n\
 \n\
 Bienvenue sur l\'api de Grouponania\
 ')
    }
})

module.exports = db;