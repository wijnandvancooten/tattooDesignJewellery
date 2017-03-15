//required packages for the app//
const sequelize = require('sequelize')
let db = {}



// make the database
db.conn = new sequelize( 'webshop', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
} )

// define all the tables in the database
db.user = db.conn.define( 'user', {
  firstname: { type: sequelize.STRING, allowNull: false },
  lastname: { type: sequelize.STRING, allowNull: false },
  address: { type: sequelize.STRING, allowNull: false },
  password: { type: sequelize.STRING, allowNull: false },
  email: { type: sequelize.STRING, allowNull: false, isEmail: true  }
} )

db.product = db.conn.define( 'product', {
  name: sequelize.STRING,
  description: sequelize.TEXT,
  price: sequelize.FLOAT,
  stock: sequelize.INTEGER,
  image: sequelize.STRING
} )

db.order = db.conn.define( 'order', {
  ordernumber: sequelize.INTEGER,
  amount: sequelize.INTEGER,
  totalprice: sequelize.FLOAT
} )

db.comment = db.conn.define( 'comment', {
  name: { type: sequelize.STRING, allowNull: false },
  content: { type: sequelize.STRING, allowNull: false }
} )

db.user.hasMany( db.order )
db.order.belongsTo( db.user )
db.order.hasMany( db.product )
db.product.belongsTo( db.order )
db.product.hasMany( db.comment )
db.comment.belongsTo( db.product )

db.conn.sync( { force: true} )
.then( f => {
  console.log( 'Table created!' )
  return Promise.all( [
    db.user.create( {
      firstname: "Mike",
      lastname: "Michaelson",
      address: "some street 123",
      password: "213jkdas8eqwa",
      email: "mike123@asd.com"
    } ),
    db.user.create( {
      firstname: "Ernst",
      lastname: "Blofeld",
      address: "somewhere in a mountain",
      password: "einfach",
      email: "ernsteinfach@huhu.com"
    } )
  ] )
} ).then( f => {
  db.product.create( {
    name: 'Secret Shadow',
    description: 'This substantial bracelet straps on with the force of a prison shackle. The only difference is you won&rsquo;t be fighting to take it off any time soon. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
    price: 87.30,
    stock: 10,
    image: 'to be defined'
  } )
} ).then( f => {
  db.product.create( {
    name: 'Silver Love',
    description: 'A collaboration with Chino at Black Widow Tattoo, this ring takes its name from Tartarus &mdash; the dark underworld of Greek mythology where souls were judged and the wicked received eternal punishment. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
    price: 412.00,
    stock: 10,
    image: 'to be defined'
  } )
} ).then( f => {
  db.product.create( {
    name: 'Sailors Heaven',
    description: 'The nice thing about wearing a chain with a big ol&rsquo; tomahawk on it is that it speaks for itself. Know what I mean? Comes on a 30-inch 3mm gauge stainless steel chain. Silver version has custom sterling silver hardware. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
    price: 46.23,
    stock: 10,
    image: 'to be defined'
  } )
} ).then( f => {
  db.product.create( {
    name: 'Miau',
    description: 'This substantial bracelet straps on with the force of a prison shackle. The only difference is you won&rsquo;t be fighting to take it off any time soon. There may be small differences between the pictured sterling silver piece and its stainless steel counterpart. The steel pieces may have slightly less detail than the handcrafted silver version.',
    price: 26.47,
    stock: 10,
    image: 'to be defined'
  } )
} ).then( f => {
  db.product.create( {
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

module.exports = db
