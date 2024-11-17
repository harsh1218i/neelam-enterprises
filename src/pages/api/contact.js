import dbConnect from '../../lib/dbConnect';
import FormSubmission from '../../lib/formSchema';
// import twilio from 'twilio';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, phone, email, message } = req.body;

            // Validation (for required fields)
            if (!name || !phone || !email) {
                return res.status(400).json({ error: 'Name, Phone, Email are required.' });
            }

            // console.log('Connecting to database...');
            // Connect to MongoDB
            await dbConnect(); // Ensures you are connected to the database
            // console.log('Database connected successfully.');

            // Save form data to MongoDB using Mongoose
            const newFormSubmission = new FormSubmission({
                name,
                phone,
                email,
                message: message || '',
                createdAt: new Date(),
            });

            await newFormSubmission.save(); // Save form data
            // console.log('Form submission saved successfully.');

            // Integrate Twilio to send notification
            // const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

            // Replace 'your-mobile-number' with your actual phone number in international format, e.g., +1234567890
            // await client.messages.create({
            //     body: `New form submission:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message || 'N/A'}`,
            //     from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
            //     to: 'your-mobile-number' // Your phone number
            // });

            // console.log('Notification sent successfully.');

            return res.status(200).json({ message: 'Form submission successful!' });
        } catch (error) {
            console.error('Error during form submission:', error);
            console.error(error.stack);
            return res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' }); // In case of invalid HTTP method
    }
}
