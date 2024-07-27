// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // use your email service provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: 'New Contact Us Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(200).json({ success: 'Email sent successfully!' });
        });

        // // Send SMS (using Twilio or any other SMS service)
        // const accountSid = process.env.TWILIO_ACCOUNT_SID;
        // const authToken = process.env.TWILIO_AUTH_TOKEN;
        // const client = require('twilio')(accountSid, authToken);

        // client.messages
        //     .create({
        //         body: `New Contact Us Form Submission: Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`,
        //         from: '+91-7415939251', // Your Twilio number
        //         to: process.env.MOBILE_TO,
        //     })
        //     .then(message => console.log(message.sid))
        //     .catch(error => console.error(error));
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
