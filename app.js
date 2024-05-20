
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

//HandleBars;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico

app.use( express.static('public') );

app.get('/', function (req, res) {
  res.render('home', {

    nombre: 'RAMM',
    titulo: 'Curso De Node'


   } );
})

app.get('/generic', function (req, res) {
    res.render('generic', {

        nombre: 'RAMM',
        titulo: 'Curso De Node'
    
    
       } );
})

app.get('/elements', function (req, res) {
    res.render('elements', {

        nombre: 'RAMM',
        titulo: 'Curso De Node'
    
    
       } );
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })