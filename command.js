	// Retrieve all Users
  app.get('/api/users', findAll);


	// Create a new User
    app.post('/api/users', create);
	
	// Update a User with Id
    app.put('/api/users', update);
	
    // Delete a User with Idą
    app.delete('/api/users', deleteUser);
	

  // Create a Server
  var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)