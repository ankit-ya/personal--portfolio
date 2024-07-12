const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path'); // Add this line
const sendMail = require('/sendMail');

app.use(express.json());

// Serve static files from the 'public' directory
app.use('/public',express.static('public'));



// Add this route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});