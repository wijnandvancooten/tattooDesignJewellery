//required packages for the app//
const express = require('express'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    sequelize = require('sequelize')

const app = express()
//database parameters

// set the public folder
app.use(express.static('public'))

//sets the view engine to pug. pug renders the html page//
app.set('view engine', 'pug')

app.get('/', (req, res) =>{
  res.render('application')
})

app.listen(3000, function() {
    console.log('Web server started on port 3000. You rock!!!! ;).... Happy coding')
})
