let express = require('express');
let app = express();

app.get((req, res) =>{
    console.log("Hello, this ia a express response");
})

app.listen(5000, 'localhost', () =>{
    console.log('Listening at port 5000');
})