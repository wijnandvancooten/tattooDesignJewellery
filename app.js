//required packages for the app//
const express = require('express'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    sequelize = require('sequelize'),
    passport = require('passport'),
    session = require('express-session')

const app = express()
//import database
const db = require( __dirname + '/modules/db' )

app.use( 'modules/db', db )

//API keys and Passport configuration.
const passportConfig = require('./config/passport');
//
// app.use(passport.initialize());
// app.use(passport.session());

//setting the session
app.use(session({
    secret: 'salad gelore',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}))

//setting the public folder
app.use(express.static('public'))

//sets the view engine to pug. pug renders the html page//
app.set('view engine', 'pug')

// use body-parser
app.use( bodyParser.urlencoded( { extended:false} ) )

// make the database
app.get('/', (req, res) =>{
  res.render('application')
})

app.listen(3000, function() {
    console.log('Web server started on port 3000. You rock!!!! ;).... Happy coding')
<<<<<<< HEAD
})

db.sync( { force: false} )
=======
})
>>>>>>> master
