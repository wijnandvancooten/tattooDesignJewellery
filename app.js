//required packages for the app//
const express = require('express'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    sequelize = require('sequelize')
    session = require( 'express-session' )

const app = express()
//import database
const db = require( __dirname + '/modules/db' )


//setting the session
app.use( session( {
    secret: 'salad gelore',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
} ) )

// set the public folder
app.use( express.static( 'public' ) )

//sets the view engine to pug. pug renders the html page//
app.set('view engine', 'pug')

// use body-parser
app.use( bodyParser.urlencoded( { extended:false} ) )

// make the database
app.get('/', (req, res) =>{
  res.render('application')
})

app.post( '/application', ( req, res ) => {
    console.log( 'someone is trying to buy something' )
    if ( req.session.order ) {
        console.log( 'the order in the current session is: ', req.session.order )
        db.order.findOne( {
            where: {
                id: req.session.order.id
            }, include : [
                { model: db.product.findOne( {
                    where: {
                        name: req.params.name
                    }
                } ) }
            ]
        })
    } else
        console.log( 'let us get this order started' )
        db.order.create( {
            ordernumber: Math.floor((Math.random() * 9999) + 1000)
        , include: [
            { model: db.product.findOne( {
                where: {
                    name: req.params.name
                }
            } ) } 
        ] } ).then( neworder => {
            req.session.order = neworder
            res.render( 'application', {order: neworder} )
        } ).catch(console.log.bind(console))
} )

app.listen(3000, function() {
    console.log('Web server started on port 3000. You rock!!!! ;).... Happy coding')
})