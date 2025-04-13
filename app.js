const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your.email@gmail.com',
      pass: 'your_app_password',
    },
  });

  const mailOptions = {
    from: email,
    to: 'your.email@gmail.com',
    subject: `Portfolio Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email.');
    }
    res.redirect('/?msg=sent');
  });
});

app.listen(PORT, () => {
  console.log(`✅ Portfolio running at http://localhost:${PORT}`);
});
