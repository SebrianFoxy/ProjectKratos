var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var schema = mongoose.Schema({ name: String })
schema.methods.meow = function(){
    console.log(this.get("name") + ": Чтобы хорошо сражаться, воин не должен сочувствовать врагу")
}

var God = mongoose.model('God', schema)

var kitty = new God({ name: 'Kratos' })
kitty.save(function (err) {
    kitty.meow()
})

