
var express = require('express')
var router = express.Router()
var God = require("../models/god").God
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с gods')
});

/* Страница котят */
router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                God.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                God.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var god = result[0]
            var gods = result[1] || []
            if(!god) return next(new Error("Нет такого персонажа"))
            res.render('god', {
                title: god.title,
                picture: god.avatar,
                desc: god.desc,
                menu: gods
            });
        })
})

module.exports = router
