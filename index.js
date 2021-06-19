const express = require('express');

const server = express();

//request handling methods

const handleLoginGetRequest = (req, res) => {
     res.send('Successful login for GET method');
};

const handleSignupPostRequest = (req, res) => {
     res.send('Successfully signup for POST method');
};

const handleProfilePutRequest = (req, res) => {
     res.send('Successfully update profile for PUT method');
};

const handleProfileDeleteRequest = (req, res) => {
     res.send('Successfully delete Profile for DELETE method');
};

server.get('/login', handleLoginGetRequest);
server.post('/signup', handleSignupPostRequest);
server.put('/profile', handleProfilePutRequest);
server.delete('/profile', handleProfileDeleteRequest);

server.listen(3000, () => console.log('server is ready'));
