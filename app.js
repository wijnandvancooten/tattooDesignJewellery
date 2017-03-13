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

// use body-parser
app.use( bodyParser.urlencoded( { extended:false} ) )

// make the database
const db = new sequelize( 'webshop', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
} )

// define all the tables in the database
const user = db.define( 'user', {
    firstname: sequelize.STRING,
    lastname: sequelize.STRING,
    address: sequelize.STRING,
    password: sequelize.STRING,
    email: sequelize.STRING
} )

const product = db.define( 'product', {
    name: sequelize.STRING,
    description: sequelize.STRING,
    price: sequelize.FLOAT,
    stock: sequelize.INTEGER,
    image: sequelize.STRING
} )

const order = db.define( 'order', {
    ordernumber: sequelize.INTEGER,
    amount: sequelize.INTEGER,
    totalprice: sequelize.FLOAT
} )

const comment = db.define( 'comment', {
    name: sequelize.STRING,
    comment: sequelize.STRING
} )

user.hasMany( order )
order.belongsTo( user )
order.hasMany( product )
product.belongsTo( order )
product.hasMany( comment )
comment.belongsTo( product )

app.get('/', (req, res) =>{
  res.render('application')
})

app.listen(3000, function() {
    console.log('Web server started on port 3000. You rock!!!! ;).... Happy coding')
})