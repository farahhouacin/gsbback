const mysql = require("mysql2");
const connection = mysql.createConnection({ // on utilise la connection a la bdd mysql depuis localhost avec l'user root , le password root a la database gsb
  connectionLimit: 5,
  host     : 'cj654063-002.dbaas.ovh.net',
  port     : 35305,
  user     : 'gsbhouacin',
  password : 'gsbhouacinSU2020',
  database : 'gsbhouacin'
  
});

module.exports = connection   // ON EXPORTE CETTE CONNEXION POUR POUVOIR L UTILISER AILLEURS DANS NOTRE PROJET
 
