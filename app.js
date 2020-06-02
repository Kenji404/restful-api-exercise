const express = require('express');
const app = express();
//Middleware
app.use('/link', () => {
    console.log('/link');
});
//Routes
app.get('/', (req, res) => {
    res.send('We are live!');
});

app.get('/link', (req, res) => {
    res.send('We are live on /link');
});
//Port listen
app.listen(3000);