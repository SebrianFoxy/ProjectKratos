var express = require('express')
var router = express.Router()
var db = require('../mySQLConnect.js');


/* GET home page. */
/*
router.get('/', function(req, res, next) {
    God.find({},{_id:0,title:1,nick:1},function(err,menu){
        req.session.greeting = "Hi!!!",
        res.cookie('greeting','Hi!!!').render('index', {
                                title: 'Express',
                                counter: req.session.counter,
                            });
                            
    })
});
*/

router.get('/', function(req, res, next) {
  res.render('index', { title: '', counter:req.session.counter  });
});

/* GET login/registration page. */

router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error:null});
});

/* POST logout. */
/*
router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
});
*/


/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  // console.log("hey")
  db.query (`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function(err,users){
        if(err) return next(err)
        // console.log("hey1")
        // console.log(users)
        // console.log(err)
        if(users.length > 0) {
          // console.log("hey3")
          var user = users[0];
          if (password == user.password){
            req.session.user = user.user_id
            res.redirect('/')
          } else {
            res.render('logreg', {title: 'Вход', error: 'Пароль не верный'})
          }
        } else {
          db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function(err, user){
            // console.log(user)
            // console.log(err)
            if(err) return next(err)
            req.session.user = user.user_id
            res.redirect('/')
          })
        }
})
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
