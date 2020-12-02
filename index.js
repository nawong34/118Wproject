var express = require("express");
var bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
var conn = require('./config');

var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("images", express.static(__dirname + "/public/images"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
	res.sendFile('/index.html')
})
app.get('/reservations', function (req, res) {
	res.redirect('reservation.html')
})
app.get('/contactus', function (req, res) {
	res.redirect('contactus.html')
})
app.get('/index', function (req, res) {
	res.redirect('index.html')
})
app.get('/career', function (req, res) {
	res.redirect('Career.html')
})
app.get('/signup', function (req, res) {
	res.redirect('signup.html')
})

app.post('/reservations', function (req, res) {
	console.log("I'm here")
	const { body: { name, date, time, guest,location } } = req;
	console.log(req.body)
	conn.query("INSERT INTO book_reservation(id,name,date,time,guest,location) VALUES(?,?,?,?,?,?);", [uuidv4(), name, date, time, guest,location], function (error, results) {
		if (error) {
			res.status(500).send("Error Occured.")
			return;
		}
		res.json({
			data: results
		})
	}
	)
})


app.post('/contactus', function (req, res) {
	console.log("I'm here")
	const { body: { fname, lname, comments } } = req;
	console.log(req.body)
	conn.query("INSERT INTO contact_us(fname,lname,comments) VALUES(?,?,?);", [fname, lname, comments], function (error, results) {
		if (error) {

			res.status(500).send("Error Occured.")
			console.log(error)
			return;
		}
		res.json({
			data: results
		})
	}
	)
})

app.post('/reservations', function (req, res) {
	console.log("I'm here")
	const { body: { sub } } = req;
	console.log(req.body)
	conn.query("INSERT INTO email(sub) VALUES(?);", [sub], function (error, results) {
		if (error) {

			res.status(500).send("Error Occured.")
			console.log(error)
			return;
		}
		res.json({
			data: results
		})
	}
	)
})
app.post('/index', function (req, res) {
	console.log("I'm here")
	const { body: { sub } } = req;
	console.log(req.body)
	conn.query("INSERT INTO email(sub) VALUES(?);", [sub], function (error, results) {
		if (error) {

			res.status(500).send("Error Occured.")
			console.log(error)
			return;
		}
		res.json({
			data: results
		})
	}
	)
})

app.post('/career', function (req, res) {
	console.log("I'm here")
	const { body: { sub } } = req;
	console.log(req.body)
	conn.query("INSERT INTO email(sub) VALUES(?);", [sub], function (error, results) {
		if (error) {

			res.status(500).send("Error Occured.")
			console.log(error)
			return;
		}
		res.json({
			data: results
		})
	}
	)
})

app.post('/signup', function (req, res) {
	console.log("I'm here")
	const { body: { email,user,pass } } = req;
	console.log(req.body)
	conn.query("INSERT INTO users(email,user,pass) VALUES(?,?,?);", [email,user,pass], function (error, results) {
		if (error) {

			res.status(500).send("Error Occured.")
			console.log(error)
			return;
		}
		res.json({
			data: results
		})
	}
	)
})

app.post('/UserPage', function(req, res){
	conn.query("SELECT * FROM users WHERE (email,user,pass) VALUES(?,?,?);", req.body.email, function(error, results){
		var body = req.body;
		var success = null;
		var message = "";
		console.log("here"+res);
		if(error){
			success = false;
			message = "Unknown error occured"
		} else {
			console.log(res);
			
			if(results.length > 0){
				if(body.user){
					if(body.pass){
						status = true;		
						message = "success";
					} else {
						status = false;		
						message = "(X) incorrect";	
					}
				} else {
					status = false;			
					message = "(X) incorrect";		
				}
			} else {
				status = false;			
				message = (body.email)+(body.user)+(body.pass)+"incorrect.";		
			}
			
		}
	res.json({
				success: success,
				message: message
			});
	})

})


app.listen(3000);