// run using 'node .'

// represent the API that we are building
// import "express" and initalize it since it is a Func
const express = require('express');
const app = express();
const PORT = 8080;

// converts the body to JSON
// therefore making it avaiable in our POST callback
app.use(express.json());

// health check
app.get('/', (req, res) => {
	res.send('200 ok');
});

// adding GET endpoints using 1st arg.
// then handling the request using callback func w/ 2nd arg.
app.get('/tshirt', (req, res) => {
	res.status(200).send({
		// data payload
		tshirt: '🍔',
		size: 'large',
	});
});

// second endpoint
// POST is when the user is trying to create new data on the server
app.post('/tshirt/:id', (req, res) => {
	const { id } = req.params;

	// note: the body is not parsed to JSON
	// so we need to implement middleware
	const { logo } = req.body;

	if (!logo) {
		// if there are no logo
		res.status(418).send({ message: 'We need a logo!' });
	}

	res.send({
		tshirt: `👕 with your ${logo} and ID of ${id}`,
	});
});


// to fire up your API on the server
app.listen(
	// listen to a specifc port
	PORT,
	// optional callback
	() => console.log(`its alive on http://localhost:${PORT}`)
);