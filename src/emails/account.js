const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'qazxsw9295@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'qazxsw9295@gmail.com',
        subject: 'Thanks for canceling',
        text: `Get out of the app, ${name}. Let me know how you get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}