import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Route to handle contact form submission
app.post("/send-email", async (req, res) => {
  const { fullName, phone, email, note } = req.body;

  if (!fullName || !phone || !email || !note) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // 📨 Create a transporter using your SMTP service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // use true if port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✉️ Send email
    await transporter.sendMail({
      from: `"Lotus Impex" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your business email
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Note:</strong> ${note}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
