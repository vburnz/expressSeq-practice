const Sequelize = require("sequelize"); 
const db = require("db"); 

const Kitten = db.define("kitten", {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    age: {
        type: Sequelize.INTEGER, 
        allowNull: false 
    }, 
    coat: Sequelize.STRING
})

//class Method 
Kitten.alphabetize = function() { 
    let kittyArray = []; 
    Kitten.findAll()
        .then(kitty => {
            kittyArray.push(kitty); 
        })
    return kittyArray.sort((a, b) => a-b); 
    
}

//instance method 
Kitten.prototype.becomesACat = function(){
    return `${this.name} becomes a cat in ${12 - this.age} months!`
}

module.exports = Kitten; 