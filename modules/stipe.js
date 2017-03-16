const stripe = require('stripe')('sk_test_Sj4nEsc7tx3g5vkA62HMex9j')

let stripepay = (user, source) => {

stripe.customers.create({
  email: user.email
}).then(function(customer){
  return stripe.customers.createSource(customer.id, {
    source: {
       object: 'card',
       exp_month: 10,
       exp_year: 2018,
       number: '4242 4242 4242 4242',
       cvc: 100
    }
  });
}).then(function(source) {
  return stripe.charges.create({
    amount: 1600,
    currency: 'usd',
    customer: source.customer
  });
}).then(function(charge) {
  // New charge created on a new customer
}).catch(function(err) {
  // Deal with an error
});

stripe.setTimeout(20000); // in ms (this is 20 seconds)
}
