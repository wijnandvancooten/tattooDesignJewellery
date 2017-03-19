const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)

const sendMail = ( user, subject, content ) => {

  // Construct the email
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: [
            {
              email: user.email,
            },
          ],
          subject: subject,
        },
      ],
      from: {
        email: 'boss@app.com',
      },
      content: [
        {
          type: 'text/plain',
          value: content,
        },
      ],
    },
  })

  console.log('Sendgrid will attempt to send ', request)

  return new Promise( ( resolve, reject) => {
    sg.API( request ).then( res => {
      console.log( 'Sendgrid says ', res.statusCode )
      if( (res.statusCode == 200) || (res.statusCode == 202) ) return resolve( res )
      reject( res.statusCode )
    } ).catch( err => {
      console.log('Sendgrid API failed with ', err)
    } )
  } )
}

module.exports = sendMail
