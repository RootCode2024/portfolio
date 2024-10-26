import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Créer un transporteur Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Changez selon votre service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Votre adresse email
            subject: `Contact Form Submission from ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        // Gérer les autres méthodes HTTP
        return res.setHeader('Allow', ['POST']).status(405).end(`Method ${req.method} Not Allowed`);
    }
}
