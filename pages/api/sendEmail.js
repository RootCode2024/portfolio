import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Vérifiez si la méthode de la requête est POST
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Valider les entrées pour éviter les injections
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }

        // Créer un transporteur Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Changez selon votre service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Définir les options de l'e-mail
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Votre adresse email
            subject: `Portfolio - Contact de : ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 5px;">
                    <h2 style="color: #333;">Nouveau message de votre portfolio</h2>
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Message :</strong></p>
                    <p style="background-color: #fff; padding: 10px; border-radius: 5px;">${message}</p>
                </div>
            `,
        };

        try {
            // Envoyer l'e-mail
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email envoyé avec succès' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return res.status(500).json({ error: 'Échec de l\'envoi de l\'email' });
        }
    } else {
        // Gérer les autres méthodes HTTP
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
