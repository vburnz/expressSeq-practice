const Sequelize = require("sequelize"); 
const db = require("db"); 

const Owner = db.define("owner", {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    email: { 
        type: Sequelize.STRING, 
        valdiate: {
            isEmail: true
        }
    }
})

module.exports = Owner; 