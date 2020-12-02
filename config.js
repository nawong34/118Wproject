var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.202.185.150',
  user     : 'wongn34_gmail.com',		//CHANGE THE USERNAME HERE		
  password : '112112117aA',		//CHANGE THE PASSWORD HERE
  port     : '65162',			//CHANGE THE PORT HERE
  database : 'website'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database.\n", err);
}
});

module.exports = connection;