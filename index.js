const express = require('express');
const path = require('path'); // <-- This was missing
const app = express();
const port = 3000;
const host = '127.0.0.1';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to EJS page' });
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/`);
});
