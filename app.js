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
    firstname: { type: sequelize.STRING, allowNull: false },
    lastname: { type: sequelize.STRING, allowNull: false },
    address: { type: sequelize.STRING, allowNull: false },
    password: { type: sequelize.STRING, allowNull: false },
    email: { type: sequelize.STRING, allowNull: false, isEmail: true  }
} )

const product = db.define( 'product', {
    name: sequelize.STRING,
    description: sequelize.TEXT,
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

const neworder = require( __dirname + '/routes/user' )

app.use( '/neworder', neworder )

app.get('/', (req, res) =>{
  res.render('application')
})

app.listen(3000, function() {
    console.log('Web server started on port 3000. You rock!!!! ;).... Happy coding')
})

db.sync( { force: true} )
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
			} )
		] )
  } ).then( f => {
      product.create( {
        name: 'Secret Shadow',
        description: 'This substantial bracelet straps on with the force of a prison shackle. The only difference is you won&rsquo;t be fighting to take it off any time soon. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
        price: 87.30,
        stock: 10,
        image: 'to be defined'
      } )
  } ).then( f => {
      product.create( {
        name: 'Silver Love',
        description: 'A collaboration with Chino at Black Widow Tattoo, this ring takes its name from Tartarus &mdash; the dark underworld of Greek mythology where souls were judged and the wicked received eternal punishment. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
        price: 412.00,
        stock: 10,
        image: 'to be defined'
      } )
  } ).then( f => {
      product.create( {
        name: 'Sailors Heaven',
        description: 'The nice thing about wearing a chain with a big ol&rsquo; tomahawk on it is that it speaks for itself. Know what I mean? Comes on a 30-inch 3mm gauge stainless steel chain. Silver version has custom sterling silver hardware. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
        price: 46.23,
        stock: 10,
        image: 'to be defined'
      } )
  } ).then( f => {
      product.create( {
        name: 'Miau',
        description: 'This substantial bracelet straps on with the force of a prison shackle. The only difference is you won&rsquo;t be fighting to take it off any time soon. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
        price: 26.47,
        stock: 10,
        image: 'to be defined'
      } )
  } ).then( f => {
      product.create( {
        name: 'Lady in Black',
        description: 'Archers were a vital addition to any medieval army, and from high in the turrets, skilled bowmen were often the only hopes of holding off a violent usurping. This ring is for the sharpshooters working to prevent the siege. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
        price: 10.99,
        stock: 10,
        image: 'to be defined'
      } )
  } )
	.catch( err => {
	    console.log('An error occured: ' + err)
	} )