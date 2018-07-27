const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());
app.use(cors());

app.post(`/api/contact`, (req, res) =>{
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'ryan90butler@gmail.com',
        pass: process.env.GMAIL_PASS
    },
    tls:{
    rejectUnauthorized: false
    }
});

  let mailOptions = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'ryan90butler@gmail.com',
    subject: 'New message from contact form at ryanlbutler.com',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
};

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    res.send({'message sent':true})
  });
});

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
      root: path.join(__dirname, "/build")
    })
})

const port = process.env.PORT || 8080
app.listen( port , () => {
  console.log(`Server listening on port ${port}`);
});