// import https from 'https';
//
// https.get('https://www.google.com', res => {
//     console.log('Response status code: ', res.statusCode);
//
//     res.on('data', chunk => {
//         console.log(chunk.toString());
//     });
// });

// Server with node http module
// import http from 'http';
// const server = http.createServer();
//
// server.listen(8080);
// server.on('request', (req, res) => {
//     res.write('Hello HTTP!\n');
//     setTimeout(() => {
//         res.write('I can stream!\n');
//         res.end();
//     }, 3000);
//
// });

import config from './config';
// import fs from 'fs';
import apiRouter from './api';

import express from 'express';
const server = express();

//Using EJS
server.set('view engine', 'ejs');

//routes
server.get('/', (req, res) => {
   // res.send("Hello HTTP");
    res.render('index', {
        content: 'Hello Express with EJS!',
        content2: "Hello <em>User!</em>"
    });
});

// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });

//server setup and configs
server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});
