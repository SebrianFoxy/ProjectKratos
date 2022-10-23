var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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

module.exports = router;
