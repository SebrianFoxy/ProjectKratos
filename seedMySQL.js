var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE gods;'
var seedQuery = 'INSERT INTO gods (title, nick, avatar, about) VALUES ("Кратос - убийца богов!", "kratos_old", "/images/kratos_old.jpg", "Кратос — спартанский воин, полубог и сын Зевса, мстящий олимпийским богам за различные обиды, в том числе совершённое его же руками убийство собственной семьи"),("Кратос - отец", "Kratos_new", "/images/kratos_new.jpeg", "Прошло много лет с тех пор, как Кратос свершил свою месть над богами Олимпа и даровал силу Надежды всему человечеству. Кратос покинул Грецию и ныне живёт отшельнической жизнью на далёком севере, в суровом мире Скандинавских богов и монстров, именуемом местными Мидгардом. Там он нашёл любовь в лице смертной женщины-воина Фэй, которая родила от спартанца сына Атрея. Вскором Фрэй умерла."),("Атрей - сын Кратоса", "Atrey", "/images/Atrey.jpeg", "Атрей — молодой мальчик с каштановыми волосами, светлым лицом с веснушками и глазами цветом голубого льда");'



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : '123123',
database: 'Kratos'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
