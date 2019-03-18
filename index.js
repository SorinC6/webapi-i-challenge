// implement your API here
const express = require('express');
const port = 5000;
const db = require('./data/db');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
	res.json({ message: 'Working' });
});

server.get('/api/users', (req, res) => {
	//debugger;
	db
		.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(500).json({ error: 'There was an error while saving the user to the database' }));
});

server.get('/api/users/:id', (req, res) => {
	const { id } = req.params;
	//console.log(id);
	db
		.findById(id)
		.then((user) => {
         //debugger;
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: 'The user with the specified ID does not exist.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The user information could not be retrieved.' });
		});
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
