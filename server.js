'use strict'
// Set up ======================================================================
let http = require('http')
let express = require('express')
let app = exports.app = express()
let morgan = require('morgan')
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let api = require('./app/routes')
let db = require('./config/database')
let server = http.Server(app)


let seo = require('./app/middlewares/seo')
app.use(seo)

// Express =====================================================================
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({
    'extended': 'true'
}))
app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

app.use(methodOverride('X-HTTP-Method-Override'))

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Credentials', true)
    response.header('Access-Control-Allow-Origin', request.headers.origin)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    response.header('Access-Control-Allow-Headers', 'X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    next()
})

app.use('/api', api(app))

app.use((error, request, response, next) => {
    // Middleware to catch all errors
    console.error(error.stack)
    response.status(500).send(error.message)
})

exports.startServer = (port, path, callback) => {
    db((err) => {
        if (err) {
            console.error(err.stack)
        } else {
            process.on('SIGINT', function() {
                console.log("\nStopping...")
                process.exit()
            });

            server.listen(process.env.PORT || port, callback)
            console.log(`server listening on port ${port}`)
        }
    })
}

/*
Pour les mails :

Utilisation de SendGrid (équivalent MailChimp mais gratuit pour moins de 12k mail / mois) comme server mail node.js

Créations de comptes dédiés pour le fonctionnement : 

 - compte Gmail :
      email : contactallset@gmail.com // pass : allsetmail
 - compte SendGrid :
      email : contactallset@gmail.com // username : allsetcontact // pass : allsetmail0

*/
app.post('/mail', (req, res) => {
    let mailcontent = req.body
    let helper = require('sendgrid').mail,
    from_email = new helper.Email("contactallset@gmail.com"),
    to_email = new helper.Email("contactallset@gmail.com"),
    subject = "Demande de prise de contact via le site internet",
    content = new helper.Content("text/plain", `
    ${'Demande de prise de contact via le site internet'}
    ${'Nom Prénom : '}${mailcontent.nom} ${mailcontent.prenom}
    ${'Email : '}${mailcontent.email}
    ${'Téléphone : '} ${mailcontent.telephone}
    ${'Sujet : '}${mailcontent.sujet}
    ${'Message : '}${mailcontent.message}
    `),
    mail = new helper.Mail(from_email, subject, to_email, content)

    let sg = require('sendgrid')(process.env.SENDGRID_API_KEY || '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');
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
        res.sendStatus(200)
    })
})
