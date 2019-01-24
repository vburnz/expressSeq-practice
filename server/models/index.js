const db = require('./db'); 

const Kitten = require('./kitten'); 
const Owner = require('./owner')

Kitten.belongsTo(Owner); 
Owner.hasOne(Kitten); 

module.exports = {db, Kitten, Owner}