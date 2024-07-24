const express = require('express');
const routes = express.Router();

//POST 

routes.post('/api/avenger', (res, req) => {
    console.log(req.body);
    res.send({msg: 'Check your backend console'})
})

module.exports = routes;