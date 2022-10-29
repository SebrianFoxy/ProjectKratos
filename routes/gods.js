
var express = require('express')
var router = express.Router()
var God = require("../models/god").God
var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с gods')
});




/* Страница Богов! */
router.get('/:nick',checkAuth, function(req, res, next) {
    God.findOne({nick:req.params.nick}, function(err,god){
        if(err) return next(err)
        if(!god) return next(new Error("Нет такого героя для поиска"))
        res.render('god', {
            title: god.title,
            picture: god.avatar,
            desc: god.desc
        })
    })
})


module.exports = router
