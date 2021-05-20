
var express = require('express');
var app = express();
var bodyHospital = require('body-parser');
app.use(bodyHospital.json())

  var users = {
				user1: {
					firstname: "Justyna",
					lastname: "Frączek",
					age: 36,
					id: 1
				},
				user2: {
					firstname: "Robert",
					lastname: "Frączek",
					age: 37,
					id: 2
				}
  }

  findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(users, null, 4));
    res.end("All Users: \n" + JSON.stringify(users, null, 4));  
  };
  
  create = function(req, res) {

	console.log("--->After Post, users:\n" + JSON.stringify(users, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(users, null, 4));
};

	update = function(req, res) {
		console.log("--->Update Successfully, users: \n" + JSON.stringify(users, null, 4))
		res.end("Update Successfully! \n");
};


	deleteUser = function(req, res) {
    console.log("--->After deletion, user list:\n" + JSON.stringify(users, null, 4) );
    res.end( "Deleted user: \n" + JSON.stringify(users, null, 4));
};



	// Retrieve all Users
  app.get('/api/users', findAll);


	// Create a new User
    app.post('/api/users', create);
	
	// Update a User with Id
    app.put('/api/users', update);
	
    // Delete a User with Id
    app.delete('/api/users', deleteUser);
	

  // Create a Server
  var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)})