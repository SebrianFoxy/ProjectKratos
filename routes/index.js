var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/kratos_old', function(req, res, next) {
  res.render('index', {title: "<h1>Страница Кратоса - убийцы богов! </h1>"});
});

router.get('/kratos_new', function(req, res, next) {
  res.render('index', {title: "<h1>Страница Кратоса - отца </h1>"});
});

router.get('/Artrey', function(req, res, next) {
  res.render('index', {title: "<h1>Страница Артрея - сына Кратоса </h1>"});
});

module.exports = router;
