const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const db_url = 'mongodb://localhost:27017/backend.MERN'
mongoose.connect(db_url, { useNewUrlParser: true}, () =>{
    console.log('Connection established')
});

const app = express();

//route
// form /api/avenger
app.use('/api', routes);

app.listen(3001, () => {
    console.log("Listening at port 3001")
})
