
var express = require('express')
var router = express.Router()
var db = require('../mySQLConnect.js');
var checkAuth = require("../middleware/checkAuth.js")
//var God = require("../models/god").God
//var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с gods')
});




/* Страница Богов! */
router.get('/:nick', function(req, res, next) {
    //God.findOne({nick:req.params.nick}, function(err,god){ })
    db.query(`SELECT * FROM gods WHERE gods.nick = '${req.params.nick}'`, (err, gods) => {
    if(err) {
    console.log(err);
    if(err) return next(err)
    }else {
        if(err) return next(err)
        if(gods.lenght == 0) return next(new Error("Нет такого героя для поиска"))
        var god = gods[0];
        res.render('god', {
            title: god.title,
            picture: god.avatar,
            desc: god.about
            })
        }
    })
})



module.exports = router
