const express = require('express')

const route = express.Router();

route.get('/', (req, res) => res.render("index"))
route.get('/create-pass', (req, res) => res.render("create-pass"))
route.get('/room', (req, res) => res.render("room"))

// Formato que o formulario de dentro da modal tem q passar a informacao
// route.post('/room/:room/:question/:action')


module.exports = route