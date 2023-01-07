var db = require('../mySQLConnect.js');

module.exports = function(req,res,next){
res.locals.nav = []
    db.query(`SELECT * FROM gods`, (err, gods) => {  
        if(err) throw err
        res.locals.nav = gods
        next()
        
    })
}