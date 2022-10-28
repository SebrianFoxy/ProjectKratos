var express = require('express')
var router = express.Router()
var God = require("../models/god").God
var User = require("./../models/user").User

/* GET home page. */
router.get('/', function(req, res, next) {
    God.find({},{_id:0,title:1,nick:1},function(err,menu){
        req.session.greeting = "Hi!!!",
        res.cookie('greeting','Hi!!!').render('index', {
                                title: 'Express',
                                counter: req.session.counter,
                            });
                            
    })
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
            if(user.checkPassword(password)){
                req.session.user = user._id
                res.redirect('/')
            } else {
                      res.render('logreg', {title: 'Вход'})
            }
        } else {
            var user = new User({username:username,password:password})
            user.save(function(err,user){
                if(err) return next(err)
                req.session.user = user._id
                res.redirect('/')
            })        
      }
    })
});


});


/*
router.get('/kratos_old', function(req, res, next) {
  res.render('GoW', {
    title:"Кратос - убийца богов!",
    picture: "images/kratos_old.jpg",
    desc: "Кратос — спартанский воин, полубог и сын Зевса, мстящий олимпийским богам за различные обиды, в том числе совершённое его же руками убийство собственной семьи",
  
  });
});

router.get('/kratos_new', function(req, res, next) {
  res.render('GoW', {
    title:"Кратос - отец",
    picture: "images/kratos_new.jpeg",
    desc: "Прошло много лет с тех пор, как Кратос свершил свою месть над богами Олимпа и даровал силу Надежды всему человечеству. Кратос покинул Грецию и ныне живёт отшельнической жизнью на далёком севере, в суровом мире Скандинавских богов и монстров, именуемом местными Мидгардом. Там он нашёл любовь в лице смертной женщины-воина Фэй, которая родила от спартанца сына Атрея. Вскором Фрэй умерла.",
  
  });
});

router.get('/Atrey', function(req, res, next) {
  res.render('GoW', {
    title:"Атрей - сын Кратоса",
    picture: "images/Atrey.jpeg",
    desc: "Атрей — молодой мальчик с каштановыми волосами, светлым лицом с веснушками и глазами цветом голубого льда",
  
  });
});
*/
module.exports = router;
