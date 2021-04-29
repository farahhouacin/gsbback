const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'cj654063-002.dbaas.ovh.net',
  port     :  35305,
  user     : 'gsbhouacin',
  password : 'gsbhouacinSU2020',
  database : 'gsbhouacin'
});
 
module.exports = connection   // ON EXPORTE CETTE CONNEXION POUR POUVOIR L UTILISER AILLEURS
 
