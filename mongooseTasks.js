var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var God = mongoose.model('God', { name: String })

var kitty = new God({ name: 'Kratos' })
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Arrh..')
    }
})
