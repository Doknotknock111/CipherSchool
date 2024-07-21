var http = require('http');

let server = http.createServer((request, response) => {
    response.end('Hello');
});

server.listen(5000, 'localhost', () => {
    console.log("Started the server... and listening at port 5000");
});
