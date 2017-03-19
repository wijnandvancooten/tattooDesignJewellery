//required packages for the app//
const express = require('express'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    sequelize = require('sequelize'),
    session = require( 'express-session' )


const app = express()
//import database
const db = require( __dirname + '/modules/db' )
const mail = require( __dirname + '/modules/emails.js' )



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
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

//setting the public folder
app.use(express.static('public'))

//sets the view engine to pug. pug renders the html page//
app.set('view engine', 'pug')

// use body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))


// make the database
app.get('/', (req, res) => {
    res.render('application')
})

app.get('/shopcart', (req, res) => {
    console.log( 'these items are in your cart(first one counted twice): ', req.session.order )
    Promise.all(req.session.order.map( function(item) {
        console.log(item)
        return db.product.findOne({
            where: {
                name: item
            }
        } )
    } ) )
        .then( stuff  => {
        console.log('these should be the chosen products: ', stuff)
        res.render('shopcart', { products: stuff } ) 
        } )
} )
//login post for users. checks data in database and compares it to the input form the body
app.post('/login', (req, res) => {
    console.log('info in body: ', req.body.email)
    console.log("user is: ", db.user)
    //console.log('username: ' + username + ' password: ' + password)
    db.user.findOne({
        where: {
            email: req.body.email
        }
    } ).then(user => {
        console.log('what is user in the .then ', user)
        if (user.password == req.body.password) {
            //console.log ('loged in: ' + req.body.username)
            console.log('session before', req.session)
            //sets the session visited to true after login
            req.session.visited = true
            //stores the users data in the session after login. Data can be uses in dashboard
            req.session.user = user
            // Send away (need to set up in shoppingcart)
            //return mail( user, 'Order done yay', 'This is awesome' )

        } else {
            res.render('wronglogin')
        }
    }).then( apiresponse => {
      res.render('application', {
        userlogin: req.session.visited
      })
      console.log('session after', req.session.user)
    } ).catch( err => {
      console.log('Sendgrid errored with ', err)
    } )
})

app.post('/register', (req, res) => {
    //console.log(req.body)
    //makes a varible newUser with the user data form the inputfields in HTML
    let newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    }
    //console.log(newUser)
    //creats a new user in the table users.
    db.user.create(newUser)
    req.session.visited = true
    req.session.user = newUser
    res.redirect('/payment')
})

app.post( '/application', ( req, res ) => {
    console.log( 'someone is trying to buy something' )
    console.log( req.session.order )
    if ( req.session.order ) {
        console.log( 'the order in the current session is: ', req.session.order )
        console.log( 'session still on? ', req.session.order )
        req.session.order.push(req.body.itemname)
        res.render( 'application', {order: req.session.order} )
    } else {
        console.log( 'let us get this order started' )
        console.log( 'is this the product name?', req.body, req.body.itemname )
        req.session.order = [ req.body.itemname  ]
        console.log( req.session.order )
        res.render( 'application', {order: req.session.order} )
        }
} )



app.listen(3000, function() {
  console.log('Web server started on port 3000. You rock!!!! ;).... Happy coding')
})
