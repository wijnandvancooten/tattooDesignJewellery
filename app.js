//required packages for the app//
const express = require('express')
const bodyParser = require('body-parser')
const pug = require('pug')
const sequelize = require('sequelize')
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const mailer = require('sendgrid-mailer').config(process.env.SENDGRID_API_KEY)
const email = require( __dirname + '/modules/order-mail.js')

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
  firstname: { type: sequelize.STRING, allowNull: false },
  lastname: { type: sequelize.STRING, allowNull: false },
  address: { type: sequelize.STRING, allowNull: false },
  password: { type: sequelize.STRING, allowNull: false },
  email: { type: sequelize.STRING, allowNull: false, isEmail: true  }
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
  name: { type: sequelize.STRING, allowNull: false },
  content: { type: sequelize.STRING, allowNull: false }
} )

user.hasMany( order )
order.belongsTo( user )
order.hasMany( product )
product.belongsTo( order )
product.hasMany( comment )
comment.belongsTo( product )

app.get('/', (req, res) =>{
  res.render('application')
  // Send away (need to set up in shoppingcart)
  //  mailer.send(email); //Returns promise
})

app.listen(3000, function() {
  console.log('Web server started on port 3000. You rock!!!! ;).... Happy coding')
})

db.sync( { force: false} )
.then( f => {
  console.log( 'Table created!' )
  return Promise.all( [
    user.create( {
      firstname: "Mike",
      lastname: "Michaelson",
      address: "some street 123",
      password: "213jkdas8eqwa",
      email: "mike123@asd.com"
    } ),
    user.create( {
      firstname: "Ernst",
      lastname: "Blofeld",
      address: "somewhere in a mountain",
      password: "einfach",
      email: "ernsteinfach@huhu.com"
    })
  ])
})
.catch( err => {
  console.log('An error occured: ' + err)
} )
