var http = require('http');
var fs = require('fs');

let server = http.createServer((req, res) =>{
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let readStream = fs.createReadStream(__dirname + '/index.html');
        readStream.pipe(res);
    }    
    else if(req.url === '/data'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        let data = [
            {name: 'PizzaHut', description: 'Best pizza in town', id: 1},
            {name: 'Dominos', description: 'Better than Best', id: 2}
        ]
        res.end(JSON.stringify(data));
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        let readStream = fs.createReadStream(__dirname + '/404.html');
        readStream.pipe(res);
    }
})

server.listen(5000, '127.0.0.1', () => {
    console.log("Listening at port 5000");
})