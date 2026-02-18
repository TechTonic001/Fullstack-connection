const epxress = require('express');
const app = epxress();
const port = process.env.PORT || 4000;
require('dotenv').config();
const Cors = require('cors')
const nodemailer = require('nodemailer');
const MailMessage = require('nodemailer/lib/mailer/mail-message');
const { uploadMedia } = require('./cloud')


app.use(Cors())
app.use(epxress.json())

require('./connection')



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/info', (req, res) => {
    const { name, email, password } = req.body;
    let details = { name, email, password }
    res.status(201).json({ status: 201, message: details })
})




// nodemailer configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "me@mydomain.com",
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
});

app.get('/sendmail', (req, res) => {
    (async () => {
        const info = await transporter.sendMail({
            from: '"Testing" "<amoohalleluyah1@gmail.com>"',
            to: "amooolamilekakn307@gmail.com",
            subject: "Test Email",
            text: "This is a test email sent from Noe.js!",
            html: "<p>This is a test email sent from <b>Node.js</b>!</p>",
        })();

        console.log("Message sent:", info.messageId);
        res.json({messageSent: info.messageId})
    });
});


app.get('/media', uploadMedia)




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});