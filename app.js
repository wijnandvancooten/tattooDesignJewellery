//required packages for the app//
const express = require('express')
const bodyParser = require('body-parser')
const pug = require('pug')
const sequelize = require('sequelize')
const mailer = require('sendgrid-mailer').config(process.env.SENDGRID_API_KEY)
const session = require('express-session')

const app = express()
//import database
const db = require( __dirname + '/modules/db' )
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const email = require( __dirname + '/modules/order-mail.js')


//API keys and Passport configuration.
//const passport = require('./config/passport');

//app.use(passport.initialize());
//app.use(passport.session());

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

app.get('/', (req, res) =>{
  res.render('application')
  // Send away (need to set up in shoppingcart)
  //  mailer.send(email); //Returns promise
})

//login post for users. checks data in database and compares it to the input form the body
app.post('/login', (req, res) => {
    console.log('info in body: ', req.body.email)
    console.log("user is: ", db.user)
    //console.log('username: ' + username + ' password: ' + password)
    db.user.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
      console.log('what is user in the .then ', user)
        if (user.password == req.body.password) {
            //console.log ('loged in: ' + req.body.username)
            console.log('session before', req.session)
            //sets the session visited to true after login
            req.session.visited = true
            //stores the users data in the session after login. Data can be uses in dashboard
            req.session.user = user
            res.redirect('/')
            console.log('session after', req.session)
        } else {
            res.render('wronglogin')
        }
    })
})


app.listen(3000, function() {
  console.log('Web server started on port 3000. You rock!!!! ;).... Happy coding')
})
