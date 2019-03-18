// implement your API here
const express = require('express');
const port = 5000;

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
	res.send('<h1>Working</h1>');
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
