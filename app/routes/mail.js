'use strict'

let nodemailer = require('nodemailer');
let env = require('../../config/env.js');

module.exports = (app) => {
    app.post('/mail', (req, res) => {
        let mailcontent = req.body

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: env.GMAIL_USER,
                    pass: env.GMAIL_PASS
                }
            })
            // setup e-mail data with unicode symbols
        let mailOptions = {
            from: '"Allset Website" <' + process.env.GMAIL_USER + '>', // sender address
            to: process.env.GMAIL_USER, // list of receivers
            subject: 'Demande de prise de contact via le site internet', // Subject line
            html: '<p>Demande de prise de contact via le site internet</p><p>Nom Prénom : ' +
                mailcontent.nom + ' ' + mailcontent.prenom +
                '</p><p>Email : ' + mailcontent.email +
                '</p><p>Téléphone :' + mailcontent.telephone +
                '</p><p>Sujet : ' + mailcontent.sujet +
                '</p><p>Message : ' + mailcontent.message + '</p>' // html body
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                res.sendStatus(500)
                console.log(error)
            } else {
                res.sendStatus(200)
            }
        });
    })
}

/*
Pour les mails :

Créations de comptes dédiés pour le fonctionnement :

 - compte Gmail :
      email : contactallset@gmail.com // pass : allsetmail

Utiliser les variable d'environnement :
GMAIL_USER=contactallset@gmail.com
GMAIL_PASS=allsetmail

*/
