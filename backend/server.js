
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, location, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('Name, email and message are required.');
    }

    try {
        // Create a test account
        let testAccount = await nodemailer.createTestAccount();

        // Create a transporter
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        // Email options
        let mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'kontakt@papadopoulos-fliesen.de', // The recipient
            subject: 'Neue Kontaktanfrage von der Webseite',
            html: `
                <p>You have a new contact request from your website.</p>
                <h3>Contact Details</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
                    <li><strong>Location:</strong> ${location || 'Not provided'}</li>
                </ul>
                <h3>Message</h3>
                <p>${message}</p>
            `
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
