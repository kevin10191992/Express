const express = require('express');
const server = express();
server.use(express.json());

server.listen(3000, () => {
    console.log('server on port 3000');
});

server.get('/', (req, res) => {
    res.send('Hoila mndo');
});

server.get('/about', (req, res) => {
    res.send('estas en about');
});

server.post('/user/:id', (req, res) => {
    res.send(req.params);
});

server.post('/', (req, res) => {
    res.json(
        {
            hola: 'mundo',
            req:req.body

        }
    );
});