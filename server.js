const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from current directory
app.use(express.static(__dirname));

app.post('/api/book', async (req, res) => {
    try {
        const { name, email, service, details } = req.body;

        // Generate Ethereal test account on the fly for demonstration
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        // 1. Customer Confirmation Email
        let customerInfo = await transporter.sendMail({
            from: '"Karachi Cargo" <noreply@karachicargo.com>',
            to: email,
            subject: "Booking Confirmation - Karachi Cargo",
            text: `Hello ${name},\n\nYour booking for ${service} has been received. Our team will contact you shortly.\n\nDetails:\n${details}\n\nThank you,\nKarachi Cargo Team`,
            html: `<h3>Hello ${name},</h3><p>Your booking for <b>${service}</b> has been received. Our team will contact you shortly.</p><p><b>Details:</b><br>${details}</p><br><p>Thank you,<br>Karachi Cargo Team</p>`,
        });

        // 2. Admin Notification Email Sent to Main Head Office
        let adminInfo = await transporter.sendMail({
            from: '"Karachi Cargo System" <system@karachicargo.com>',
            to: "admin@karachicargo.com", // Dummy Admin Office Email
            subject: `New Booking Alert Priority - ${service}`,
            text: `New booking received from ${name}.\nClient Email: ${email}\nService: ${service}\nDetails: ${details}`,
            html: `<h3>New Booking Received (Priority Notification)</h3><ul><li><b>Name:</b> ${name}</li><li><b>Email:</b> ${email}</li><li><b>Service:</b> ${service}</li><li><b>Details:</b> ${details}</li></ul>`,
        });

        res.status(200).json({
            message: "Booking successful with automated emails sent.",
            customerPreviewUrl: nodemailer.getTestMessageUrl(customerInfo),
            adminPreviewUrl: nodemailer.getTestMessageUrl(adminInfo)
        });

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to process booking and deliver emails." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Karachi Cargo Server logic running on http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT}/index.html to view the app!`);
});
