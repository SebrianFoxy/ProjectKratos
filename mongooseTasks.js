var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var God = require("./models/god").God


var god = new God({
title: "Кратос - бог войны",
nick: "Kratos"
})


console.log(god)
god.save(function(err, god, affected){
    console.log(god.title)
})

