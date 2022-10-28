var mongoose = require('mongoose')
var Schema = mongoose.Schema


var godSchema = new Schema({
title: String,
nick: {
type: String,
unique: true,
required: true
},
avatar: String,
desc: String,
created:{
type:Date,
default:Date.now
}
})
module.exports.God = mongoose.model("God", godSchema)

