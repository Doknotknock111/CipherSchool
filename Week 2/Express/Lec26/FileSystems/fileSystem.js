var fs = require('fs');

// let readFile = fs.readFileSync('readme.txt', 'utf-8');
// console.log(readFile);

let readFile = fs.readFile('readme.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('Asynchronous read');