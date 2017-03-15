const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const mailer = require('sendgrid-mailer').config(process.env.SENDGRID_API_KEY)

// Create email data
const email = {
  to: 'svenjaschaefer@gmail.com', // try to use dynamic user
  from: 'tattoojewellery@tdj.com', //set default email sender
  subject: "Your Tattoo Jewellery is on it's way to YOU",
  text: 'Hello plain world!', //default text
  html: '<p>Hello HTML world!</p>', // create template
};

module.exports = email
