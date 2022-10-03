const dbConfig = require('../config/dbConfig')
const UserTable = require('../models/UserTable')

class Controller{ 
    static async CreateTable(req, res){
        await UserTable.sync({force: true})

        res.status(200).json({msg: "tables sincronized with database"})
    }
}

module.exports = Controller