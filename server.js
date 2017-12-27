// import required packages
const http = require('http');
const app = require('./app');
const config = require('./config').local;

// define a port unless not defined as a environment variable
const port = process.env.PORT || config.port;

// create a server
const server = http.createServer(app);

// listining to the defined port
server.listen(port, () => {
    console.log('Server listing to the port: ' + port);
});
