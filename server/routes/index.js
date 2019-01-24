//TO DO -- set up kitten router
const express = require('express'); 
const router = express.Router(); 
const {Kittens} = require('./models')

//get all Kittens
router.get('/', async (req, res, next) => { 
    try {
        const kittens = await Kittens.findAll(
            {
                where: {age: 6}
            }
        ); 
        res.json(kittens); 
    } catch (error) {
        console.error(error); 
    }
    //await????
})

router.post('/', async (req, res, next) => { 
    try {
        await Kittens.create({
            name: 'Meowy', 
            age: 1, 
            coat: 'tabby'
        })
    } catch (error) {
        console.error(error); 
    }
    //await????
})

router.put('/', (req, res, next) => {
    try {
        const kittens = await Kitten.update({ 
            age: 8
          }, {
            where: {age: 7},
            returning: true, // needed for affectedRows to be populated
            plain: true // makes sure that the returned instances are just plain objects
          })
    } catch (error) {
        
    }
})


module.exports = router; 